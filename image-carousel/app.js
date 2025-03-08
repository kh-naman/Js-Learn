
const images = [
    {
      url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beautiful Mountain Landscape',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Ocean Sunset View',
    },
    {
      url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Autumn Forest Path',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Urban City Skyline',
    },
  ];
  let countdownTimer = null;
  let timer = 2;
  const timerDisplay = document.getElementById("timerDisplay")
  let autoPlay = false;
  let autoPlayInterval = null
  const autoPlayButton = document.getElementById("autoPlayButton")
  const caption = document.getElementById("caption")
  const carouselNav = document.getElementById("carouselNav")
  let currentIndex = 0;
  const carouselTrack = document.getElementById("carouselTrack")
  images.forEach((image,index)=>{

    const img = document.createElement('img')
    img.setAttribute("src",image.url)
    img.classList.add("carousel-slide")
    
    carouselTrack.appendChild(img)

    const indicatorDiv = document.createElement('div')
    indicatorDiv.classList.add("carousel-indicator")
    indicatorDiv.addEventListener("click",()=>{
        const allNav = document.querySelectorAll(".carousel-indicator")
        allNav[currentIndex].classList.remove("active")
        currentIndex = index
        allNav[currentIndex].classList.add("active")
        updateCarousel()
    })
    carouselNav.appendChild(indicatorDiv)
    if(index === 0)
    {
        caption.innerText = image.caption
        indicatorDiv.classList.add("active")
    }
  })
  
  
  const prevButton = document.getElementById("prevButton")
  const nextButton = document.getElementById("nextButton")

  prevButton.addEventListener("click",()=>{
    const allNav = document.querySelectorAll(".carousel-indicator")
    allNav[currentIndex].classList.remove("active")
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    allNav[currentIndex].classList.add("active")
    updateCarousel();
    
  })

  nextButton.addEventListener("click",()=>{
    HandleOnNextButtonClick()
    
  })

  function updateCarousel() {
    carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    caption.innerText = images[currentIndex].caption
}


autoPlayButton.addEventListener("click", () => {

    if(autoPlay)
    {
        clearInterval(autoPlayInterval)
        clearInterval(countdownTimer)
        autoPlayInterval = null;
        countdownTimer = null
        timerDisplay.innerText = "";
        autoPlayButton.innerText = "Start AutoPlay";
    }
    else{
        timer = 2;
        startCountDown();
        autoPlayInterval = setInterval(HandleOnNextButtonClick, 2*1000);
        autoPlayButton.innerText = "Stop AutoPlay";

    }
    autoPlay = !autoPlay;
}); 



function HandleOnNextButtonClick()
{
    const allNav = document.querySelectorAll(".carousel-indicator")
    allNav[currentIndex].classList.remove("active")
    currentIndex = (currentIndex + 1) % images.length; 
    allNav[currentIndex].classList.add("active")
    updateCarousel();
    timer = 2;
}

function startCountDown()
{
    timerDisplay.innerText = `Next transition in: ${timer} seconds`;
    countdownTimer = setInterval(() => {
        timer--;
        timerDisplay.innerText = `Next transition in: ${timer} seconds`;

        if (timer <= 0) {
            timer = 2;
        }
    }, 1000);
}
