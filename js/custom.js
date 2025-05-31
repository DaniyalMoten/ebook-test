
  (function ($) {

  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();

      scrollToDiv(elWrapped,header_height);
      return false;

      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;

        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

  })(window.jQuery);


  <!-- MODERN NAVBAR SCRIPT -->
  <script>
      // Modern Navbar Functionality
      document.addEventListener('DOMContentLoaded', function () {
          const navbar = document.querySelector('.modern-navbar');
          const dropdowns = document.querySelectorAll('.modern-dropdown');

          // Navbar scroll effect
          function handleScroll() {
              if (window.scrollY > 50) {
                  navbar.classList.add('scrolled');
              } else {
                  navbar.classList.remove('scrolled');
              }
          }

          // Bootstrap dropdown integration with custom styling
          function initDropdowns() {
              dropdowns.forEach(dropdown => {
                  const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
                  const dropdownMenu = dropdown.querySelector('.modern-dropdown-menu');

                  if (dropdownToggle && dropdownMenu) {
                      // Add Bootstrap dropdown class to menu
                      dropdownMenu.classList.add('dropdown-menu');

                      // Listen for Bootstrap dropdown events
                      dropdown.addEventListener('show.bs.dropdown', function () {
                          dropdown.classList.add('show');
                      });

                      dropdown.addEventListener('hide.bs.dropdown', function () {
                          dropdown.classList.remove('show');
                      });

                      dropdown.addEventListener('shown.bs.dropdown', function () {
                          dropdownMenu.classList.add('show');
                      });

                      dropdown.addEventListener('hidden.bs.dropdown', function () {
                          dropdownMenu.classList.remove('show');
                      });
                  }
              });
          }

          // Smooth scrolling for navigation links
          function initSmoothScroll() {
              const navLinks = document.querySelectorAll('.modern-nav-link[href^="#"], .dropdown-item[href^="#"]');

              navLinks.forEach(link => {
                  link.addEventListener('click', function(e) {
                      const href = this.getAttribute('href');
                      if (href.startsWith('#')) {
                          e.preventDefault();
                          const target = document.querySelector(href);
                          if (target) {
                              const offsetTop = target.offsetTop - 100; // Account for fixed navbar
                              window.scrollTo({
                                  top: offsetTop,
                                  behavior: 'smooth'
                              });

                              // Close mobile menu if open
                              const navbarCollapse = document.querySelector('#modernNavbar');
                              if (navbarCollapse.classList.contains('show')) {
                                  const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                                  bsCollapse.hide();
                              }
                          }
                      }
                  });
              });
          }

          // Initialize all functionality
          window.addEventListener('scroll', handleScroll);
          window.addEventListener('resize', initDropdowns);
          initDropdowns();
          initSmoothScroll();
          handleScroll(); // Initial call
      });


  // MODERN JOURNEY NAVIGATION SCRIPT

      // Modern Journey Navigation Functionality
      document.addEventListener('DOMContentLoaded', function () {
          // Get all navigation steps and content sections
          const navSteps = document.querySelectorAll('.modern-nav-step, .modern-nav-substep');
          const contentSections = document.querySelectorAll('.modern-journey-card, .scrollspy-example-item');

          // Add click handlers to navigation steps
          navSteps.forEach(step => {
              step.addEventListener('click', function (e) {
                  e.preventDefault();

                  // Remove active class from all steps
                  document.querySelectorAll('.modern-nav-step').forEach(s => s.classList.remove('active'));

                  // Add active class to clicked step (only for main steps, not substeps)
                  if (this.classList.contains('modern-nav-step')) {
                      this.classList.add('active');
                  } else {
                      // For substeps, activate the parent step
                      const parentStep = document.querySelector('.modern-nav-step[href="#item-5"]');
                      if (parentStep) parentStep.classList.add('active');
                  }

                  // Get target section
                  const targetId = this.getAttribute('href');
                  const targetSection = document.querySelector(targetId);

                  if (targetSection) {
                      // Smooth scroll to target section
                      const offsetTop = targetSection.offsetTop - 120; // Account for sticky header
                      window.scrollTo({
                          top: offsetTop,
                          behavior: 'smooth'
                      });
                  }
              });
          });

          // Scrollspy functionality
          function updateActiveNavigation() {
              const scrollPosition = window.scrollY + 150; // Offset for better detection

              contentSections.forEach((section, index) => {
                  const sectionTop = section.offsetTop;
                  const sectionBottom = sectionTop + section.offsetHeight;
                  const sectionId = section.getAttribute('id');

                  if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                      // Remove active from all nav items
                      document.querySelectorAll('.modern-nav-step').forEach(nav => nav.classList.remove('active'));

                      // Add active to corresponding nav item
                      const correspondingNav = document.querySelector(`.modern-nav-step[href="#${sectionId}"], .modern-nav-substep[href="#${sectionId}"]`);
                      if (correspondingNav) {
                          if (correspondingNav.classList.contains('modern-nav-step')) {
                              correspondingNav.classList.add('active');
                          } else {
                              // For substeps, activate the parent step
                              const parentStep = document.querySelector('.modern-nav-step[href="#item-5"]');
                              if (parentStep) parentStep.classList.add('active');
                          }
                      }
                  }
              });
          }

                          // Listen for scroll events
          window.addEventListener('scroll', updateActiveNavigation);

          // Initialize on page load
          updateActiveNavigation();
      });
