function createContact() {
    let content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    let contact_container = document.createElement('div');
    let contact_info = document.createElement('div');
    let address_info = document.createElement('div');
    let phone = document.createElement('div');
    let email = document.createElement('div');
    let address = document.createElement('div');
    let brands = document.createElement('div');
    let social_media = document.createElement('div');

    contact_container.classList.add('contact_container');
    contact_info.classList.add('contact_info');
    address_info.classList.add('address_info');
    phone.classList.add('phone');
    email.classList.add('email');
    address.classList.add('address');
    brands.classList.add('brands');
    social_media.classList.add('social_media');

    let phone_icon = document.createElement('i');
    let email_icon = document.createElement('i');
    let address_icon = document.createElement('i');
    let facebook_icon = document.createElement('i');
    let twitter_icon = document.createElement('i');
    let instagram_icon = document.createElement('i');
    let map = document.createElement('iframe');

    contact_info.innerHTML = "Contact Information";

    phone_icon.classList.add("fa-solid", "fa-phone");
    email_icon.classList.add("fa-solid", "fa-envelope");
    address_icon.classList.add("fa-solid", "fa-location-dot");
    facebook_icon.classList.add("fa-brands", "fa-facebook");
    twitter_icon.classList.add("fa-brands", "fa-twitter");
    instagram_icon.classList.add("fa-brands", "fa-instagram");

    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.6887335553365!2d120.69248607432496!3d14.271366185054053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd888e7e8f24af%3A0xd683b4982fa2b2a5!2sMountain%20Brew%20Coffee%20Shop!5e0!3m2!1sen!2sph!4v1708097502530!5m2!1sen!2sph";

    phone.appendChild(phone_icon);
    phone.innerHTML += " 123-456-7890";

    email.appendChild(email_icon);
    email.innerHTML += "admin@mountainbrewcoffeeshop.com";

    address.appendChild(address_icon);
    address.innerHTML += " 123 Mountain Brew Way, Coffeeville, USA";

    brands.appendChild(facebook_icon);
    brands.appendChild(twitter_icon);
    brands.appendChild(instagram_icon);

    social_media.innerHTML = "Follow Us on Social Media";
    social_media.appendChild(brands);

    contact_info.appendChild(phone);
    contact_info.appendChild(email);
    contact_info.appendChild(social_media);

    address_info.appendChild(address);
    address_info.appendChild(map);

    contact_container.appendChild(contact_info);
    contact_container.appendChild(address_info);

    content.appendChild(contact_container);
    console.log(content);
}

export default createContact;