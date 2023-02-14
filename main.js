const produtos = [
    {
        id:1,
        img: "img/product1.jpg",
        name: "AEROREADY SHIRT",
        price: 95.00,
    },
    {
        id:2,
        img: "img/product2.jpg",
        name: "WIRELESS EARBUBS",
        price: 595.00,
    },
    {
        id:3,
        img: "img/product3.jpg",
        name: "HOODED PARKA",
        price: 389.90,
    },
    {
        id:4,
        img: "img/product4.jpg",
        name: "exercise bottle",
        price: 389.90,
    },

]
// Variaveis
const cartIcon = document.querySelector('.cartIcon');
const cart = document.querySelector('.cart');
const closeCart = document.getElementById('close-cart');

const shopContent= document.querySelector('.shop-content');


let cartArray = [{
    id:1,
    img: "img/product1.jpg",
    name: "AEROREADY SHIRT",
    price: 95.00,
},]


//Abre e fecha menu 
cartIcon.addEventListener('click', () =>{
    console.log(cart.classList)
    cart.classList.add('active');
    console.log(cart.classList)
})

closeCart.addEventListener('click', () =>{
    cart.classList.remove('active');
})

window.addEventListener('DOMContentLoaded', function(){
    carregaProdutos(produtos);
  })

  function carregaProdutos(dispMenu){
    let displayMenu = dispMenu.map(function(item){
        return `<div class="product-box">
        <div class="container-img">
            <img src=${item.img} alt="" class="produtc-img">
        </div>
        <h4 class="product-title">${item.name}</h4>
        <span class="price">R$${item.price}</span>
        <i class='bx bx-cart-add add-cart ${item.id}'></i>
       </div>`
    })
    displayMenu = displayMenu.join("");
    //console.log(displayMenu)
    shopContent.innerHTML = displayMenu;
  }

  const addCart = document.getElementsByClassName('add-cart');
 console.log(addCart)
  const a = [...addCart];
  console.log(a)
        
    function additemcart(){
        a.forEach(function(item){
            item.addEventListener('click',function(btn){
                console.log(btn)
            })
        })
    }
    additemcart()





  /*function ready() {

    //removendo itens cart 
    let removeCartButtons = document.getElementsByClassName('card-remove');
    console.log(removeCartButtons);
    for (let i = 0; i < removeCartButtons.length; i++) {
        let button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    




  }

 function removeCartItem(e){
    let btnClicked = e.target;
    btnClicked.parentElement.remove()
    atualizaTotal()
}

function atualizaTotal(){
    const cartContent = document.getElementsByClassName('cart-content')[0];
    const cartBoxes = cartContent.getElementsByClassName('cart-box');
    let total = 0;
    for(let i = 0; i < cartBoxes.length; i++){
        let cartBox = cartBoxes[i];
        let precoElemento = cartBox.getElementsByClassName('cart-price')[0];
        let quantidadeElemento = cartBox.getElementsByClassName('cart-quantity')[0];
        var quantidade = quantidadeElemento.value;
        total = total + (precoElemento*quantidade);

        document.querySelector('.total-price').innerHTML = "R$" + total;
    }
}*/