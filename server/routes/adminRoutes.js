import express from "express";
import { protect } from "../middleware/auth.js";
import { addCar, checkAdmin, deleteCar, getDashboardData, getAdminCars, toggleCarAvailability, updateUserImage } from "../controllers/adminController.js";
import upload from "../middleware/multer.js";

const adminRouter = express.Router();

adminRouter.get("/check", protect, checkAdmin);
adminRouter.post("/add-car", upload.single("image"), protect, addCar)
adminRouter.get("/cars", protect, getAdminCars)
adminRouter.post("/toggle-car", protect, toggleCarAvailability)
adminRouter.post("/delete-car", protect, deleteCar)

adminRouter.get('/dashboard', protect, getDashboardData)
adminRouter.post('/update-image', upload.single("image"), protect, updateUserImage)

export default adminRouter;