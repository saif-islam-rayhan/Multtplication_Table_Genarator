document.getElementById('generateBtn').addEventListener('click', function() {
    const numberInput = document.getElementById('numberInput').value;
    const messageDiv = document.getElementById('message');
    const tableOutput = document.getElementById('tableOutput');
  
    // Clear previous messages and table
    messageDiv.textContent = '';
    tableOutput.innerHTML = '';
  
    // Validation
    if(numberInput === '') {
      messageDiv.textContent = 'Please enter a valid number!';
      return;
    }
    
    const num = parseFloat(numberInput);
    if(isNaN(num)) {
      messageDiv.textContent = 'Please enter a valid number!';
      return;
    }
    
    if(num <= 0) {
      messageDiv.textContent = 'Please enter a number greater than 0!';
      return;
    }
    
    // Generate multiplication table from 1 to 10
    let tableHTML = '<ul>';
    for(let i = 1; i <= 10; i++){
      tableHTML += `<li>${num} x ${i} = ${num * i}</li>`;
    }
    tableHTML += '</ul>';
    
    tableOutput.innerHTML = tableHTML;
  });
  
  // Modal handling for assignment submission
  const modal = document.getElementById('modal');
  const submitAssignmentBtn = document.getElementById('submitAssignmentBtn');
  const closeModal = document.getElementById('closeModal');
  
  submitAssignmentBtn.addEventListener('click', function() {
    modal.style.display = 'block';
  });
  
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if(event.target == modal) {
      modal.style.display = 'none';
    }
  });
  
  // Form submission (you can handle the submitted links as needed)
  document.getElementById('submitForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const repoLink = document.getElementById('repoLink').value;
    const liveLink = document.getElementById('liveLink').value;
    alert(`Repository: ${repoLink}\nLive Site: ${liveLink}\nYour assignment has been submitted!`);
    modal.style.display = 'none';
  });
  