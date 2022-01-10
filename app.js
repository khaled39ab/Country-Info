fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountry(data));

const displayCountry = countries => {
    const ul = document.getElementById('countryName');
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const li = document.createElement ('li');
    //     li.innerText = country.name;
    //     ul.appendChild (li);
    // }
    countries.forEach(country => {
        const li = document.createElement('li');
        li.innerText = country.name;
        ul.appendChild(li);
    });
}