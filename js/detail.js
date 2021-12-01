var product_slide = new Swiper(".small-pro-img-slides", {
	slidesPerView: 3,
	spaceBetween: 20,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
var same_type_slide = new Swiper(".same_type", {
	slidesPerView: 3,
	spaceBetween: 20,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
var qty = document.getElementById('qty');
const add_qty = () =>{
	qty.value++;
}
const minus_qty = () =>{
	qty.value>1?qty.value--: qty.value = 1;
}
const vote = (n) =>{
	const voted = (n) =>{
		document.getElementById("star-" + n).style.color = "#fda71c";
	}
	const unvoted = (n) =>{
		document.getElementById("star-" + n).style.color = "#000";
	}
	for (let i = 1; i <= n; i++){
		voted(i)
	};
	for( let i = n+1; i<=5; i++){
		unvoted(i);
	}
	//change the vote value (n) into DB
}