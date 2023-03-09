window.addEventListener("DOMContentLoaded", () => {
  (() => {
    const swiperElem = document.querySelector("#events__swiper");
    swiperElem.classList.add("events__swiper-flex");
    const mainPath = `./imgs/events`;
    const mainResolutions = [600, 1000, 1300];
    const mainImgPathPart = [`/Desktop-1920`];
    const addImgPaths = ["/Mobile-320", "/Tablet-768", "/Tablet-1024"];

    //ГОТОВО ДЛЯ ЗАМЕНЫ
    //ГОТОВО ДЛЯ ЗАМЕНЫ
    //ГОТОВО ДЛЯ ЗАМЕНЫ
    //ГОТОВО ДЛЯ ЗАМЕНЫ
    //ГОТОВО ДЛЯ ЗАМЕНЫ
    //ГОТОВО ДЛЯ ЗАМЕНЫ

    {
      swiperElem.classList.add("events__swiper", "swiper");
      const wrapper = document.createElement("div");
      wrapper.classList.add("swiper-wrapper", "events__wrapper");
      wrapper.id = "events__wrapper";
      for (let currI = 0; currI < 5; currI++) {
        const textCont = eventsArray[currI];
        const currSlide = document.createElement("div");
        currSlide.classList.add("swiper-slide", "events__slide-id");
        const currEvent = document.createElement("div");
        currEvent.classList.add("events__content");
        const currImg = document.createElement("picture");
        currImg.classList.add("picture-element", "events__picture");
        for (let n = 0; n < addImgPaths.length; n++) {
          const addPart = document.createElement("source");
          const path = `${mainPath}${addImgPaths[n]}/img-${currI + 1}.jpg`;
          addPart.srcset = path;
          addPart.media = `(max-width: ${mainResolutions[n]}px)`;
          currImg.append(addPart);
        }
        const mainPart = document.createElement("img");
        const path = `${mainPath}${mainImgPathPart[0]}/img-${currI + 1}.jpg`;
        mainPart.src = path;
        mainPart.alt = "Фото события";
        mainPart.classList.add("events__img");
        currImg.append(mainPart);
        const currTextContent = document.createElement("div");
        currTextContent.classList.add("events__content-text");
        const currLocDate = document.createElement("div");
        currLocDate.classList.add("events__loc-date");
        const currLoc = document.createElement("span");
        currLoc.classList.add("events__loc", "mini-descr");
        currLoc.innerHTML = textCont["locate"];
        const currDate = document.createElement("span");
        currDate.classList.add("events__Date", "mini-descr");
        currDate.innerHTML = textCont["date"];
        currLocDate.append(currLoc, currDate);
        const currHeading = document.createElement("h3");
        currHeading.classList.add("events__item-heading", "headingh3");
        currHeading.innerHTML = textCont["title"];
        const currDescr = document.createElement("p");
        currDescr.classList.add("events__descr", "descr-p");
        currDescr.innerHTML = textCont["descr"];
        const currLink = document.createElement("a");
        currLink.classList.add("events__a");
        currLink.href = "#";
        currLink.textContent = textCont["link"];
        currTextContent.append(currLocDate, currHeading, currDescr, currLink);
        currEvent.append(currImg, currTextContent);
        currSlide.append(currEvent);
        wrapper.append(currSlide);
      }
      const currPag = document.createElement("div");
      currPag.classList.add("events__swiper-pagination");
      currPag.id = "events__swiper-pagination";
      swiperElem.append(currPag);
      swiperElem.prepend(wrapper);
    }

    //ГОТОВО ДЛЯ ЗАМЕНЫ
    //ГОТОВО ДЛЯ ЗАМЕНЫ
    //ГОТОВО ДЛЯ ЗАМЕНЫ
    //ГОТОВО ДЛЯ ЗАМЕНЫ
    //ГОТОВО ДЛЯ ЗАМЕНЫ
    //ГОТОВО ДЛЯ ЗАМЕНЫ
    new Swiper("#events__swiper", {
      // Optional parameters
      // loop: true,
      loopedSlides: 1,

      pagination: {
        el: ".events__swiper-pagination",
      },
      navigation: {
        nextEl: ".events__swiper-button-next",
        prevEl: ".events__swiper-button-prev",
      },

      // Navigation arrows
      preloadImages: false,
      resizeReInit: true,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      slidesPerView: 1,
      breakpoints: {
        1: {
          slidesPerView: 1,
        },
        601: {
          slidesPerView: 2,
          spaceBetween: 34,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 27,
        },
        1301: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });
  })();
});
