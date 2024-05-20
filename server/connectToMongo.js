import mongoose,{ connect } from "mongoose";

// פונקציית חיבור למונגו
export const connectToMongo = async () => {
   try {
      // אם כבר קיים חיבור למונגו - לא יוצר חיבור חדש
      if (mongoose.connection.readyState === 1) {
         console.log('already connected');
         return;
      }
   await connect(process.env.MONGO_URI)
   console.log('connected to mongo');
} catch (error) {
   console.log('error connect to mongo',error);
}
}