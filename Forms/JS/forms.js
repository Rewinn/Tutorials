console.log('Hello!');
var $emailField    = $('#email');
var $passwordField = $('#password');

$('form').on('submit', function(e) {
	e.preventDefault();
}

$emailField.removeClass('red');
$passwordField.removeClass('red');

if ($emailField.val() === '') {
	alert('You must fill the field out.');
	$emailField.addClass('red');
	return false;
}

if ($passwordField.val().length < 4) {
	alert('Password too short!');
	$passwordField.addClass('red');
	return false;
}

if ($passwordField.val() == 'doggy') {
	alert('You entered the secret self destruct code!!  Bad things are happening!');
	$emailField.val('DANGER! DANGER');
	$passwordField.addClass('danger');
	setInterval(function() {
		$passwordField.fadeOut();
		$passwordField.fadeIn();
	}, 1000);
	return false;
} 
	alert('Yay! Form submitted!');

