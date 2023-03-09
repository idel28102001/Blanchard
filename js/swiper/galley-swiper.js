window.addEventListener("DOMContentLoaded", () => {
    (() => {
        const swiperElem = document.querySelector(".gallery__swiper");
        const mainPath = `./imgs/gallery`;
        const impPathPart = `gallery-img-`;
        const mainResolutions = [600, 1000, 1300];
        const mainImgPathPart = [`/Desktop-1920`, `/${impPathPart}desktop-1920-`];
        const addImgPaths = [
            ["/Mobile-320", `/${impPathPart}mobile-320-`],
            ["/Tablet-768", `/${impPathPart}desktop-768-`],
            ["/Tablet-1024", `/${impPathPart}desktop-1024-`],
        ];

        const wrapper = document.querySelector("#gallery__wrapper");
        for (let currI = 0; currI < 24; currI++) {
            const currSlide = document.createElement("div"); //
            currSlide.classList.add("swiper-slide", "gallery__slide"); //

            const currBtn = document.createElement("button");
            currBtn.tabIndex = 0;
            currBtn.classList.add("gallery__btn");

            const currPoster = document.querySelector(".poster");
            const posterBack = document.querySelector(".poster-black-back");
            currBtn.addEventListener("click", (e) => {
                posterBack.classList.add("is-active");
                currPoster.classList.remove("is-active");
                currPoster.classList.add("is-active");
                currPoster.innerHTML = "";
                const currPicture = e.currentTarget.children[0].cloneNode(true);
                for (let i = 0; i < 3; i++) {
                    currPicture.children[0].remove();
                }
                currPicture.classList.add("poster__picture");
                currPicture.children[0].classList = "";
                currPicture.children[0].classList.add("poster__img");
                currPoster.append(currPicture);

                const currId = currPicture.getAttribute("data-id");
                const currDict = Object.keys(newArrayPicDescr).includes(currId) ?
                    newArrayPicDescr[+currId] :
                    newArrayPicDescr[0];
                const currRight = document.createElement("div");
                currRight.classList.add("poster__right");

                const currContent = document.createElement("div");
                currContent.classList.add("poster__content");

                const currWholeInfo = document.createElement("div");
                currWholeInfo.classList.add("poster__whole-info");

                const currAuthor = document.createElement("h3");
                currAuthor.classList.add("poster__author");
                currAuthor.textContent = currDict.author;

                const currTitle = document.createElement("h4");
                currTitle.classList.add("poster__title");
                currTitle.textContent = currDict.title;

                const currDate = document.createElement("span");
                currDate.classList.add("poster__date");
                currDate.textContent = currDict.date;

                const currDescr = document.createElement("span");
                currDescr.classList.add("poster__descr");
                currDescr.textContent = currDict.descr;

                currWholeInfo.append(currAuthor, currTitle, currDate, currDescr);

                const cross = document.createElement("button");
                cross.classList.add("poster__cross");
                cross.tabIndex = 0;
                cross.innerHTML = currCross;
                cross.addEventListener("click", () => {
                    currPoster.classList.remove("is-active");
                    posterBack.classList.remove("is-active");
                });

                posterBack.addEventListener("click", () => {
                    currPoster.classList.remove("is-active");
                    posterBack.classList.remove("is-active");
                });

                currContent.append(currWholeInfo);
                currPoster.append(currContent, cross);
            });

            const currImg = document.createElement("picture");
            for (let n = 0; n < addImgPaths.length; n++) {
                const addPart = document.createElement("source");
                const path = `${mainPath}${addImgPaths[n][0]}${addImgPaths[n][1]}${currI + 1
                    }.jpg`;
                addPart.srcset = `${mainPath}/icons/1x1.png`;
                addPart.setAttribute("data-srcset", path);
                addPart.media = `(max-width: ${mainResolutions[n]}px)`;
                currImg.append(addPart);
            }
            const mainPart = document.createElement("img");

            const path = `${mainPath}${mainImgPathPart[0]}${mainImgPathPart[1]}${currI + 1
                }.jpg`;
            mainPart.src = `${mainPath}/icons/1x1.png`;
            currImg.setAttribute("data-id", currI + 1);
            mainPart.setAttribute("data-src", path);
            mainPart.classList.add("swiper-lazy");
            mainPart.alt = "Картина живописи";
            mainPart.classList.add("gallery__img");

            const currLazy = document.createElement("span");
            currLazy.classList.add("swiper-lazy-preloader");
            currImg.append(mainPart);
            currBtn.append(currImg, currLazy);
            currSlide.append(currBtn);
            wrapper.append(currSlide);
        }

        const pagination = document.createElement("div");
        pagination.classList.add("swiper-navigation");
        swiperElem.prepend(pagination);

        const swiper = new Swiper(".gallery__swiper", {
            pagination: {
                el: ".gallery__pagination",
                type: "fraction",
            },

            navigation: {
                nextEl: ".gallery__swiper-button-next",
                prevEl: ".gallery__swiper-button-prev",
                EventTarget: ".gallery__swiper",
            },

            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
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
            spaceBetween: 0,
            grid: {
                rows: 2,
            },
            breakpoints: {
                1: {
                    slidesPerView: 1,
                    grid: {
                        rows: 1,
                    },
                },
                601: {
                    slidesPerView: 2,
                    grid: {
                        rows: 2,
                    },
                },
                1000: {
                    slidesPerView: 2,
                    grid: {
                        rows: 2,
                    },
                },
                1700: {
                    slidesPerView: 3,
                    grid: {
                        rows: 2,
                    },
                },
            },
        });
    })();
});
