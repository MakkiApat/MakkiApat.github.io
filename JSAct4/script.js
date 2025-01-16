const calculateButton = document.getElementById('calculateButton');
const startDateInput = document.getElementById('startDate');
const endDateInput = document.getElementById('endDate');
const resultElement = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const startDate = new Date(startDateInput.value);
  const endDate = new Date(endDateInput.value);

  if (startDate > endDate) {
    resultElement.textContent = 'Start Date must be before End Date.';
    return;
  }

  const timeDiff = endDate - startDate;
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  resultElement.textContent = `Difference: ${daysDiff} days`;
});