import mongoose from 'mongoose';

export const connectDatabase = async () => {
  try {
    const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/study-together';

    await mongoose.createConnection(dbUri);

    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};
