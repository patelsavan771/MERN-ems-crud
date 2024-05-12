import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();

// // MongoDB connection
// const uri = process.env.ATLAS_URI || "";
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected...'))
//     .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/record", records);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// start the Express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});