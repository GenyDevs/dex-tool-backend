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
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const functions_1 = require("./utility/functions");
const hotpairs_1 = __importDefault(require("./routes/hotpairs"));
const dextrades_1 = __importDefault(require("./routes/dextrades"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/hot-pairs", hotpairs_1.default);
app.use("/dex-trades", dextrades_1.default);
app.use("*", (_, res) => {
    console.log("not found");
    return (0, functions_1.wrappedResponse)(res, "Not Found", 404, null);
});
app.use(function onError(err, req, res, next) {
    console.log(err);
    return (0, functions_1.wrappedResponse)(res, err.message, 500, null);
});
const server = app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    //   await prisma.$connect();
    console.log("⚡ Server started on port " + PORT);
}));
process.on("SIGINT", () => __awaiter(void 0, void 0, void 0, function* () {
    //   await prisma.$disconnect();
    //   server.close();
    //   console.log("[server]: Server closed on SIGINT");
}));
//# sourceMappingURL=index.js.map