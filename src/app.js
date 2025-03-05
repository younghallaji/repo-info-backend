import express from "express";
import cors from "./middlewares/cors.js"; 
import rateLimiter from "./middlewares/rateLimiter.js"; 
import errorHandler from "./middlewares/errorHandler.js";
import "dotenv/config";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";
import githubRoutes from "./routes/githubRoutes.js";

const app = express();

// Middleware
app.use(cors);
app.use(rateLimiter);
app.use(express.json());

// Swagger Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/v1/api/github", githubRoutes);

// Error Handling Middleware 
app.use(errorHandler);

export default app;
