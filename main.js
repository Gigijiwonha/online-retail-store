

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

let cartForm = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cartForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

function search() {
    var search_term = document.getElementById('search-box').value;
    if (search_term.length > 0) {
    window.location.href = "search.php?search_term=" + search_term;
    }
}


var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centerdSlides: true,
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




let carts = document.getElementsByClassName('shop-item-button');

let products = [];
//console.log(carts)
for (let i=0; i < carts.length; i++) {
    let cart = carts[i];
    let shopItem = cart.parentElement.parentElement;
        let title = shopItem.getElementsByClassName('shop-item-title')[i].innerText;
        let price = shopItem.getElementsByClassName('shop-item-price')[i].innerText;
        let imageSrc = shopItem.getElementsByClassName('shop-item-img')[i].src;
        let quantity = shopItem.getElementsByClassName('shop-itme-cartquantity')[i].value;
console.log("quantity is >>>>", quantity);

        let product = {
            name: title,
            tag: title.toLowerCase().replace(/ /g, '-'),
            price: price,
            inCart: 0,
            image: imageSrc
        };
        console.log(product);
        products.push(product);
}

console.log(products);




for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.getElementsByClassName('fa-cart-shopping')[0].getElementsByTagName('span')[0].textContent = productNumbers;
    }
}


function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.getElementsByClassName('fa-cart-shopping')[0].getElementsByTagName('span')[0].textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers',1);
        document.getElementsByClassName('fa-cart-shopping')[0].getElementsByTagName('span')[0].textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product) {
    // console.log("The product price is", product.price);
    let cartCost = parseFloat(localStorage.getItem('totalCost')) || 0;

    if(cartCost != null) {
        cartCost = parseFloat(cartCost);
        localStorage.setItem("totalCost", cartCost + parseFloat(product.price));
    } else {
        localStorage.setItem("totalCost", parseFloat(product.price));
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log("Cart Items : >>>", cartItems);
    let productContainer = document.querySelector('.shopping-cart-in');
    let cartCost = localStorage.getItem('totalCost');
    cartCost = parseFloat(cartCost).toFixed(2);
    // let totalPrice = 0;

    
    if ( cartItems && productContainer ) {
        productContainer.innerHTML = '';                
        
        Object.values(cartItems).map(item => {
            const itemTotal = (item.price * item.inCart).toFixed(2);
            console.log("Item : >>>>,", item.image)            
            productContainer.innerHTML += `
            <div class="cart-box">
                <i class="fa-solid fa-trash" data-tag="${item.tag}"></i>
                <img src="${item.image}" alt="">
                <div class="content">
                    <h3 class="shop-item-title">${item.tag}</h3>
                    <span class="shop-item-price">${item.price}</span>
                    <input class="cart-quantity" type="" value="${item.inCart}"></input>
                    <div class="cart-item-total"><span>$${itemTotal}</span></div>
                </div>
            </div>
        `

        // console.log("Quantity:>>>", document.getElementById("iq").value);
        // totalPrice = totalPrice + (document.getElementById("iq").value * item.price);
        // console.log("Total Price : >>>", totalPrice);
        ;
        });
        

        productContainer.innerHTML += `
            <div class="cart-total">
                    <strong class="cart-total-title">Total</strong>
                    <span class="cart-total-price">$${cartCost}</span>
            </div>
        `;

        const trashIcons = document.querySelectorAll(".fa-trash");
        trashIcons.forEach(icon => {
            icon.addEventListener('click', () => {
                const itemTag = icon.dataset.tag;
                let cartItems = localStorage.getItem('productsInCart');
                let cartCost = localStorage.getItem('totalCost');
        
                cartItems = JSON.parse(cartItems);
                cartCost = JSON.parse(cartCost);
        
                const itemPrice = cartItems[itemTag].price * cartItems[itemTag].inCart;
                const newItemTotal = cartCost - itemPrice;
        
                delete cartItems[itemTag];
        
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                localStorage.setItem('totalCost', JSON.stringify(newItemTotal.toFixed(2)));
        
                updateCartNumbersAndCost();
                onLoadCartNumbers();
                displayCart();
                
            });
        });
        //console.log("Inner HTML : >>>>>", productContainer.innerHTML);
    }
}

document.getElementById('cart-btn').addEventListener('click', displayCart);
document.getElementById('cart-btn').addEventListener('click', displayCart);

const shopItemButtons = document.querySelectorAll(".shop-item-button");
shopItemButtons.forEach(button => {
button.addEventListener('click', displayCart);


function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    totalCost(); 
}
//console.log("total changed>>>>", quantityChanged);
});


function updateCartNumbersAndCost() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let cartNumbers = 0;
    let cartCost = 0;

    for (let item in cartItems) {
        cartNumbers += cartItems[item].inCart;
      cartCost += cartItems[item].price * cartItems[item].inCart;
    }

    localStorage.setItem('cartNumbers', cartNumbers);
    localStorage.setItem('totalCost', cartCost.toFixed(2));
    }


onLoadCartNumbers();
displayCart();



