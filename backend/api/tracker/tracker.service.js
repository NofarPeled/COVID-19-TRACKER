const dbService = require('../../services/db.service');
const dataScrapeService = require('../../services/data.scrape.service');

const COLLECTION_KEY = 'countries-table';

module.exports = {
    getAllCountries
};

async function getAllCountries() {
    const collection = await dbService.getCollection(COLLECTION_KEY);
    try {
        const countriesData = await dataScrapeService.getAllCountries(); 
        var createdAt = _getTodayDate();

        await collection.replaceOne(
            { createdAt },
            { createdAt: _getTodayDate(), countriesData }
        );

        return { createdAt, data: countriesData };

    } catch (err) {
        throw err;
    }
}

function _getTodayDate() {
    const date = new Date()
    return `${ date.getDate() }/${ date.getMonth()+1 }/${ date.getFullYear() }`
}