import axios from "axios";

const form = document.getElementById("c-form")
form.addEventListener("submit", findCountry)
const searchInput = document.getElementById("search-text")
const displayItem = document.getElementById("search-display")
const errorField = document.getElementById("error-message")

async function findCountry(e) {
    e.preventDefault()
    displayItem.innerHTML = ``
    errorField.innerHTML = ``
    try {
        let result = await axios.get(`https://restcountries.com/v2/name/${searchInput.value}`)
        form.reset()
        let countryInfo = result.data
        let [{
            name, capital, region, languages: [{name: languagename}], population, flags: {png: flagimage}, currencies,
        }] = countryInfo
        let curMessage = curCheck(currencies)

        //check voor meerdere opties

        if (countryInfo.length === 1) {
            return displayItem.innerHTML = `<div class="flag-name-search"><span class="flag-image-span"><img alt="${name}-flag" src="${flagimage}"/><img class="flag-enlarge" src="${flagimage}"/></span><p>${name}</p></div>
<p>${name} is situated in ${region}. It has a population of ${population} people.</p>
<p>The capital is ${capital} ${curMessage} </p><p class="bottom-text">They speak ${languagename}</p>`
        }
        if (countryInfo.length > 1) {
            const [{name: optionOne}, {name: optionTwo}] = countryInfo
            return errorField.innerHTML = `<p>Error: This search term yielded multiple results.</p></p><p>Did you mean '${optionOne}' or '${optionTwo}'?</p>`
        }
    } catch (error) {
        form.reset()
        return errorField.innerHTML = `<p> Error: This search term did not yield any results. </p>`
    }
}


function curCheck(currencies) {
    const currencyOptions = currencies
    if (currencies.length === 1) {
        const [{name: curOne}] = currencyOptions
        const curMessage = `and you can pay with ${curOne}'s`
        return curMessage
    }
    if (currencies.length === 2) {
        const [{name: curOne}, {name: curTwo}] = currencyOptions
        const curMessage = `and you can pay with ${curOne} and ${curTwo}'s`
        return curMessage
    }
}
