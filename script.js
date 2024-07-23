const form = document.getElementById('data-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let isValid = true;

  // Name Validation: Check if empty
  if (nameInput.value === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  } else {
    nameError.textContent = '';
  }

  // Email Validation: Check for '@' and '.'
  const emailPattern = /^[^@]+@[^@]+\.[^ ]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  // Phone Validation: Allow empty but basic format check for filled value
  if (phoneInput.value !== '') {
    const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phonePattern.test(phoneInput.value)) {
      phoneError.textContent = 'Please enter a valid phone number (e.g. 123-456-7890).';
      isValid = false;
    } else {
      phoneError.textContent = '';
    }
  }

  // Submit form only if all fields are valid
  if (isValid) {
    // Simulate form submission (replace with your actual submission logic)
    alert('Form submitted successfully!');
    form.reset();
  }
});
