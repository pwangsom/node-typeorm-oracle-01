import { OracleDS } from "./data-source"
import { AdminUser } from "./entity/AdminUser"


OracleDS.initialize().then(async () => {

    /*
	console.log("Inserting a new admin user into the database...")
    const adminUser = new AdminUser()
    adminUser.userName = "pwangsom.cmu"
    adminUser.firstName = "Peter"
    adminUser.lastName = "Cmu"
    await OracleDS.manager.save(adminUser)
    console.log("Saved a new admin user with id: " + adminUser.id) 
    */

    // Using Entity Manager
    const firstAllAdminUsers = await OracleDS.manager.find(AdminUser);
    console.log("Using Entity Manager: all admin users from the db: ", firstAllAdminUsers);

    const firstAdminUser = await OracleDS.manager.findOneBy(AdminUser, {
        userName: "pwangsom.cmu"
    })
    console.log("Using Entity Manager: find one admin user: ", firstAdminUser);    

    // Using Repositories
    const adminUserRespository = OracleDS.getRepository(AdminUser);

    const secondAllAdminUsers = await adminUserRespository.find();
    console.log("Using Repositories: all admin users from the db: ", secondAllAdminUsers);

    const secondAdminUser = await adminUserRespository.findOneBy({ userName: "peerasak.w" });
    console.log("Using Repositories: find one admin user: ", secondAdminUser);    

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))


