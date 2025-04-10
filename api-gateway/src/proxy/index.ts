import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";
import env from "@config/env.config";

const serviceProxies: Record<
  string,
  ReturnType<typeof createProxyMiddleware>
> = {
  products: createProxyMiddleware({
    target: env.SERVICES.PRODUCT,
    changeOrigin: true,
    pathRewrite: { "^/api/products": "/" },
    on: {
      proxyReq: fixRequestBody,
    },
  }),
  customers: createProxyMiddleware({
    target: env.SERVICES.CUSTOMER,
    changeOrigin: true,
    pathRewrite: { "^/api/customers": "/" },
  }),
  orders: createProxyMiddleware({
    target: env.SERVICES.ORDER,
    changeOrigin: true,
    pathRewrite: { "^/api/orders": "/" },
  }),
  inventory: createProxyMiddleware({
    target: env.SERVICES.INVENTORY,
    changeOrigin: true,
    pathRewrite: { "^/api/inventory": "/" },
  }),
};

export default serviceProxies;
