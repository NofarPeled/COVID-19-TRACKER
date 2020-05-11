const dataService = require('./tracker.service');

module.exports = {
    getAllCountries
};


async function getAllCountries(req, res) {
    try {
        const data = await dataService.getAllCountries();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({ err });
    };
};

