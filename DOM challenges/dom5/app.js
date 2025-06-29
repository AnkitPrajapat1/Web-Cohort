// /**
//  * Write your challenge solution here
//  */
// // Image data
// const images = [
//   {
//     url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     caption: "Beautiful Mountain Landscape",
//   },
//   {
//     url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     caption: "Ocean Sunset View",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     caption: "Autumn Forest Path",
//   },
//   {
//     url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     caption: "Urban City Skyline",
//   },
// ];

// const imageTrack = document.getElementById("carouselTrack");
// const next = document.getElementById("nextButton");
// const previous = document.getElementById("prevButton");
// const caption = document.getElementById("caption");
// const nav = document.getElementById("carouselNav");

// images.forEach(() => {
//   const div = document.createElement("div");
//   div.classList.add("carousel-indicator");
//   nav.appendChild(div);
// });

// let index = 0;
// let img = document.createElement("img");
// let link = images[index].url;
// // console.log(link);
// img.setAttribute("src", link);
// imageTrack.appendChild(img);
// img.classList.add("carousel-slide");
// caption.innerText = images[index].caption;

// next.addEventListener("click", () => {
//   //   let index2 = 0;
//   index = ++index % images.length;
//   console.log(images.length);
//   console.log(index);
//   let link = images[index].url;
//   img.setAttribute("src", link);
//   //   img.classList.add("carousel-slide");
//   caption.innerText = images[index].caption;
// });

// previous.addEventListener("click", () => {
//   index == 0 ? (index = images.length - 1) : (index = --index % images.length);
//   //   console.log(images.length);
//   console.log(index);
//   let link = images[index].url;
//   img.setAttribute("src", link);
//   caption.innerText = images[index].caption;
// });

// // images.forEach((index) => {
// //   let img = document.createElement("img");
// //   //   console.log(index);
// //   let url = index.url;
// //   console.log(url);
// //   img.setAttribute("src", url);
// //   // console.log(images[index].caption);
// //   imageTrack.appendChild(img);
// // });

/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

const carousel_track = document.querySelector(".carousel-track");
const carouselCaption = document.querySelectorAll(".carousel-caption");
const prevBtn = document.querySelector("#prevButton");
const nextBtn = document.querySelector("#nextButton");
const carousel_nav = document.querySelector(".carousel-nav");
const autoPlaybtn = document.querySelector("#autoPlayButton");
const timer = document.querySelector("#timerDisplay");

let currInedex = 0;

let autoPlay;
let timeInterval;

document.addEventListener("DOMContentLoaded", () => {
  images.forEach((img, index) => {
    const image = document.createElement("img");
    image.src = img.url;
    image.classList = "carousel-slide";
    image.dataset.index = index;
    carousel_track.appendChild(image);

    const point = document.createElement("div");
    point.classList = "carousel-indicator";
    point.dataset.index = index;
    carousel_nav.appendChild(point);

    //console.log(point);
  });

  const updateCarosel = (currInedex) => {
    carouselCaption.forEach((cap, i) => {
      console.log(carouselCaption);
      cap.innerText = images[currInedex].caption;
      cap.classList.add("carousel-caption", i === currInedex);
    });

    document.querySelectorAll(".carousel-slide").forEach((img, i) => {
      img.style.display = i === currInedex ? "block" : "none";
    });
    document.querySelectorAll(".carousel-indicator").forEach((dot, i) => {
      dot.classList.toggle("active", i == currInedex);
    });
  };

  updateCarosel(currInedex);

  prevBtn.addEventListener("click", () => {
    currInedex = (currInedex - 1 + images.length) % images.length; 
    updateCarosel(currInedex);
  });

  nextBtn.addEventListener("click", () => {
    currInedex = (currInedex + 1 + images.length) % images.length;
    updateCarosel(currInedex);
  });

  // function startTimer(){

  // }

  // function startAutoplay(){
  //    let autoPlay= setInterval(()=>{
  //     currInedex=(currInedex +1 + images.length) % images.length;
  //     updateCarosel(currInedex)
  //    },5000)

  // }

  autoPlaybtn.addEventListener("click", () => {
    if (autoPlaybtn.innerText === "Start Auto Play") {
      let time = 5;
      timer.innerText = `Next slide in ${time}s`;
      timeInterval = setInterval(() => {
        time--;
        timer.innerText = `Next slide in ${time}s`;
        if (time === 0) {
          time = 5;
        }
      }, 1000);

      autoPlay = setInterval(() => {
        currInedex = (currInedex + 1 + images.length) % images.length;
        updateCarosel(currInedex);
      }, 5000);

      autoPlaybtn.innerText = "Stop Auto Play";
      
    } else {
      clearInterval(autoPlay);
      clearInterval(timeInterval);
      timer.innerText = "";
      autoPlaybtn.innerText = "Start Auto Play";
    }
  });
});
