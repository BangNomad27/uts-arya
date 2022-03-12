// Image Slider:
function imageSlider() {
	let counter = 1;
	setInterval(function() {
		document.getElementById('radio'+ counter).checked = true;
		counter++;

		if(counter > 3) {
			counter = 1;
		}
	}, 4000);

	return counter;
}
imageSlider();

// Filter -> Menggunakan JQuery:
function filter() {
	$(document).ready(function() {
		$('.list-filter').click(function() {
			const value = $(this).attr('data-filter');
			if(value == 'all') {
				$('.item-box').show('1000');
			}
			else {
				$('.item-box').not('.'+ value).hide('1000');
				$('.item-box').filter('.'+ value).show('1000');
			}
		});
	});
}
filter();

// Service:
// Global Variabel:
const titleService = document.querySelector('.title-service');
const textService = document.querySelector('.main-content .text-service');
const btnService = document.querySelectorAll('.list-service');

function btnMoreService() {
	btnService.forEach(item => {
		item.addEventListener('click', function() {
			for(let i = 0; i < btnService.length; i++) {
				btnService[i].classList.remove('btn-active');
			}
			item.classList.add('btn-active');
		});
	});

	for(let i = 0; i < btnService.length; i++) {
		btnService[i].addEventListener('click', function() {
			if(btnService[i] == btnService[0]) {
				bookCoverDesign();
			}
			else if(btnService[i] == btnService[1]) {
				patternDesign();
			}
			else if(btnService[i] == btnService[2]) {
				packageDesign();
			}
			else if(btnService[i] == btnService[3]) {
				brandIdenty();
			}
			else if(btnService[i] == btnService[4]) {
				tshirtDesign();
			}
			else if(btnService[i] == btnService[5]) {
				coverVanDesign();
			}
			else {
				console.log('Not Ok!');
			}
		});
	}
}
btnMoreService();


// Form Request:
const btnSubmit = document.querySelector('.btn-submit');

function formInput() {
	// Local Variabel:
	const produk = $('#produk').val();
	const noneProduk = $('#none-produk').val();
	const amount = $('#amount').val();
	const sheet = $('#sheet').val();
	const size = $('#size').val();
	const paper = $('#paper').val();
	const comment = $('#comment').val();

	if(produk == noneProduk) {
		Swal.fire({
			icon: 'error',
			title: 'Harap pilih produknya'
		});
	}
	else if(amount == '') {
		Swal.fire({
			icon: 'error',
			title: 'Harap masukkan jumlahnya'
		});
	}
	else if(sheet == '') {
		Swal.fire({
			icon: 'error',
			title: 'Harap pilih lembarnya'
		});
	}
	else if(size == '') {
		Swal.fire({
			icon: 'error',
			title: 'Harap pilih ukurannya'
		});
	}
	else if(paper == '') {
		Swal.fire({
			icon: 'error',
			title: 'Harap pilih kertasnya'
		});
	}
	else if(comment == '') {
		Swal.fire({
			icon: 'error',
			title: 'Masukkan keterengan tambahan'
		});
	}
	else {
		Swal.fire('Produk: '+ produk +'\nJumlah: '+ amount +'\nLembar: '+ sheet +'\nUkuran: '+ size +'\nKertas: '+ paper +'\nKeterangan: '+ comment);
	}
}

// onclick-nya ada di button: request.html


// Cart & Modal:
let carts = document.querySelectorAll('.add-cart');

let products = [ // JSON
	{
		title: 'Jaket Switer',
		tag: 'jacket1',
		price: 55,
		inCart: 0
	},
	{
		title: 'Baju ALE Hitam',
		tag: 'tshirt1',
		price: 15,
		inCart: 0
	},
	{
		title: 'Sepatu Adados',
		tag: 'sepatu1',
		price: 25,
		inCart: 0
	},
	{
		title: 'Jam Tangan Gene',
		tag: 'jam1',
		price: 20,
		inCart: 0
	},
	{
		title: 'Sepatu Naik-in',
		tag: 'sepatu2',
		price: 30,
		inCart: 0
	},
	{
		title: 'Jam Tangan Ribet',
		tag: 'jam2',
		price: 75,
		inCart: 0
	},
	{
		title: 'Jaket Hacker',
		tag: 'jacket2',
		price: 50,
		inCart: 0
	},
	{
		title: 'Baju Chrome Hitam',
		tag: 'tshirt4',
		price: 17,
		inCart: 0
	},
	{
		title: 'Baju Aleyenjer',
		tag: 'tshirt3',
		price: 27,
		inCart: 0
	},
	{
		title: 'Sepatu Putih',
		tag: 'sepatu3',
		price: 45,
		inCart: 0
	},
	{
		title: 'Jam Tangan Alex',
		tag: 'jam3',
		price: 60,
		inCart: 0
	},
	{
		title: 'Jaket Maling',
		tag: 'jacket3',
		price: 85,
		inCart: 0
	}
];

// for(let i = 0; i < carts.length; i++) {
// 	carts[i].addEventListener('click', () => {
// 		cartNumbers(products[i]);
// 	});
// }

carts.forEach((cart, i) => {
	cart.addEventListener('click', () => {
		// Swal.fire({
		// 	icon: 'success',
		// 	title: 'Add to Cart'
		// });

		cartNumbers(products[i]);
		totalCart(products[i]);
	});
});

function onLoadCartNumbers() {
	// let productNumbers = localStorage.getItem('cartNumbers');

	// if(productNumbers) {
	// 	// document.querySelector('.cart').textContent = productNumbers;
	// 	displayCart();
	// }
	const btnCart = document.querySelector('.cart');

	btnCart.addEventListener('click', () => {
		displayCart();
	});
}

function cartNumbers(product) {
	let productNumbers = localStorage.getItem('cartNumbers');

	// console.log(productNumbers);
	// console.log(typeof productNumbers); // string

	productNumbers = parseInt(productNumbers);
	// console.log(typeof productNumbers); // number

	if(productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers + 1);
		// document.querySelector('.cart').textContent = productNumbers + 1;
	}
	else {
		localStorage.setItem('cartNumbers', 1);
		// document.querySelector('.cart').textContent = 1;
	}
	setItems(product);
}

function setItems(product) {
	let cartItems = localStorage.getItem('productsIntCart');
	cartItems = JSON.parse(cartItems);

	if(cartItems != null) {
		if(cartItems[product.tag] == undefined) {
			cartItems = {
				...cartItems,
				[product.tag]: product
			}
		}
		cartItems[product.tag].inCart += 1;
	}
	else {
		product.inCart = 1;
		cartItems = {
			[product.tag]: product
		}
	}
	// console.log('My cartItems are ', cartItems);
	// console.log('Produk sudah masuk', product); // cek JSON (database)

	localStorage.setItem('productsIntCart', JSON.stringify(cartItems)); // masukkan data ke localStortage
}

function totalCart(product) {
	// console.log('ini total bayar', product.price); // cek function
	let totalCost = localStorage.getItem('totalCart');
	
	// console.log('Total bayar: ', totalCost);
	// console.log(typeof totalCost);

	if(totalCost != null) {
		totalCost = parseInt(totalCost);
		localStorage.setItem('totalCart', totalCost + product.price);
	}
	else {
		localStorage.setItem('totalCart', product.price);
	}
}

function displayCart() {
	let cartItems = localStorage.getItem('productsIntCart');
	cartItems = JSON.parse(cartItems);
	let productBody = document.querySelector('.produk-main');
	let totalCost = localStorage.getItem('totalCart');

	// console.log(cartItems); // cek object
	if(cartItems && productBody) {
		Object.values(cartItems).map(item => {
			productBody.innerHTML += `
				<div class="produk-box">
					<div class="box1">
						<i class='close bx bxs-trash-alt'></i>
						<img src="../img/${item.tag}.jpg" alt="Image">
						<div class="produk-text">
							<h5 class="title">${item.title}</h5>
							<h5 class="price">$${item.inCart * item.price},00-</h5>
						</div>
					</div>
					<div class="box2">
						<i class='bx bx-minus-circle'></i>
						<span>${item.inCart}</span>
						<i class='bx bx-plus-circle'></i>
					</div>
				</div>
			`;
		});

		productBody.innerHTML += `
			<div class="produk-total">
				<h5 class="total-title">Total =</h5>
				<h5 class="total-price">$${totalCost},00</h5>
			</div>
		`;
	}
}

onLoadCartNumbers();
// displayCart();


// Area Function Service:
function bookCoverDesign() {
	titleService.innerHTML = 'Book Cover Design';
	textService.innerHTML = `
				<p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, expedita, placeat? Vel, aspernatur. Excepturi fugiat cumque ullam perferendis maiores, maxime debitis dolorem quo beatae laboriosam architecto at velit expedita ut veritatis dolores labore suscipit. Dolorem cupiditate eaque officiis sint voluptas debitis dolore, laborum eius totam omnis maxime odio distinctio voluptatibus?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Omnis, fugiat laudantium fuga veritatis nam asperiores quod nobis minus quae quis sit aliquid alias deserunt molestiae optio ex iure itaque velit similique consequatur cumque. Repellendus unde non similique sunt sed repellat libero enim, voluptas magnam molestiae, cum repudiandae veniam nihil voluptatem alias laudantium ut incidunt autem tempore qui nemo sapiente quidem? Architecto vero ducimus tempore, quo sit vitae corporis esse rerum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, expedita, placeat? Vel, aspernatur. Excepturi fugiat cumque ullam perferendis maiores, maxime debitis dolorem quo beatae laboriosam architecto at velit expedita ut veritatis dolores labore suscipit. Dolorem cupiditate eaque officiis sint voluptas debitis dolore, laborum eius totam omnis maxime odio distinctio voluptatibus?
        </p>
			`;
}

function patternDesign() {
	titleService.innerHTML = 'Pattern Design';
	textService.innerHTML = `
				<p>
          Lorem ipsum dolor sit amet. Excepturi fugiat cumque ullam perferendis maiores, maxime debitis dolorem quo beatae laboriosam architecto at velit expedita ut veritatis dolores labore suscipit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, expedita, placeat? Vel, aspernatur. Excepturi fugiat cumque ullam perferendis maiores, maxime debitis dolorem quo beatae laboriosam architecto at velit expedita ut veritatis dolores labore suscipit. Dolorem cupiditate eaque officiis sint voluptas debitis dolore, laborum eius totam omnis maxime odio distinctio voluptatibus?
        </p>
			`;
}

function packageDesign() {
	titleService.innerHTML = 'Package Design';
	textService.innerHTML = `
				<p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, expedita, placeat? Vel, aspernatur. Excepturi fugiat cumque ullam perferendis maiores, maxime debitis dolorem quo beatae laboriosam architecto at velit expedita ut veritatis dolores labore suscipit. Dolorem cupiditate eaque officiis sint voluptas debitis dolore, laborum eius totam omnis maxime odio distinctio voluptatibus?
        </p>
        <p>
        	Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus accusamus magnam? Sequi eveniet veritatis hic a officiis delectus ut nostrum earum enim, quo debitis soluta assumenda sapiente velit, aliquam mollitia. Nobis rem et architecto beatae necessitatibus modi rerum atque sapiente, dignissimos, veniam quod sequi molestiae delectus recusandae tenetur itaque numquam. Blanditiis nostrum officiis consequatur. Dolor est impedit odio, quos amet, quaerat temporibus inventore eum earum voluptatum eligendi nam pariatur maxime id fugiat possimus quis consequuntur in iure odit voluptatem sint aspernatur esse consequatur. Repellat consectetur necessitatibus dignissimos eaque enim minus, quisquam officia asperiores labore aliquam a quia quasi alias et porro amet. Debitis laboriosam possimus quibusdam porro id eaque ducimus, optio excepturi repellat veniam ipsa, beatae dignissimos qui deserunt sunt dolore eligendi quas quos aliquam molestiae? Velit rerum magnam culpa ipsum quis dolor totam, eaque illum voluptates consequatur cupiditate autem nesciunt quod quisquam praesentium iusto reprehenderit expedita et voluptatem placeat, neque vero cumque, minima. Nisi ullam suscipit, autem earum, at sequi dolorum iste est non ipsam laborum nobis praesentium debitis accusantium a ducimus voluptate, animi minus corporis! Adipisci rem vel officiis repellat illo, fugit, delectus vero ipsa itaque ex. Fuga quod impedit error blanditiis explicabo, reiciendis, cumque provident nam.
        </p>
			`;
}

function brandIdenty() {
	titleService.innerHTML = 'Brand Identy';
	textService.innerHTML = `
				<p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, expedita, placeat? Vel, aspernatur. Excepturi fugiat cumque ullam perferendis maiores, maxime debitis dolorem quo beatae laboriosam architecto at velit expedita ut veritatis dolores labore suscipit. Dolorem cupiditate eaque officiis sint voluptas debitis dolore, laborum eius totam omnis maxime odio distinctio voluptatibus?
        </p>
			`;
}

function tshirtDesign() {
	titleService.innerHTML = 'T-Shirt Design';
	textService.innerHTML = `
				<p>
        	Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus accusamus magnam? Sequi eveniet veritatis hic a officiis delectus ut nostrum earum enim, quo debitis soluta assumenda sapiente velit, aliquam mollitia. Nobis rem et architecto beatae necessitatibus modi rerum atque sapiente, dignissimos, veniam quod sequi molestiae delectus recusandae tenetur itaque numquam. Blanditiis nostrum officiis consequatur. Dolor est impedit odio, quos amet, quaerat temporibus inventore eum earum voluptatum eligendi nam pariatur maxime id fugiat possimus quis consequuntur in iure odit voluptatem sint aspernatur esse consequatur. Repellat consectetur necessitatibus dignissimos eaque enim minus, quisquam officia asperiores labore aliquam a quia quasi alias et porro amet. Debitis laboriosam possimus quibusdam porro id eaque ducimus, optio excepturi repellat veniam ipsa, beatae dignissimos qui deserunt sunt dolore eligendi quas quos aliquam molestiae? Velit rerum magnam culpa ipsum quis dolor totam, eaque illum voluptates consequatur cupiditate autem nesciunt quod quisquam praesentium iusto reprehenderit expedita et voluptatem placeat, neque vero cumque, minima. Nisi ullam suscipit, autem earum, at sequi dolorum iste est non ipsam laborum nobis praesentium debitis accusantium a ducimus voluptate, animi minus corporis! Adipisci rem vel officiis repellat illo, fugit, delectus vero ipsa itaque ex. Fuga quod impedit error blanditiis explicabo, reiciendis, cumque provident nam.
        </p>
			`;
}

function coverVanDesign() {
	titleService.innerHTML = 'Cover Van Design';
	textService.innerHTML = `
				<p>
          Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Omnis, fugiat laudantium fuga veritatis nam asperiores quod nobis minus quae quis sit aliquid alias deserunt molestiae optio ex iure itaque velit similique consequatur cumque. Repellendus unde non similique sunt sed repellat libero enim, voluptas magnam molestiae, cum repudiandae veniam nihil voluptatem alias laudantium ut incidunt autem tempore qui nemo sapiente quidem? Architecto vero ducimus tempore, quo sit vitae corporis esse rerum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Omnis, fugiat laudantium fuga veritatis nam asperiores quod nobis minus quae quis sit aliquid alias deserunt molestiae optio ex iure itaque velit similique consequatur cumque. Repellendus unde non similique sunt sed repellat libero enim, voluptas magnam molestiae, cum repudiandae veniam nihil voluptatem alias laudantium ut incidunt autem tempore qui nemo sapiente quidem? Architecto vero ducimus tempore, quo sit vitae corporis esse rerum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Omnis, fugiat laudantium fuga veritatis nam asperiores quod nobis minus quae quis sit aliquid alias deserunt molestiae optio ex iure itaque velit similique consequatur cumque. Repellendus unde non similique sunt sed repellat libero enim, voluptas magnam molestiae, cum repudiandae veniam nihil voluptatem alias laudantium ut incidunt autem tempore qui nemo sapiente quidem? Architecto vero ducimus tempore, quo sit vitae corporis esse rerum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Omnis, fugiat laudantium fuga veritatis nam asperiores quod nobis minus quae quis sit aliquid alias deserunt molestiae optio ex iure itaque velit similique consequatur cumque. Repellendus unde non similique sunt sed repellat libero enim, voluptas magnam molestiae, cum repudiandae veniam nihil voluptatem alias laudantium ut incidunt autem tempore qui nemo sapiente quidem? Architecto vero ducimus tempore, quo sit vitae corporis esse rerum.
        </p>
			`;
}