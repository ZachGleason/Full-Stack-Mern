module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function // can also use req, res 
    response.json({     // This is where we're setting the API's response to the requesting client
        message: "Hello!"
    });
}