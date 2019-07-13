exports = function(payload, response) {
    // Querying a mongodb service:
    var objectives = context.services.get("mongodb-atlas").db("spluga").collection("objectives");
    var body = validateBody(payload.body.text());
    
    objectives.insertOne(body);

    return  body;
};

function validateBody(body) {
  var result = EJSON.parse(body);
  
  result.createdAt = new Date();
  result.startDate = new Date(result.startDate);
  result.endDate = new Date(result.endDate);
    
  return result;
}
