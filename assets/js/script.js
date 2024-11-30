document.addEventListener("DOMContentLoaded", function () {
  /*----------About me function----------*/
  const aboutTitle = document.getElementById("about-title");
  const aboutContent = document.getElementById("about-content");
  let isShow = false;

  function showHideTitle() {
    if (isShow) {
      aboutContent.style.display = "none";
      isShow = false;
    } else {
      aboutContent.style.display = "block";
      isShow = true;
    }
  }
  aboutTitle.addEventListener("click", () => {
    showHideTitle();
  });

  /*---------- Modal for opening and closing my interests ----------*/
  const openButton = document.getElementById("open");
  const closeButton = document.getElementById("close");
  const modalContainer = document.getElementById("modal_container");

  /*-----Show modal-----*/
  openButton.addEventListener("click", () => {
    modalContainer.style.display = "flex";
  });

  /*-----Hide modal-----*/

  modalContainer.addEventListener("click", (event) => {
    if (event.target === modalContainer) {
      modalContainer.style.display = "none";
    }
  });
  closeButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

 
});
