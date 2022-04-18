const { getAll, createUser, doUpdate } = require("../services/userService");
const apikeyheader = "x-api-key";

const create = async (req, res, next) => {
    
    const apiKey = await req.body.apiKey;
    const username  = await req.body.username;
    const password  = await req.body.password;
    const firstName  = await req.body.firstName;
    const lastName  = await req.body.lastName;

    const newUser = await createUser(apiKey, username, password, firstName, lastName);
    res.json(newUser);
};

const list =  async (req, res, next) => {

    const users = await getAll();
    console.log("data->", users);
    res.json(users);
     
 
};

const update = async (req, res, next) =>{

    console.log('req...', req.body);
    const chave  = await req.body.apiKey;
    const apiKey = await req.get(apikeyheader);

    if(await doUpdate(apiKey,chave)){
        console.log('Success update');
        res.status(200).json({ message: "Success update"});
    }else{
            console.log('Fail update')
            res.status(401).json({ message: "Fail update"});
}
    

/*const getoneuser = async (req, res, next) => {

    const user = await getOne(res);
    console.log('um user>>', user);
    res.json(user);
    */
    
  

};

module.exports = {list, create, update};