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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDailyLoserById = exports.getDailyLosers = exports.createDailyLoser = void 0;
const createDailyLoser = (data) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.createDailyLoser = createDailyLoser;
const getDailyLosers = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getDailyLosers = getDailyLosers;
const getDailyLoserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getDailyLoserById = getDailyLoserById;
exports.default = {
    createDailyLoser: exports.createDailyLoser,
    getDailyLosers: exports.getDailyLosers,
    getDailyLoserById: exports.getDailyLoserById
};
//# sourceMappingURL=hotpair.service.js.map