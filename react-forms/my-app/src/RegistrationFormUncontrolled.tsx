import { FormEvent } from 'react';

export default function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { username, password } = Object.fromEntries(formData);
    console.log(username, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        username:
        <input name="username" />
      </label>
      <label>
        password:
        <input name="password" />
      </label>
      <button>Submit</button>
    </form>
  );
}
