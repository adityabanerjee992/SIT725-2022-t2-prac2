# SIT725-2022-t2-prac2
REST using Express

### Pre-requisite
* Node Js
* Postman to test

### Run The Application
* Open the project in your own environment

```
$ npm install
$ npm run start

```
Your application will be served at localhost:3000

### Route Examples

* Addition of two numbers. 

For addition of two numbers please go to: 

```
//pass number1 value and number2 values of your choice
//pass it in the params in postman where key are number1 and number2
//Method: GET
//Params: Number1, Number2

http://localhost:3000/addTwoNumbers?number1=12&number2=12

//result

{
    "statusCode": 200,
    "data": 24,
    "message": "Success"
}

```

* Multiplication of two numbers.

For mulitplication of two numbers please go to: 

```
//pass number1 value and number2 values of your choice
//pass it in the params in postman where keys are number1 and number2
//Method: POST
//Params: Number1, Number2

http://localhost:3000/multiplyTwoNumbers?number1=2&number2=3

//result
{
    "statusCode": 200,
    "data": 6,
    "message": "Success"
}

```

* Route Parameters

For named urls: 
```
//Route path: /users/:userId/books/:bookId
//Request URL: http://localhost:3000/users/34/books/8989
//req.params: { "userId": "34", "bookId": "8989" }
//Method GET

http://localhost:3000/users/34/books/8989

//Result
{
    "userId": "34",
    "bookId": "8989"
}


```

### Copyrights

This is a public project. 
Copyright (c) 2022 Aditya Banerjee

