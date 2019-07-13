exports = function(payload, response) {
    var result = context.services.get("mongodb-atlas").db("spluga").collection("players");
    return result.findOne();
};