const passwordForm = document.getElementById('passwordForm');
const newPasswordInput = document.getElementById('newPassword');
const confirmPasswordInput = document.getElementById('confirmPassword');
const messageElement = document.getElementById('message');

passwordForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  const newPassword = newPasswordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (newPassword === confirmPassword) {
    messageElement.textContent = 'Passwords match! Password changed successfully.';
    messageElement.style.color = 'green';
  } else {
    messageElement.textContent = 'Passwords do not match. Please try again.';
    messageElement.style.color = 'red';
  }
});