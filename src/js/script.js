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


function printItemsOnScreen() {

    let productList = document.getElementById("ul-list-products")

    for(let i = 0; i < products.length; i++) {

        let currentItem = products[i]

        let li_individual_product = document.createElement("li")
        li_individual_product.classList.add("li-individual-product")
        let img_individual_product = document.createElement("img")
        img_individual_product.classList.add("img-individual-product")
        img_individual_product.src = currentItem.imgUrl
        let p_product_description = document.createElement("p")
        p_product_description.classList.add("p-product-description")
        p_product_description.innerText = currentItem.nome
        let p_product_price = document.createElement("p")
        p_product_price.innerText = `R$ ${currentItem.preco}`
        let a_call_to_action = document.createElement("a")
        a_call_to_action.classList.add("a-call-to-action")
        a_call_to_action.href = "https://api.whatsapp.com/send/?phone=5547988107131&text&app_absent=0"
        a_call_to_action.target = "blank"
        let img_icon_product_logos = document.createElement("img")
        img_icon_product_logos.classList.add("img-icon-product-logos")
        img_icon_product_logos.src = "./src/img/whatsapp-logo.png"
        a_call_to_action.innerText = "Fale conosco"


        a_call_to_action.appendChild(img_icon_product_logos)
        li_individual_product.appendChild(img_individual_product)
        li_individual_product.appendChild(p_product_description)
        li_individual_product.appendChild(p_product_price)
        li_individual_product.appendChild(a_call_to_action)

        productList.appendChild(li_individual_product)
    }

    return productList
}

printItemsOnScreen()
printMenuOnScreen()

