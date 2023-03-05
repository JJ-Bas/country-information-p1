import axios from "axios";

const examplePanama = [{
    "name": "Panama",
    "topLevelDomain": [".pa"],
    "alpha2Code": "PA",
    "alpha3Code": "PAN",
    "callingCodes": ["507"],
    "capital": "Panama City",
    "altSpellings": ["PA", "Republic of Panama", "República de Panamá"],
    "subregion": "Central America",
    "region": "Americas",
    "population": 4314768,
    "latlng": [9.0, -80.0],
    "demonym": "Panamanian",
    "area": 75417.0,
    "gini": 49.8,
    "timezones": ["UTC-05:00"],
    "borders": ["COL", "CRI"],
    "nativeName": "Panamá",
    "numericCode": "591",
    "flags": {"svg": "https://flagcdn.com/pa.svg", "png": "https://flagcdn.com/w320/pa.png"},
    "currencies": [{"code": "PAB", "name": "Panamanian balboa", "symbol": "B/."}, {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
    }],
    "languages": [{"iso639_1": "es", "iso639_2": "spa", "name": "Spanish", "nativeName": "Español"}],
    "translations": {
        "br": "Panama",
        "pt": "Panamá",
        "nl": "Panama",
        "hr": "Panama",
        "fa": "پاناما",
        "de": "Panama",
        "es": "Panamá",
        "fr": "Panama",
        "ja": "パナマ",
        "it": "Panama",
        "hu": "Panama"
    },
    "flag": "https://flagcdn.com/pa.svg",
    "regionalBlocs": [{
        "acronym": "CAIS",
        "name": "Central American Integration System",
        "otherAcronyms": ["SICA"],
        "otherNames": ["Sistema de la Integración Centroamericana,"]
    }],
    "cioc": "PAN",
    "independent": true
}]

const form = document.getElementById("c-form")

/*form.addEventListener("submit", findCountry)*/

const searchInput = document.getElementById("search-text")

/*
async function findCountry(e) {
    e.preventDefault()
    try {
        const finalSearchTerm = searchInput.value
        const result = await axios.get(`https://restcountries.com/v2/name/${finalSearchTerm}`)
        const countryInfo = result.data
        const [{
            name,
            capital,
            region,
            languages: [{name: languagename}],
            population,
            flags: {png: flagimage},
            currencies: [{name: currencyName}]
        }] = countryInfo
        console.log(name)
        console.log(capital)
        console.log(population)
        console.log(region)
        console.log(languagename)
        console.log(flagimage)
        console.log(currencyName)
        let displayItem = document.getElementById("search-display")
        let li = document.createElement("li")
        li.innerHTML = `<span class="flag-image-span"><img alt="${name}-flag" src="${flagimage}"/></span><p><p>${name}</p>
<p>${name} is situated in ${region}. it has a population of ${population} people.</p>
<p>the capital is ${capital} and you can pay with ${currencyName}</p>`
        displayItem.appendChild(li)
    } catch (error) {
        console.error(error)
    }
}
*/

const [{
    name,
    capital,
    region,
    languages: [{name: languagename}],
    population,
    flags: {png: flagimage},
    currencies
}] = examplePanama

const currencyOptions = currencies

console.log(examplePanama)
console.log(name)
console.log(capital)
console.log(population)
console.log(region)
console.log(languagename)
console.log(flagimage)
console.log(currencyOptions)

function curCheck () {
    if (currencies.length === 1) {
        const [{name: curOne}] = currencyOptions
        const curMessage = `and you can pay with ${curOne}`
        console.log(curMessage)
        return curMessage
    }
    if (currencies.length === 2) {
        const [{name: curOne}, {name: curTwo}] = currencyOptions
        const curMessage = `and you can pay with ${curOne} and ${curTwo}'s`
        console.log(curMessage)
        return curMessage
    }
}

const curMessage = curCheck()

console.log(curMessage)

function infoDisplay () {
let displayItem = document.getElementById("search-display")
let li = document.createElement("li")
li.innerHTML = `<span class="flag-image-span"><img alt="${name}-flag" src="${flagimage}"/></span><p><p>${name}</p>
<p>${name} is situated in ${region}. it has a population of ${population} people.</p>
<p>the capital is ${capital} ${curMessage}</p>`
}

infoDisplay()
