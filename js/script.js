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


// Form:
const btnSubmit = document.querySelector('.btn-submit');

function formInput() {
	// Local Variabel:
	const produk = $('#produk').val();
	const amount = $('#amount').val();
	const sheet = $('#sheet').val();
	const size = $('#size').val();
	const paper = $('#paper').val();
	const comment = $('#comment').val();

	Swal.fire('Produk: '+ produk +'\nJumlah: '+ amount +'\nLembar: '+ sheet +'\nUkuran: '+ size +'\nKertas: '+ paper +'\nKeterangan: '+ comment);
}

btnSubmit.addEventListener('click', function() {
	btnSubmit.onclick = formInput();
}); // akan error jika diluar file: service.html (jangan khawatir)






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