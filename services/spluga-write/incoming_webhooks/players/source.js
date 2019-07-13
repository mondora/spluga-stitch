exports = function(payload, response) {
    var players = context.services.get("mongodb-atlas").db("spluga").collection("players");
    var body = validateBody(payload.body.text());
    
    players.insertOne(body);

    return  body;
};

function validateBody(body) {
  var result = EJSON.parse(body);
  
  result.createdAt = new Date();
  
  return result;
}