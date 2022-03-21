document.addEventListener("DOMContentLoaded", () => {
    (() => {
        const swiperElem = document.querySelector("#editions__swiper");
        const mainPath = `/imgs/editions`;
        const mainResolutions = [600, 1000, 1300];
        const mainImgPathPart = [`/Desktop-1920`];
        const addImgPaths = ["/Mobile-320", "/Tablet-768", "/Tablet-1024"];

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
            swiperElem.classList.add("editions__swiper", "swiper");

            const wrapper = document.createElement("div");
            wrapper.classList.add("swiper-wrapper", "editions__wrapper");
            wrapper.id = "editions__wrapper";
            for (let currI = 0; currI < 5; currI++) {
                const textCont = editionsArray[currI];

                const currSlide = document.createElement("div"); //
                currSlide.classList.add("swiper-slide", "editions__slideID");

                const currEvent = document.createElement("div");
                currEvent.classList.add("editions__swiper-content");
                const currImg = document.createElement("picture");
                currImg.classList.add("picture-element", "editions__picture");
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
                mainPart.alt = "Фото издания";
                mainPart.classList.add("editions__img");
                currImg.append(mainPart);
                const currTextContent = document.createElement("div");
                currTextContent.classList.add("editions__content-text");
                const currpictCont = document.createElement("div");
                currpictCont.classList.add("editions__pict-content");
                const currTA = document.createElement("div");
                currTA.classList.add("editions__title-author");
                const currHeading = document.createElement("h3");
                currHeading.classList.add("editions__pict-heading", "descr-pV2");
                currHeading.innerHTML = textCont["title"];
                const currAuthor = document.createElement("span");
                currAuthor.classList.add("editions__author", "descr-pV2");
                currAuthor.textContent = textCont["author"];
                const currPrice = document.createElement("span");
                currPrice.classList.add("editions__pic-price", "descr-pV2");
                currPrice.innerHTML = `${textCont["price"]} ${textCont["currency"]}`;
                currTA.append(currHeading, currAuthor);
                currpictCont.append(currTA, currPrice);
                const currLink = document.createElement("a");
                currLink.classList.add("editions__a", "descr-pV2", "beauty-btn");
                currLink.setAttribute("tabindex", 0);
                currLink.href = "#";
                currLink.textContent = textCont.link;
                currTextContent.append(currpictCont, currLink);
                currEvent.append(currImg, currTextContent);
                currSlide.append(currEvent);
                wrapper.append(currSlide);
            }
            swiperElem.prepend(wrapper);
        }

        new Swiper("#editions__swiper", {
            // Optional parameters
            navigation: {
                prevEl: ".editions__swiper-button-prev",
                nextEl: ".editions__swiper-button-next",
                EventTarget: "#editions__swiper",
            },
            // Navigation arrows
            preloadImages: false,
            resizeReInit: true,
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
            slidesPerView: 3,
            spaceBetween: 25,
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },
            pagination: {
                el: ".editions__pagination",
                type: "fraction",
            },
            lazy: {
                loadOnTransitionStart: "auto",
                loadPrevNext: true,
            },

            breakpoints: {
                1: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                601: {
                    slidesPerView: 2,
                    spaceBetween: 34,
                },
                1000: {
                    slidesPerView: 2,
                    spaceBetween: 49,
                },
                1700: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            },
        });
    })();
});
