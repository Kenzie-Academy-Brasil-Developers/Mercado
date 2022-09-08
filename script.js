
//CRIAR CARDS PRODUTOS
function createCardsProduct(product){

//RECUPERANDO DADOS DO PRODUTO
let title = product.title
let price = product.price
let category = product.category
let image = product.image
let imageDescription = product.imageDescription

//CRIAR TAGS DO PRODUTO
let tagMain = document.createElement('main')
let tagLi = document.createElement('li')
let tagImg = document.createElement('img')
let tagTitle = document.createElement('h1')
let tagCategory = document.createElement('h5')
let tagPrice = document.createElement('strong')

//INSERINDO CLASSES
tagLi.setAttribute('class','product')
tagMain.setAttribute('class','product-main')
tagImg.setAttribute('class','product-img')
tagTitle.setAttribute('class','product-title')
tagCategory.setAttribute('class','product-category')
tagPrice.setAttribute('class','product-price')

//ALIMENTANDO PRODUTOS
tagImg.src = image
imageDescription.alt = 'product'   
tagTitle.innerText = title
tagCategory.innerText = category
tagPrice.innerText = price

if (image == undefined) {
    tagImg.src = "./img/products/no-img.svg";

}
tagMain.append(tagTitle,tagCategory,tagPrice)
tagLi.append(tagImg,tagMain)
return tagLi
}

//LISTAR PRODUTOS POR SESSÕES
function checkSessions(frutas,bebidas,higiene){
    for (let i = 0; i < products.length; i++) {
        if(products[i].category == 'Frutas'){
            frutas.append(createCardsProduct(products[i]))
        }else if (products[i].category == 'Bebidas'){
            bebidas.append(createCardsProduct(products[i]))
        }else if (products[i].category == 'Higiene'){
            higiene.append(createCardsProduct(products[i]))
     }
   }
 }

 //RENDERIZANDO TEMPLATE
 function listCards(){
    let fruit = document.querySelector('.fruits')
    let drinks = document.querySelector('.drinks')
    let hygiene = document.querySelector('.hygiene')
    let ulFruit = document.createElement("ul");
    fruit.append(ulFruit)
    let ulDrinks = document.createElement('ul')
    drinks.append(ulDrinks)
    let ulHygiene = document.createElement('ul')
    hygiene.append(ulHygiene)
    checkSessions(ulFruit,ulDrinks,ulHygiene)
 }  
listCards()