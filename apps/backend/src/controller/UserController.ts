import {FindOneOptions} from "typeorm";
import {Request} from "express";
import {User} from "../entity/User";
import {AppDataSource} from "../data-source";

export class UserController {

    private userRepository = AppDataSource.getRepository(User);

    async all() {
        return this.userRepository.find();
    }

    async one(request: Request) {
        return this.userRepository.findOne(request.params.id as FindOneOptions);
    }

    async save(request: Request) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request) {
        const userToRemove = await this.userRepository.findOne(request.params.id as FindOneOptions);
        await this.userRepository.remove(userToRemove);
    }

}
