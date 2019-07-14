exports = function(payload, response) {
    var { id } = payload.query;
    var result = context.services.get("mongodb-atlas").db("spluga").collection("players");
    var query = id ? { "_id": BSON.ObjectId(id) } : {};
    return result.find(query).toArray();
};