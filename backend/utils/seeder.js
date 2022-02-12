const mongoose = require('mongoose');
require('dotenv').config();
const { user } = require('./seed-data');
const { User, Book } = require("../models");
const {
    generateAuthTokens
} = require("../services/token.service");
/*
to add admin data in DB 
npm run seed 
*/

// LoadingBar.start();
async function createMongooseConnection() {
    let db = mongoose.connect(process.env.dbUrl + process.env.dbName, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, socketTimeoutMS: 300000 })
    return db
}

async function createAdminEntries() {

    const dbConnection = await createMongooseConnection();
    try {
        let userPayLoad = {
            firstName: "Admin",
            lastName: "Upstarpp",
            email: "admin@gmail.com",
            password: "admin123",
            roleType: "1"
        }

        let bookPayload = {
            author: "Chinua Achebe",
            country: "Nigeria",
            language: "English",
            link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
            pages: 209,
            title: "Things Fall Apart",
            year: 1958
        }
        const user = await User.create(userPayLoad);
        await Book.create(bookPayload);
        const token = await generateAuthTokens(user.id);
        user.userJwt = token.token;
        await user.save();
        return user
    } catch (e) {
        console.error('error', e);
    }
    finally {
        // await dbConnection.close();
    }
}
// async function createAdmin(data) {
//     // console.log("admin data password=>", data.password)
//     let bcryptPassword = await generateSaltAndHashForPassword(
//         data.password
//     );
//     let adminData = {
//         firstName: data.firstName,
//         lastName: data.lastName,
//         email: data.email,
//         password: bcryptPassword,
//         roleType: data.roleType 
//     }
//     const user = User.create(adminData);
//     return user
// }


createAdminEntries();
// createAdmin();


setTimeout((function () {
    console.log('\n Seeding Done!');
    process.exit();
}), 5000);
