"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentModel = exports.UserModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
mongoose_1.default.connect("mongodb+srv://admin:India%40123@100xdev.7gly1js.mongodb.net/brainly")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error connecting to MongoDB:", err));
const UserSchema = new mongoose_1.Schema({
    username: { type: String, unique: true },
    password: String,
});
exports.UserModel = (0, mongoose_1.model)("User", UserSchema);
const ContentSchema = new mongoose_1.Schema({
    type: String,
    link: String,
    title: String,
    tags: [{ type: mongoose_1.default.Types.ObjectId, ref: 'Tags' }],
    userId: { type: mongoose_1.default.Types.ObjectId, ref: 'User' }
});
exports.ContentModel = (0, mongoose_1.model)("Content", ContentSchema);
