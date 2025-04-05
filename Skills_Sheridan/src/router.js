import { renderHome } from './pages/home.js';
import { renderRegistration } from './pages/registration.js';
import { renderProjects } from './pages/projects.js';
import { renderGallery } from './pages/gallery.js';
import { renderFeedback } from './pages/feedback.js';
import { renderResults } from './pages/results.js';
import { renderAdmin } from './pages/admin.js';

export function router(page) {
  const app = document.getElementById('app');
  
  switch(page) {
    case 'home':
      renderHome();
      break;
    case 'registration':
      renderRegistration();
      break;
    case 'projects':
      renderProjects();
      break;
    case 'gallery':
      renderGallery();
      break;
    case 'feedback':
      renderFeedback();
      break;
    case 'results':
      renderResults();
      break;
    case 'admin':
      renderAdmin();
      break;
    default:
      renderHome();
  }
}