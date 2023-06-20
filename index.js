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
  let infoList = '';

  for (let j = 0; j < projectInfos[i].info.length; j += 1) {
    infoList += `<li>${projectInfos[i].info[j]}</li>`;
  }

  let technologiesList = '';
  for (let k = 0; k < projectInfos[i].technologies.length; k += 1) {
    technologiesList += `<li>${projectInfos[i].technologies[k]}</li>`;
  }

  projectCard.innerHTML = `
      <div class="project-card">
      <img src="${projectInfos[i].image}" class="project-card_image">
      <div class="project-card_details">
        <div class="stacks">
          <h2>${projectInfos[i].title}</h2>
        <div class="works_card_history">
          <ul>
            ${infoList}
          </ul>
        </div>
        </div>
        <div class="stacks">
          <ul>
            ${technologiesList}
          </ul>
        </div>
        <button class="green-button">See project</button>
        </div>
      </div>
    </div>
  `;

  card.appendChild(projectCard);
}