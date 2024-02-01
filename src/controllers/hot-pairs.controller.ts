import { Request, Response } from "express";

export const getHotPairs = async (req: Request, res: Response) => {
  try {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("X-API-KEY", "BQYk6LYFsSq5Fv8CazRDoSTJP9fUTzgX");
  myHeaders.append("Authorization", "Bearer ory_at_qWP0d6U2qVTdu7Ls29zgUt6GQmxcyy9Qnalg8EjISY8.IgZILDfCMHgbpUBqvIHjzMaj09Ywyf32yem-zVa3Tnk");

  var raw = JSON.stringify({
    "query": "{\
      ethereum(network: ethereum) {\
        arguments(\
          options: {desc: [\"block.height\", \"index\"], limit: 5}\
          smartContractAddress: {in: \"0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f\"}\
          smartContractEvent: {is: \"PairCreated\"}\
        ) {\
          block {\
            height\
            timestamp {\
              time(format: \"%Y-%m-%d %H:%M:%S\")\
            }\
          }\
          index\
          pair: any(of: argument_value, argument: {is: \"pair\"})\
          token0: any(of: argument_value, argument: {is: \"token0\"})\
          token0Name: any(of: argument_value, argument: {is: \"token0\"}, as: token_name)\
          token1: any(of: argument_value, argument: {is: \"token1\"})\
          token1Name: any(of: argument_value, argument: {is: \"token1\"}, as: token_name)\
        }\
      }\
    }",
    "variables": "{}"
  });

  var requestOptions : any = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch("https://graphql.bitquery.io", requestOptions)
    .then(response => response.text())
    .then(res => {
      const result = JSON.parse(res);
      const pairs = result.data.ethereum.arguments;
      console.log(pairs)

    })
    .catch(error => console.log('error', error));

    res.status(201).json({
      message: "ok"
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getDailyLosers = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: "ok"
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getDailyLoserById = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: "ok "
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateDailyLoser = async (req: Request, res: Response) => {
  try {
    res.status(202).json({
      message: "ok"
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteDailyLoser = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: "ok"
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
