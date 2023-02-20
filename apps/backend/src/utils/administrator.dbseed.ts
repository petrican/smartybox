import { User } from "../entity/User";
import { Md5 } from "ts-md5/dist/md5";
import {AppDataSource} from "../data-source";

export class AdministratorDbSeed {

  async createAdmin() {
    AppDataSource.initialize().then(async () => {
      const userRepository = AppDataSource.getRepository(User);
      const adminUser = await userRepository.findOne({ where: { user_login: "admin" }});

      if (!adminUser) {
        // insert new users for test
        await AppDataSource.manager.save(
          AppDataSource.manager.create(User, {
            user_login: "admin",
            user_pass: Md5.hashStr("password"),
            user_fullname: "Administrator",
            user_role: "administrator",
            user_email: "admin@admin.com",
            user_activation_key: "123456",
            user_status: 1,
          })
        );
      }
    }).catch(error => console.log(error));
  }
}
