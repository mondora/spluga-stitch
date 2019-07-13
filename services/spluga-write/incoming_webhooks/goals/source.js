exports = function(payload, response) {
    var goals = context.services.get("mongodb-atlas").db("spluga").collection("goals");
    var body = validateBody(payload.body.text());
    
    goals.insertOne(body);

    return  body;
};

function validateBody(body) {
  var result = EJSON.parse(body);
  
  result.createdAt = new Date();
  
  return result;
}
