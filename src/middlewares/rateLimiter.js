import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, 
  max: 5, 
  message: {
    status: false,
    message: "Too many requests. Please try again later.",
  },
  headers: true, 
});

export default limiter;
