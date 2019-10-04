import {Controller, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
 
@Controller("/ideas")
export class IdeaController {
    @Get("/")
    getAll() {
       return "This action returns all users";
    }

    @Get("/:id")
    getById() {
        return "This action returns by id"
    }
}