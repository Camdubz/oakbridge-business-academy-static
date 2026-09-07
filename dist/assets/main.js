(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNavigation = document.querySelector('#mobile-navigation');

  if (menuButton && mobileNavigation) {
    const closeNavigation = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      mobileNavigation.hidden = true;
    };

    const openNavigation = () => {
      menuButton.setAttribute('aria-expanded', 'true');
      menuButton.setAttribute('aria-label', 'Close navigation');
      mobileNavigation.hidden = false;
    };

    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      if (isOpen) closeNavigation();
      else openNavigation();
    });

    mobileNavigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeNavigation();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeNavigation();
    });

    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 861px)').matches) closeNavigation();
    });
  }

  const frequentlyAskedQuestions = document.querySelectorAll('.faq-list details');

  frequentlyAskedQuestions.forEach((question) => {
    question.addEventListener('toggle', () => {
      if (!question.open) return;
      frequentlyAskedQuestions.forEach((otherQuestion) => {
        if (otherQuestion !== question) otherQuestion.open = false;
      });
    });
  });
})();
