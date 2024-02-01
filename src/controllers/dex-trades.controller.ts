const https = require('https');

import { Request, Response } from "express";

export const getDexTrades = async (req: Request, res: Response) => {
  try {

    const options = {
        method: 'GET',
        hostname: 'app.geckoterminal.com',
        path: '/api/p1/eth/pools?include=dex,dex.network,dex.network.network_metric,tokens&page=1&include_network_metrics=true',
      };
      
      const request = https.request(options, (response: any) => {
        let data = '';
      
        response.on('data', (chunk : any) => {
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
      
      request.on('error', (error: any) => {
        console.error('Error making request:', error);
        // Handle the error here
      });
      
      request.end();

    
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

