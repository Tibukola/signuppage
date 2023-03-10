
  const form = document.querySelector('form');
  const passwordInput = document.querySelector('#password');
  const maxLength = 6;

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const password = passwordInput.value;
    if (password.length > maxLength) {
      // Prevent form submission
      alert('Password is too long. Please enter a password that is at most 6 characters long.');
   }
   else{
     alert('Successful!');
   }
 });