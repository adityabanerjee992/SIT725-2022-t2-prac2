const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname+'/public'))
// Calling the express.json() method for parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const addNumbers = (number1, number2) => {
    var num1 = parseInt(number1)
    var num2 = parseInt(number2)
    var result = num1 + num2;
    return result;
}

const multiplyNumbers = (number1, number2) => {
    var num1 = parseInt(number1)
    var num2 = parseInt(number2)
    var result = num1 * num2;
    return result;
}

app.get("/addTwoNumbers",(req,res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = addNumbers(number1,number2)
    res.json({statusCode: 200, data: result, message:"Success"})
})

app.post("/multiplyTwoNumbers",(req,res) => {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = multiplyNumbers(number1,number2)
    res.json({statusCode: 200, data: result, message:"Success"})
})

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})