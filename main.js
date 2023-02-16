const produtos = [
    
    {
        id:1,
        img: "img/product12.png",
        name: "Blusão Nike LAL",
        price: 399.90,
    },
    {
        id:2,
        img: "img/product11.png",
        name: "Nike Men's Jacket",
        price: 3299.99,
    },
    {
        id:3,
        img: "img/product10.png",
        name: "Jaqueta Nike Sportswear",
        price: 399.90,
    },
    {
        id:4,
        img: "img/product9.png",
        name: "Camisa Nike Corinthians III",
        price: 599.90,
    },
    {
        id:5,
        img: "img/product8.png",
        name: "Camiseta Nike Brasil I",
        price: 249.90,
    },
    {
        id:6,
        img: "img/product7.jpg",
        name: "Mochila Adidas",
        price: 495.00,
    },
    {
        id:7,
        img: "img/product6.jpg",
        name: "Boné Adidas Unissex",
        price: 95.00,
    },
    {
        id:8,
        img: "img/product5.png",
        name: "Boné Jordan Jumpman Heritage86",
        price: 195.00,
    },
    {
        id:9,
        img: "img/product1.jpg",
        name: "AEROREADY SHIRT",
        price: 95.00,
    },
    {
        id:10,
        img: "img/product2.jpg",
        name: "WIRELESS EARBUBS",
        price: 595.00,
    },
    {
        id:11,
        img: "img/product3.jpg",
        name: "HOODED PARKA",
        price: 389.90,
    },
    {
        id:12,
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
const cartContent = document.querySelector('.cart-content');

const totalPrice = document.querySelector('.total-price');

const cartArray = []


//Abre e fecha menu 
cartIcon.addEventListener('click', () =>{
    //console.log(cart.classList)
    cart.classList.add('active');
    //console.log(cart.classList)
})

closeCart.addEventListener('click', () =>{
    cart.classList.remove('active');
})
////////////////////////////////////////////////////////////////////////////////

window.addEventListener('DOMContentLoaded', function(){
    carregaProdutos(produtos);

    let addCart = document.querySelectorAll('.product-box .add-cart');
    addCart = [...addCart];
    

    atualizaArrayCart(addCart);
    
    
    
})

  function carregaProdutos(dispMenu){
    let displayMenu = dispMenu.map(function(item){
        return `<div class="product-box">
        <div class="container-img">
            <img src=${item.img} alt="" class="produtc-img">
        </div>
        <h4 class="product-title">${item.name}</h4>
        <span class="price">R$${(item.price.toFixed(2))}</span>
        <i class='bx bx-cart-add add-cart ' data-id="${item.id}"></i>
       </div>`
    })
    displayMenu = displayMenu.join("");
    //console.log(displayMenu)
    shopContent.innerHTML = displayMenu;
  }

  
  
        
    function atualizaArrayCart(addCart){
        addCart.forEach(function(item){
            item.addEventListener('click',function(btn){
                const num = btn.target.dataset.id;
                let itemClicado = produtos.find(item => item.id == num);
                //console.log(itemClicado);
                const existe = cartArray.find(item => item.id == num);

                if(existe){
                    let index = cartArray.findIndex(elemento => elemento.id ===existe.id)
                    cartArray[index].quant++
                    console.log(cartArray[index].quant) 

                } else{
                    itemClicado.quant = 1;
                    cartArray.push(itemClicado);
                }

                
                addDispCart();
                atualizaTotal();
            })
        })
    }
    

    function excluiItemCart(excluiCart){
        excluiCart.forEach(function(item){
            item.addEventListener('click',function(bot){
                const num = bot.target.dataset.id;
                //console.log(num)
            })
        })
    }
    
    function addDispCart(){
        cartContent.innerText = '';
        cartArray.forEach(function(item){
            let cartItem = document.querySelector('.cart-box').cloneNode(true);

            cartContent.appendChild(cartItem);

            preencheCartItem(cartItem, item);
        })
    }

    function preencheCartItem(cartItem, item){
       // console.log(item)
        let val = trataDinheiro(item.price)
        cartItem.querySelector('.cart-img').src = item.img;
        cartItem.querySelector('.cart-product-title').innerHTML= item.name;
        cartItem.querySelector('.cart-price').innerHTML = val;
        cartItem.querySelector('.cart-quantity').value =item.quant;

        a(cartItem,item);

        let cartremove = cartItem.querySelector('.card-remove');

        cartremove.addEventListener('click', function(){
            let nomeelementocartremove = cartremove.parentNode.querySelector('.cart-product-title').innerHTML;
            console.log(nomeelementocartremove);

            let itemexclusao = cartArray.find(item => item.name == nomeelementocartremove);

            console.log(itemexclusao);

            cartArray.splice(cartArray.findIndex(item => item.name == nomeelementocartremove), 1);
            addDispCart();
            atualizaTotal();
        })
    }


    function atualizaTotal (){
        let total = 0;
        
        cartArray.forEach(function(item){
            let valor =(item.price)
            total += (item.quant * valor);
        })
        total = trataDinheiro(total);
        totalPrice.innerHTML = total;
    }


    function trataDinheiro(valor){
        valor = valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
        return valor;
    }

    function a (cartItem, item){
        const quantidade = cartItem.querySelector('.cart-quantity');
        quantidade.addEventListener('change', (event) => {
            //console.log(event.target.value)
            let elpai = quantidade.parentNode.querySelector('.cart-product-title').innerHTML;
            //console.log(elpai)
            let index = cartArray.findIndex(item => item.name == elpai);
            console.log(index)
            cartArray[index].quant = event.target.value;
            atualizaTotal ()
        })
    }



    /* Banner */

    const itensDoBanner =document.querySelector('.banner-items');
    const listaItens = document.querySelectorAll('.banner-items .item');
    let idx = 0;

    function carrossel(){
        idx++;
        itensDoBanner.scrollBy(300 , 0);
        if(idx >= listaItens.length){
            idx=0;
            itensDoBanner.scrollBy(-4000 , 0);
        }
        
    }
    console.log(listaItens);
    console.log(idx)
    setInterval(carrossel, 9000)


    /* Modal  */

    const btnBuy = document.querySelector('.btn-buy');
    const modal = document.querySelector('.modal');
    const modalCompras = document.querySelector('.modal-compras');
    const closeModal = document.querySelector('#close-modal');
    const totalModelValue = document.querySelector('.total-modal-resul');

    btnBuy.addEventListener('click', () =>{
        modal.showModal()
        totalModelValue.innerHTML = totalPrice.innerHTML;
        addDispmodel(cartArray)
    })

    closeModal.addEventListener('click', () =>{
        modal.close()
    })



    function addDispmodel(cartArray){
        let dispModal = cartArray.map(function(item){
            return `<div class="modal-box">
            <img src=${item.img} alt="" class="modal-img">
            <h4 class="modal-product-title">${item.name}</h4>
            <div class="modal-box-info">
                <small class="modal-price">R$${(item.price.toFixed(2))}</small>
                <p class="modal-quantity">Quant: ${item.quant}</p>
            </div>
        </div>`
        })
        dispModal = dispModal.join('');
        modalCompras.innerHTML = dispModal
        }
