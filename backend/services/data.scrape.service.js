const chrome = require('chromedriver');
const webdriver = require ('selenium-webdriver'),
    { By } = webdriver;

const driver = new webdriver.Builder()
  .forBrowser('chrome').build()
  

module.exports = {
    getAllCountries
};
    
async function getAllCountries () {
    try {
        driver.get('https://www.worldometers.info/coronavirus/');
        let thead =  await driver.findElement(By.xpath('//*[@id="main_table_countries_today"]/thead')).getAttribute("innerText");
        let tbody = await driver.findElement(By.xpath('//*[@id="main_table_countries_today"]/tbody[1]')).getAttribute("innerText");

        // will return an array of object, each object with details about different country 
        const countriesData = tbody.trim().split('\n').map(currRow => currRow.split('\t')).reduce((acc, countryData) => {
            const currCountry = thead.split('\t').reduce((acc, headerTitle, idx) => {
                headerTitle = headerTitle.replace('\n', ' ').trim('\n');
                
                countryData[idx] = !countryData[idx]
                    ? 0
                    : parseInt(countryData[idx].replace(/(,|\+)/gi, '')) >= 0
                        ? parseInt(countryData[idx].replace(/(,|\+)/gi, ''))
                        :countryData[idx]

                acc[headerTitle] = countryData[idx];
                return acc
            }, {})
            
            acc.push(currCountry);
            return acc;
        }, []);
        return countriesData;    
    } catch (err) {
        throw err;
    };
};


