
  
/*   document.addEventListener("DOMContentLoaded", function () {
  const bookButtons = document.querySelectorAll(".book-btn");
  
  if (bookButtons.length === 0) {
      console.error("Кнопки для бронювання не знайдені.");
      return;
  }

  bookButtons.forEach(button => {
      button.addEventListener("click", function () {
          const carNameElement = this.parentElement.querySelector("h3");
          if (!carNameElement) {
              console.error("Елемент h3 не знайдено.");
              return;
          }
          const carName = carNameElement.textContent;
          const confirmBooking = confirm(`Ви хочете забронювати ${carName}?`);
          
          if (confirmBooking) {
              alert("Авто заброньовано!");
          }
      });
  }); 
});
 */
/*  */


document.getElementById('submitBtn').addEventListener('click', function() {
    const firstName = prompt("Введіть ваше ім'я:");
    const lastName = prompt("Введіть ваше прізвище:");

    if (firstName && lastName) {
        alert(`Ваше ім'я: ${firstName} ${lastName}`);
        document.getElementById('display').innerText = `${firstName} ${lastName}`;
    } else {
        alert("Будь ласка, введіть коректні дані.");
    }
});




document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const btn = document.querySelector(".btn-outline");
    const closeBtn = document.querySelector(".close");
  
    btn.addEventListener("click", function () {
      modal.classList.add("show");
    });
  

    closeBtn.addEventListener("click", function () {
      modal.classList.remove("show");
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.classList.remove("show");
      }
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal1");
    const btn = document.querySelector(".info__button-headers");
    const closeBtn = document.querySelector(".close1");
  
    btn.addEventListener("click", function () {
      modal.classList.add("show");
    });
  

    closeBtn.addEventListener("click", function () {
      modal.classList.remove("show");
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.classList.remove("show");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal2");
    const btn = document.querySelector(".info__button-headers-contact");
    const closeBtn = document.querySelector(".close2");
  
    btn.addEventListener("click", function () {
      modal.classList.add("show");
    });
  

    closeBtn.addEventListener("click", function () {
      modal.classList.remove("show");
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.classList.remove("show");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal3");
    const btn = document.querySelector(".search_box-button");
    const closeBtn = document.querySelector(".close3");
    const readyBtn = document.querySelector(".modal__text-info-button");
  
    btn.addEventListener("click", function () {
      modal.style.display = "flex";
      setTimeout(() => modal.classList.add("show"), 10);
    });
  
    function closeModal() {
      modal.classList.remove("show");
      setTimeout(() => modal.style.display = "none", 300);
    }

    closeBtn.addEventListener("click", closeModal);
    readyBtn.addEventListener("click", closeModal);

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
});
  
/*  */


const cars = [
    {
      img: "https://scalethumb.leparking.fr/unsafe/331x248/smart/https://cloud.leparking.fr/2023/01/05/05/37/dodge-challenger-2023-dodge-challenger-srt-hellcat-white_8690157090.jpg",
      name: "Dodge Challenger",
      rating: "⭐ 5.0 | 🚗 4 seats",
      price: "$89 / Hour"
    },
    {
      img: "https://www.autocentre.ua/wp-content/uploads/2021/02/3645470.jpg",
      name: "Toyota Camry",
      rating: "⭐ 4.4 | 🚗 4 seats",
      price: "$69 / Hour"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1s80TXiA6G1nKUWCa3ZDK2yPQuV2izcG1sMgrxEcoewTf9W5RQGINbrlSQHnmmG2GJZY&usqp=CAU",
      name: "Porsche Panamera",
      rating: "⭐ 4.0 | 🚗 4 seats",
      price: "$59 / Hour"
    },
    {
      img: "https://www.leasecosts.ca/sites/default/files/styles/car_thumb_big/public/2024-04/ford-canada-ford-f150.jpg?itok=OaslRIvJ",
      name: "Ford F-150S",
      rating: "⭐ 3.8 | 🚗 4 seats",
      price: "$39 / Hour"
    },
    {
      img: "https://baza-gai.com.ua/catalog-images/nissan/skyline/model.jpg",
      name: "Nissan Skyline",
      rating: "⭐ 4.5 | 🚗 4 seats",
      price: "$75 / Hour"
    },
    {
      img: "https://www.2dvornika.com.ua/public/images/cars/tsupra3.jpg",
      name: "Toyota Supra",
      rating: "⭐ 4.3 | 🚗 4 seats",
      price: "$65 / Hour"
    },
    {
      img: "https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/renault-duster__2868785-341x224x60.jpg",
      name: "Renault Duster",
      rating: "⭐ 4.1 | 🚗 4 seats",
      price: "$55 / Hour"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfPl9nWG3k1KyiArOaGE_0vwZ7HHrqgBiM8w&s",
      name: "LC200",
      rating: "⭐ 3.9 | 🚗 4 seats",
      price: "$45 / Hour"
    },
    {
      img: "https://global.toyota/pages/news/images/2024/04/18/1330/20240418_01_ogp.jpg",
      name: "LC PRADO",
      rating: "⭐ 4.7 | 🚗 4 seats",
      price: "$85 / Hour"
    },
    {
      img: "https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/skoda-kodiaq__2191271-1920x1080x90.webp",
      name: "Skoda Kodiaq",
      rating: "⭐ 4.2 | 🚗 4 seats",
      price: "$70 / Hour"
    },
    {
      img: "https://krazyhorse.co.uk/cdn/shop/products/charger-hellcat-pitchblack_2000x.jpg?v=1573228132",
      name: "Doodge Hellcat",
      rating: "⭐ 4.0 | 🚗 4 seats",
      price: "$60 / Hour"
    },
    {
      img: "https://cdn.wheel-size.com/automobile/body/audi-rs7-2019-2023-1708148192.76531.jpg",
      name: "Audi Rs7",
      rating: "⭐ 3.7 | 🚗 4 seats",
      price: "$50 / Hour"
    },
    {
        img: "https://master.shop/storage/units/big/audi-rs6-avant-2020.jpg",
        name: "Audi Rs6",
        rating: "⭐ 3.7 | 🚗 4 seats",
        price: "$50 / Hour"
      },
      {
        img: "https://strg1.nm.kz/neofiles/serve-image/63ce4c589842fe0007c8470f/1190x500/q90",
        name: "Porsche Macan",
        rating: "⭐ 3.7 | 🚗 4 seats",
        price: "$50 / Hour"
      },
      {
        img: "https://avatars.mds.yandex.net/get-autoru-vos/6932162/974b1ab3188acbfdd4f7c400142bd856/456x342",
        name: "BMW M5 F90",
        rating: "⭐ 3.7 | 🚗 4 seats",
        price: "$50 / Hour"
      },
      {
        img: "https://s3.eu-central-2.wasabisys.com/shikauto-autocatalog/2e022074f932965dd181b31301e91d57/2801/1720001015N83CMB.jpg",
        name: "BMW M5 G90",
        rating: "⭐ 3.7 | 🚗 4 seats",
        price: "$50 / Hour"
      },
      {
        img: "https://media.zigcdn.com/media/model/2021/Jun/land-cruiser-1_600x400.jpg",
        name: "LC 300",
        rating: "⭐ 3.7 | 🚗 4 seats",
        price: "$50 / Hour"
      },
      {
        img: "https://cdn.hevcars.com.ua/wp-content/uploads/2018/09/bmw-x5-xdrive45e-iperformance-exterior-hevcars-01.jpg",
        name: "BMW X5",
        rating: "⭐ 3.7 | 🚗 4 seats",
        price: "$50 / Hour"
      },
      {
        img: "https://www.auto-plus.tn/assets/modules/newcars/toyota/rav-4-hybride/couverture/toyota_rav-4-hybride.jpg",
        name: "Toyota Rav 4",
        rating: "⭐ 3.7 | 🚗 4 seats",
        price: "$50 / Hour"
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZLA6x05Z6e5F5x6TBVREgm5CyXOrlOASn6I5pPj2LVOkdTbfaGZyw53VLu8Cv0o2ylo&usqp=CAU",
        name: "Honda CR-V",
        rating: "⭐ 3.7 | 🚗 4 seats",
        price: "$50 / Hour"
      },
      {
        img: "https://ukravto.ua/files/kia%20pics/Kia-sportage-anniversary-my24-2-kwcms-620x466.jpg",
        name: "Kia Sportage",
        rating: "⭐ 3.7 | 🚗 4 seats",
        price: "$50 / Hour"
      },
      {
        img: "https://www.winnerauto.ua/uploads/auto_models/image_menu/0000/92.jfif",
        name: "Range Rover",
        rating: "⭐ 3.7 | 🚗 4 seats",
        price: "$50 / Hour"
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQbPscVz52-GQxFklFJEbLxAVVMaSHrOzzJ69Uu3oOzKofOAO14TmbHBM8KgVEspYOOJE&usqp=CAU",
        name: "Houndai Sonata",
        rating: "⭐ 3.7 | 🚗 4 seats",
        price: "$50 / Hour"
      },
      {
        img: "https://boutique.bodemerauto.com/photo/3555/3555-1.jpg/renault-renault-rafale-2024-pack-de-personnalisation-exterieure-renault-rafale",
        name: "Renault Rafale",
        rating: "⭐ 3.7 | 🚗 4 seats",
        price: "$50 / Hour"
      }
  ];
  



const carList = document.querySelector(".car-list");
const pageButtons = document.querySelectorAll(".page-btn");
const carsPerPage = 4;
let currentPage = 1;

function renderCars(page) {
  carList.innerHTML = "";
  const start = (page - 1) * carsPerPage;
  const end = start + carsPerPage;
  const carsToDisplay = cars.slice(start, end);

  carsToDisplay.forEach(car => {
    const carCard = document.createElement("div");
    carCard.classList.add("car-card");
    carCard.innerHTML = `
      <img class="img__card" src="${car.img}" alt="${car.name}" />
      <h3>${car.name}</h3>
      <p>${car.rating}</p>
      <p>Starts from <strong>${car.price}</strong></p>
      <button class="book-btn">Book Now</button>
    `;
    carList.appendChild(carCard);
  });

  attachBookingEvent(); 
}

function changePage(newPage) {
  if (newPage < 1) {
    newPage = 1;
  } else if (newPage > Math.ceil(cars.length / carsPerPage)) {
    newPage = Math.ceil(cars.length / carsPerPage);
  }
  
  currentPage = newPage;
  renderCars(currentPage);
}

pageButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const page = Number(e.target.dataset.page);
    
    if (page) {
      changePage(page);
    } else {
      if (e.target.textContent === "⬅") {
        changePage(currentPage - 1);
      } else if (e.target.textContent === "⮕") {
        changePage(currentPage + 1);
      }
    }
  });
});

function attachBookingEvent() {
  const bookButtons = document.querySelectorAll(".book-btn");
  
  bookButtons.forEach(button => {
    button.addEventListener("click", function () {
      const carNameElement = this.parentElement.querySelector("h3");
      if (!carNameElement) {
        console.error("Елемент h3 не знайдено.");
        return;
      }
      const carName = carNameElement.textContent;
      const confirmBooking = confirm(`Ви хочете забронювати ${carName}?`);
      
      if (confirmBooking) {
        alert("Авто заброньовано!");
      }
    });
  });
}

renderCars(currentPage);

/*  */

document.addEventListener("DOMContentLoaded", function () {
  const viewAllCarsButton = document.querySelector(".btn"); 
  const carListSection = document.querySelector(".car-list"); 

  if (viewAllCarsButton && carListSection) {
    viewAllCarsButton.addEventListener("click", function () {
      carListSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру'],
        datasets: [{
            label: 'Продажі',
            data: [10, 20, 15, 25, 30, 28, 35, 40, 38, 50, 45, 55],
            borderColor: 'green',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

let lastScrollY = window.scrollY; 

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let changeInScroll = scrollY - lastScrollY;


    if (changeInScroll > 0) {

        myChart.data.datasets[0].data = myChart.data.datasets[0].data.map(value => value + 1); 
    } else if (changeInScroll < 0) {

        myChart.data.datasets[0].data = myChart.data.datasets[0].data.map(value => value - 1); 
    }

    myChart.update(); 
    lastScrollY = scrollY; 
});


window.onload = function() {

  const loader = document.getElementById('loader');
  loader.style.display = 'none';


  const content = document.getElementById('content');
  content.style.display = 'block';
};

/* Parralax */
const car = document.getElementById('car');

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const xPos = (clientX / windowWidth) * 2 - 1; 
    const yPos = (clientY / windowHeight) * 2 - 1; 
    const moveX = xPos * 20; 
    const moveY = -yPos * 20; 
    car.style.transform = `translate(${moveX}px, ${moveY}px)`;
});