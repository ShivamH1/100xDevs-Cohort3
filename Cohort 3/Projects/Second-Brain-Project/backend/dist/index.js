"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const zod_1 = require("zod");
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("./db");
const config_1 = require("./config");
const middleware_1 = require("./middleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const signupSchema = zod_1.z.object({
        username: zod_1.z.string().min(1),
        password: zod_1.z.string().min(4),
    });
    const { username, password } = signupSchema.parse(req.body);
    const hashedPassword = yield bcrypt_1.default.hash(password, 12);
    try {
        const user = yield db_1.UserModel.create({
            username,
            password: hashedPassword,
        });
        res.json({
            message: "User signed up",
            user,
        });
    }
    catch (e) {
        res.status(411).json({
            message: "User already exists",
        });
    }
}));
// Zod is not required for signin, but it can be useful for input validation.
app.post("/api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const signinSchema = zod_1.z.object({
        username: zod_1.z.string().min(1),
        password: zod_1.z.string().min(4),
    });
    const { username, password } = signinSchema.parse(req.body);
    //First check if the user exists
    const existingUser = yield db_1.UserModel.findOne({ username });
    if (existingUser) {
        //Then check if the password is correct using bcrypt.compare() method.
        const isPasswordValid = (existingUser === null || existingUser === void 0 ? void 0 : existingUser.password)
            ? yield bcrypt_1.default.compare(password, existingUser.password)
            : false;
        if (isPasswordValid) {
            const token = jsonwebtoken_1.default.sign({ id: existingUser._id }, config_1.JWT_PASS);
            res.json({
                message: "User signed in",
                token,
            });
        }
        else {
            res.status(401).json({ message: "Invalid username or password" });
        }
    }
    else {
        res.status(401).json({ message: "Invalid username or password" });
    }
}));
app.post("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type, link, title } = req.body;
    const content = yield db_1.ContentModel.create({
        type,
        link,
        title,
        //@ts-ignore
        userId: req.userId,
        tags: [],
    });
    res.json({
        message: "Content Addded",
        content,
    });
}));
app.get("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userId = req.userId;
    //usage of references (foreign keys)
    const contents = yield db_1.ContentModel.find({ userId }).populate("userId", "username");
    res.json({
        message: "Your content: ",
        contents,
    });
}));
app.delete("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contentId = req.body.contentId;
    yield db_1.ContentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.userId,
    });
    res.json({
        message: "Deleted",
    });
}));
app.post("/api/v1/brain/share", (req, res) => { });
app.get("/api/v1/brain/:shareLink", (req, res) => { });
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
