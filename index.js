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
           // 'fulfillmetText': 'Reply for basic card',
            'fulfillmentMessages':[
                {
                    'card':{
                        'title':'Basic Card',
                        'subtitle':'hi this is basic card',
                        'imageUri':'https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg',
                        'buttons':[
                            {
                                'text':'click here',
                                'postback': 'https://images.pexels.com'
                            }
                        ]
                    }
                }
            ]
       });
        res.end();
    }

    if(req.body.queryResult.parameters['list']){
        res.status(200).json({
           // 'fulfillmetText ': 'Reply for List card',
            'fulfillmentMessages':[
                {
                    'card':{
                        'title':'Basic Card',
                        'subtitle':'hi this is basic card',
                        'imageUri':'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bluebonnet-8100.jpg/256px-Bluebonnet-8100.jpg',
                        'buttons':[
                            {
                                'text':'click here',
                                'postback': 'https://images.pexels.com'
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
          //  'fulfillmetText': 'Quick Reply',
            'fulfillmentMessages':[
                {
                    'quickReplies':{
                        'title':'check out',
                        'quickReplies':[
                            'sahadeb',
                            'barman'
                        ]
                    }
                }
            ]
        });
        res.end();
    }
    
});

app.listen(process.env.PORT || 80);