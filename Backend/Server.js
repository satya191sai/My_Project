import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Memory storage for products
let products = [];

// Multer configuration for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "uploads/";
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath);
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Upload product route
app.post("/upload", upload.single("image"), (req, res) => {
  const { id, name, new_price, old_price, category } = req.body;
  const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;

  const product = {
    id: Number(id),
    name,
    new_price: Number(new_price),
    old_price: Number(old_price),
    category,
    image: imageUrl,
  };

  products.push(product);
  res.json({ success: true, product });
});

// Get all products
app.get("/products", (req, res) => {
  res.json({ success: true, products });
});

// Start server
app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
