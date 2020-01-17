import {Controller, Param, Body, Get, Post, Res, Req, UseBefore, Put, Delete} from "routing-controllers";
import { json } from 'body-parser';
import { UserService } from "src/services/userService";

@Controller("/users")
export class UserController {
    @Get("/")
    getAll(): number {
        UserService.findAll();
        return 1;
    }

    @Get("/:id")
    getById(@Param("id") id: number): String {
        UserService.removeUser(id);
        return '';
    }

    @Post("/")
    @UseBefore(json())
    async createUser(@Body() user: any, @Req() req: any, @Res() res: any): Promise<any> {
        const response = UserService.createUser(user)
        res.status(201).send(response)
    }
}
