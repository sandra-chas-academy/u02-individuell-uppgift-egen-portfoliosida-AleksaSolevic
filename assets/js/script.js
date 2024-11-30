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

  /*----------Import from JSON---------- */
  const workSection = document.querySelector(".employment");

  const educationSection = document.querySelector(".education");

  async function getContent() {
    try {
      const response = await fetch("./assets/cv.json");

      if (!response.ok) {
        throw new Error(`HTTP ERROR STATUS ${response.status}`);
      }

      const data = await response.json();
      displayWorkExperiences(data);
      displayEducationExperiences(data);
    } catch (error) {
      console.error("Error", error);
    }
  }
  /*-----Display Work Experiences-----*/
  function displayWorkExperiences(data) {
    const workHeader = document.createElement("h2");

    workHeader.textContent = `Work experience`;
    workSection.appendChild(workHeader);

    data.workExperiences.forEach((experience) => {
      const workExpArticle = document.createElement("article");
      workExpArticle.classList.add("work");

      const workDiv = document.createElement("div");
      workDiv.classList.add("work-name-type");

      const workName = document.createElement("h4");
      workName.classList.add("work-name");
      workName.innerHTML = experience.title;
      workDiv.appendChild(workName);

      const companyName = document.createElement("p");
      companyName.classList.add("company-name");

      const icon = document.createElement("i");
      icon.classList.add("fa-solid", "fa-basketball");
      companyName.appendChild(icon);
      companyName.innerHTML += `${experience.company_name}`;
      workDiv.appendChild(companyName);

      const companyLocation = document.createElement("p");
      companyLocation.classList.add("company-location");

      workDiv.appendChild(companyLocation);

      const iconLocation = document.createElement("i");
      iconLocation.classList.add("fa-solid", "fa-location-dot");
      companyLocation.appendChild(iconLocation);
      companyLocation.innerHTML += `${experience.location}`;

      workExpArticle.appendChild(workDiv);
      workSection.appendChild(workExpArticle);

      const workLengthDiv = document.createElement("div");
      workLengthDiv.classList.add("work-length");
      workExpArticle.appendChild(workLengthDiv);

      const workType = document.createElement("p");
      workType.classList.add("work-type");
      workType.textContent = experience.employment_type;
      workLengthDiv.appendChild(workType);

      const employmentLength = document.createElement("p");
      employmentLength.classList.add("employment-length");
      employmentLength.textContent = experience.employment_length;
      workLengthDiv.appendChild(employmentLength);
    });
  }

  /*-----Display education-----*/
  function displayEducationExperiences(data) {
    const educationHeader = document.createElement("h2");

    educationHeader.textContent = `Educations`;
    educationSection.appendChild(educationHeader);

    data.educationExperiences.forEach((experience) => {
      const educationExpArticle = document.createElement("article");
      educationExpArticle.classList.add("education");

      const educationDiv = document.createElement("div");
      educationDiv.classList.add("school-name-type");

      const educationName = document.createElement("h4");
      educationName.classList.add("education-name");
      educationName.textContent = experience.program;
      educationDiv.appendChild(educationName);

      const schoolName = document.createElement("p");
      schoolName.classList.add("school-name");
      educationDiv.appendChild(schoolName);

      const schoolIcon = document.createElement("i");
      schoolIcon.classList.add("fa-solid", "fa-building");
      schoolName.appendChild(schoolIcon);
      schoolName.innerHTML += `${experience.school_name}`;

      const schoolLocation = document.createElement("p");
      schoolLocation.classList.add("school-location");
      educationDiv.appendChild(schoolLocation);

      const schoolLocationIcon = document.createElement("i");
      schoolLocationIcon.classList.add("fa-solid", "fa-location-dot");
      schoolLocation.appendChild(schoolLocationIcon);
      schoolLocation.innerHTML += `${experience.location}`;

      const schoolLengthDiv = document.createElement("div");
      schoolLengthDiv.classList.add("school-length");
      educationDiv.appendChild(schoolLengthDiv);

      const educationType = document.createElement("p");
      educationType.classList.add("education-type");
      educationType.textContent = experience.education_type;
      schoolLengthDiv.appendChild(educationType);

      const educationLength = document.createElement("p");
      educationLength.classList.add("education-length");
      educationLength.textContent = experience.education_length;
      schoolLengthDiv.appendChild(educationLength);

      educationExpArticle.appendChild(educationDiv);
      educationExpArticle.appendChild(schoolLengthDiv);
      educationSection.appendChild(educationExpArticle);
    });
  }

  getContent();
});
