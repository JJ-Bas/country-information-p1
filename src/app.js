import axios, {get} from 'axios'

console.log('Hallo daar!')

async function getCountryInfo() {
    try {
        const result = await axios.get('https://restcountries.com/v2/name/peru')
        console.log(result.data)
    } catch (error) {
        console.error(error)
    }
}

getCountryInfo()

async function getCountryList() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all?fields=name,flag,population,region')
        let countryList = result.data
        countryList.sort((a, b) => { return a.population - b.population})
        console.log(countryList)
    } catch
        (error) {
        console.error(error)
    }
}

getCountryList()
