import express from "express"
import { protectAdmin } from "../middleware/path.js";
import { isAdmin } from "../controllers/adminController.js";

const adminRouter = express.Router();
adminRouter.get('/is-admin',protectAdmin,isAdmin) 
adminRouter.get('/dashboard',protectAdmin,getDashboardData) 
adminRouter.get('/shows',protectAdmin,getAllShows) 
adminRouter.get('/all-bookings',protectAdmin,getAllBookings)
export default adminRouter;