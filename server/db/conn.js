const mongoose = require("mongoose");
const DATABASE = process.env.DATABASE_KEY;
mongoose.connect(DATABASE, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Boom Boom!");
}).catch((e) => {
    console.log("Error to connect database " + e);
})