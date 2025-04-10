import mongoose from "mongoose";

export interface OrderAttr {
  customerId: string;
  productId: string;
  quantity: number;
  status?: string;
}

export interface OrderDoc extends mongoose.Document {
  customerId: string;
  productId: string;
  quantity: number;
  status: string;
}

const orderSchema = new mongoose.Schema<OrderDoc>(
  {
    customerId: { type: String, required: true },
    productId: { type: String, required: true },
    quantity: { type: Number, required: true },
    status: { type: String, default: "pending" },
  },
  {
    timestamps: true,
  }
);

const order = mongoose.model<OrderDoc>("Order ", orderSchema);
export default order;
