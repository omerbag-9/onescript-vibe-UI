// Notification System for OneScript

// Initialize notifications
function initNotifications() {
  // Create default notifications if none exist
  const notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
  if (notifications.length === 0) {
    createDefaultNotifications();
  }
  updateNotificationBadge();
}

// Create default notifications
function createDefaultNotifications() {
  const defaultNotifications = [
    {
      id: 'notif1',
      role: 'patient',
      title: 'Assessment Submitted',
      message: 'Your assessment has been submitted and is awaiting doctor review.',
      time: '2 hours ago',
      read: false,
      type: 'info'
    },
    {
      id: 'notif2',
      role: 'doctor',
      title: 'New Assessment to Review',
      message: 'John Doe has submitted a new assessment for review.',
      time: '1 hour ago',
      read: false,
      type: 'info'
    },
    {
      id: 'notif3',
      role: 'pharmacist',
      title: 'New Order to Fulfill',
      message: 'Order #ORD-001 is ready for fulfillment.',
      time: '30 minutes ago',
      read: false,
      type: 'info'
    }
  ];
  localStorage.setItem('notifications', JSON.stringify(defaultNotifications));
}

// Get notifications for current role
function getNotificationsForRole(role) {
  const allNotifications = JSON.parse(localStorage.getItem('notifications') || '[]');
  return allNotifications.filter(n => n.role === role || n.role === 'all');
}

// Get unread count
function getUnreadCount(role) {
  const notifications = getNotificationsForRole(role);
  return notifications.filter(n => !n.read).length;
}

// Update notification badge
function updateNotificationBadge() {
  const role = getCurrentRole();
  const count = getUnreadCount(role);
  const badge = document.getElementById('notificationCount');
  if (badge) {
    badge.textContent = count > 0 ? count : '';
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

// Get current role from URL
function getCurrentRole() {
  const path = window.location.pathname;
  if (path.includes('/doctor/')) return 'doctor';
  if (path.includes('/pharmacist/')) return 'pharmacist';
  if (path.includes('/admin/')) return 'admin';
  if (path.includes('/patient/')) return 'patient';
  return 'patient';
}

// Create notification
function createNotification(role, title, message, type = 'info') {
  const notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
  const notification = {
    id: 'notif-' + Date.now(),
    role: role,
    title: title,
    message: message,
    time: 'Just now',
    read: false,
    type: type
  };
  notifications.unshift(notification);
  localStorage.setItem('notifications', JSON.stringify(notifications));
  updateNotificationBadge();
  showNotificationToast(title, message, type);
}

// Show notification toast
function showNotificationToast(title, message, type) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    max-width: 350px;
    border-left: 4px solid ${type === 'success' ? '#43A047' : type === 'error' ? '#E53935' : '#00BFA5'};
    animation: slideInRight 0.3s ease;
  `;
  
  toast.innerHTML = `
    <strong style="display: block; margin-bottom: 0.5rem;">${title}</strong>
    <p style="margin: 0; font-size: 0.9rem; color: var(--text-light);">${message}</p>
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}

// Mark notification as read
function markAsRead(notificationId) {
  const notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
  const notification = notifications.find(n => n.id === notificationId);
  if (notification) {
    notification.read = true;
    localStorage.setItem('notifications', JSON.stringify(notifications));
    updateNotificationBadge();
  }
}

// Initialize on page load
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initNotifications);
}

