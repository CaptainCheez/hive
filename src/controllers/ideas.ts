import {JsonController, Controller, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import {User} from "../schemas/user";

@Controller("/users")
export class IdeaController {
    @Get("/")
    getAll(): number {
        const user = new User({
            name: "Bruce",
            password: "123",
            email: "bruce@wayne.com"
        });
        user.save();
       return User.find().toArray();
    }

    @Get("/:id")
    getById(): String {
        const user = new User({
            name: "Elon",
            password: "123",
            email: "elon@musk.com"
        });
        user.save();
       return User.find({name: "Elon"}).lean();
    }

    @Post("/users")
    createUser(@Body() user: any): any {
        const newUser = new User({
            name: user.name,
            password: user.password,
            email: user.email,
            avatar: user.avatar || ""
        })
        newUser.save();
       return "Saving user...";
    }
}
