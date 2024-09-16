import mongoose from "mongoose";

export const dbconnection = () => {
    mongoose.connect((process.env.MONGO_URI) , {
        dbName: 'Volunteer-Project'
    }).then(() => {
        console.log("The database get connected succesfully : ")
    }).catch((error) => {
        console.log("the database not get connected check once " + error)
    })
}