exports = function(payload, response) {
    var result = context.services.get("mongodb-atlas").db("spluga").collection("goals");
    return result.findOne();
};