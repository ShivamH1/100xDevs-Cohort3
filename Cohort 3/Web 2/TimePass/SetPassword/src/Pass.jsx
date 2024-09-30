import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Label } from "@/components/ui/index";
import { useNavigate, Link } from "react-router-dom";
import {
  setPassword,
  checkPasswordToken,
} from "@/services/reqres/authRequests";
import { useApiToast } from "@/services/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Loader2, MoveLeft, CheckCircle2, XCircle } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import { loginTokenRequest } from "@/services/reqres/authRequests";
import { useAuth } from "@/services/context/AuthContext";
import { CircularLoader, Progress } from "@/components/feature-component";

const SetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm();
  const navigate = useNavigate();
  const showToast = useApiToast();
  const { passwordtoken } = useParams();
  const { login } = useAuth();
  const queryClient = useQueryClient();
  const [tokenStatus, setTokenStatus] = useState(null);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isPasswordStrong, setIsPasswordStrong] = useState(false);

  const [passwordStrength, setPasswordStrength] = useState({ score: 0, label: 'Weak' });
  const [showPasswordPolicy, setShowPasswordPolicy] = useState(false);

  const newPassword = watch("newpassword");
  const confirmPassword = watch("confirmpassword");

  // Check the token validity when the component loads
  useEffect(() => {
    const checkToken = async () => {
      try {
        const response = await checkPasswordToken({ token: passwordtoken });
        if (response.status === "success") {
          setTokenStatus(true);
        } else {
          setTokenStatus(false);
        }
      } catch (error) {
        setTokenStatus(false);
        showToast(
          "error",
          error.response?.data?.message || "Invalid or expired token.",
        );
        navigate("/expired-token", { replace: true });
      }
    };

    if (passwordtoken && tokenStatus !== true) {
      checkToken();
    }
  }, [tokenStatus]);

  // Password strength and match checking
  useEffect(() => {
    // Password strength logic
    const checkPasswordStrength = (pass) => {
      let score = 0;
      if (pass.length >= 8) score++;
      if (/[A-Z]/.test(pass)) score++;
      if (/[a-z]/.test(pass)) score++;
      if (/[^A-Za-z0-9]/.test(pass)) score++;

      let label = 'Weak';
      if (score === 3) label = 'Average';
      else if (score === 4) label = 'Strong';

      setPasswordStrength({ score, label });
      setIsPasswordStrong(score === 4);
    };

    checkPasswordStrength(newPassword);

    if (newPassword && confirmPassword) {
      if (newPassword === confirmPassword) {
        setPasswordMatch(true);
        setIsButtonDisabled(passwordStrength.score < 3);
      } else {
        setPasswordMatch(false);
        setIsButtonDisabled(true);
      }
    } else {
      setIsButtonDisabled(true);
    }
  }, [newPassword, confirmPassword, passwordStrength.score]);

  // Handle the password reset form submission
  const handleResetPassword = async (data) => {
    if (!passwordMatch || !isPasswordStrong) {
      return;
    }

    try {
      await setNewPassword(data);
    } catch (error) {
      showToast(
        "error",
        error.response?.data?.message ||
          "An error occurred during password reset",
      );
    }
  };

  // Use mutation for setting the new password
  const { mutateAsync: setNewPassword, isPending } = useMutation({
    mutationFn: async (data) => {
      const dataToSend = {
        password: data.newpassword,
        token: passwordtoken,
      };
      return await setPassword(dataToSend);
    },
    onSuccess: async (data) => {
      const loginData = {
        username: data.email, // Assuming 'email' is part of the returned data
        password: newPassword,
      };

      let loginDataResponse = await loginTokenRequest(loginData);

      await login(loginDataResponse); // Log the user in with the new password

      queryClient.invalidateQueries("userDetails");
      showToast("success", "Your password has been successfully reset.");

      const domainName = localStorage.getItem("domain_name");
      if (domainName) {
        navigate(`/${domainName}/manage-users`, { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    },
    onError: (error) => {
      showToast("error", error.response?.data?.message || "An error occurred");
    },
  });

  useEffect(() => {
    if (confirmPassword) {
      trigger("confirmpassword");
    }
  }, [confirmPassword, trigger]);

  const PolicyContent = () => (
    <div className="password-policy absolute mt-2 p-4 rounded-md shadow-lg z-10 w-64 bg-white">
      <p className="font-medium mb-2">To make your password stronger:</p>
      <ul className="space-y-1">
        <li className="flex items-center">
          {newPassword?.length >= 8 ? (
            <CheckCircle2 className="text-green-500 mr-2" size={16} />
          ) : (
            <XCircle className="text-gray-300 mr-2" size={16} />
          )}
          <span>8 characters</span>
        </li>
        <li className="flex items-center">
          {/[A-Z]/.test(newPassword) ? (
            <CheckCircle2 className="text-green-500 mr-2" size={16} />
          ) : (
            <XCircle className="text-gray-300 mr-2" size={16} />
          )}
          <span>1 uppercase letter</span>
        </li>
        <li className="flex items-center">
          {/[a-z]/.test(newPassword) ? (
            <CheckCircle2 className="text-green-500 mr-2" size={16} />
          ) : (
            <XCircle className="text-gray-300 mr-2" size={16} />
          )}
          <span>1 lowercase letter</span>
        </li>
        <li className="flex items-center">
          {/[^A-Za-z0-9]/.test(newPassword) ? (
            <CheckCircle2 className="text-green-500 mr-2" size={16} />
          ) : (
            <XCircle className="text-gray-300 mr-2" size={16} />
          )}
          <span>1 special character</span>
        </li>
      </ul>
    </div>
  );

  if (!tokenStatus) {
    return <CircularLoader />;
  }

  return (
    <div className="rounded-lg">
      <div className="grid gap-2">
        <h1 className="text-2xl font-bold">Set New Password</h1>
        <p className="text-sm text-gray-600 mb-6">
          Don't worry, your account will be recovered.
        </p>
      </div>
      <form onSubmit={handleSubmit(handleResetPassword)} className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="newpassword">Password</Label>
          <div className="relative">
            <Input
              id="newpassword"
              type="password"
              placeholder="*****"
              required
              {...register("newpassword", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                onChange: () => setShowPasswordPolicy(true),
              })}
              onFocus={() => setShowPasswordPolicy(true)}
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm font-medium text-gray-500">
              {passwordStrength.label}
            </span>
            <Progress value={(passwordStrength.score / 4) * 100} className="w-full mt-2" />
            {showPasswordPolicy && <PolicyContent />}
          </div>
          {errors.newpassword && (
            <p style={{ color: "red" }}>{errors.newpassword.message}</p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="confirmpassword">Confirm Password</Label>
          <Input
            id="confirmpassword"
            type="password"
            placeholder="*****"
            required
            {...register("confirmpassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === newPassword || "Passwords do not match",
            })}
          />
          {!passwordMatch && (
            <p style={{ color: "red" }}>Passwords do not match</p>
          )}
        </div>

        <Button
          className="mt-4"
          type="submit"
          disabled={isPending || !passwordMatch || isButtonDisabled}
        >
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          {isPending ? "Resetting..." : "Reset Password"}
        </Button>
        <Link
          to="/login"
          className="text-sm font-semibold text-gray-700 mt-3 flex items-center space-x-2"
        >
          <MoveLeft size={16} /> <span>Return to login page</span>
        </Link>
      </form>
      <Toaster />
    </div>
  );
};

export default SetPassword;
