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

    if(req.body.queryResult.parameters['type']=='basic_card'){

        res.status(200).json({
            "fulfillmentText": "This is a example of basic card",
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
        res.end();
    }

    if(req.body.queryResult.parameters['type']=='list'){

        res.status(200).json({
            "fulfillmentText": "This is a example of list",
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
        res.end();
    }
    else{
        res.status(200).json({
            "fulfillmentText": "nothing special"
        })
        res.end();
    }
    
});

app.listen(process.env.PORT || 80);