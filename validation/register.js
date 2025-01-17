const isEmpty = require('is-empty');
const {
	emptyOrExisting,
	nameChecks,
	emailChecks,
	passwordCreationChecks,
} = require('./helper-fns');

function validateRegistrationInput(data) {
	let errors = {};

	// Convert empty fields to an empty string for validator
	dataArray = [data.name, data.email, data.password, data.password2];
	dataArray.forEach(emptyOrExisting);

	errors = nameChecks(data.name, errors);
	errors = emailChecks(data.email, errors);
	errors = passwordCreationChecks(data.password, data.password2, errors);

	return {
		errors,
		// only valid if there are no errors
		isValid: isEmpty(errors),
	};
}

module.exports = validateRegistrationInput;
