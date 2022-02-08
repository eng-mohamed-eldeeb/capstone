const speakersData = [
    {
    name: "Ahmed helmy",
    img_source: './imgs/speaker1.jpg',
    occupation: "dolor psumectetur adipisicing elit.",
    inini: "psum dolor sit amLorem, iet abore nostrum laudantium eaque suscipit cupiditate?"
},
    {
    name: "Mie Eaz El-deen",
    img_source: './imgs/speaker2.jpg',
    occupation: "sit amet consectet dolor, r adipisi",
    inini: "r sit amet consectetu elit. Laboium eaque suscipit cupiditate?"
},
    {
    name: "Maged El-kedwani",
    img_source: './imgs/speaker3.jpg',
    occupation: "ipsum dolor, sit ame adipisicing elit.",
    inini: "ipsum dolcing elit. La laudantium eaque suscipit cupiditate?"
},
    {
    name: "Ahmed Eez",
    img_source: './imgs/speaker4.jpg',
    occupation: "L amet consectetur adipisicing elit.",
    inini: "Lorem, ipsum dolor sium eaque suscipit cupiditate?"
},
    {
    name: "Bioumi fouad",
    img_source: './imgs/speaker5.jpg',
    occupation: "dolor, sit amepsum onsecteg elit.",
    inini: "Lorem, ipsum dolor sitntium eaque suscipit cupiditate?"
},
    {
    name: "Ahmed saad",
    img_source: './imgs/speaker6.jpg',
    occupation: "lor, Lorem ipsum dosipisicing elit.",
    inini: "psum dolor sit amet itue suscipit cupiditate?"
},
]

const ul_ = document.querySelector('.speaker ul');


function speakerCreation(speaker) {
    const liWithData = `
        <li>
            <div class="speakerImg ahmed"><img src="${speaker.img_source}" alt=""></div>
            <div class="speakerInfo">
            <h2>${speaker.name}</h2>
            <ul>
                <li>
                <p>${speaker.occupation}</p>
                </li>
            <li>${speaker.inini}</li>
            </ul>
            </div>
        </li>`
        console.log(speaker.name)
        ul_.innerHTML += liWithData;

}


for (let i = 0; i < speakersData.length ; i++) {
    speakerCreation(speakersData[i]);

}

