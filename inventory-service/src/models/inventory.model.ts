import mongoose from 'mongoose';

export interface InventoryAttrs {
  productId: string;
  quantity: number;
}

export interface InventoryDoc extends mongoose.Document {
  productId: string;
  quantity: number;
}

const inventorySchema = new mongoose.Schema(
  {
    productId: { type: String, required: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

const Inventory = mongoose.model<InventoryDoc>('Inventory', inventorySchema);

export default Inventory;
