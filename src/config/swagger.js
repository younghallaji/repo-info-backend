const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "GitHub Repo Info API",
    version: "1.0.0",
    description: "API to fetch GitHub repository details using the GitHub API",
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Local development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.js"], // Path to API documentation in routes
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
