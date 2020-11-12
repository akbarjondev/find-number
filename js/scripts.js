var elForm = document.querySelector('.form');
var elInput = elForm.querySelector('.form-control');
var randomNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
var alertBox = document.querySelector('.alert');
var efforts = 1;

elForm.addEventListener('submit', function(evt) {
	evt.preventDefault();

	if(elInput.value == '') {
		return;
	}

	if(efforts <= 6) {
		var inputNumber = parseInt(elInput.value.trim(), 10);
		
		alertBox.classList.remove('d-none');
		alertBox.classList.add('alert-info');
		alertBox.textContent = 'Urinishlar soni: ' + efforts;

		if(inputNumber == randomNum) {
			alertBox.classList.remove('alert-info');
			alertBox.classList.add('alert-success');
			alertBox.append('. Tabriklaymiz!');
		}	else if(inputNumber < randomNum) {
			alertBox.append('. Siz o\'ylagan son juda kichik.');
		} else {
			alertBox.append('. Siz o\'ylagan son juda katta.');
		}

		efforts++;
	} else {
		alertBox.classList.remove('d-none');
		alertBox.classList.add('alert-danger');
		alertBox.textContent = 'Urinishlar soni tugadi!';
	}
});
