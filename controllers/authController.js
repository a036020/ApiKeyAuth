const {getSecret } = require('../services/userService');
const apikeyheader = "x-api-key"

const auth = async function (req, res, next) {
  var apiKey =await req.get(apikeyheader);
  console.log(apiKey);
  if (!apiKey ){
    res.sendStatus(401);
    return;
  }

  if(await getSecret(apiKey)){
    console.log('Autenticado');
    next();
  }else{
    console.log('Auth -> FALSE')
    res.status(401).json({ message: "Token is not valid"});
  }
    /*if (!apiKey ){
    res.sendStatus(401);
    return;
    }
    getSecret(apiKey,(err, pass, obj) => {
    if (err) {
    res.sendStatus(401);
    return;
    }
    req.user = obj;
    next();
    });*/
};

module.exports = auth;