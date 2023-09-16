let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

const cartForm = document.querySelector('.cart-form');
const cart = document.querySelectorAll('#cart');
const overlay = document.querySelector('.overlay');
const home = document.querySelector('.home');
console.log(cart);

function scrollToHome() {
  // Replace 'myForm' with your form's ID
   home.scrollIntoView({ behavior: 'smooth', block: 'start' });
 }
 
cart.forEach(e => {e.addEventListener('click',function(){
  overlay.classList.remove('hidden');
  cartForm.classList.toggle('hidden');
  scrollToHome();
})});

overlay.addEventListener('click', ()=> {
  overlay.classList.add('hidden');
  cartForm.classList.add('hidden');
})

// const html = `
// <div class="cart-form hidden">
//     <form action="#">
//         <h4 class="product-name">${}</h4><img src="image/cart-img-2.png" id="product-img" srcset="">
//         <div id="input-qty"><label class="quantity"> Quantity : </label> <input type="text" placeholder="Qty" name="quantity" id="qty"></div>
// <div id="input-price">
//     <label class="price"> Price : </label><input type="text" placeholder="Price" name="price" id="price"></div>
//     <button class="submit-btn">Submit</button>
    
//     </form>
//        </div>`;