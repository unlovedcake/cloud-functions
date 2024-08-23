const functions = require("firebase-functions");

const { handleRequest } = require('./api');

// Handle all types of HTTP requests
exports.apiFunction = functions.https.onRequest(handleRequest);





// // Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = functions.https.onRequest((request, response) => {
  
    functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});


exports.todoFunction = functions.https.onCall(async (data, context) => {
    //const { method, payload } = data;

    console/log("ID:", id);
  
    try {
 
          const headers = {
            Accept: "*/*",
            "Content-Type": "application/json",
          };
      
      
          await axios({
            method: "PUT",
            headers,
            url: "https://api.nstack.in/v1/todos/"+ $data.id,
            data: data,
          });
    
          return {
            status: 'success',
            message: 'Todo updated successfully',
            data: todos[index],
          };
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







