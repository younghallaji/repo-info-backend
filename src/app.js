const express = require("express");
const cors = require("./middlewares/cors"); 
const rateLimiter = require("./middlewares/rateLimiter"); 
const errorHandler = require("./middlewares/errorHandler");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const githubRoutes = require("./routes/githubRoutes");

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

module.exports = app;
