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

        res.json({
            "fulfillmentText": "This is a text response",
                    "fulfillmentMessages": [
                      {
                        "card": {
                          "title": "card title",
                          "subtitle": "card text",
                          "imageUri": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
                          "buttons": [
                            {
                              "text": "button text",
                              "postback": "https://assistant.google.com/"
                            }
                          ]
                        }
                      }
                    ]
        });
    }

    if(req.body.queryResult.parameters['list']){

        res.json({
            "fulfillmentText": "This is a text response",
                    "fulfillmentMessages": [
                      {
                        "card": {
                          "title": "List",
                          "subtitle": "card text",
                          "imageUri": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
                          "buttons": [
                            {
                              "text": "button text",
                              "postback": "https://assistant.google.com/"
                            }
                          ]
                        }
                      }
                    ]
        });
    }
    
});

app.listen(process.env.PORT || 80);