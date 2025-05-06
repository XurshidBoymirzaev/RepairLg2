// main.js
(() => {
    // элементы: все секции + все .card внутри .row
    const targets = [
      ...document.querySelectorAll("section"),
      ...document.querySelectorAll(".card")
    ];
  
    if (!("IntersectionObserver" in window)) {
      // старые браузеры: показываем сразу
      targets.forEach(el => el.classList.add("reveal-show"));
      return;
    }
  
    // добавляем класс скрытого состояния
    targets.forEach(el => el.classList.add("reveal-init"));
  
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.replace("reveal-init", "reveal-show");
            io.unobserve(entry.target);      // анимация один раз
          }
        });
      },
      {
        threshold: 0.15,            // 15 % элемента появилось — запускаем
        rootMargin: "0px 0px -10% 0px"
      }
    );
  
    targets.forEach(el => io.observe(el));
  })();
  