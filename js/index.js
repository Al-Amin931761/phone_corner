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
    searchResult.textContent = '';
    phones.forEach(phone => {
        // console.log(phone.slug);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-25">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
            <h5 class="card-title"><span class ="fw-bold">Name:</span> ${phone.phone_name}</h5>
            <p class="card-text"><span class ="fw-bold">Brand:</span> ${phone.brand}</p>
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
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"><span class ="fw-bold">Name:</span> ${phone.name}</h5>
            <p class="card-text"><span class ="fw-bold">Brand:</span> ${phone.brand}</p>
            <p><span class ="fw-bold">Release Date:</span> ${phone.releaseDate}</p>
            <div>
            <p class="text-center fw-bold fs-5"> Main Features:<p>
            <p><span class ="fw-bold">Chipset:</span> ${phone.mainFeatures.chipSet} </p>
            <p><span class ="fw-bold">Display Size:</span> ${phone.mainFeatures.displaySize} </p>
            <p><span class ="fw-bold">Memory:</span> ${phone.mainFeatures.memory} </p>
            <p><span class ="fw-bold">Storage:</span> ${phone.mainFeatures.storage} </p>
            <p><span class ="fw-bold">Sensors:</span> ${phone.mainFeatures.sensors[0]},${phone.mainFeatures.sensors[1]},${phone.mainFeatures.sensors[2]},${phone.mainFeatures.sensors[3]},${phone.mainFeatures.sensors[4]},${phone.mainFeatures.sensors[5]}</p>
            
            <p class="text-center fw-bold fs-5">Others:</p>
            <p><span class ="fw-bold">Bluetooth:</span> ${phone.others.Bluetooth} </p>
            <p><span class ="fw-bold">GPS:</span> ${phone.others.GPS} </p>
            <p><span class ="fw-bold">NFC:</span> ${phone.others.NFC} </p>
            <p><span class ="fw-bold">Radio:</span> ${phone.others.Radio} </p>
            <p><span class ="fw-bold">USB:</span> ${phone.others.USB} </p>
            <p><span class ="fw-bold">WLAN:</span> ${phone.others.WLAN} </p>
            </div>
        </div>
    `;
    phoneDetails.appendChild(div);
}