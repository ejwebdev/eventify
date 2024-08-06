//Takes the variable and import here
import {
	about,
	services,
	choose,
	collection,
	pricing,
} from "../data/all-data.js";

//About Section
//Combine the HTML together and put it on the page
export let aboutHTML = "";

//Loop this array using forEach method
about.forEach((about) => {
	aboutHTML += `
    <div class="about-grid">
        <img class="about-img-2" src="icons/arrow.svg" />
        <div class="about-grid-texts">
            <p>${about.text}</p>
        </div>
    </div>
    `;
});

//Services Section
//Combine the HTML together and put it on the page
export let servicesHTML = "";

//Loop this array using forEach method
services.forEach((services) => {
	servicesHTML += `
    <div class="services-grid">
        <a href="">
            <div class="grid-content">
                <img src="${services.content.imgIcon}" />
                <h3>${services.content.title}</h3>
                <p>${services.content.description}</p>
            </div>
        </a>
    </div>
    `;
});

//Choose us Section
//Combine the HTML together and put it on the page
export let chooseHTML = "";

//Loop this array using forEach method
choose.forEach((choose) => {
	chooseHTML += `
    <div class="choose-grid">
        <img class="choose-img-2" src="${choose.content.imgIcon}" />
        <div class="choose-grid-texts">
            <h3>${choose.content.title}</h3>
            <p>${choose.content.description}</p>
        </div>
    </div>
    `;
});

//Collection Section
//Combine the HTML together and put it on the page
export let collectionHTML = "";

//Loop this array using forEach method
collection.forEach((collection) => {
	collectionHTML += `
    <a href="">
        <div class="collection-grid">
            <img src="${collection.content.image}" alt="Collection Picture" />
            <div class="collection-overlay">
                <div class="collection-overlay-texts">
                    <h3>${collection.content.title}</h3>
                    <p>${collection.content.date}</p>
                </div>
            </div>
        </div>
    </a>
    `;
});

//Pricing Section
//Combine the HTML together and put it on the page
export let pricingHTML = "";

//Loop this array using forEach method
pricing.forEach((pricing) => {
	pricingHTML += `
    <div class="pricing-grid">
        <div class="grid-content">
            <h3>${pricing.content.title}</h3>
            <h5>Starts From</h5>
            <h1>${pricing.content.price}</h1>
            <div class="pricing-arrows">
                <div>
                    <img src="icons/arrow.svg" />
                    <p>Full Services</p>
                </div>
                <div>
                    <img src="icons/arrow.svg" />
                    <p>Decorations</p>
                </div>
                <div>
                    <img src="icons/arrow.svg" />
                    <p>Music and Photos</p>
                </div>
                <div>
                    <img src="icons/arrow.svg" />
                    <p>Catering</p>
                </div>
                <div>
                    <img src="icons/arrow.svg" />
                    <p>Entertainment</p>
                </div>
                <div>
                    <img src="icons/arrow.svg" />
                    <p>Invitation Card</p>
                </div>
            </div>
            <a href="">
                <button class="pricing-button">CHECK OUT</button>
            </a>
        </div>
    </div>
    `;
});
