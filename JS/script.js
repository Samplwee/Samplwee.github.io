window.onload = function () {
    const glitchTexts = document.querySelectorAll(".glitch-text");
  
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
    const steps = [4, 3, 2, 1];
  
    glitchTexts.forEach((glitchText) => {
      const originalText = glitchText.innerText;
      let currentText = glitchText.innerText;
  
      let stepIndex = 0; 
  

      function startGlitch() {
        let index = 0;
        const glitchInterval = setInterval(function () {
          let newText = '';
          for (let i = 0; i < currentText.length; i++) {
            let currentChar = currentText[i];
            let newChar = shiftLetter(currentChar, -steps[stepIndex]);  
            newText += newChar;
          }
  
          glitchText.innerText = newText;
  
          if (index >= originalText.length * steps.length) {
            clearInterval(glitchInterval);
            glitchText.innerText = originalText; 
          }
  
          if (index % originalText.length === 0 && stepIndex < steps.length - 1) {
            stepIndex++;
          }
  
          index++;
        }, 20); 
      }
  
      function shiftLetter(letter, shift) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const index = alphabet.indexOf(letter);
        if (index === -1) return letter;  
  
        let newIndex = index + shift;
        if (newIndex < 0) {
          newIndex = alphabet.length + newIndex; 
        } else if (newIndex >= alphabet.length) {
          newIndex = newIndex - alphabet.length;  
        }
  
        return alphabet[newIndex];
      }
  
   
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startGlitch();
          }
        });
      }, { threshold: 0.5 }); 
      observer.observe(glitchText);
    });
  };

  