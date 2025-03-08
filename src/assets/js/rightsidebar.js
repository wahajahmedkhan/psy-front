// Right Sidebar Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize variables
  const isMobile = window.innerWidth <= 1040;
  const htmlElement = document.documentElement;
  
  // Function to handle sidebar toggle based on screen size
  function handleSidebarToggle() {
    const toggleButtons = document.querySelectorAll('.bar-item-rightsidebar .item-opener');
    
    toggleButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (window.innerWidth <= 1040) {
          // Mobile toggle
          if (htmlElement.classList.contains('mobile-right-panel-opened')) {
            htmlElement.classList.remove('mobile-right-panel-opened');
          } else {
            htmlElement.classList.add('mobile-right-panel-opened');
          }
        } else {
          // Desktop toggle
          if (htmlElement.classList.contains('right-panel-opened')) {
            htmlElement.classList.remove('right-panel-opened');
          } else {
            htmlElement.classList.add('right-panel-opened');
          }
        }
      });
    });
    
    // Close sidebar when clicking on the overlay (mobile only)
    const overlays = document.querySelectorAll('.mobile-extra-closer');
    overlays.forEach(overlay => {
      overlay.addEventListener('click', function() {
        htmlElement.classList.remove('mobile-right-panel-opened');
      });
    });
  }
  
  // Initialize sidebar state
  function initializeSidebarState() {
    if (window.innerWidth <= 1040) {
      // Mobile: sidebar starts hidden
      htmlElement.classList.remove('mobile-right-panel-opened');
    } else {
      // Desktop: sidebar starts visible
      htmlElement.classList.remove('right-panel-opened');
    }
  }
  
  // Handle window resize
  window.addEventListener('resize', function() {
    initializeSidebarState();
  });
  
  // Initialize
  initializeSidebarState();
  handleSidebarToggle();
});
