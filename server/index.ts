import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import { connectDatabase } from './config/database';
import authRoutes from './routes/auth';
import userRoutes from './routes/user';
import studySessionRoutes from './routes/studySession';

// Import Passport configuration
import './config/passport';

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to the database
connectDatabase();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'your-session-secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/study-sessions', studySessionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
