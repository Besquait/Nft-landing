let tabNavItem = document.querySelectorAll('.tab-nav-item');
let tabContentItem = document.querySelectorAll('.tab_content');

tabNavItem.forEach(function(eLem) {
  eLem.addEventListener('click', activeTab);
})

function activeTab() {
  tabNavItem.forEach(function(eLem) {
    eLem.classList.remove('active');
  })
  this.classList.add('active');
  let tabName = this.getAttribute('data-tab');
  activeTabContent(tabName);
}

function activeTabContent(tabName) {
  tabContentItem.forEach(function(item) {
    if (item.classList.contains(tabName)) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })
}

new Swiper ('.swiper', {
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
   breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});





