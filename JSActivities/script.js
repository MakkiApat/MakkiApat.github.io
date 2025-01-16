const countElement = document.getElementById('count');
const countButton = document.getElementById('countButton');
let count = 0;

function updateCount() {
    count++;
    countElement.textContent = count;
}
countButton.addEventListener('click', updateCount);