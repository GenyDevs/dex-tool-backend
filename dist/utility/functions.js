"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrappedResponse = exports.methodNotAllowed = void 0;
const methodNotAllowed = (req, res, next) => res.status(405).send({ error: "Method not allowed" });
exports.methodNotAllowed = methodNotAllowed;
const wrappedResponse = (res, message, statusCode, result
// @ts-ignore
) => {
    return res.status(statusCode).json({
        message,
        statusCode,
        result,
    });
};
exports.wrappedResponse = wrappedResponse;
//# sourceMappingURL=functions.js.map