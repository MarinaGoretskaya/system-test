$(document).ready(function () {
	let body = $(document);

	let countCow;
	let countMilk;
	let position;
	let contact;
	let contactValue;

	let resultData;

	let section1 = body.find('#section-rect-1');
	let section2 = body.find('#section-rect-2');
	let section3 = body.find('#section-rect-3');
	let section4 = body.find('#section-rect-4');

	$('#section-rect-1').find('button').click(displaySection1);
	$('#section-rect-2').find('button').click(displaySection2);
	$('#section-rect-3').find('button').click(displaySection3);
	$('#section-rect-4').find('input[type="radio"]').click(displayInput);
	$('#section-rect-4').find('#sendData').click(submitData);


	let allInp = section4.find('.input-txt__wrapper');
	let inpTel = section4.find('#input-tel');
	let inpEmail = body.find('#input-email');
	let inpViber = body.find('#input-viber');
	let inpTelegram = body.find('#input-telegram');
	let inpWhatsapp = body.find('#input-whatsapp');

	// let ajaxForm = body.find('#ajax_form');

	body.find('#inp-phone, #inp-viber, #inp-telegram, #inp-whatsapp').mask("+375 (99) 999-99-99");
	body.find('#inp-email').inputmask("email");

	function displaySection1() {
		countCow = section1.find('input').val();
		if (!countCow) {
			alert ('Введите данные в поле');
			return;
		}
		section1.addClass('display-none');
		section2.removeClass('display-none');
	}

	function displaySection2() {
		countMilk = section2.find('input').val();
		if (!countMilk) {
			alert ('Введите данные в поле');
			return;
		}
		section2.addClass('display-none');
		section3.removeClass('display-none');
	}

	function displaySection3() {
		position = section3.find('input:checked').val();

		if (!position) {
			alert ('Выберите значение, пожалуйста');
			return;
		}

		section3.addClass('display-none');
		section4.removeClass('display-none');
	}

	function displayInput() {
		contact = section4.find('input:checked').val();
		//
		// if (!contact) {
		// 	alert ('Выберите значение пожалуйста');
		// 	return;
		// }

		switch (contact) {
			case 'Телефон':
				allInp.addClass('display-none');
				inpTel.removeClass('display-none');
				break;
			case 'e-mail':
				allInp.addClass('display-none');
				inpEmail.removeClass('display-none');
				break;
			case 'viber':
				allInp.addClass('display-none');
				inpViber.removeClass('display-none');
				break;
			case 'telegram':
				allInp.addClass('display-none');
				inpTelegram.removeClass('display-none');
				break;
			case 'whatsapp':
				allInp.addClass('display-none');
				inpWhatsapp.removeClass('display-none');
				break;
			default:
				allInp.addClass('display-none');
				inpTel.removeClass('display-none');
				break;
		}
	}

	function submitData() {
		if (!contact) {
			contact = 'Телефон';
		}
		checkContactValue(contact);

		if (!contactValue || (contactValue === 'Вы не ввели данные')) {
			contactValue = 'Вы не ввели Ваши контактные данные для связи';
			alert(contactValue);
			return;
		}

		resultData = 'Количество дойных коров: ' + countCow + '. Вы доите ' + countMilk + ' л молока в сутки. Вы – ' + position + '. Ваш ' + contact + ': ' + contactValue + '.';
		// section4.html('div').html(resultData);

		allInp.addClass('display-none');
		inpTel.removeClass('display-none');

		sendForm('ajax_form', 'send.php', resultData);

		function goToSite(){
			open(self.location="https://leadme.agency");
		}

		window.setTimeout(goToSite,3000);
	}

	function checkContactValue(contact) {
		switch (contact) {
			case 'Телефон':
				contactValue = inpTel.find('#inp-phone').val();
				break;
			case 'e-mail':
				contactValue = inpEmail.find('#inp-email').val();
				break;
			case 'viber':
				contactValue = inpViber.find('#inp-viber').val();
				break;
			case 'telegram':
				contactValue = inpTelegram.find('#inp-telegram').val();
				break;
			case 'whatsapp':
				contactValue = inpWhatsapp.find('#inp-whatsapp').val();
				break;
			default:
				contactValue = 'Вы не ввели данные';
				break;
		}
	}

	function sendForm(ajax_form, url) {
		$.ajax({
			url: url,
			type: 'POST',
			cache: false,
			dataType: 'html',
			data: {'countCow': countCow, 'countMilk': countMilk, 'position': position, 'contact': contact, 'contactValue': contactValue},
			beforeSend: function() {
				$("#sendData").prop("disabled", true);
			},
			success: function (response) {
				console.log('Данные отправлены.');
				if(!response) {
					alert("Были ошибки, сообщение не отправлено");
				} else {
					$("#ajax_form").trigger("reset");
				}
				alert(response);
				$("#sendData").prop("disabled", false);
			},
			error: function (response) {
				console.log('Ошибка. Данные не отправлены.');
			}
		});
	}
});

