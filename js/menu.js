var	btnMenu = document.getElementById('menu')
var nav = document.getElementById('nav')
var menu = document.getElementById('head')
var altura = menu.offsetTop;

	//Menu Oculto modo responsive------------------------------------------
btnMenu.addEventListener('click', function(){
	nav.classList.toggle('mostrar');
})
	//Sticky menu----------------------------------------------------------
window.addEventListener('scroll', function(){
	if (window.pageYOffset > altura){
		menu.classList.add('fixed');
	} else {
		menu.classList.remove('fixed');
	}
})
//---------------------------------Productos-------------------------------------------
$(document).ready(function(){

	$('.category_list .filtrop[category="all"]').addClass('ct_item-active');

	//filtro----------------------------------------------------------------
	$('.filtrop').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

	//activo----------------------------------------------------------------
		$('.filtrop').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

	//Ocultar----------------------------------------------------------------
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	//Mostrar Todo-----------------------------------------------------------
	$('.filtrop[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});

});