import mongoose from "mongoose";


mongoose.connect("mongodb://localhost:27017/mern_pizza", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 

const dbobject = mongoose.connection

dbobject.on('connected',()=>console.log('mongoDb connected!!!'))
dbobject.on("error", function () {
    console.log('mongo DB faile !!!')
});
export default mongoose