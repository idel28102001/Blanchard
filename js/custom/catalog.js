document.addEventListener("DOMContentLoaded", () => {
    (() => {
        mainPath = "/imgs/catalog";
        path = `${mainPath}/Icons/langs-flags`;
        const tab = document.querySelector(".tab");
        for (let curr in catalogFlags) {
            const currPath = `${path}/lang-${Number(curr) + 1}.svg`;
            const currBtn = document.createElement("button");
            currBtn.classList.add("tab__button");
            const allNames = Object.keys(catalogCharachersObject[catalogFlags[curr]]);
            const currName = allNames[0] || "none";
            currBtn.setAttribute("data-name", currName);
            currBtn.setAttribute("data-flag", catalogFlags[curr]);
            const currBtnImg = document.createElement("img");
            currBtnImg.alt = catalogFlags[curr];
            currBtnImg.classList.add("tab__img");
            currBtnImg.src = currPath;
            currBtn.append(currBtnImg);
            tab.append(currBtn);

            currBtn.addEventListener("click", () => {
                createAccordionContent(catalogFlags[curr]);
                const currName = currBtn.getAttribute("data-name");
                document.querySelectorAll(".tab__button").forEach((e) => {
                    e.classList.remove("tab__button-active");
                });
                currBtn.classList.add("tab__button-active");
                createObject(catalogFlags[curr], currName);
                $(".accordion").accordion("refresh");
            });
        }

        const currTab = "italy";
        const resolutPaths = ["/Tablet-1024", "/Tablet-768", "/Mobile-320"];
        const currName = 11;
        const newCurrWr = Array.from(
            document.querySelectorAll(`.accordion-content__btn`)
        ).filter((e) => e.textContent === "Доменико Гирландайо")[0];
        newCurrWr.classList.add(`accordion-content__btn-active`);

        createObject(currTab, currName);
        document
            .querySelector(`[data-flag="${currTab}"]`)
            .classList.add("tab__button-active");

        function createObject(flag, id) {
            let obj = catalogCharachersObject[flag][id];

            if (!obj) {
                obj = catalogCharachersObject.Nan;
            }

            const currCharacter = document.querySelector(".catalog__left");
            currCharacter.id = "curr-writer";
            currCharacter.innerHTML = "";

            const currImg = document.createElement("picture");
            currImg.classList.add("catalog__picture");

            if (obj.birthDate) {
                for (let i = 0; i < 3; i++) {
                    currSrc = document.createElement("source");
                    currSrc.srcset = `${mainPath}/writers${resolutPaths[i]}/${currTab}/image-${id}.jpg`;
                    currSrc.media = `(max-width: ${mainResolutions[i]}px)`;
                    currImg.append(currSrc);
                }
            }
            const mainImg = document.createElement("img");
            mainImg.alt = "Изображение худождника";
            if (obj.birthDate) {
                mainImg.classList.add("catalog__img");
                mainImg.src = `${mainPath}/writers/Desktop-1920/${currTab}/image-${id}.jpg`;
                currImg.append(mainImg);
            } else {
                const currDiv = document.createElement("div");
                currDiv.classList.add("catalog__all-pic-nan");

                mainImg.src = `${mainPath}/Icons/no-writer.svg`;
                mainImg.classList.add("catalog__img-nan");
                mainImg.type = "image/svg+xml";
                currImg.classList.add("catalog__picture-nan");

                const currDescr = document.createElement("span");
                currDescr.classList.add("catalog__pic-nan-descr");
                currDescr.textContent = "Х - Художник";

                currDiv.append(mainImg, currDescr);
                currImg.append(currDiv);
            }

            const currDescr = document.createElement("div");
            const currH3 = document.createElement("h3");
            currH3.classList.add("catalog__name", "headingh3");
            currH3.textContent = obj.name;

            const currText = document.createElement("div");
            currText.classList.add("catalog__text");

            if (obj.birthDate) {
                const currDate = document.createElement("span");
                currDate.textContent = obj.birthDate;
                currDate.classList.add("catalog__date", "mini-descr");
                currText.append(currDate);
            }
            const currTextDescr = document.createElement("span");
            currTextDescr.classList.add("descr-p", "catalog__text-p");
            currTextDescr.innerHTML = obj.text;
            currText.append(currTextDescr);

            if (obj.btn) {
                const currA = document.createElement("a");
                currA.classList.add("catalog__btn", "link1", "descr-pV2");
                currA.href = "#gallery";
                currA.textContent = obj.btn;
                currText.append(currA);
            }

            currDescr.append(currH3, currText);
            currCharacter.append(currImg, currDescr);
        }

        window.createObject = createObject;
    })();
});
