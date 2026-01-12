'use strict';

// ===================
// Render Functions
// ===================

// Render contacts list
function renderContacts() {
  const container = document.querySelector('[data-contacts-list]');
  if (!container || typeof contacts === 'undefined') return;

  container.innerHTML = contacts.map(contact => `
    <li class="contact-item">
      <div class="icon-box">
        <ion-icon name="${contact.icon}"></ion-icon>
      </div>
      <div class="contact-info">
        <p class="contact-title">${contact.title}</p>
        ${contact.isLink 
          ? `<a href="${contact.href}" class="contact-link">${contact.value}</a>`
          : `<address>${contact.value}</address>`
        }
      </div>
    </li>
  `).join('');
}

// Render services list
function renderServices() {
  const container = document.querySelector('[data-services-list]');
  if (!container || typeof services === 'undefined') return;

  container.innerHTML = services.map(service => `
    <li class="service-item">
      <div class="service-icon-box">
        <img src="${service.icon}" alt="${service.title} icon" width="40">
      </div>
      <div class="service-content-box">
        <h4 class="h4 service-item-title">${service.title}</h4>
        <p class="service-item-text">${service.text}</p>
      </div>
    </li>
  `).join('');
}

// Render filter buttons
function renderFilterButtons() {
  const filterList = document.querySelector('[data-filter-list]');
  const selectList = document.querySelector('[data-select-list]');
  if (!filterList || typeof filterCategories === 'undefined') return;

  // Desktop filter buttons
  filterList.innerHTML = filterCategories.map((cat, index) => `
    <li class="filter-item">
      <button ${index === 0 ? 'class="active"' : ''} data-filter-btn>${cat}</button>
    </li>
  `).join('');

  // Mobile select dropdown
  if (selectList) {
    selectList.innerHTML = filterCategories.map(cat => `
      <li class="select-item">
        <button data-select-item>${cat}</button>
      </li>
    `).join('');
  }
}

// Render projects list
function renderProjects() {
  const container = document.querySelector('[data-project-list]');
  if (!container || typeof projects === 'undefined') return;

  container.innerHTML = projects.map(project => `
    <li class="project-item active" data-filter-item data-category="${project.category}">
      <a href="${project.href}" target="_blank" rel="noopener">
        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
          <img src="${project.img}" alt="${project.title}" loading="lazy">
        </figure>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-category">${project.category}</p>
      </a>
    </li>
  `).join('');
}

// Render logs/blog posts
function renderLogs() {
  const container = document.querySelector('[data-logs-list]');
  if (!container || typeof logs === 'undefined') return;

  container.innerHTML = logs.map(log => `
    <li class="log-post-item">
      <a href="${log.href}" target="_blank" rel="noopener">
        <figure class="log-banner-box">
          <img src="${log.img}" alt="${log.title}" loading="lazy">
        </figure>
        <div class="log-content">
          <div class="log-meta">
            <p class="log-category">${log.category}</p>
          </div>
          <h3 class="h3 log-item-title">${log.title}</h3>
          <p class="log-text">${log.text}</p>
        </div>
      </a>
    </li>
  `).join('');
}

// Initialize all renders
function initRender() {
  renderContacts();
  renderServices();
  renderFilterButtons();
  renderProjects();
  renderLogs();
}

// Run render on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  initRender();
  initEventListeners();
});

// ===================
// Event Listeners
// ===================

function initEventListeners() {
  // element toggle function
  const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

  // sidebar variables
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  // sidebar toggle functionality for mobile
  if (sidebarBtn) {
    sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
  }

  // testimonials variables
  const modalContainer = document.querySelector("[data-modal-container]");
  const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");

  // modal toggle function
  const testimonialsModalFunc = function () {
    if (modalContainer) modalContainer.classList.toggle("active");
    if (overlay) overlay.classList.toggle("active");
  }

  // add click event to modal close button
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  if (overlay) overlay.addEventListener("click", testimonialsModalFunc);

  // custom select variables
  const select = document.querySelector("[data-select]");
  const selectValue = document.querySelector("[data-selecct-value]");

  if (select) {
    select.addEventListener("click", function () { elementToggleFunc(this); });
  }

  // filter function
  const filterFunc = function (selectedValue) {
    const filterItems = document.querySelectorAll("[data-filter-item]");
    for (let i = 0; i < filterItems.length; i++) {
      if (selectedValue === "all") {
        filterItems[i].classList.add("active");
      } else if (selectedValue === filterItems[i].dataset.category) {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }
    }
  }

  // add event in all select items (mobile dropdown)
  const selectList = document.querySelector('[data-select-list]');
  if (selectList) {
    selectList.addEventListener('click', function(e) {
      const item = e.target.closest('[data-select-item]');
      if (!item) return;
      
      let selectedValue = item.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = item.innerText;
      if (select) elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  }

  // add event in all filter button items for large screen
  const filterList = document.querySelector('[data-filter-list]');
  if (filterList) {
    let lastClickedBtn = filterList.querySelector('[data-filter-btn]');
    
    filterList.addEventListener('click', function(e) {
      const btn = e.target.closest('[data-filter-btn]');
      if (!btn) return;

      let selectedValue = btn.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = btn.innerText;
      filterFunc(selectedValue);

      if (lastClickedBtn) lastClickedBtn.classList.remove("active");
      btn.classList.add("active");
      lastClickedBtn = btn;
    });
  }

  // page navigation variables
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  // add event to all nav link
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
      for (let j = 0; j < pages.length; j++) {
        if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
          pages[j].classList.add("active");
          navigationLinks[j].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          pages[j].classList.remove("active");
          navigationLinks[j].classList.remove("active");
        }
      }
    });
  }
}
