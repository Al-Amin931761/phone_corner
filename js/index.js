const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';


    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))
}

const displaySearchResult = phones => {
    // console.log(phones);
    const searchResult = document.getElementById('search-result');
    phones.forEach(phone => {
        // console.log(phone.slug);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-5">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
            <h5 class="card-title">Name: ${phone.phone_name}</h5>
            <p class="card-text">Brand: ${phone.brand}</p>
                </div>
                <button onclick="loadPhoneDetails('${phone.slug}')" type="button" class="btn btn-info">Details</button>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadPhoneDetails = phoneId => {
    // console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
}

const displayPhoneDetails = phone => {
    console.log(phone);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Name: ${phone.name}</h5>
            <p class="card-text">Brand: ${phone.brand}</p>
            <p>Release Date: ${phone.releaseDate}</p>
            <p>Features: ${phone.mainFeatures}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    phoneDetails.appendChild(div);
}