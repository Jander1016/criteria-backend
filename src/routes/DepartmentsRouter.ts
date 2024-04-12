import { Router } from "express";
import DepartmentsController from "../controllers/DepartmentsController";

const DepartmentsRouter = Router();

DepartmentsRouter.route("/").get(DepartmentsController.getAllDepartments);
DepartmentsRouter.route("/:id").get(DepartmentsController.getDepartment);
DepartmentsRouter.route("/").post(DepartmentsController.addDepartment);
DepartmentsRouter.route("/:id").put(DepartmentsController.updateDepartment);
DepartmentsRouter.route("/:id").delete(DepartmentsController.deleteDepartment);

export default DepartmentsRouter;
