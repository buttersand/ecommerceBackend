import 'tsconfig-paths/register';

import app from '@/app';
import { connectDB } from '@yashsingh2903/ecommerce-common';
import '@config/env';
import { MONGO_URI , PORT} from '@config/env';


if (!MONGO_URI) throw new Error('Mongo URI not defined in .env');

const start = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(PORT, () => {
      console.log(` Inventory Service running on port ${PORT}`);
    });
  } catch (err) {
    console.error(' Failed to start Inventory Service:', err);
  }
};

start();
