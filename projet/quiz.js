document.getElementById('submit-btn').addEventListener('click', () => {
  const form = document.getElementById('quiz-form');
  if (!form.checkValidity()) {
    alert("Veuillez répondre à toutes les questions !");
    form.reportValidity();
    return;
  }

  const correctAnswers = [1, 2, 1, 2, 1, 1, 1, 3, 0, 2, 1, 1]; 
  var score = 0;
  var correctionsHTML = '';

  for (let i = 1; i <= 12; i++) {
    const selected = form.querySelector(`input[name="q${i}"]:checked`);
    const isCorrect = selected && parseInt(selected.value) === correctAnswers[i-1];
    if (isCorrect) score++;
    correctionsHTML += `
      <div style="margin:12px 0; padding:12px; background:#f8f9fa; border-radius:10px; border-left:4px solid ${isCorrect ? '#10b981' : '#ef4444'};">
        Question ${i} : ${isCorrect ? 'Correct !' : 'Incorrect'}
      </div>
    `;
  }

  document.getElementById('score-display').textContent = `${score} / 12`;
  document.getElementById('corrections').innerHTML = correctionsHTML;
  document.getElementById('result').style.display = 'block';
  document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('replay-btn').addEventListener('click', () => {
  document.getElementById('quiz-form').reset();
  document.getElementById('result').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});