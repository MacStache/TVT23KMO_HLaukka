const url='https://random-data-api.com/api/v2/beers'

const getData = () => {
    fetch(url)
    .then(response => response.json())
    .then(json => {
        brand_p.innerHTML = json.brand
        name_p.innerHTML = json.name
        style_p.innerHTML = json.style
    }).catch(error => {
        alert(error)
    })
}

getData()