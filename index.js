const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json());
app.post('/api',(req,res)=>{

    if(req.body.queryResult.parameters['basic_card']){

        res.status(200).json({
            
            "fulfillmentMessages": [
                {
                  "text": {
                    "text": [
                      "This is Basic Card!"
                    ]
                  }
                },
                {
                  "card": {
                    "title": "Basic Card",
                    "subtitle": "Did you know that temperature is really just a measure of how fast molecules are vibrating around?! 😱",
                    "imageUri": "http://www.candoability.com.au/images/basics%20card.bmp",
                    "buttons": [
                      {
                        "text": "Temperature Wikipedia Page",
                        "postback": "https://en.wikipedia.org/wiki/Temperature"
                      }
                    ]
                  }
                },
                {
                  "text": {
                    "text": [
                      "I can convert Celsuis to Fahrenheit and Fahrenheit to Celsius! What temperature would you like to convert?"
                    ]
                  }
                },
                {
                  "quickReplies": {
                    "quickReplies": [
                      "27° Celsius",
                      "-40° Fahrenheit",
                      "Cancel"
                    ]
                  }
                }
              ]
                
               });
        res.end();
    }

    if(req.body.queryResult.parameters['list']){

        res.status(200).json({
            "fulfillmentMessages": [
                {
                  "text": {
                    "text": [
                      "List Card"
                    ]
                  }
                },
                {
                  "card": {
                    "title": "List Card",
                    "subtitle": "Did you know that temperature is really just a measure of how fast molecules are vibrating around?! 😱",
                    "imageUri": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Lillium_Stamens.jpg/800px-Lillium_Stamens.jpg",
                    "buttons": [
                      {
                        "text": "Temperature Wikipedia Page",
                        "postback": "https://en.wikipedia.org/wiki/Temperature"
                      }
                    ]
                  }
                },
                {
                  "text": {
                    "text": [
                      "I can convert Celsuis to Fahrenheit and Fahrenheit to Celsius! What temperature would you like to convert?"
                    ]
                  }
                },
                {
                  "quickReplies": {
                    "quickReplies": [
                      "27° Celsius",
                      "-40° Fahrenheit",
                      "Cancel"
                    ]
                  }
                }
              ]
                    
        });
        res.end();
    }
    else{
        res.status(200).json({
            
            "suggestions": [
                {
                  "title": "Kelvin"
                },
                {
                  "title": "Rankine"
                },
                {
                  "title": "Cancel"
                }
              ]
        })
        res.end();
    }
    
});

app.listen(process.env.PORT || 80);