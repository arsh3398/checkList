const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
const routes = require ('./routes/routes');
const cors = require ('cors');
const bodyparser = require ('body-parser');

app.use(bodyparser.json());

mongoose.connect('mongodb+srv://Arsh:7902052650@mongodbpractice.n0ehyit.mongodb.net/?retryWrites=true&w=majority&appName=MongoDBPractice',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
)
.then(()=>{
    console.log('Connected to MongoDb')
})
.catch((error)=>{
    console.log(error)
})

const PORT = process.env.PORT || 3000;  // Use Heroku's assigned port or default to 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.listen(3000,function checkDB(err){
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("port connected")
//     }
// });
app.use(cors());
app.use(express.json());
app.use(routes);