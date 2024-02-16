function createHome() {
    let content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    let title = document.createElement('div');
    let container = document.createElement('div');
    let name = document.createElement('h1');
    let description = document.createElement('p');
    let book = document.createElement('button');

    title.classList.add('title');
    container.classList.add('container');

    name.textContent = "Mountain Brew Coffee";
    description.textContent = "We are a small coffee shop located in the heart of the Rocky Mountains. We pride ourselves on our unique blend of coffee and our cozy atmosphere. We are open 7 days a week and we hope to see you soon!";
    book.textContent = "Book a Table";

    title.appendChild(name);
    title.appendChild(container);
    container.appendChild(description);
    title.appendChild(book);

    content.appendChild(title);
}

export default createHome;
