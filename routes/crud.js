const express = require('express');
const routes = express.Router();
const jsc8 = require("jsc8");

//To add single document to macrometa db
routes.post('/add', async (req, res) =>{
  try {
      const client = new jsc8({url: process.env.URL, token: "", fabricName: '_system'});
      await client.login(process.env.USER_NAME,process.env.PASSWORD)  //Auth
      let firstName= req.body.firstName;
      let lastName = req.body.lastName;
      let email = req.body.email
      let query = `INSERT {firstname:'${firstName}',lastname:'${lastName}',email:'${email}' } INTO addresses`;
      await client.executeQuery(query);
      res.send({message:'Inserted successfully'});
  } catch (error) {
      console.error(error) 
  }
})

//To fetch all the data saved in db
routes.get('/all', async (req, res) =>{
  try {
      const client = new jsc8({url: process.env.URL, token: "", fabricName: '_system'});
      await client.login(process.env.USER_NAME,process.env.PASSWORD)
      let query = `For docs IN addresses RETURN docs`
      let result = await client.executeQuery(query);
      res.send(result)
    } catch (error) {
      console.error(error) 
  } 
})

//To delete an user from db
routes.delete('/user', async (req, res) =>{
  try {
      const client = new jsc8({url: process.env.URL, token: "", fabricName: '_system'});
      await client.login(process.env.USER_NAME,process.env.PASSWORD)
      let firstName= req.body.firstName;
      let query = `FOR docs IN addresses FILTER docs.firstname == '${firstName}' REMOVE docs IN addresses`;
      await client.executeQuery(query);
      res.send({message:'Deleted a record successfully'}); 
  } catch (error) {
      console.error(error) 
  }
}) 

//To update single document in macrometa db
routes.post('/update', async (req, res) =>{
  try {
      const client = new jsc8({url: process.env.URL, token: "", fabricName: '_system'});
      await client.login(process.env.USER_NAME,process.env.PASSWORD)
      let firstName= req.body.firstName;
      let lastName = req.body.lastName;
      let email = req.body.email;
      let key = req.body.key;
      let query = `UPDATE '${key}' WITH {firstname:'${firstName}',lastname:'${lastName}',email:'${email}' } INTO addresses`;
      await client.executeQuery(query);
      res.send({message:'Updated successfully'});
  } catch (error) {
      console.error(error) 
  }
})

//Onload api to fetch docs from addresses db
routes.get('', async (req, res) =>{
    const client = new jsc8({url: process.env.URL, token: "", fabricName: '_system'});
    await client.login(process.env.USER_NAME,process.env.PASSWORD)
    let query = `For docs IN addresses RETURN docs`;
    let result = await client.executeQuery(query);
    try {
        const data = await result;
        res.render('Macro', {
            macroData: data,
        })
      } catch (error) {
        console.error(error);
    } 
})

module.exports = routes;