import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";
import env from "@config/env.config";
import { Request, Response, NextFunction } from "express";

const serviceProxies = {
  ['/product']: createProxyMiddleware({
    target: env.SERVICES.PRODUCT,
    changeOrigin: true,
    on: { proxyReq: fixRequestBody },
  }),
  ['/customer']: createProxyMiddleware({
    target: env.SERVICES.CUSTOMER,
    changeOrigin: true,
  }),
  ['/order']: createProxyMiddleware({
    target: env.SERVICES.ORDER,
    changeOrigin: true,
  }),
  ['/inventory']: createProxyMiddleware({
    target: env.SERVICES.INVENTORY,
    changeOrigin: true,
  }),
};

export const proxyRequestTransfer = async (req: Request, resp: Response, next: NextFunction) => {
  Object.entries(serviceProxies).forEach(([route, proxy]) => {
    if(req.originalUrl.startsWith(route)){
      console.log(route, req.originalUrl);
      return proxy(req, resp, next);
    }
  });
}

export default serviceProxies;
