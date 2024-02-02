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
exports.ExchangeProtocal = exports.deleteDailyLoser = exports.updateDailyLoser = exports.getDailyLoserById = exports.getDailyLosers = exports.getHotPairs = void 0;
const getHotPairs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("X-API-KEY", "BQYk6LYFsSq5Fv8CazRDoSTJP9fUTzgX");
        myHeaders.append("Authorization", "Bearer ory_at_qWP0d6U2qVTdu7Ls29zgUt6GQmxcyy9Qnalg8EjISY8.IgZILDfCMHgbpUBqvIHjzMaj09Ywyf32yem-zVa3Tnk");
        var raw = JSON.stringify({
            query: "query ($network: EthereumNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {\
          ethereum(network: $network) {\
            dexTrades(date: {since: $from, till: $till}, options: {limit: 2, desc: \"count\"}) {\
              pair_address: smartContract {\
                address {\
                  address\
                }\
              }\
              first_trade_price: minimum(of: block, get: price)\
              last_trade_price: maximum(of: block, get: price)\
              diff: expression(get: \"last_trade_price - first_trade_price\")\
              div: expression(get: \"diff / first_trade_price\")\
              count\
              baseCurrency {\
                symbol\
                address\
              }\
              quoteCurrency {\
                symbol\
                address\
              }\
            }\
          }\
        }",
            variables: "{\
        \"limit\": 10,\
        \"offset\": 0,\
        \"network\": \"ethereum\",\
        \"from\": \"2024-01-30\",\
        \"till\": \"2024-01-30T23:59:24.999Z\",\
        \"dateFormat\": \"%Y-%m-%d\"\
      }",
        });
        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };
        fetch("https://graphql.bitquery.io", requestOptions)
            .then((response) => response.text())
            .then((resp) => {
            const result = JSON.parse(resp);
            const pairs = result.data.ethereum.dexTrades;
            res.status(201).json({
                message: "ok",
                data: pairs,
            });
        })
            .catch((error) => console.log("error", error));
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getHotPairs = getHotPairs;
const getDailyLosers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            message: "ok",
        });
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getDailyLosers = getDailyLosers;
const getDailyLoserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            message: "ok ",
        });
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getDailyLoserById = getDailyLoserById;
const updateDailyLoser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(202).json({
            message: "ok",
        });
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.updateDailyLoser = updateDailyLoser;
const deleteDailyLoser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            message: "ok",
        });
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.deleteDailyLoser = deleteDailyLoser;
const ExchangeProtocal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("X-API-KEY", "BQYk6LYFsSq5Fv8CazRDoSTJP9fUTzgX");
        myHeaders.append("Authorization", "Bearer ory_at_qWP0d6U2qVTdu7Ls29zgUt6GQmxcyy9Qnalg8EjISY8.IgZILDfCMHgbpUBqvIHjzMaj09Ywyf32yem-zVa3Tnk");
        var raw = JSON.stringify({
            query: "query ($network: EthereumNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime, $exchange: String!) {\
          ethereum(network: $network) {\
            dexTrades(\
              options: {desc: \"trades\"}\
              date: {since: $from, till: $till}\
              exchangeName: {is: $exchange}\
            ) {\
              protocol\
              trades: count\
              tradeAmount(in: USD)\
              currencies: count(uniq: buy_currency)\
              contracts: count(uniq: smart_contracts)\
            }\
          }\
        }\
        ",
            variables: "{\
        \"limit\": 10,\
        \"offset\": 0,\
        \"network\": \"ethereum\",\
        \"exchange\": \"Uniswap\",\
        \"from\": \"2024-01-21\",\
        \"till\": \"2024-01-28T23:59:59\",\
        \"dateFormat\": \"%Y-%m-%d\"\
      }",
        });
        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };
        fetch("https://graphql.bitquery.io", requestOptions)
            .then((response) => response.text())
            .then((resp) => {
            const result = JSON.parse(resp);
            console.log(result.data);
            const pairs = result.data.ethereum.dexTrades;
            res.status(201).json({
                message: "ok",
                data: pairs,
            });
        })
            .catch((error) => console.log("error", error));
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.ExchangeProtocal = ExchangeProtocal;
//# sourceMappingURL=hot-pairs.controller.js.map