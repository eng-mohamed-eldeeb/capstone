const speakersData = [
  {
    name: "Ahmed helmy",
    img_source: "./imgs/speaker1.jpg",
    occupation: "dolor psumectetur adipisicing elit.",
    description:
      "psum dolor sit amLorem, iet ostrum laudantium eaque suscipit",
  },
  {
    hidden: "hidden",
    name: "Mie Eaz El-deen",
    img_source: "./imgs/speaker2.jpg",
    occupation: "sit amet consectet dolor, r adipisi",
    description: "r sit amet consectetu elit. Laboium eaque suscipit cupiditate?",
  },
  {
    name: "Maged El-kedwani",
    img_source: "./imgs/speaker3.jpg",
    occupation: "ipsum dolor, sit ame adipisicing elit.",
    description: "ipsum dolcing elit. La laudantium eaque suscipit cupiditate?",
  },
  {
    name: "Ahmed Eez",
    img_source: "./imgs/speaker4.jpg",
    occupation: "L amet consectetur adipisicing elit.",
    description: "Lorem, ipsum dolor sium eaque suscipit cupiditate?",
  },
  {
    name: "Bioumi fouad",
    img_source: "./imgs/speaker5.jpg",
    occupation: "dolor, sit amepsum onsecteg elit.",
    description: "Lorem, ipsum dolor sitntium eaque suscipit cupiditate?",
  },
  {
    name: "Ahmed saad",
    img_source: "./imgs/speaker6.jpg",
    occupation: "lor, Lorem ipsum dosipisicing elit.",
    description: "psum dolor sit amet itue suscipit cupiditate?",
  },
];

const ul_ = document.querySelector(".speaker ul");

function speakerCreation(speaker, index) {
  const liWithData = `
        <li class=${index > 1 ? 'hidable' : ''}>
            <div class="speakerImg"><img src="${speaker.img_source}" alt=""></div>
            <div class="speakerInfo">
            <h2>${speaker.name}</h2>
                <div>
                <p>${speaker.occupation}</p>
                </div>
            <div><p>${speaker.description}</p></div>
            </div>
        </li>`;
  ul_.innerHTML += liWithData;
}


  for (let i = 0; i < speakersData.length; i++) {
    speakerCreation(speakersData[i],i);
  }

const speakerButton = document.querySelector('.speakerbutton');

const list = document.querySelector('.speakersList');

speakerButton.addEventListener('click', () =>{
  list.classList.toggle('expand');
})

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
