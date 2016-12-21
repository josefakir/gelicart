$(document).ready(function(){
	$('#triggermenu').click(function(e){
		e.preventDefault();
		$('#contmenulateral').toggle();
	});
	var hijos = $('#areadetrabajo').children();
	var cont = 1;
	animaciones = [
		//'pulse',
		//'rubberBand',
		//'tada',
		//'jello',
		'fadeIn',
		'fadeInDown',
		'fadeInDownBig',
		'fadeInLeft',
		'fadeInLeftBig',
		'fadeInRight',
		'fadeInRightBig',
		'fadeInUp',
		'fadeInUpBig',
		//'flipInX',
		//'flipInY',
		//'lightSpeedIn',
		//'rotateIn',
		//'rotateInDownLeft',
		//'rotateInDownRight',
		//'rotateInUpLeft',
		//'rotateInUpRight',
		//'rollIn',
		//'zoomIn',
		//'zoomInDown',
		//'zoomInLeft',
		//'zoomInRight',
		//'zoomInUp',
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
		}else if($(this).hasClass( "botonanimado" )){
				$( this ).addClass('animated');
			$( this ).addClass('pulse');
			console.log('boton')
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
		e.preventDefault();
		$('#m2figura29img').toggle();
	});
	$('#m2figura30').click(function(e){
		e.preventDefault();
		$('#m2figura30img').toggle();
	});
	$('#m2figura31').click(function(e){
		e.preventDefault();
		$('#m2figura32img').hide();
		$('#m2figura31img').toggle();
	});
	$('#m2figura32').click(function(e){
		e.preventDefault();
		$('#m2figura31img').hide();
		$('#m2figura32img').toggle();
	});
	$('#m2figura34').click(function(e){
		e.preventDefault();
		$('#overlay').html('<img class="m2figura34" src="img/paginas/2-19/3.png">');
		$('#overlay').fadeIn('fast');
	});
	$('#m2figuraslide24').click(function(e){
		e.preventDefault();
		$('#m2figuraslide24img').toggle();
	});

	$('#overlay').click(function(){
		$('#overlay').fadeOut('fast');
	})
	$('#revelargelicart').click(function(e){
		e.preventDefault();
		$('#gelicartaction').toggle();
	})
	$('#m3figura37').click(function(e){
		e.preventDefault();
		$('#overlay').html('<img class="m3figura37" src="img/paginas/m3/s4_4.png">');
		$('#overlay').fadeIn('fast');
	});
	$('#colagenotipo1').click(function(e){
		e.preventDefault();
		$('#mostrarcolagenotipo1').toggle();
	})
	$('#m3figura38').click(function(e){
		e.preventDefault();
		$('#overlay').html('<img class="m3figura38" src="img/paginas/m3/s5_5.png">');
		$('#overlay').fadeIn('fast');
	});
	$('#m3figura39').click(function(e){
		e.preventDefault();
		$('#overlay').html('<img class="m3figura39" src="img/paginas/m3/s8_4.png">');
		$('#overlay').fadeIn('fast');
	});
	$('#revelam3s93').click(function(e){
		e.preventDefault();
		$('#m3s93').toggle();
	});
	$('#revelam3s105').click(function(e){
		e.preventDefault();
		$('#m3s105').hide();
		$('#m3s106').hide();
		$('#m3s107').hide();
		$('#m3s105').toggle();
	});
	$('#revelam3s106').click(function(e){
		e.preventDefault();
		$('#m3s105').hide();
		$('#m3s106').hide();
		$('#m3s107').hide();
		$('#m3s106').toggle();
	});
	$('#revelam3s107').click(function(e){
		e.preventDefault();
		$('#m3s105').hide();
		$('#m3s106').hide();
		$('#m3s107').hide();
		$('#m3s107').toggle();
	});
	$('#m3figura40').click(function(e){
		e.preventDefault();
		$('#overlay').html('<img class="m3figura40" src="img/paginas/m3/s11_2.png">');
		$('#overlay').fadeIn('fast');
	});
	$('#m3figura41').click(function(e){
		e.preventDefault();
		$('#overlay').html('<img class="m3figura41" src="img/paginas/m3/s12_3.png">');
		$('#overlay').fadeIn('fast');
	});
	$('#m3figura42').click(function(e){
		e.preventDefault();
		$('#overlay').html('<img class="m3figura42" src="img/paginas/m3/s12_4.png">');
		$('#overlay').fadeIn('fast');
	});
	$('#m3figura43').click(function(e){
		e.preventDefault();
		$('#overlay').html('<img class="m3figura43" src="img/paginas/m3/s13_4.png">');
		$('#overlay').fadeIn('fast');
	});
	$('#m3figura44').click(function(e){
		e.preventDefault();
		$('#overlay').html('<img class="m3figura44" src="img/paginas/m3/s13_5.png">');
		$('#overlay').fadeIn('fast');
	});

	$('#m3figura45').click(function(e){
		e.preventDefault();
		$('#overlay').html('<img class="m3figura45" src="img/paginas/m3/s14_5.png">');
		$('#overlay').fadeIn('fast');
	});
	$('#m3figura46').click(function(e){
		e.preventDefault();
		$('#overlay').html('<img class="m3figura46" src="img/paginas/m3/s14_6.png">');
		$('#overlay').fadeIn('fast');
	});
	$('#m3figura47').click(function(e){
		e.preventDefault();
		$('#overlay').html('<img class="m3figura47" src="img/paginas/m3/s15_2.png">');
		$('#overlay').fadeIn('fast');
	});

	$('#m3figura50').click(function(e){
		e.preventDefault();
		$('#overlay').html('<img class="m3figura50" src="img/paginas/m3/s21_4.png">');
		$('#overlay').fadeIn('fast');
	});
	$('#m3figura51').click(function(e){
		e.preventDefault();
		$('#overlay').html('<img class="m3figura51" src="img/paginas/m3/s21_5.png">');
		$('#overlay').fadeIn('fast');
	});

	$('#m3figura52').click(function(e){
		e.preventDefault();
		$('#overlay').html('<img class="m3figura52" src="img/paginas/m3/s22_3.png">');
		$('#overlay').fadeIn('fast');
	});
	$('#m3figura53').click(function(e){
		e.preventDefault();
		$('#overlay').html('<img class="m3figura53" src="img/paginas/m3/s22_4.png">');
		$('#overlay').fadeIn('fast');
	});
	$('.sprite').sprite({fps: 10, no_of_frames: 10,start_at_frame: 1});
});