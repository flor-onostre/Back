import express from "express";
import { getblogscontroller, getblogcontroller, getblogPopuladocontroller, createblogcontroller, updateblogcontroller, deleteblogcontroller } from "../controllers/BlogControllers.js";
import { validationPostBlog, validationPutBlog, validationIdBlog } from "../validations/validationBlog.js";
import { validationMiddleware } from "../middlewares/validationMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const routerBlog = express.Router();

routerBlog.get("/",getblogscontroller)
routerBlog.get("/:id",validationIdBlog,validationMiddleware,getblogcontroller)
routerBlog.get("/populado/:id",validationIdBlog,validationMiddleware,getblogPopuladocontroller) 
routerBlog.post("/",authMiddleware,validationPostBlog,validationMiddleware,createblogcontroller) 
routerBlog.put("/:id",validationPostBlog,validationIdBlog,validationMiddleware,updateblogcontroller)
routerBlog.delete("/:id",validationIdBlog,validationMiddleware,deleteblogcontroller)

export default routerBlog;