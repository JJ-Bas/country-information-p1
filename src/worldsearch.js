import axios from "axios";

const searchInput = document.getElementById("search-text")

/*searchInput.addEventListener("keyup",logSearchTerm)*/

/*function logSearchTerm(e){
    const searchTerm = e.target.value
    return searchTerm, console.log(searchTerm)
}*/

const searchButton = document.getElementById("search-button")

searchButton.addEventListener("click", findCountry)

async function findCountry() {
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
        displayCountryInfo(countryInfo)

    } catch (error) {
        console.error(error)
    }
}

function displayCountryInfo(data) {
    let displayItem = document.getElementById("search-display")
    let li = document.createElement("li")
    li.innerHTML = `<p>  test ${name} </p>`
    displayItem.appendChild(li)
}

/*`<span><img class="flag-image" alt="${countyInfo.name}-flag" src=`${flagimage}`/> <img class="flag-enlarge" src="${flagimage}"/></span><p>${name}</p>
<p>${name} is situated in ${region}. it has a population of ${population} people.</p>
<p>the capital is ${capital} and you can pay with ${currencyName}</p>
<p>The speak ${languagename}</p>`*/

