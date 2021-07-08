//Bacis imports for nodejs
var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors")

//create an instance of express for our app and instantiate bodyParser and cors  (cors makes API remotely testable)

var app = (module.exports = express())
app.use(bodyParser.json())
app.use(cors())

//get call to return JSON formats natural unix date

app.get("/dateValues/:dateVal", (req, res, next) => {
  // console.log('URL works !!');
  var dateVal = req.params.dateVal
  var dateFormattingOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  if (isNaN(dateVal)) {
    var naturalDate = new Date(dateVal)
    naturalDate = naturalDate.toLocaleString("en-us", dateFormattingOptions)
    var unixDate = new Date(dateVal).getTime() / 1000
    // localhost:3000/dateValues/July%2008,%202021
    // -> {
    //      "unix": "July 08, 2021"
    //    }
  } else {
    http: var unixDate = dateVal
    var naturalDate = new Date(dateVal * 1000)
    naturalDate = naturalDate.toLocaleString("en-us", dateFormattingOptions)
    //   localhost:3000/dateValues/1625698800
    // ->  {
    //          "unix": "1625698800",
    //          "natural": "July 8, 2021"
    //     }
  }

  res.json({ unix: unixDate, natural: naturalDate })
})

app.listen(3000, () => {
  console.log("it's Working...")
})
