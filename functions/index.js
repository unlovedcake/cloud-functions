

const functions = require("firebase-functions");
const admin = require('firebase-admin');
const axios = require('axios');
require('dotenv').config();

admin.initializeApp();


//var serviceAccount = require("./serviceAccountKey.json");
//admin.initializeApp({
//  credential: admin.credential.cert(serviceAccount)
//});


//const paymongo = require('paymongo-node')(process.env.API_KEY);

const { handleRequest } = require('./api');

//
//exports.payMongo = paymongo.paymentIntents.create({
//
//
//  amount: 10000,
//  currency: 'PHP',
//  description: "Testing Description",
//  remarks: "Testing Remarks",
//  payment_method_allowed: ['gcash']
//  // insert other required attributes here
//})
//  .then(function(resource) {
//    console.log('Success');
//    console.log(resource);
//    console.log(process.env.API_KEY);
//  })
//  .catch(function(e) {
//    if (e.type === "AuthenticationError") {
//      // Handle authentication error
//    } else if (e.type === "InvalidRequestError") {
//      // Handle validation errors
//      e.errors.forEach(function (error) {
//        console.log(error.code);
//        console.log(error.detail);
//      })
//    }
//  });

// Handle all types of HTTP requests
exports.apiFunction = functions.https.onRequest(handleRequest);





// // Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = functions.region("asia-southeast2").https.onRequest((request, response) => {
  
    functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});


exports.todoFunction = functions.region("asia-southeast2").https.onCall(async (data, context) => {
    //const { method, payload } = data;

    console.log("Post Todos" + data.title);

    const postData = {
            'title': data.title,
          'description': data.description,
          'is_completed': data.is_completed,
    }
  
     try {
 
           const headers = {
             Accept: "*/*",
             "Content-Type": "application/json",
           };
      
      
           const result = await axios({
             method: "POST",
             headers,
             url: "https://api.nstack.in/v1/todos/",
             data: postData,
           });

           console.log('Sucess',result.data);

            return JSON.stringify(result.data);
    
//           return {
//             status: 'success',
//             message: 'Todo added successfully',
//             data: data,
//           };
         // Other cases...
      
     } catch (error) {
       throw new functions.https.HttpsError(
         error.code || 'unknown',
         error.message || 'An unknown error occurred.'
       );
     }
  });
  


// exports.api = functions.https.onRequest((request, response) => {
//     switch(request.method){
//      case 'GET':
//          response.send("Get Request");
//          break;
//      case 'POST':
//          const body = request.body;
//          response.send(body);
//          break;
//      case 'PUT':
//          response.send("Update Request");
//          break;
//      case 'DELETE':
//          response.send("Delete Request");
//          break;
//      default:    
//          response.send("DefaultRequest");                  
 
//     }
//    });







