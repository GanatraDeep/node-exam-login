const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Exam1')
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=>{
    console.log(`Error : ${err}`);
})

module.exports = mongoose