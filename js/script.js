window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.model-card');
    cards.forEach(card => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(40px)';
    });
  
    setTimeout(() => {
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.style.transition = '0.5s ease';
          card.style.opacity = 1;
          card.style.transform = 'translateY(0)';
        }, i * 200);
      });
    }, 500);
  });
  