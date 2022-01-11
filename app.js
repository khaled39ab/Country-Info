fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountry(data));

const displayCountry = countries => {
    const ul = document.getElementById('countriesName');
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const li = document.createElement ('li');
    //     li.innerText = country.name;
    //     ul.appendChild (li);
    // }
    countries.forEach(country => {
        const li = document.createElement('li');
        li.innerHTML = `${country.name}` ;
        li.onclick=function(){
            details(country.name)
        }
        ul.appendChild(li);
    });
    
};

const details = (name) => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch (url)
    .then (res => res.json())
    .then (data => renderCountryInfo(data[0]))
};

const renderCountryInfo = country => {

    const countryDiv = document.getElementById ("details");
    countryDiv.innerHTML = `
    <h2>Country Name: ${country.name}</h2>
    <h2>Capital Name: ${country.capital}</h2>
    <h2>Area: ${country.area}</h2>
    <h2>Population: ${country.population}</h2>
    <img src="${country.flag}">
    `
}

document.getElementById ("searchBtn").addEventListener ("click", function(){
    const search = document.getElementById ("searchInput").value;
    details (search);
})