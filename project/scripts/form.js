document.getElementById('tripForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const dest = document.getElementById('destination').value;

  if(name && email && dest){
    document.getElementById('formMessage').textContent = 
      `Thank you ${name}, your interest in ${dest} has been submitted!`;

    localStorage.setItem('lastTrip', JSON.stringify({name, email, dest}));
    this.reset();
  } else {
    document.getElementById('formMessage').textContent =
      "Please fill out all fields before submitting.";
  }
});
