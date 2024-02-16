function addMenuItems(menu_item, title, description, price) {
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let h3 = document.createElement('h3');

    h2.textContent = title;
    p.textContent = description;
    h3.textContent = price;

    menu_item.appendChild(h2);
    menu_item.appendChild(p);
    menu_item.appendChild(h3);
}



function createMenu() {
    document.body.style.backgroundImage = 'none';
    let content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    let menu_container = document.createElement('div');
    let menu_items = document.createElement('div');
    let americano = document.createElement('div');
    let cappuccino = document.createElement('div');
    let espresso = document.createElement('div');
    let latte = document.createElement('div');
    let mocha = document.createElement('div');
    let tea = document.createElement('div');

    americano.classList.add('items');
    cappuccino.classList.add('items');
    espresso.classList.add('items');
    latte.classList.add('items');
    mocha.classList.add('items');
    tea.classList.add('items');

    americano.id = 'americano';
    cappuccino.id = 'cappuccino';
    espresso.id = 'espresso';
    latte.id = 'latte';
    mocha.id = 'mocha';
    tea.id = 'tea';

    addMenuItems(americano, 'Americano', 'A shot or two of espresso with hot water added', '$3.00');
    addMenuItems(cappuccino, 'Cappuccino', 'A shot of espresso with steamed milk and a layer of frothed milk', '$3.50');
    addMenuItems(espresso, 'Espresso', 'A shot of strong black coffee', '$2.50');
    addMenuItems(latte, 'Latte', 'A shot of espresso with steamed milk', '$3.00');
    addMenuItems(mocha, 'Mocha', 'A shot of espresso with steamed milk and chocolate', '$3.50');
    addMenuItems(tea, 'Tea', 'A cup of hot tea', '$2.00');

    menu_items.appendChild(americano);
    menu_items.appendChild(cappuccino);
    menu_items.appendChild(espresso);
    menu_items.appendChild(latte);
    menu_items.appendChild(mocha);
    menu_items.appendChild(tea);

    menu_container.innerHTML = `Available Menu Items`;
    menu_container.appendChild(menu_items);
    menu_container.classList.add('menu_container');
    menu_items.classList.add('menu_items');



    content.appendChild(menu_container);


}

export default createMenu;