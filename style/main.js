function slide(containerId) {
    const containers = document.getElementsByClassName("portfolio-card");
    for (const container of containers) {
      container.classList.remove("active-card");
      container.style.opacity = 0;
      container.style.height = 0;
    }
  
    const containerToShow = document.getElementById(containerId);
    if (containerToShow) {
      containerToShow.classList.add("active-card");
      containerToShow.style.opacity = 1;
      containerToShow.style.height = "auto";
    }
  }
  