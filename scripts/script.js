const countDownDate = new Date(
  `${new Date().getFullYear() + 1}-01-01T00:00:00`
).getTime();
const x = setInterval(() => {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    "timer"
  ).innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

let cards_container = document.querySelector(".cards-container");

cards_object = [
  {
    title: "Bitcoin",
    img: "/assets/bitcoin-card.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    price: "$43.5k",
  },
  {
    title: "Litecoin",
    img: "/assets/card-ether.png",

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    price: "$185.5k",
  },
  {
    title: "Etherum",
    img: "/assets/card-icon.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    price: "$3k",
  },
];

cards_object.map((e) => {
  cards_container.innerHTML += `     <div class="card" data-aos="fade-up" data-aos-duration="1000" >
    <img src=${e.img} alt=${e.src} />
    <h3>${e.title}</h3>
    <p>${e.description}</p>
    <div class="details-part">
        <h1 class="price">${e.price}</h1>
        <button class="market-btn">buy-now</button>
    </div>
  </div>`;
});

let features = document.querySelector(".Features-cards-container");
Features_card = [
  {
    title: "Weekly Contest",
    img: "/assets/ic_outline-emoji-events.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  },
  {
    title: "Less Commission On Trade",
    img: "/assets/ic_outline-account-balance-wallet.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  },
  {
    title: "Safe And Secure ",
    img: "/assets/ic_outline-lock.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  },
  {
    title: "Instant Withdraw Process",
    img: "/assets/ic_baseline-attach-money.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  },
  {
    title: "Monthly Commition",
    img: "/assets/ic_baseline-card-giftcard.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  },
  {
    title: "24/7 Support Team",
    img: "/assets/ic_outline-headset-mic.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
  },
];

Features_card.map((e) => {
  features.innerHTML += ` <div class="Feature-card" data-aos="fade-up" data-aos-duration="1000">
    <div class="card-item">
      <img src=${e.img} alt=${e.title}/>
      <h3>${e.title}</h3>
    </div>
    <p>
    ${e.description}
   
    </p>
  </div>`;
});
let testimonals = document.querySelector(".testimonials-cards") 
testimonials_card = [
  {
    title: "John Doe",
    img: "./assets/Ellipse.svg",
    description:"Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel."
  } ,   
  {
    title: "Bessie Cooper",
    img: "./assets/Ellipse2.svg",
    description:"Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel."
  } ,  
  {
    title: "Albert Flores",
    img: "./assets/E3.svg",
    description:"Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel."
  } ,  
  
];
testimonials_card.map((e) => {  
    testimonals.innerHTML += `   <div class="testimonial-card " data-aos="fade-up" data-aos-duration="4000" >
    <img src="./assets/ic_outline-format-quote.svg" alt="quote" />
    <p class="quote">
      ${e.description}
    </p>
    <img src=${e.img} alt=${e.title}>
    <h3>${e.title}</h3>
    <p class="Role">FX Trader</p>
  </div>` ; 
}) ; 