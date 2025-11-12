// OneScript Healthcare - Shared JavaScript Functions

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  loadHeader();
  loadFooter();
  initializeForms();
  
  // Load notifications script dynamically
  loadNotificationsScript();
});

// Load notifications script
function loadNotificationsScript() {
  if (window.notificationsLoaded) return;
  
  const script = document.createElement('script');
  const isRoot = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html');
  script.src = isRoot ? 'js/notifications.js' : '../js/notifications.js';
  script.onload = function() {
    if (typeof initNotifications === 'function') {
      initNotifications();
    }
  };
  document.head.appendChild(script);
  window.notificationsLoaded = true;
}

// Load header component
function loadHeader() {
  const header = document.getElementById('header');
  if (header) {
    const isRoot = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html');
    const headerPath = isRoot ? 'components/header-root.html' : '../components/header.html';
    
    fetch(headerPath)
      .then(r => r.text())
      .then(html => {
        header.innerHTML = html;
        // Fix header links based on current location
        fixHeaderLinks(isRoot);
      })
      .catch(err => console.error('Error loading header:', err));
  }
}

// Load footer component
function loadFooter() {
  const footer = document.getElementById('footer');
  if (footer) {
    const isRoot = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html');
    const footerPath = isRoot ? 'components/footer.html' : '../components/footer.html';
    
    fetch(footerPath)
      .then(r => r.text())
      .then(html => footer.innerHTML = html)
      .catch(err => console.error('Error loading footer:', err));
  }
}

// Fix header links based on location
function fixHeaderLinks(isRoot) {
  const logo = document.querySelector('.logo');
  const signinBtn = document.querySelector('.btn-primary');
  
  if (logo && !isRoot) {
    logo.href = '../index.html';
  }
  if (signinBtn && !isRoot && signinBtn.textContent.includes('Get Started')) {
    signinBtn.href = '../auth/signin.html';
  }
}

// Initialize forms
function initializeForms() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
  });
}

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  // Store form data in sessionStorage
  const formId = form.id || 'form-' + Date.now();
  sessionStorage.setItem(formId, JSON.stringify(data));
  
  // Get redirect URL from form action or data attribute
  const redirectUrl = form.getAttribute('data-redirect') || form.action;
  
  if (redirectUrl && redirectUrl !== '#') {
    window.location.href = redirectUrl;
  } else {
    // Default navigation based on form context
    const currentPath = window.location.pathname;
    
    if (currentPath.includes('signin.html')) {
      window.location.href = '../patient/dashboard.html';
    } else if (currentPath.includes('signup.html')) {
      window.location.href = '../patient/dashboard.html';
    } else if (currentPath.includes('assessment.html')) {
      window.location.href = 'product-selection.html';
    } else if (currentPath.includes('product-selection.html')) {
      window.location.href = 'dashboard.html';
    } else if (currentPath.includes('identity-verification.html')) {
      window.location.href = 'payment.html';
    } else if (currentPath.includes('payment.html')) {
      window.location.href = 'dashboard.html';
    }
  }
}

// Show modal
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Close modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal on outside click
function setupModalClose(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeModal(modalId);
      }
    });
  }
  
  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal(modalId);
    }
  });
}

// Show account modal with product name
function showAccountModal(productName) {
  const selectedProduct = document.getElementById('selectedProduct');
  if (selectedProduct) {
    selectedProduct.textContent = productName;
  }
  showModal('accountModal');
}

// Close account modal
function closeAccountModal() {
  closeModal('accountModal');
}

// Save assessment progress
function saveAssessmentProgress() {
  const form = document.querySelector('form');
  if (form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    localStorage.setItem('assessmentProgress', JSON.stringify(data));
    alert('Progress saved! You can continue later.');
  }
}

// Load saved assessment progress
function loadAssessmentProgress() {
  const saved = localStorage.getItem('assessmentProgress');
  if (saved) {
    const data = JSON.parse(saved);
    const form = document.querySelector('form');
    if (form) {
      Object.keys(data).forEach(key => {
        const input = form.querySelector(`[name="${key}"]`);
        if (input) {
          if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = input.value === data[key];
          } else {
            input.value = data[key];
          }
        }
      });
    }
  }
}

// Navigation helper
function navigateTo(url) {
  window.location.href = url;
}

// Show notification
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    background-color: ${type === 'success' ? '#43A047' : type === 'error' ? '#E53935' : '#00BFA5'};
    color: white;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    z-index: 10000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

