document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.querySelector('.navbar__toggle');
  const sidebar = document.querySelector('.navbar-sidebar');
  const backdrop = document.querySelector('.navbar-sidebar__backdrop');
  const closeBtn = document.querySelector('.navbar-sidebar__close');
  const backBtn = document.querySelector('.navbar-sidebar__back');

  function openSidebar() {
    sidebar.classList.add('navbar-sidebar--open');
    backdrop.style.display = 'block';
  }

  function closeSidebar() {
    sidebar.classList.remove('navbar-sidebar--open');
    backdrop.style.display = 'none';
  }

  if (toggleBtn && sidebar && backdrop) {
    toggleBtn.addEventListener('click', openSidebar);
    backdrop.addEventListener('click', closeSidebar);
    if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
    if (backBtn) backBtn.addEventListener('click', closeSidebar);
  }
});
