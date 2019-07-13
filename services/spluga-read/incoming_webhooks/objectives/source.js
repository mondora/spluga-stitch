exports = function(payload, response) {
    var result = context.services.get("mongodb-atlas").db("spluga").collection("objectives");
    return result.findOne();
};