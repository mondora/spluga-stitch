exports = function(payload, response) {
    var result = context.services.get("mongodb-atlas").db("spluga").collection("activities");
    return result.findOne();
};