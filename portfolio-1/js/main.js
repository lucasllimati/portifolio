// about section tabs
(() => {
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        // if event.target contains 'tab-item' class and not contains 'active' class
        if(event.target.classList.contains("tab-item") &&
          !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            // deactivate existing active 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            // activate new 'tab-item'
            event.target.classList.add("active", "outer-shadow")
            // deactivate existing active 'tab-item'
            aboutSection.querySelector(".tab-content.active").classList.remove("active")
            // activate new 'tab-item'
            aboutSection.querySelector(target).classList.add("active");


          }
    })
})();

// portfolio filter and popup
(() => {
  const filterContainer = document.querySelector(".portfolio-filter"),
  portfolioItemsContainer = document.querySelector(".portfolio-items"),
  portfolioItems = document.querySelectorAll(".portfolio-item"),
  popup = document.querySelector(".portfolio-popup")
})