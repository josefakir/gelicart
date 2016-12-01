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
		//console.log( index + ": " + $( this ));
		if($( this ).is( "img" )){
			if($(this).hasClass( "fadeIzquierda" )){
				$( this ).addClass('animated');
				$( this ).addClass('fadeInLeft');
			}else{
				$( this ).addClass('animated');
				var item = animaciones[Math.floor(Math.random()*animaciones.length)];
				$( this ).addClass(item);
				delay = 'delay'+cont;
				$( this ).addClass(delay);
				cont++;
			}
			
		}else if($( this ).is( "table" )){
			$( this ).addClass('animated');
			$( this ).addClass('fadeIn');
		}else if($( this ).is( ".m2conteo" )){
			$( this ).addClass('animated');
			$( this ).addClass('fadeInLeft');
			//console.log('conteo');
		}
		else{
			$( this ).addClass('animated');
			$( this ).addClass('fadeInLeft');
			
		}

		

		
	});
	$('#triggerinfo').click(function(e){
		e.preventDefault();
		window.open("info.html", "popupWindow", "width=500, height=321, scrollbars=no");
	});

	/* M2-S3 */
	$('#m2figura22').click(function(e){
		e.preventDefault();
		$('#overlay').html('<img class="m2figura22" src="img/paginas/2-3/Grafica1.gif">');
		$('#overlay').fadeIn('fast');
	});
	$('#m2figura23').click(function(e){
		e.preventDefault();
		$('#overlay').html('<img class="m2figura22" src="img/paginas/2-3/Grafica2.gif">');
		$('#overlay').fadeIn('fast');
	});
	$('#m2figura28').click(function(e){
		e.preventDefault();
		$('#overlay').html('<img class="m2figura28" src="img/paginas/2-9/Grafica1.png">');
		$('#overlay').fadeIn('fast');
	});
	$('#m2figura29').click(function(e){
		$('#m2figura29img').toggle();
	});
	$('#m2figura30').click(function(e){
		$('#m2figura30img').toggle();
	});
	$('#overlay').click(function(){
		$('#overlay').fadeOut('fast');
	})



});