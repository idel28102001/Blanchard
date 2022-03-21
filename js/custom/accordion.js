document.addEventListener("DOMContentLoaded", () => {
    (() => {
        $(function() {
            $(".accordion").accordion({
                icons: false,
                heightStyle: "content",
                collapsible: true,
            });
            $(".accordion").first().click();
        });

        const currFlag = "italy";

        createAccordionContent(currFlag);

        function createAccordionContent(flag) {
            const currArrays = catalogAllDates[flag];
            const accordinon = document.querySelector(".accordion");
            accordinon.innerHTML = "";
            for (let curr in catalogAccordion) {
                const currHead = document.createElement("div");
                currHead.classList.add("accordion-head");
                currHead.setAttribute("tabindex", 0);

                const currHeading = document.createElement("h3");
                currHeading.classList.add("accordion-head__heading", "headingh3v2");
                currHeading.textContent = catalogAccordion[curr];

                const currIcon = document.createElement("span");
                currIcon.classList.add("accordion-head__icon");
                currHead.append(currHeading, currIcon);

                const currContent = document.createElement("div");
                if (Object.entries(currArrays[curr]).length) {
                    createContent(currArrays[curr], currContent, flag);
                    currContent.classList.add("accordion-content");
                } else {
                    createEmptyBlank(currContent);
                    currContent.classList.add("accordion-blank");
                }

                accordinon.append(currHead, currContent);
            }
        }

        function createContent(array, parent, flag) {
            const currList = document.createElement("ul");
            currList.classList.add("accordion-content-list");
            for (let [id, arr] of Object.entries(array)) {
                const currItem = document.createElement("li");
                currItem.classList.add("accordion-content__item");

                const currBtn = document.createElement("a");
                currBtn.classList.add("accordion-content__btn", "btn-link", "descr-p");
                currBtn.href = "#curr-writer";
                currBtn.textContent = arr;
                currItem.append(currBtn);
                currList.append(currItem);

                currBtn.addEventListener("click", () => {
                    document.querySelectorAll(`.accordion-content__btn`).forEach((e) => {
                        e.classList.remove("accordion-content__btn-active");
                    });
                    currBtn.classList.add(`accordion-content__btn-active`);
                    createObject(flag, id);
                    const currBtn2 = document.querySelector(`[data-flag="${flag}"]`);
                    currBtn2.setAttribute("data-name", id);
                });
            }
            parent.append(currList);
        }

        function createEmptyBlank(parent) {
            const currObj = catalogAllDates["Nan"];

            const currImage = document.createElement("span");
            currImage.classList.add("accordion__blank");

            const currTextBlock = document.createElement("div");
            currTextBlock.classList.add("accordion__blank-text", "blank-text");

            const currHeading = document.createElement("h3");
            currHeading.classList.add("blank-text__heading", "headingh3v2");
            currHeading.textContent = currObj.name;

            const currDescr = document.createElement("span");
            currDescr.classList.add("blank-text__p", "descr-pV2");
            currDescr.textContent = currObj.text;

            const currBtn = document.createElement("a");
            currBtn.classList.add("blank-text__p", "descr-pV2", "link1");
            currBtn.textContent = currObj.btn;
            currBtn.href = "#gallery";
            currTextBlock.append(currHeading, currDescr, currBtn);

            parent.append(currImage, currTextBlock);
        }

        window.createAccordionContent = createAccordionContent;
        window.createContent = createContent;
        window.createEmptyBlank = createEmptyBlank;
    })();
});
