function toggleText() {
    const hiddenText = document.querySelector('.hidden-text');
    hiddenText.style.display = hiddenText.style.display === 'none' ? 'inline-block' : 'none';
    // Add logic for changing button and background color on click
  }
  
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Add JavaScript for spinning button and neon effects
//   function toggleText(sectionNumber) {
//     const hiddenText = document.getElementById(`hidden-text-${sectionNumber}`);
//     hiddenText.style.display = hiddenText.style.display === 'none' ? 'block' : 'none';
    
//     // Toggle spin button class for neon green color
//     const spinButton = hiddenText.previousElementSibling;
//     spinButton.classList.toggle('active');
//   }
  
  // scrollToSection function as before
  function toggleText(sectionNumber) {
    const hiddenText = document.getElementById(`hidden-text-${sectionNumber}`);
    hiddenText.style.display = hiddenText.style.display === 'none' ? 'block' : 'none';
    
    // Add logic to change the button's appearance on click if desired
  }
  
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Include any additional JS for navbar interactivity

//   const spinningButtons = document.querySelectorAll('.spin-btn');

//   spinningButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       const icon = button.querySelector('.btn-icon');
//       // If it's already spinning, reset the rotation
//       icon.style.transform = 'rotate(0deg)';
  
//       // Next frame, start the spin
//       requestAnimationFrame(() => {
//         icon.style.transform = 'rotate(360deg)';
//       });
//     });
//   });
  