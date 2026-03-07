import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";

const userRouter = Router();

// router.route('/profile').get(userProfile);

userRouter.route('/register').post(registerUser);
userRouter.route('/login').post(loginUser);
userRouter.route('/logout').post(logoutUser);


export default userRouter;