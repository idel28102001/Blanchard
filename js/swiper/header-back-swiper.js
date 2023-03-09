window.addEventListener("DOMContentLoaded", () => {
  (() => {
    const swiperElem = document.querySelector(".header-hero__swiper");
    const mainPath = `./imgs/hero-back`;
    const mainResolutions = [600, 1000, 1300];
    const mainImgPathPart = [`/hero-back-descktop-1920`];
    const addImgPaths = [
      "/hero-back-mobile-320",
      "/hero-back-tablet-768",
      "/hero-back-tablet-1024",
    ];

    const currTel = document.querySelectorAll("input.price__num");
    currTel.forEach((e) => {
      const regex = /\D/g;
      const currNumber = e.value.replaceAll(" ", "").replaceAll(regex, "");
      e.value = Number(currNumber).toLocaleString().replaceAll(",", " ");
      e.addEventListener("input", () => {
        const currNumber = e.value.replaceAll(" ", "").replaceAll(regex, "");
        e.value = Number(currNumber).toLocaleString().replaceAll(",", " ");
      });
    });

    createEditionsElements(swiperElem);

    function createEditionsElements(swiperElem) {
      swiperElem.classList.add("swiper");

      const wrapper = document.createElement("div");
      wrapper.classList.add("swiper-wrapper", "header-hero__wrapper");
      wrapper.id = "header-hero__wrapper";
      for (let currI = 0; currI < 3; currI++) {
        const currSlide = document.createElement("div"); //
        currSlide.classList.add("swiper-slide", "header-hero__slideID");

        const currImg = document.createElement("picture");
        currImg.classList.add("picture-element", "header-hero__picture");
        for (let n = 0; n < addImgPaths.length; n++) {
          const addPart = document.createElement("source");
          const path = `${mainPath}${addImgPaths[n]}-${currI + 1}.jpg`;
          addPart.srcset = path;
          addPart.media = `(max-width: ${mainResolutions[n]}px)`;
          currImg.append(addPart);
        }
        const mainPart = document.createElement("img");
        const path = `${mainPath}${mainImgPathPart[0]}-${currI + 1}.jpg`;
        mainPart.src = path;
        mainPart.alt = "Фон";
        mainPart.classList.add("header-hero__img");
        currImg.append(mainPart);
        currSlide.append(currImg);
        wrapper.append(currSlide);
      }
      swiperElem.prepend(wrapper);
    }

    new Swiper(".header-hero__swiper", {
      // Navigation arrows
      preloadImages: true,
      resizeReInit: true,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      slidesPerView: 1,
      loop: true,
      effect: "fade",
      speed: 3000,
      autoplay: {
        delay: 2000,
      },
    });
  })();
});
