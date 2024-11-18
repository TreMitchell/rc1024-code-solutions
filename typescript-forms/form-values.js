'use strict';
const $contactForm = document.querySelector('#contact-form');
if (!$contactForm) throw new Error('$contactForm query failed');
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements;
  if (!$formElements) throw new Error('$formElements query failed');
  const name = $formElements.name.value;
  const email = $formElements.email.value;
  const message = $formElements.message.value;
  const $formData = {
    name,
    email,
    message,
  };
  console.log('$formData:', $formData);
  $contactForm.reset();
});
