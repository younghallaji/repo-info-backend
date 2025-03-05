const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:3000", "https://repo-info.vercel.app"], 
  methods: ["GET"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
  credentials: true, 
};

module.exports = cors(corsOptions);
