$( document ).ready(function() {
	
	$('#clearConnection').change(function () {
		$('.cbConnection input').removeAttr("checked");
		$('.cbConnection').removeClass("checked");
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('.cbConnection').change(function () {
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('#clearFrontFixing').change(function () {
		$('.cbFrontFixing input').removeAttr("checked");
		$('.cbFrontFixing').removeClass("checked");
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('.cbFrontFixing').change(function () {
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('#clearPerekluchateli').change(function () {
		$('.cbPerekluchateli input').removeAttr("checked");
		$('.cbPerekluchateli').removeClass("checked");
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('.cbPerekluchateli').change(function () {
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('#clearKonvekcia').change(function () {
		$('.cbKonvekcia input').removeAttr("checked");
		$('.cbKonvekcia').removeClass("checked");
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('.cbKonvekcia').change(function () {
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('#clearDesign').change(function () {
		$('.cbDesign input').removeAttr("checked");
		$('.cbDesign').removeClass("checked");
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('.cbDesign').change(function () {
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('#clearCooking').change(function () {
		$('.cbCooking input').removeAttr("checked");
		$('.cbCooking').removeClass("checked");
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('.cbCooking').change(function () {
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('#clearNoFrost').change(function () {
		$('.cbNoFrost input').removeAttr("checked");
		$('.cbNoFrost').removeClass("checked");
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('.cbNoFrost').change(function () {
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('#clearPower').change(function () {
		$('.cbPower input').removeAttr("checked");
		$('.cbPower').removeClass("checked");
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('.cbPower').change(function () {
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('#clearControl').change(function () {
		$('.cbcontrol input').removeAttr("checked");
		$('.cbcontrol').removeClass("checked");
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('.cbcontrol').change(function () {
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});


	$('#clearCleaning').change(function () {
		$('.cbcleaning input').removeAttr("checked");
		$('.cbcleaning').removeClass("checked");
		$('input[name="activetab"]').val('4');
		$('.k_form').submit();
		return false;
	});

	$('.cbcleaning').change(function () {
		$('input[name="activetab"]').val('4');
		$('.k_form').submit();
		return false;
	});


	$('#clearDetails').change(function () {
		$('.cbDetails input').removeAttr("checked");
		$('.cbDetails').removeClass("checked");
		$('input[name="activetab"]').val('5');
		$('.k_form').submit();
		return false;
	});

	$('.cbDetails').change(function () {
		$('input[name="activetab"]').val('5');
		$('.k_form').submit();
		return false;
	});


	$('#clearFeatures').change(function () {
		$('.cbFeatures input').removeAttr("checked");
		$('.cbFeatures').removeClass("checked");
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('.cbFeatures').change(function () {
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});


	$('#clearColor').change(function () {
		$('.cbColor input').removeAttr("checked");
		$('.cbColor').removeClass("checked");
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('.cbColor').change(function () {
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});


	$('#clearBrand').change(function () {
		$('.cbBrand input').removeAttr("checked");
		$('.cbBrand').removeClass("checked");
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('.cbBrand').change(function () {
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});


	$('#clearRazmer').change(function () {
		$('.cbRazmer input').removeAttr("checked");
		$('.cbRazmer').removeClass("checked");
		$('input[name="activetab"]').val('2');
		$('.k_form').submit();
		return false;
	});
	$('.cbRazmer').change(function () {
		$('input[name="activetab"]').val('2');
		$('.k_form').submit();
		return false;
	});

	$('#clearLength').change(function () {
		$('.cbLength input').removeAttr("checked");
		$('.cbLength').removeClass("checked");
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});
	$('.cbLength').change(function () {
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('#clearWidth').change(function () {
		$('.cbWidth input').removeAttr("checked");
		$('.cbWidth').removeClass("checked");
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});
	$('.cbWidth').change(function () {
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('#clearDepth').change(function () {
		$('.cbDepth input').removeAttr("checked");
		$('.cbDepth').removeClass("checked");
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});
	$('.cbDepth').change(function () {
		$('input[name="activetab"]').val($(this).data('at'));
		$('.k_form').submit();
		return false;
	});

	$('#clearSize').change(function () {
		$('.cbSize input').removeAttr("checked");
		$('.cbSize').removeClass("checked");
		$('input[name="activetab"]').val('2');
		$('.k_form').submit();
		return false;
	});
	$('.cbSize').change(function () {
		$('input[name="activetab"]').val('2');
		$('.k_form').submit();
		return false;
	});


	$('#clearMat').change(function () {
		$('.cbMat input').removeAttr("checked");
		$('.cbMat').removeClass("checked");
		$('input[name="activetab"]').val('3');
		$('.k_form').submit();
		return false;
	});

	$('.cbMat').change(function () {
		$('input[name="activetab"]').val('3');
		$('.k_form').submit();
		return false;
	});


	$('.ftinp0').change(function(){
			$('input[name="activetab"]').val('0');
		$('.k_form').submit();
		return false;
	});

	$('.ftinp5').change(function(){
			$('input[name="activetab"]').val('5');
		$('.k_form').submit();
		return false;
	});

	$('.ftinp6').change(function(){
			$('input[name="activetab"]').val('6');
		$('.k_form').submit();
		return false;
	});

	$('.ftinp7').change(function(){
			$('input[name="activetab"]').val('7');
		$('.k_form').submit();
		return false;
	});

	$('#clearGlubina').change(function () {
		$('.cbglubina input').removeAttr("checked");
		$('.cbglubina').removeClass("checked");
		$('input[name="activetab"]').val('7');
		$('.k_form').submit();
		return false;
	});

	$('.cbglubina').change(function () {
		$('input[name="activetab"]').val('7');
		$('.k_form').submit();
		return false;
	});

	$('#clearShirina').change(function () {
		$('.cbshirina input').removeAttr("checked");
		$('.cbshirina').removeClass("checked");
		$('input[name="activetab"]').val('6');
		$('.k_form').submit();
		return false;
	});

	$('.cbshirina').change(function () {
		$('input[name="activetab"]').val('6');
		$('.k_form').submit();
		return false;
	});

	$('#clearDlina').change(function () {
		$('.cbdlina input').removeAttr("checked");
		$('.cbdlina').removeClass("checked");
		$('input[name="activetab"]').val('5');
		$('.k_form').submit();
		return false;
	});

	$('.cbdlina').change(function () {
		$('input[name="activetab"]').val('5');
		$('.k_form').submit();
		return false;
	});

	$('#clearMaterials').change(function () {
		$('.cbmaterial input').removeAttr("checked");
		$('.cbmaterial').removeClass("checked");
		$('input[name="activetab"]').val('3');
		$('.k_form').submit();
		return false;
	});

	$('.cbmaterial').change(function () {
		$('input[name="activetab"]').val('3');
		$('.k_form').submit();
		return false;
	});

	$('#clearmshkaf').change(function () {
		$('.cbmshkaf input').removeAttr("checked");
		$('.cbmshkaf').removeClass("checked");
		$('input[name="activetab"]').val('1');
		$('.k_form').submit();
		return false;
	});

	$('.cbmshkaf').change(function () {
		$('input[name="activetab"]').val('1');
		$('.k_form').submit();
		return false;
	});

	$('#clearForma').change(function () {
		$('.cbforma input').removeAttr("checked");
		$('.cbforma').removeClass("checked");
		$('input[name="activetab"]').val('2');
		$('.k_form').submit();
		return false;
	});

	$('.cbforma').change(function () {
		$('input[name="activetab"]').val('2');
		$('.k_form').submit();
		return false;
	});

	$('#clearMontaj').change(function () {
		$('.cbmontaj input').removeAttr("checked");
		$('.cbmontaj').removeClass("checked");
		$('input[name="activetab"]').val('1');
		$('.k_form').submit();
		return false;
	});

	$('.cbmontaj').change(function () {
		$('input[name="activetab"]').val('1');
		$('.k_form').submit();
		return false;
	});

	$('#clearDovodchik').change(function () {
		$('.cbDovodchik input').removeAttr("checked");
		$('.cbDovodchik').removeClass("checked");
		$('input[name="activetab"]').val('13');
		$('.k_form').submit();
		return false;
	});

	$('.cbDovodchik').change(function () {
		$('input[name="activetab"]').val('13');
		$('.k_form').submit();
		return false;
	});

	$('#clearReshetki').change(function () {
		$('.cbReshetki input').removeAttr("checked");
		$('.cbReshetki').removeClass("checked");
		$('input[name="activetab"]').val('14');
		$('.k_form').submit();
		return false;
	});

	$('.cbReshetki').change(function () {
		$('input[name="activetab"]').val('14');
		$('.k_form').submit();
		return false;
	});

	$('#clearGazControl').change(function () {
		$('.cbGazControl input').removeAttr("checked");
		$('.cbGazControl').removeClass("checked");
		$('input[name="activetab"]').val('15');
		$('.k_form').submit();
		return false;
	});

	$('.cbGazControl').change(function () {
		$('input[name="activetab"]').val('15');
		$('.k_form').submit();
		return false;
	});

	$('#clearWOK').change(function () {
		$('.cbWOK input').removeAttr("checked");
		$('.cbWOK').removeClass("checked");
		$('input[name="activetab"]').val('16');
		$('.k_form').submit();
		return false;
	});

	$('.cbWOK').change(function () {
		$('input[name="activetab"]').val('16');
		$('.k_form').submit();
		return false;
	});

	$('#clearZonaRaschirenia').change(function () {
		$('.cbZonaRaschirenia input').removeAttr("checked");
		$('.cbZonaRaschirenia').removeClass("checked");
		$('input[name="activetab"]').val('17');
		$('.k_form').submit();
		return false;
	});

	$('.cbZonaRaschirenia').change(function () {
		$('input[name="activetab"]').val('17');
		$('.k_form').submit();
		return false;
	});

	$('#clearInverterHeatingTechnology').change(function () {
		$('.cbInverterHeatingTechnology input').removeAttr("checked");
		$('.cbInverterHeatingTechnology').removeClass("checked");
		$('input[name="activetab"]').val('20');
		$('.k_form').submit();
		return false;
	});

	$('.cbInverterHeatingTechnology').change(function () {
		$('input[name="activetab"]').val('20');
		$('.k_form').submit();
		return false;
	});

	$('#clearBooster').change(function () {
		$('.cbBooster input').removeAttr("checked");
		$('.cbBooster').removeClass("checked");
		$('input[name="activetab"]').val('18');
		$('.k_form').submit();
		return false;
	});

	$('.cbBooster').change(function () {
		$('input[name="activetab"]').val('18');
		$('.k_form').submit();
		return false;
	});

	$('#clearZonaObjedinenia').change(function () {
		$('.cbZonaObjedinenia input').removeAttr("checked");
		$('.cbZonaObjedinenia').removeClass("checked");
		$('input[name="activetab"]').val('19');
		$('.k_form').submit();
		return false;
	});

	$('.cbZonaObjedinenia').change(function () {
		$('input[name="activetab"]').val('19');
		$('.k_form').submit();
		return false;
	});

	$('#clearPowers').change(function () {
		$('.cbpower input').removeAttr("checked");
		$('.cbpower').removeClass("checked");
		$('input[name="activetab"]').val('2');
		$('.k_form').submit();
		return false;
	});

	$('.cbpower').change(function () {
		$('input[name="activetab"]').val('2');
		$('.k_form').submit();
		return false;
	});

	$('#clearBrands8').change(function () {
		$('.cbbrand8 input').removeAttr("checked");
		$('.cbbrand8').removeClass("checked");
		$('input[name="activetab"]').val('8');
		$('.k_form').submit();
		return false;
	});

	$('.cbbrand8').change(function () {
		$('input[name="activetab"]').val('8');
		$('.k_form').submit();
		return false;
	});

	$('#clearBrands3').change(function () {
		$('.cbbrand3 input').removeAttr("checked");
		$('.cbbrand3').removeClass("checked");
		$('input[name="activetab"]').val('3');
		$('.k_form').submit();
		return false;
	});

	$('.cbbrand3').change(function () {
		$('input[name="activetab"]').val('3');
		$('.k_form').submit();
		return false;
	});

	$('#clearBrands').change(function () {
		$('.cbbrand input').removeAttr("checked");
		$('.cbbrand').removeClass("checked");
		$('input[name="activetab"]').val('2');
		$('.k_form').submit();
		return false;
	});

	$('.cbbrand').change(function () {
		$('input[name="activetab"]').val('2');
		$('.k_form').submit();
		return false;
	});

	$('#clearColors4').change(function () {
		$('.cbcolor4 input').removeAttr("checked");
		$('.cbcolor4').removeClass("checked");
		$('input[name="activetab"]').val('4');
		$('.k_form').submit();
		return false;
	});

	$('.cbcolor4').change(function () {
		$('input[name="activetab"]').val('4');
		$('.k_form').submit();
		return false;
	});

	$('#clearColors').change(function () {
		$('.cbcolor input').removeAttr("checked");
		$('.cbcolor').removeClass("checked");
		$('input[name="activetab"]').val('1');
		$('.k_form').submit();
		return false;
	});

	$('.cbcolor').change(function () {
		$('input[name="activetab"]').val('1');
		$('.k_form').submit();
		return false;
	});

	$('.k_form_submit').click(function () {
		//alert($(this).val());
		$('.k_form').submit();
		return false;
	});

	$('.selsec1').change(function () {
		//alert($(this).val());
		location.href = $(this).val();
		return false;
	});

	$('.del-from-fav').click(function () {
		var productID;
		productID = $(this).data('product-id');
		//alert(productID);
		$.ajax({
					url: '/include/actions/ajax.php',
					data: {
							PRODUCT_ID: productID,
							ACTION: 'delfromfav',
					},
					dataType: 'json',
					method: 'POST'
			}).done(function( data ) {
				//$('[data-product-id='+id+']')
					//console.log( "done" );
					//modelSelector.html( data.RESULT_HTML );
			}).fail(function() {
					//console.log( "error" );
					//modelSelector.html( data.RESULT_HTML );
			}).always(function() {
				location.reload();
			});
			return false;
	});

	$('.add-to-fav').click(function () {
		var productID;
		productID = $(this).data('product-id');
		//alert(productID);
		$.ajax({
					url: '/include/actions/ajax.php',
					data: {
							PRODUCT_ID: productID,
							ACTION: 'addtofav',
					},
					dataType: 'json',
					method: 'POST'
			}).done(function( data ) {
				//$('[data-product-id='+id+']')
					//console.log( "done" );
					//modelSelector.html( data.RESULT_HTML );
			}).fail(function() {
					//console.log( "error" );
					//modelSelector.html( data.RESULT_HTML );
			}).always(function() {
				location.reload();
			});
			return false;
	});

	$('.del-from-compare').click(function () {
		var productID;
		productID = $(this).data('product-id');
		//alert(productID);
		$.ajax({
					url: '/include/actions/ajax.php',
					data: {
							PRODUCT_ID: productID,
							ACTION: 'delfromcompare',
					},
					dataType: 'json',
					method: 'POST'
			}).done(function( data ) {
			}).fail(function() {
			}).always(function() {
				location.reload();
			});
			return false;
	});

	$('.add-to-compare').click(function () {
		var productID;
		productID = $(this).data('product-id');
		//alert(productID);
		$.ajax({
					url: '/include/actions/ajax.php',
					data: {
							PRODUCT_ID: productID,
							ACTION: 'addtocompare',
					},
					dataType: 'json',
					method: 'POST'
			}).done(function( data ) {
			}).fail(function() {
			}).always(function() {
				location.reload();
			});
			return false;
	});

	$('.add-to-basket').click(function () {
		var productID;
		productID = $(this).data('product-id');
		//alert(productID);
		$.ajax({
					url: '/include/actions/ajax.php',
					data: {
							PRODUCT_ID: productID,
							ACTION: 'add',
					},
					dataType: 'json',
					method: 'POST'
			}).done(function( data ) {
				//$('[data-product-id='+id+']')
					//console.log( "done" );
					//modelSelector.html( data.RESULT_HTML );
			}).fail(function() {
					//console.log( "error" );
					//modelSelector.html( data.RESULT_HTML );
			}).always(function() {
				location.reload();
			});
			return false;
	});

	$('.del-from-basket-all').click(function () {
		//alert(productID);
		$.ajax({
					url: '/include/actions/ajax.php',
					data: {
							//PRODUCT_ID: productID,
							ACTION: 'del-all',
					},
					dataType: 'json',
					method: 'POST'
			}).done(function( data ) {
				//$('[data-product-id='+id+']')
					//console.log( "done" );
					//modelSelector.html( data.RESULT_HTML );
			}).fail(function() {
					//console.log( "error" );
					//modelSelector.html( data.RESULT_HTML );
			}).always(function() {
				location.reload();
			});
			return false;
	});

	$('.del-from-basket').click(function () {
		var productID;
		productID = $(this).data('product-id');
		//alert(productID);
		$.ajax({
					url: '/include/actions/ajax.php',
					data: {
							PRODUCT_ID: productID,
							ACTION: 'del',
					},
					dataType: 'json',
					method: 'POST'
			}).done(function( data ) {
				//$('[data-product-id='+id+']')
					//console.log( "done" );
					//modelSelector.html( data.RESULT_HTML );
			}).fail(function() {
					//console.log( "error" );
					//modelSelector.html( data.RESULT_HTML );
			}).always(function() {
				location.reload();
			});
			return false;
	});

	$('.update-basket').click(function () {
		var productARRAY = [];
		$(".product-count").each(function( index ) {
			productARRAY[index] = $(this).data('product-id')+'-'+$( this ).val();
		});
		console.log(productARRAY);
		$.ajax({
					url: '/include/actions/ajax.php',
					data: {
							ACTION: 'update',
							PRODUCT_ARR: productARRAY,
					},
					dataType: 'json',
					method: 'POST'
			}).done(function( data ) {
				//$('[data-product-id='+id+']')
					//console.log( "done" );
					//modelSelector.html( data.RESULT_HTML );
			}).fail(function() {
					//console.log( "error" );
					//modelSelector.html( data.RESULT_HTML );
			}).always(function() {
				location.reload();
			});
			return false;
	});

	//Функция перерисовки цен обновления количества товара
	function updatePrice() {

		//Обновление количества товара
		var productARRAY = [];
		$(".product-count").each(function( index ) {

			//Округляем количество, если не целое
			if (!Number.isInteger(Number($(this).val()))) {
				$(this).val(Math.ceil($(this).val()));
			}

			//Если пусто, то ставим 0
			if ($(this).val() == "") {
				$(this).val(0);
			}

			productARRAY[index] = $(this).data('product-id')+'-'+$( this ).val();
		});
		console.log(productARRAY);
		$.ajax({
			url: '/include/actions/ajax.php',
			data: {
				ACTION: 'update',
				PRODUCT_ARR: productARRAY,
			},
			dataType: 'json',
			method: 'POST'
		}).done(function( data ) {
			//console.log( "done" );
		}).fail(function() {
			//console.log( "error" );
		}).always(function() {

			//Перерасчёт и перерисовка цен
			var sum = 0;
			var sumOpt = 0;
			$(".product-count").each(function( index ) {
				$('#sum'+$(this).data('product-id')).text( new Intl.NumberFormat('ru-RU').format( $(this).data('price') * $(this).val() ) + " руб." );
				sum = sum + $(this).data('price') * $(this).val();
				if ($('#sumOpt').length) {
					sumOpt = sumOpt + $(this).data('price-opt') * $(this).val();
				}
			});
			$('#sum').text(new Intl.NumberFormat('ru-RU').format( sum ) + " руб." );
			if ($('#sumOpt').length) {
				$('#sumOpt').text(new Intl.NumberFormat('ru-RU').format( sumOpt ) + " руб." );
			}

		});
	};

	//События изменений количества товара
	$(document).on("click", ".jq-number__spin", updatePrice);
	$('.cust-item-range__input').change(updatePrice);

	//Функция для получения значения куки
	function get_cookie ( cookie_name ) {
		var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );

		if ( results )
			return ( unescape ( results[2] ) );
		else
			return null;
	}

	//Меню менеджера
	let managerBtn = document.querySelector('#manager-btn');
	let managerLogout = document.querySelector('#manager-logout');
	let managerMenu = document.querySelector('#manager-menu');
	let mainMenu = document.querySelector('#main-menu');
	let cookie = get_cookie ("manager");
	if (managerBtn != undefined && managerMenu != undefined) {
		if (cookie == "Y") {
			managerBtn.classList.add("hidden");
			mainMenu.classList.add("hidden");
			managerLogout.classList.remove("hidden");
			managerMenu.classList.remove("hidden");
			document.querySelector('.search_form').classList.add("hidden");
			document.querySelector('.hl_basket').classList.add("hidden");
		}

		managerBtn.addEventListener('click', (e) => {
			e.preventDefault();
			managerBtn.classList.add("hidden");
			mainMenu.classList.add("hidden");
			managerLogout.classList.remove("hidden");
			managerMenu.classList.remove("hidden");
			document.querySelector('.search_form').classList.add("hidden");
			document.querySelector('.hl_basket').classList.add("hidden");
			document.cookie = "manager=Y"
		});
		managerLogout.addEventListener('click', (e) => {
			e.preventDefault();
			managerBtn.classList.remove("hidden");
			mainMenu.classList.remove("hidden");
			managerLogout.classList.add("hidden");
			managerMenu.classList.add("hidden");
			document.querySelector('.search_form').classList.remove("hidden");
			document.querySelector('.hl_basket').classList.remove("hidden");
			document.cookie = "manager=N"
		});
	}
});

// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
	// Находим все элементы с классом .favorite-folders-list__button
	const favoriteButtons = document.querySelectorAll('.favorite-folders-list__button');

	// Перебираем найденные элементы и добавляем к каждому обработчик события клика
	favoriteButtons.forEach(button => {
		button.addEventListener('click', () => {
			// Переключаем класс активности при клике
			button.classList.toggle('active');
		});
	});

	// Новые диалоговые окна
	// Функция для показа модального окна
	function showModal(data) {
		const modal = document.getElementById(data.target);
		if (modal) {
			modal.classList.add('active');
			document.body.classList.add('modal-open');

			//Добавляем в форму необходимые данные
			let inputHidden = modal.querySelector('form .js-input-hidden');
			if (inputHidden && data) {
				inputHidden.innerHTML = "";
				for (let keyData in data) {
					let input = document.createElement('input');
					input.type = "hidden";
					input.name = keyData;
					input.value = data[keyData];
					inputHidden.prepend(input);
				}

				if (data.target == "modal-favorites-folder") {
					let inputFolderName = modal.querySelector('input[name="folderName"]');
					if (inputFolderName && data.name) {
						inputFolderName.value = data.name;
					}
					let inputFolderDescription = modal.querySelector('textarea[name="folderDescription"]');
					if (inputFolderDescription && data.description) {
						inputFolderDescription.innerHTML = data.description;
					}
				}
			}
		}
	}

	// Функция для скрытия модального окна
	function hideModal(modal) {
		modal.classList.remove('active');
		document.body.classList.remove('modal-open');
	}

	// Обработчик кликов по ссылкам для открытия модальных окон
	document.querySelectorAll('[data-target]').forEach(link => {
		link.addEventListener('click', function (event) {
			event.preventDefault(); // Отменяем стандартное действие
			showModal(link.dataset);
		});
	});

	// Обработчик кликов для закрытия модальных окон
	document.querySelectorAll('.modal').forEach(modal => {
		modal.addEventListener('click', function (event) {
			// Проверяем, кликнули ли вне области .modal__body
			if (!modal.querySelector('.modal__body').contains(event.target)) {
				hideModal(modal);
			}
		});

		// Обработчик кликов по кнопке закрытия
		modal.querySelectorAll('.js-close-modal').forEach(button => {
			button.addEventListener('click', function () {
				hideModal(modal);
			});
		});

	});
	// КОНЕЦ Новые диалоговые окна


	// кастомный селект
	var customSelects = document.querySelectorAll(".custom-select");

	customSelects.forEach(function (select) {
		var selected = select.querySelector(".custom-select__selected");
		var options = select.querySelector(".custom-select__options");

		selected.addEventListener("click", function () {
			select.classList.toggle("open");
		});

		var selectOptions = options.querySelectorAll(".custom-select__option");
		selectOptions.forEach(function (option) {
			option.addEventListener("click", function () {
				var value = this.getAttribute("data-value");
				selected.textContent = this.textContent;
				select.classList.remove("open");
				var input = select.querySelector("input[type=hidden]");
				input.value = value;
			});
		});

		var defaultValue = select.getAttribute("data-default");
		if (defaultValue) {
			selected.textContent = defaultValue;
			var defaultOption = options.querySelector('.custom-select__option[data-value="' + defaultValue + '"]');
			if (defaultOption) {
				var defaultOptionValue = defaultOption.getAttribute("data-value");
				var input = select.querySelector("input[type=hidden]");
				input.value = defaultOptionValue;
			}
		}

		document.addEventListener("click", function (event) {
			if (!select.contains(event.target)) {
				select.classList.remove("open");
			}
		});
	});
	// КОНЕЦ кастомный селект

	//Функция закрытия всех диалоговых окон
	function fModalsClose() {
		let modals = document.querySelectorAll('.modal');
		modals.forEach(modal => {
			modal.classList.remove('active');
		});
		document.body.classList.remove('modal-open');
	}

	//Функция уведомления
	function fNotification(title = "", text = "") {
		let dialog = document.getElementById('modal-notification');
		let modals = document.querySelectorAll('.modal');
		modals.forEach(modal => {
			modal.classList.remove('active');
		});
		dialog.classList.add('active');
		document.body.classList.add('modal-open');

		dialog.querySelector('.page-title').innerHTML = title;
		dialog.querySelector('.page-text').innerHTML = text;
	}

	//Обработка форм избранного
	const forms = document.querySelectorAll('form.js-form-favorites');
	forms.forEach(form => {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			let formData = new FormData(form);
			BX.ajax({
				url: '/include/actions/favorites.php',
				data: formData,
				method: 'POST',
				dataType: 'json',
				processData: false,
				preparePost: false,
				onsuccess: function (result) {
					// console.log(result);
					if (result) {
						result = JSON.parse(result);
						console.log(result);
						if (result.status) {
							if (result.reload) {
								location.reload();
							} else if (result.title || result.text) {
								fNotification(result.title, result.text);
							} else {
								fModalsClose();
							}

							if (result.open) {
								window.open(result.open);
							}
						} else if (result.title || result.text) {
							fNotification(result.title, result.text);
						} else {
							fNotification("Ошибка");
						}
					} else {
						fNotification("Ошибка");
					}
				},
				onfailure: function (result) {
					console.log(result);
					fNotification("Ошибка");
				}
			});
		});
	});

	if (document.querySelector('.custom-slider-promo .mySwiper')) {
		var swiper = new Swiper(".custom-slider-promo .mySwiper", {
			navigation: {
				nextEl: ".custom-slider-promo .swiper-button-next",
				prevEl: ".custom-slider-promo .swiper-button-prev",
			},
			pagination: {
				el: ".custom-slider-promo .swiper-pagination",
			},
			spaceBetween: 24,

			// breakpoints: {
			//   // when window width is <= 767px
			//   767: {
			//     spaceBetween: 0
			//   }
			// }

			autoplay: {
				delay: 5000, // Задержка в мс между автоматической сменой слайдов
				disableOnInteraction: false, // Не отключать автопрокрутку при взаимодействии с слайдером
			},
		});
	}
});
