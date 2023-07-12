import { Router } from "express";

import UserController from "./controllers/UserController";
import PostController from "./controllers/PostController";

const router = Router();

// usuários
router.post("/user", UserController.createUser );
router.get("/users", UserController.findAllUser );
router.get("/user/:id", UserController.findUser );
router.put("/user/:id", UserController.updateUsers);
router.delete("/user/:id", UserController.deleteUser);

// posts
router.post("post/user:id", PostController.createPost)
router.get("posts", PostController.findAllPost)
router.put("posts/:id", PostController.updatePost)

export { router };
