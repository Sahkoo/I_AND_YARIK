document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".rental");
    const elementsNew = document.querySelectorAll(".search-box")
    const newElements = document.querySelectorAll(".stats")
    const newElementsCars = document.querySelectorAll(".car-list")
    const newElementsCards = document.querySelector(".block__card-new")
  
    function checkScroll() {
      const triggerBottom = window.innerHeight * 0.9;
  
      elements.forEach((el) => {
        const boxTop = el.getBoundingClientRect().top;
  
        if (boxTop < triggerBottom) {
          el.classList.add("visible");
        }
      });
  
      const triggerBottomNew = window.innerHeight * 0.9;
  
      elementsNew.forEach((el) => {
        const boxTop = el.getBoundingClientRect().top;
  
        if (boxTop < triggerBottomNew) {
          el.classList.add("visible");
        }
      });
  
  
      const triggerBottomNews = window.innerHeight * 0.9;
  
      newElements.forEach((el) => {
        const boxTop = el.getBoundingClientRect().top;
  
        if (boxTop < triggerBottomNews) {
          el.classList.add("visible");
        }
      });
  
  
      const triggerBottomNewsCars = window.innerHeight * 0.9;
  
      newElementsCars.forEach((el) => {
        const boxTop = el.getBoundingClientRect().top;
  
        if (boxTop < triggerBottomNewsCars) {
          el.classList.add("visible");
        }
      });
    }
 
  
   
    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
  });
    
     