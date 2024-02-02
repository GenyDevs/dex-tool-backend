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
exports.getDexTrades = void 0;
const https = require('https');
const getDexTrades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const options = {
            method: 'GET',
            hostname: 'app.geckoterminal.com',
            path: '/api/p1/eth/pools?include=dex,dex.network,dex.network.network_metric,tokens&page=1&include_network_metrics=true',
        };
        const request = https.request(options, (response) => {
            let data = '';
            response.on('data', (chunk) => {
                data += chunk;
            });
            response.on('end', () => {
                console.log('Response data:', JSON.parse(data));
                res.status(201).json({
                    message: "sucess",
                    data: JSON.parse(data)
                });
            });
        });
        request.on('error', (error) => {
            console.error('Error making request:', error);
            // Handle the error here
        });
        request.end();
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getDexTrades = getDexTrades;
//# sourceMappingURL=dex-trades.controller.js.map