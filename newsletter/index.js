document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('emailInput');
    const submitButton = document.getElementById('submitButton');
    const errorMessage = document.getElementById('errorMessage');
    const thankYouMessage = document.getElementById('thankYouMessage');
  
    submitButton.addEventListener('click', function(event) {
      event.preventDefault();
      const email = emailInput.value.trim();
  
      if (validateEmail(email)) {
        thankYouMessage.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        emailInput.value = '';
        emailInput.disabled = true;
        submitButton.disabled = true;
      } else {
        errorMessage.classList.remove('hidden');
      }
    });
  
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  