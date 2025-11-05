// Interactive behavior: track No clicks and show different messages
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');

let noCount = 0;
const noReplies = [
  "I understand — thank you for your honesty. If you need time, I'm happy to wait.",
  "Still no? That's okay — I'll keep cherishing the moments we shared and hope for warmer days.",
  "One more no... I respect your feelings. My heart stays gentle; I'll leave a little blue flower on your windowsill."
];

yesBtn.addEventListener('click', () => {
  // Show a warm acceptance message and lots of hearts
  message.innerHTML = "<strong>I love you hubby!</strong> You just made my day — i am yours don't worry 💙🌸";
  yesBtn.disabled = true;
  
  // Create lots of floating hearts and flowers
  for(let i = 0; i < 60; i++) {
    setTimeout(() => {
      const element = document.createElement('div');
      // Alternate between hearts and flowers
      element.textContent = i % 2 === 0 ? '💙' : '🌸';
      element.style.position = 'fixed';
      element.style.left = Math.random() * 100 + 'vw';
      element.style.top = Math.random() * 100 + 'vh';
      element.style.fontSize = (20 + Math.random() * 30) + 'px';
      element.style.pointerEvents = 'none';
      
      document.body.appendChild(element);
      
      // Animate using Web Animations API
      element.animate([
        { 
          transform: 'translate(0, 0) rotate(0deg)',
          opacity: 1 
        },
        { 
          transform: `translate(${(Math.random() - 0.5) * 200}px, ${-window.innerHeight}px) rotate(${Math.random() * 360}deg)`,
          opacity: 0 
        }
      ], {
        duration: 3000,
        easing: 'ease-out'
      }).onfinish = () => element.remove();
      
    }, i * 100);
  }
});

// Music functionality
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.innerHTML = '<span>🎵</span> Play Music';
        musicBtn.classList.remove('playing');
    } else {
        bgMusic.play();
        musicBtn.innerHTML = '<span>⏸️</span> Pause Music';
        musicBtn.classList.add('playing');
    }
    isPlaying = !isPlaying;
});

// Quiz functionality
const quizBtn = document.getElementById('quizBtn');
const quizArea = document.getElementById('quizArea');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizResult = document.getElementById('quizResult');

const quizQuestions = [
    {
        question: "meri sabse achi baat kya hai?",
        options: ["pyaar", "loyalty", "purity", "looks"],
        correct: 2
    },
    {
        question: "what is base of our relationship?",
        options: ["Our trust", "Our understanding", "Our love", "All of these"],
        correct: 3
    },
    {
        question: "What do I want most with you?",
        options: ["A future together", "career", "gifties", "flowers"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

quizBtn.addEventListener('click', () => {
    quizArea.style.display = 'block';
    quizBtn.disabled = true;
    showQuestion();
});

function showQuestion() {
    if (currentQuestion >= quizQuestions.length) {
        showFinalResult();
        return;
    }

    const question = quizQuestions[currentQuestion];
    quizQuestion.innerHTML = `<h3>Question ${currentQuestion + 1}:</h3>
                            <p>${question.question}</p>`;
    
    quizOptions.innerHTML = question.options.map((option, index) => `
        <button onclick="checkAnswer(${index})" class="btn quiz-option">${option}</button>
    `).join('');
}

function checkAnswer(answer) {
    const question = quizQuestions[currentQuestion];
    if (answer === question.correct) {
        score++;
        quizResult.innerHTML = '<p class="correct">Perfect! Just like our love! 💙</p>';
    } else {
        quizResult.innerHTML = '<p class="incorrect">That\'s okay, love is about learning each other 💕</p>';
    }

    currentQuestion++;
    setTimeout(() => {
        quizResult.innerHTML = '';
        showQuestion();
    }, 1500);
}

function showFinalResult() {
    const hearts = '💙'.repeat(score);
    quizArea.innerHTML = `
        <h3>Quiz Complete!</h3>
        <p>You got ${score} out of ${quizQuestions.length} right!</p>
        <p>${hearts}</p>
        <p>${score === quizQuestions.length ? 
            'Perfect! You really know my heart! 💝' : 
            'Thank you for taking the quiz! I love you no matter what! 💕'}</p>
    `;
    
    // Celebrate with hearts and flowers if score is perfect
    if (score === quizQuestions.length) {
        for(let i = 0; i < 30; i++) {
            setTimeout(() => {
                const element = document.createElement('div');
                element.textContent = i % 2 === 0 ? '💙' : '🌸';
                element.style.position = 'fixed';
                element.style.left = Math.random() * 100 + 'vw';
                element.style.top = Math.random() * 100 + 'vh';
                element.style.fontSize = (20 + Math.random() * 30) + 'px';
                element.style.pointerEvents = 'none';
                
                document.body.appendChild(element);
                
                element.animate([
                    { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
                    { transform: `translate(${(Math.random() - 0.5) * 200}px, ${-window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
                ], {
                    duration: 3000,
                    easing: 'ease-out'
                }).onfinish = () => element.remove();
            }, i * 100);
        }
    }
}

function animateHeartsOnYes(){
  // Create lots of floating blue hearts that fade and move around
  for(let i=0;i<50;i++){ // Increased number of hearts
    const el = document.createElement('div');
    el.className = 'popup-heart';
    el.textContent = '💙';
    const startX = Math.random() * 100; // Random starting position across whole screen
    const startY = Math.random() * 100;
    Object.assign(el.style,{
      position:'fixed',
      left: startX + '%',
      top: startY + '%',
      fontSize:(20 + Math.random()*30)+'px', // Bigger hearts
      opacity:1,
      transform:'translateY(0)',
      transition: 'all 2s ease-in-out',
      zIndex: '1000'
    });
    document.body.appendChild(el);
    // animate
    const up = 60 + Math.random()*120;
    el.animate([
      {transform:'translateY(0) scale(1)', opacity:1},
      {transform:`translateY(-${up}px) scale(1.2)`, opacity:0}
    ],{duration:1200 + Math.random()*800, easing:'ease-out'}).onfinish = ()=>el.remove();
  }
}
