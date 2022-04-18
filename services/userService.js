const User = require("../models/userModels");

/*const apiKeys = new Map();
apiKeys.set('123456789', {
  id: 1,username: 'basicUser', password: 'basicPassword', 
  firstName: 'Basic', lastName: 'User',
  apikey: '123456789'
});

apiKeys.set('987654321', {
    id: 2, username: 'test', password: 'test', 
    firstName: 'Test', lastName: 'User',
    apiKey: '987654321'
});*/


// function to get the secret associated to the key id
async function getSecret(keyId, done) {
 /*if (!apiKeys.has(keyId)) {return done(new Error('Unknown api key'));}
 const clientApp = apiKeys.get(keyId);
 done(null, clientApp.secret, {id: clientApp.id, name: clientApp.username});*/

  const auth = await User.findOne({ where: { apiKey: `${keyId}` } });
  if (auth === null) {
    return false;
  } else {
      return true;
  }

}

async function createUser(apiKey, username, password, firstName, lastName) {
  const user = await User.create({
      
    apiKey: `${apiKey}`,
    username: `${username}`,
    password: `${password}`,
    firstName: `${firstName}`, 
    lastName: `${lastName}` 
    
  })
  return user;
}

async function getAll() {  
  /*const db = await teste(); //.then((value)=> console.log("value->", value)).catch(()=> false);
  console.log("db->", db);
  return db;*/

  const users = await User.findAll();
  console.log(users.every(user => user instanceof User)); // true
  console.log("All users:", JSON.stringify(users, null, 2));

  return users;

};


async function doUpdate(key, chave){
  
  const find = await getSecret(key);
  
  if (find === false){
    return false;
  }else{
    User.update(
      { apiKey: `${chave}` },
      { where: { apiKey: `${key}` } }
    )
    return true;
  }
};

/*async function getOne(chave){

  //const chaveuse = chave.apiKey;
  console.log('chave>>>', chave);
  console.log('#####################');
  
  const user = await User.findOne({ where: { apiKey: `${chave}` } });
  console.log('userrrrrr>>>', user);
  if (user === null) {
    console.log('Not found!');
  } else {
    console.log(user instanceof User); // true
    console.log('userrr>>>' ,user.apiKey); // 'My Title'
    return user.apiKey;
  }

};*/

 module.exports = { getSecret, createUser, getAll, doUpdate };