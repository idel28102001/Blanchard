window.addEventListener("DOMContentLoaded", () => {
    (() => {
        //ГОТОВО ДЛЯ ЗАМЕНЫ
        //ГОТОВО ДЛЯ ЗАМЕНЫ
        //ГОТОВО ДЛЯ ЗАМЕНЫ
        //ГОТОВО ДЛЯ ЗАМЕНЫ
        {
            const mainPath = `/imgs/projects`;
            const wrapper = document.querySelector("#projects__wrapper");
            for (let currI = 0; currI < 9; currI++) {
                const currSlide = document.createElement("div"); //
                currSlide.classList.add("swiper-slide", "projects__slide"); //

                const partPart = document.createElement("div");
                partPart.classList.add("projects__div");

                const wholePart = document.createElement("a");
                wholePart.href = "#";
                wholePart.classList.add("projects__a");
                const mainPart = document.createElement("img");
                mainPart.alt = "Лого партнёра проекта";
                const path = `${mainPath}/img-${currI + 1}.png`;

                mainPart.src = `${mainPath}/icons/1x1.png`;
                mainPart.setAttribute("data-src", path);
                mainPart.classList.add("swiper-lazy");
                mainPart.classList.add("projects__img");
                const currLazy = document.createElement("div");
                currLazy.classList.add("swiper-lazy-preloader");
                partPart.append(mainPart, currLazy);
                wholePart.append(partPart);
                currSlide.append(wholePart);
                wrapper.append(currSlide);
            }
        }

        //ГОТОВО ДЛЯ ЗАМЕНЫ
        //ГОТОВО ДЛЯ ЗАМЕНЫ
        //ГОТОВО ДЛЯ ЗАМЕНЫ
        //ГОТОВО ДЛЯ ЗАМЕНЫ
        //ГОТОВО ДЛЯ ЗАМЕНЫ
        //ГОТОВО ДЛЯ ЗАМЕНЫ

        const swiper = new Swiper("#projects__swiper", {
            navigation: {
                nextEl: ".projects__swiper-button-next",
                prevEl: ".projects__swiper-button-prev",
            },

            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
                EventTarget: "#projects__swiper",
            },

            preloadImages: false,
            lazy: {
                loadOnTransitionStart: "auto",
                loadPrevNext: true,
            },

            watchSlidesProgress: true,
            watchSlidesVisibility: true,

            slidesPerView: 3,
            slidesPerGroup: 1,
            breakpoints: {
                1: {
                    slidesPerView: 1,
                },
                601: {
                    slidesPerView: 2,
                    spaceBetween: 34,
                },
                1000: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                1700: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            },
        });
    })();
});
