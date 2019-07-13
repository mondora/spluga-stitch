exports = function(payload, response) {
    var activities = context.services.get("mongodb-atlas").db("spluga").collection("activities");
    var body = validateBody(payload.body.text());
    
    activities.insertOne(body);

    return  body;
};

function validateBody(body) {
  var result = EJSON.parse(body);
  
  result.createdAt = new Date();
  result.goalId = BSON.ObjectId(result.goalId);
  
  return result;
}