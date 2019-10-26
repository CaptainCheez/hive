import {Controller, Param, Body, Get, Post, Res, Req, UseBefore, Put, Delete} from "routing-controllers";
import { json } from 'body-parser';
import {User} from "../schemas/user";

@Controller("/users")
export class UserController {
    @Get("/")
    getAll(): number {
        const user = new User({
            name: "Bruce",
            password: "123",
            email: "bruce@wayne.com"
        });
        user.save();
       return User.find().lean();
    }

    @Get("/:id")
    getById(@Param("id") id: number): String {
        User.remove({})
       return User.find({name: "Elon"}).lean();
    }

    @Post("/")
    @UseBefore(json())
    async createUser(@Body() user: any, @Req() req: any, @Res() res: any): any {
        console.log(user, req.body);
        const newUser = new User({
            name: user.name,
            password: user.password,
            email: user.email,
            avatar: user.avatar || ""
        })
        newUser.save();
        const token = await newUser.generateAuthToken()
        res.status(201).send({ newUser, token })
    }
}
