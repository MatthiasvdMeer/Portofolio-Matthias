function toggleDropdown() {
  const menu = document.querySelector('nav ul');
  menu.classList.toggle('show');
  
  const toggleBtn = document.querySelector('.dropdown-toggle');
  toggleBtn.classList.toggle('active');
}
