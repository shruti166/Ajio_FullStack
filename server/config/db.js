import mongoose from "mongoose";
mongoose.set('strictQuery', true);
const connection = async() => {
    await mongoose.connect('mongodb+srv://shruti166:pw05_166@cluster0.q022tkn.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('connection eastablished');
}

export default connection;