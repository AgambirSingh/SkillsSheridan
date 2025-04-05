import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { router } from './router.js';
import { renderHome } from './pages/home.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  // Default to home page
  renderHome();

  // Handle navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      // Get the closest anchor tag if clicked on a child element
      const anchor = e.target.closest('a');
      if (!anchor) return;
      
      const page = anchor.getAttribute('href').substring(1);
      router(page);
    });
  });
});