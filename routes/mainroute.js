

module.exports = function(app){

        app.get('/skeleton/information', (req,res)=>{
                res.status(200).json({message:'Information'});
        });
        app.get('/skeleton/secureinfo', (req, res)=>{
                let auth = req.headers.authorization;
                if(auth){
                        res.status(200).json({message:'Secure Information'});
                }else{
                        res.status(403).json({message:' Authenticate first'});
                }
        });
        app.post('/skeleton/greetings', (req,res)=>{
                let info = req.body;
                let type = req.query.type;

                switch (type){
                        case 'morning':
                                res.status(200).json({message:'Good morning '  + info.name})
                        break;
                        case 'evening':
                                res.status(200).json({message:'Good evening '  + info.name})
                        break;
                        default:
                                res.status(200).json({message:'Good Day '  + info.name})
                }

                
        });

}