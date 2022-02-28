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
            <div>
            <p class="text-center">Features:<p>
            <p>chipSet: ${phone.mainFeatures.chipSet} </p>
            <p>displaySize: ${phone.mainFeatures.displaySize} </p>
            <p>memory: ${phone.mainFeatures.memory} </p>
            <p>storage: ${phone.mainFeatures.storage} </p>
            <p>sensors: ${phone.mainFeatures.sensors[0]},${phone.mainFeatures.sensors[1]},${phone.mainFeatures.sensors[2]},${phone.mainFeatures.sensors[3]},${phone.mainFeatures.sensors[4]},${phone.mainFeatures.sensors[5]}</p>

            </div>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    phoneDetails.appendChild(div);
}