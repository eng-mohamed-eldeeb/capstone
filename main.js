const speakersData = [
  {
    name: 'Ahmed helmy',
    img_source: './imgs/speaker1.jpg',
    occupation: 'dolor psumecteticing elit.',
    description:
      'psum dolor sit amLm eaque suscipit',
  },
  {
    hidden: 'hidden',
    name: 'Mie Eaz El-deen',
    img_source: './imgs/speaker2.jpg',
    occupation: 'sit amet condolor, r adipisi',
    description: 'r sit supiditate?',
  },
  {
    name: 'Maged El-kedwani',
    img_source: './imgs/speaker3.jpg',
    occupation: 'ipsum dolor, sit icing elit.',
    description: 'ipsum dolcing elit. Lat cupiditate?',
  },
  {
    name: 'Ahmed Eez',
    img_source: './imgs/speaker4.jpg',
    occupation: 'L amet consectg elit.',
    description: 'Lorem, ipm eaque suscipit cupiditate?',
  },
  {
    name: 'Bioumi fouad',
    img_source: './imgs/speaker5.jpg',
    occupation: 'dolor, sit cteg elit.',
    description: 'Lorem, ipsum duscipit cupiditate?',
  },
  {
    name: 'Ahmed saad',
    img_source: './imgs/speaker6.jpg',
    occupation: 'lor, Lorem ipsusicing elit.',
    description: 'psum dolor upiditate?',
  },
];

const ull = document.querySelector('.speaker ul');

function speakerCreation(speaker, index) {
  const liWithData = `
        <li class=${index > 1 ? 'hidable' : ''}>
            <div class="speakerImg"><img src="${speaker.img_source}" alt=""></div>
            <div class="speakerInfo">
            <h2>${speaker.name}</h2>
                <div class="speakerOccupation">
                <p>${speaker.occupation}</p>
                </div>
            <div><p>${speaker.description}</p></div>
            </div>
        </li>`;
  ull.innerHTML += liWithData;
}

for (let i = 0; i < speakersData.length; i += 1) {
  speakerCreation(speakersData[i], i);
}

const speakerButton = document.querySelector('.speakerbutton');

const list = document.querySelector('.speakersList');

speakerButton.addEventListener('click', () => {
  list.classList.toggle('expand');
});

const menuIconDiv = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu i');
const menu = document.querySelector('.menu_contaner');
const xIcon = document.getElementById('iconX');
const menuLinks = document.querySelectorAll('.options li a');

[menuIcon, xIcon].forEach((e) => {
  e.addEventListener('click', () => {
    menu.classList.toggle('d-none');
    menu.classList.toggle('d-flex');
    menuIconDiv.classList.toggle('d-none');
  });
});

menuLinks.forEach((e) => {
  e.addEventListener('click', () => {
    menu.classList.toggle('d-none');
    menu.classList.toggle('d-flex');
    menuIconDiv.classList.toggle('d-none');
  });
});
