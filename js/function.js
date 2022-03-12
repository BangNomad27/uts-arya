// Cart & Modal:
let carts = document.querySelectorAll('.add-cart');

let product = [ // JSON
  {
    title: 'Jaket Merah',
    price: '5.000.000',
    inCart: 0
  }
];

// for(let i = 0; i < carts.length; i++) {
//  carts[i].addEventListener('click', () => {
//    cartNumbers();
//  });
// }

carts.forEach(cart => {
  cart.addEventListener('click', () => {
    // Swal.fire({
    //  icon: 'success',
    //  title: 'Add to Cart'
    // });

    cartNumbers();
  });
});

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  // console.log(productNumbers);
  // console.log(typeof productNumbers); // string

  productNumbers = parseInt(productNumbers);
  // console.log(typeof productNumbers); // number

  if(productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
  }
  else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }
}

onLoadCartNumbers();