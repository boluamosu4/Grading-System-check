// Get all elements we need
const input = document.getElementById('cgpa-input');
const resultBox = document.getElementById('result-box');
const errorMsg = document.getElementById('error-msg');
const resultClass = document.getElementById('result-class');
const resultRange = document.getElementById('result-range');
const resultIcon = document.getElementById('result-icon');

// Function to check the grade
function checkGrade() {
  const cgpa = parseFloat(input.value);

  // Stop any currently playing sounds
  const sounds = ['success-Sound', 'failure-Sound', 'kill-Sound', 'giveaway-Sound', 'oh-chim-Sound', 'secondfail-Sound'];
  sounds.forEach(id => {
    const audio = document.getElementById(id);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });

  // Hide everything first
  errorMsg.style.display = 'none';
  resultBox.style.display = 'none';
  resultBox.classList.remove('show');

  // Check if input is valid
  if (isNaN(cgpa) || cgpa < 0 || cgpa > 5) {
    errorMsg.style.display = 'block';
    return;
  }

  // Find the grade based on CGPA
  let grade = '';
  let range = '';
  let bgColor = '';
  let textColor = '';

  if (cgpa >= 4.50) {
    grade = 'First Class Honours';
    range = '4.50 – 5.00';
    bgColor = '#EAF3DE';
    textColor = '#27500A';
    // Play success sound
    const successSound = document.getElementById('success-Sound');
    successSound.play();

  } else if (cgpa >= 3.50) {
    grade = 'Second Class (Upper Division)';
    range = '3.50 – 4.49';
    bgColor = '#E6F1FB';
    textColor = '#0C447C';
    // play kill sound
    const killSound = document.getElementById('kill-Sound');
    killSound.play();
  } else if (cgpa >= 2.40) {
    grade = 'Second Class (Lower Division)';
    range = '2.40 – 3.49';
    bgColor = '#FAEEDA';
    textColor = '#633806';
    // play giveaway sound
    const giveawaySound = document.getElementById('giveaway-Sound');
    giveawaySound.play();
  } else if (cgpa >= 1.50) {
    grade = 'Third Class';
    range = '1.50 – 2.39';
    bgColor = '#FAECE7';
    textColor = '#712B13';
    // play oh chim sound
    const ohChimSound = document.getElementById('oh-chim-Sound');
    ohChimSound.play();
  } else if (cgpa >= 1.00) {
    grade = 'Pass';
    range = '1.00 – 1.49';
    bgColor = '#FCEBEB';
    textColor = '#791F1F';
    // play second faiilure sound
    const SecondFailSound = document.getElementById('secondfail-Sound');
    SecondFailSound.play();
  } else {
    grade = 'Fail';
    range = '0.00 – 0.99';
    bgColor = '#f8f9fa';
    textColor = '#6c757d';
    // Play failure sound
    const failureSound = document.getElementById('failure-Sound');
    failureSound.play();
  }

  // Show the result
  resultClass.textContent = grade;
  resultClass.style.color = textColor;
  // resultRange.textContent = 'CGPA range: ' + range;
  resultIcon.style.color = textColor;
  resultBox.style.background = bgColor;
  resultBox.style.border = '1px solid ' + textColor + '44';
  resultBox.style.display = 'block';
  setTimeout(() => resultBox.classList.add('show'), 10);
}

// Check grade when pressing Enter
input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    checkGrade();
  }
});