// Mobile Menu
const navMenus = document.querySelector('.nav-menu');
const openHamburger = document.querySelector('.mobile-menu-icon');
const closeHamburger = document.querySelector('.mobile-menu-close-icon');
const mobileMenuLinks = document.querySelectorAll('.mobile-links');

openHamburger.addEventListener('click', () => {
  navMenus.classList.add('show');
  openHamburger.classList.add('hide');
  closeHamburger.classList.add('show');
  document.body.style.overflow = 'hidden';
});

closeHamburger.addEventListener('click', () => {
  navMenus.classList.remove('show');
  openHamburger.classList.remove('hide');
  closeHamburger.classList.remove('show');
  document.body.style.overflow = 'auto';
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenus.classList.remove('show');
    openHamburger.classList.remove('hide');
    closeHamburger.classList.remove('show');
    document.body.style.overflow = 'auto';
  });
});

// Popup
const card = document.getElementById('projectCards');

const projectInfos = [
  {
    id: 0,
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
  },
  {
    id: 1,
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
  },
  {
    id: 2,
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
  },
  {
    id: 3,
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
  },
  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
  },
  {
    id: 5,
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
  },
];

for (let i = 0; i < projectInfos.length; i += 1) {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');
  let technologiesList = '';
  for (let j = 0; j < projectInfos[i].technologies.length; j += 1) {
    technologiesList += `<li>${projectInfos[i].technologies[j]}</li>`;
  }

  projectCard.innerHTML = `
      <div class="project-card">
        <div class="project-card_image">
          
        </div>
        <div class="project-card_details">
          <h3>${projectInfos[i].title}</h3>
          <div class="stacks">
            <ul>
              ${technologiesList}
            </ul>
          </div>
          <button class="green-button">See project</button>
        </div>
      </div>
  `;

  card.appendChild(projectCard);
}

// const poppedUpCard = document.querySelector('.popup-card');
// const popUpButton = document.getElementsByClassName('green-button');
// const popUpCard = document.createElement('div');

// for (let i = 0; i < popUpButton.length; i += 1) {
//   popUpButton[i].addEventListener('click', () => {
//     console.log('Hello')
//   });
// }

const arrayBtnPopup = document.querySelectorAll('.btn-popup');

for (let i = 0; i < arrayBtnPopup.length; i++) {
  arrayBtnPopup[i].addEventListener('click', () => {
    const cardWork = document.createElement('div');
    cardWork.innerHTML = cardWorkDetailsMobile(i);
    document.body.appendChild(cardWork);
    const btnCloseDetailsMobile = document.querySelector('.btn-close-details');
    btnCloseDetailsMobile.addEventListener('click', async () => {
      document.body.removeChild(cardWork);
    });
  });
}