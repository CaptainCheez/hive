import {User} from "../schemas/user";

export class UserService {
    static findAll = () => {
        const user = new User({
            name: "Bruce",
            password: "123",
            email: "bruce@wayne.com"
        });
        user.save();
        return User.find().lean();
    }

    static removeUser = (id: number) => {
        User.remove({id})
        return User.find({name: "Elon"}).lean();
    }

    static createUser = async(user: any) => {
        const newUser = new User({
            name: user.name,
            password: user.password,
            email: user.email,
            avatar: user.avatar || ""
        })
        newUser.save();
        const token = await newUser.generateAuthToken()
        return { newUser, token }
    }
}