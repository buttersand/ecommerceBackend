import dotenv from "dotenv";
dotenv.config();

const envConfig = {
  PORT: process.env.PORT || 5000,
  SERVICES: {
    PRODUCT: process.env.PRODUCT_SERVICE_URL as string,
    CUSTOMER: process.env.CUSTOMER_SERVICE_URL as string,
    ORDER: process.env.ORDER_SERVICE_URL as string,
    INVENTORY: process.env.INVENTORY_SERVICE_URL as string,
  },
};

export default envConfig;
