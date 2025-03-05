import cors from "cors";

const corsOptions = {
  origin: ["http://localhost:3000", "https://repo-info.vercel.app"], 
  methods: ["GET"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
  credentials: true, 
};

export default cors(corsOptions);
