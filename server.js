const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// routes
app.use(require("./routes/api.js"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://kirk-admin:Bom106132@cluster0.5dqd4.mongodb.net/budget?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
).then(() => {
    app.listen(PORT, () => {
        console.log(`App running on port ${PORT}!`);
    });
})