import axios, {defaults} from 'axios'

async function getCountryList() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all?fields=name,flag,population,region')
        let list = result.data
        list.sort((a, b) => {
            return a.population - b.population
        })
        return list
    } catch (error) {
        console.error(error)
    }
}

async function htmlList() {
    const list = await getCountryList()
    let cList = document.getElementById("country-list")
    list.map((countryList) => {
        let li = document.createElement("li")
        li.innerHTML = `<div class="flag-name"><span class="flag-image-span"><img class="flag-image" alt= "flag-${countryList.name}" src="${countryList.flag}"/><img class="flag-enlarge" src="${countryList.flag}"/></span><p class="${regionColor(countryList.region)}"> ${countryList.name}</p></div><p>Has a population of ${countryList.population} people</p>`
        cList.appendChild(li)
    })
}

htmlList()


function regionColor(regionName) {
    switch (regionName) {
        case "Asia":
            return "red"
        case "Europe":
            return "yellow"
        case "Africa" :
            return "blue"
        case 'Oceania':
            return "purple"
        case "Americas":
            return "green"
        default:
            return "default"
    }
}

async function printTest() {
    console.log(await getCountryList())
}

printTest()



