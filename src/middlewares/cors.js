const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:3000", "https://yourfrontend.com"], // Allowed origins
  methods: ["GET"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  credentials: true, // Enable credentials for cookies, etc.
};

module.exports = cors(corsOptions);
