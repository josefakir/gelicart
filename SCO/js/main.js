$(document).ready(function(){
	$('#triggermenu').click(function(e){
		e.preventDefault();
		$('#contmenulateral').toggle();
	});
	var hijos = $('#areadetrabajo').children();
	var cont = 1;
	animaciones = [
		'pulse',
		'rubberBand',
		'shake',
		'headShake',
		'tada',
		'wobble',
		'jello',
		'fadeIn',
		'fadeInDown',
		'fadeInDownBig',
		'fadeInLeft',
		'fadeInLeftBig',
		'fadeInRight',
		'fadeInRightBig',
		'fadeInUp',
		'fadeInUpBig',
		'flipInX',
		'flipInY',
		'lightSpeedIn',
		'rotateIn',
		'rotateInDownLeft',
		'rotateInDownRight',
		'rotateInUpLeft',
		'rotateInUpRight',
		'rollIn',
		'zoomIn',
		'zoomInDown',
		'zoomInLeft',
		'zoomInRight',
		'zoomInUp',
		'slideInDown',
		'slideInLeft',
		'slideInRight',
		'slideInUp'
	];
	hijos.each(function( index ) {
		console.log( index + ": " + $( this ));
		if($( this ).is( "img" )){
			$( this ).addClass('animated');
			var item = animaciones[Math.floor(Math.random()*animaciones.length)];
			$( this ).addClass(item);
			delay = 'delay'+cont;
			$( this ).addClass(delay);
			cont++;
		}else if($( this ).is( "table" )){
			$( this ).addClass('animated');
			$( this ).addClass('fadeIn');
			
		}else{
			$( this ).addClass('animated');
			$( this ).addClass('fadeInLeft');
			
		}

		

		
	});
	console.log(hijos);
	$('#triggerinfo').click(function(e){
		e.preventDefault();
		window.open("info.html", "popupWindow", "width=500, height=321, scrollbars=no");
	});
});