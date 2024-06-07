let submit = document.getElementById('submit');
submit.addEventListener('click', function () {
  let user = document.getElementById('user').value;
  localStorage.setItem('user', user);
});
