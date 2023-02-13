const cartIcon = document.querySelector('.cartIcon');
const cart = document.querySelector('.cart');
const closeCart = document.getElementById('close-cart');

cartIcon.addEventListener('click', () =>{
    console.log(cart.classList)
    cart.classList.add('active');
    console.log(cart.classList)
})

closeCart.addEventListener('click', () =>{
    cart.classList.remove('active');
})