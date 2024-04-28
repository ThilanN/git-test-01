const homeLink = document.getElementById('home');

homeLink.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default link behavior (navigation)
  homeLink.classList.add('clicked'); // Add a class to indicate that the link has been clicked

  // You can add logic to navigate to a new page here, for example:
  // window.location.href = 'your_new_page.html';
});
