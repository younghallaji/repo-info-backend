import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, 
  max: 10, 
  message: {
    status: false,
    message: "Too many requests. Please try again later.",
  },
  headers: true, 
});

export default limiter;
