const typingEffect = (elementId, speed) => {
  const element = document.getElementById(elementId);
  if (element) {
    const text = element.textContent;
    element.textContent = '';
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        element.textContent += text[i];
        i += 1;
      } else {
        clearInterval(interval);
      }
    }, speed);
  }
};

window.onload = () => {
  typingEffect('experience1', 25); // Adjust the speed as necessary
  typingEffect('experience2', 50);
  typingEffect('experience3', 50);
  typingEffect('experience4', 50);
  typingEffect('experience5', 50);
  typingEffect('experience6', 50);
  typingEffect('experience7', 50);
  typingEffect('experience8', 50);
   // Adjust the speed as necessary
};
