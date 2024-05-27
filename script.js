document.querySelector(".circle").addEventListener("click", function() {
  // Create 50 particles
  for (let i = 0; i < 50; i++) {
    let particle = document.createElement('i');
    particle.classList.add('particles');
    
    // Random positions for particles
    let randomX = (Math.random() - 0.5) * window.innerWidth;
    let randomY = (Math.random() - 0.5) * window.innerHeight;
    
    particle.style.setProperty('--x', randomX + 'px');
    particle.style.setProperty('--y', randomY + 'px');
    
    // Random size for particles
    let randomSize = Math.random() * 40 + 10;
    particle.style.width = randomSize + 'px';
    particle.style.height = randomSize + 'px';
    
    // Random duration for animation
    let duration = Math.random() * 3 + 2;
    particle.style.animationDuration = `${duration}s`;
    
    // Append particle to body and remove after animation
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), duration * 1000);
  }
});