interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $contactForm = document.querySelector('#contact-form') as HTMLFormElement;

if (!$contactForm) throw new Error('$contactForm query failed');

$contactForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements as FormElements;
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
