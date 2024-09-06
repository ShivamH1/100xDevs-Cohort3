const jwt = require("jsonwebtoken");

//sign, decode, verify
const value = {
  name: "Shivam",
  accountNo: 123123123,
};

//sign
const token = jwt.sign(value, "secret");
console.log(token);
//this token has been generated using this secret and hence this token can only be verified using this secret

//decode
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2hpdmFtIiwiYWNjb3VudE5vIjoxMjMxMjMxMjMsImlhdCI6MTcxOTE5NTQ5MH0.oaBvSCU0-S9zA5NFUSAZAP1b3gxoXs3HGttFPH5aiyo
//using jwt.io you can paste the token generated and will get the content, using it will you can create duplicate but can't be pass through cuz of secret
const decoded = jwt.decode(token);
console.log(decoded);

//verify
const verifyVal = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2hpdmFtIiwiYWNjb3VudE5vIjoxMjMxMjMxMjMsImlhdCI6MTcxOTE5NTQ5MH0.oaBvSCU0-S9zA5NFUSAZAP1b3gxoXs3HGttFPH5aiyo", "secret");
console.log(verifyVal);