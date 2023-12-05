// error.controller.js
// Import any necessary modules or dependencies
// Example: const SomeModule = require('some-module');
// Define your controller function
function handleError(req, res) {
 // This is the code that will handle the errors within the application
    
}
function getErrorMessage(errMsg) {
console.log(errMsg);
}


// This is for when we export the controller function
export default  {
    handleError: handleError,
    getErrorMessage:getErrorMessage
};
