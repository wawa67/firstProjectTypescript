import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function CreateCourse(request:Request, response:Response){
    CreateCourseService.execute({
        name:"NodeJS",
        educator:"Dani",
        duration: 10
    });
}