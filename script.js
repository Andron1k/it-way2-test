document.addEventListener("DOMContentLoaded", function () {
  const demoBtn = document.getElementById("demoBtn");
  const resultBtn = document.getElementById("resultBtn");
  const resultBox = document.getElementById("resultBox");

  const resultsMap = {
    web: {
      title: "WEB",
      description: "Вашій дитині може добре підійти напрям WEB, тому що їй важливо бачити результат своєї роботи, створювати щось візуальне, цікаве й зрозуміле. Це хороший варіант для дітей, яким подобається поєднання творчості та технологій.",
      project: "Приклад першого проєкту: власна веб-сторінка про себе, свої хобі та мрії, або простий сайт-портфоліо."
    },
    python: {
      title: "Python",
      description: "Вашій дитині може добре підійти Python, тому що їй ближчі логіка, структура, послідовність дій і цікаві задачі. Цей напрям добре розвиває мислення, уважність і вміння будувати алгоритми.",
      project: "Приклад першого проєкту: текстовий квест, проста гра, мініпрограма або інтерактивна історія."
    },
    ai: {
      title: "Творчі AI-інтенсиви",
      description: "Вашій дитині може добре підійти творчий напрям із використанням AI, тому що їй цікаво вигадувати, експериментувати, створювати щось незвичайне та сучасне. Це хороший формат для дітей, які люблять швидкий яскравий результат і творчість.",
      project: "Приклад першого проєкту: аніме-комікс, відеосторіз, цифровий персонаж, презентація або інший креативний проєкт за допомогою ШІ."
    },
    start: {
      title: "Стартовий курс",
      description: "Вашій дитині може найкраще підійти стартовий курс, тому що зараз їй важливо м’яко, спокійно й без зайвого стресу зануритися у світ IT. Це хороший варіант для знайомства з різними напрямами та пошуку того, що справді подобається.",
      project: "Приклад першого проєкту: проста веб-сторінка, легка анімація, базова програма або знайомство з різними цифровими інструментами."
    }
  };

  function getSelectedValue(name) {
    const checked = document.querySelector(`input[name="${name}"]:checked`);
    return checked ? checked.value : null;
  }

  function calculateResult() {
    const answers = [
      getSelectedValue("q1"),
      getSelectedValue("q2"),
      getSelectedValue("q3"),
      getSelectedValue("q4"),
      getSelectedValue("q5"),
      getSelectedValue("q6")
    ];

    const notAnswered = answers.some(function (answer) {
      return answer === null;
    });

    if (notAnswered) {
      resultBox.innerHTML = `
        <div class="result-empty">
          Будь ласка, дайте відповідь на всі запитання, щоб отримати результат.
        </div>
      `;
      return;
    }

    const scores = {
      web: 0,
      python: 0,
      ai: 0,
      start: 0
    };

    answers.forEach(function (answer) {
      scores[answer] += 1;
    });

    let bestKey = "start";
    let bestScore = -1;

    for (const key in scores) {
      if (scores[key] > bestScore) {
        bestScore = scores[key];
        bestKey = key;
      }
    }

    const result = resultsMap[bestKey];

    resultBox.innerHTML = `
      <div class="result-content">
        <div class="result-label">Рекомендований напрям</div>
        <h3 class="result-title">${result.title}</h3>
        <p class="result-text">${result.description}</p>

        <div class="project-box">
          <h4>Приклад першого проєкту</h4>
          <p>${result.project}</p>
        </div>
      </div>
    `;
  }

  function setAnswer(questionName, value) {
    const input = document.querySelector(`input[name="${questionName}"][value="${value}"]`);
    if (input) {
      input.checked = true;
    }
  }

  demoBtn.addEventListener("click", function () {
    setAnswer("q1", "web");
    setAnswer("q2", "web");
    setAnswer("q3", "web");
    setAnswer("q4", "web");
    setAnswer("q5", "web");
    setAnswer("q6", "web");

    calculateResult();
  });

  resultBtn.addEventListener("click", function () {
    calculateResult();
  });
});