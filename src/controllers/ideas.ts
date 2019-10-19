import {Controller, Param, Body, Get, Post, Put, Delete} from "routing-controllers";

@Controller()
export class IdeaController {
    @Get("/")
    getAll(): any {
       return "This action returns all users";
    }

    @Get("/:id")
    getById(): any {
        return "This action returns by id"
    }
}

export const apple = 1;