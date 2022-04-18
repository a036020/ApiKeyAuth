const protected = (req, res) => {
    res.send("This resource access is authenticated!");
};

module.exports = {protected};