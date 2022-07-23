function addNewItem(item) {
    let newItem = {
        id: item.id,
        nome: item.nome,
        preco: item.preco,
        categoria: item.categoria,
        oferta: item.oferta,
        estoque: item.estoque,
        imgUrl: item.imgUrl
    }
    
    products.push(newItem)
    console.log(products)
}

function addMenuOption(addThis) {

    let newOption = {
        nome: addThis.nome,
        link: addThis.link
    }

    headerMenu.push(newOption)

    return headerMenu
}

function printMenuOnScreen() {
    
    let nav_header = document.getElementById("nav-header")

    for (let i = 0; i < headerMenu.length; i++) {

        let a = document.createElement("a")
        a.innerText = headerMenu[i].nome
        nav_header.appendChild(a)
        a.href= headerMenu[i].link
    }

    return nav_header
}


printMenuOnScreen()

