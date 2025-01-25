// Smooth Scroll to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  // Typing Effect
  const typingText = document.querySelector(".typing-text");
  const words = ["Frontend Developer", "Innovator", "Problem Solver"];
  let wordIndex = 0;
  let charIndex = 0;
  
  function typeEffect() {
    if (charIndex < words[wordIndex].length) {
      typingText.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(deleteEffect, 1000);
    }
  }
  
  function deleteEffect() {
    if (charIndex > 0) {
      typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(deleteEffect, 100);
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 500);
    }
  }
  
  typeEffect();
  
  // Skill Progress Animation
  const skillBars = document.querySelectorAll(".skill-card-progress > div");
  
  function animateSkills() {
    skillBars.forEach(bar => {
      const skillValue = bar.getAttribute("");
      bar.style.width = skillValue + "%";
    });
  }
  
  window.addEventListener("scroll", () => {
    const skillsSection = document.getElementById("skills");
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
  
    if (sectionPosition < screenPosition) {
      animateSkills();
    }
  });
  
  // Back-to-Top Button
  const backToTopButton = document.getElementById("back-to-top");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  
