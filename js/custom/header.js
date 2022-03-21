document.addEventListener("DOMContentLoaded", () => {
  (() => {
    const headerContainer = document.querySelector(".section-header");
    const bannerCont = document.querySelector(
      ".header-banner__container .header-head"
    );
    const banner = document.querySelector(".header-banner");

    // Header
    // Head
    headerHead = document.querySelector(".container-foot .header-head");
    const headerHeadArrayElements = document.createElement("ul");
    headerHeadArrayElements.classList.add("header-head__ul");
    for (let [currEl, href] of Object.entries(headerHeadArray)) {
      const currLi = document.createElement("li");
      currLi.classList.add("header-head__li");

      const currA = document.createElement("a");
      currA.classList.add("header-head__a", "link");
      currA.href = `#${href}`;
      currA.textContent = currEl;
      currLi.append(currA);
      headerHeadArrayElements.append(currLi);
    }
    const login = document.createElement("div");
    login.classList.add("header-head__login", "login");

    const loginA = document.createElement("a");
    loginA.href = "#";
    loginA.classList.add("link");

    const loginText = document.createElement("span");
    loginText.classList.add("login__text");
    loginText.textContent = "Войти";

    //Создаём иконку для входа
    const loginIcon = getSvg(loginIconSVG);
    loginIcon.classList.add("login__icon");

    loginA.append(loginIcon, loginText);
    login.append(loginA);

    headerHead.append(headerHeadArrayElements, login);
    [cloneHeaderHeadArrayElements, cloneLogin] = [
      headerHeadArrayElements.cloneNode(true),
      login.cloneNode(true),
    ];
    cloneHeaderHeadArrayElements.classList.add("header-head__head-array");
    cloneLogin.classList.add("banner-login");
    cloneLogin.firstChild.classList.add("login__a", "beauty-btn");
    bannerCont.append(cloneHeaderHeadArrayElements, cloneLogin);

    function getSvg(svgHTML) {
      const currEl = document.createElement("span");
      currEl.innerHTML = svgHTML;
      return currEl.children[0];
    }

    // Foot
    const headerContainerFoot = document.createElement("div");
    headerContainerFoot.classList.add("container", "container-foot");

    const headerFoot = document.createElement("div");
    headerFoot.classList.add("header-foot");
    const headerFootArrayElements = document.createElement("ul");
    headerFootArrayElements.classList.add("header-foot__ul");
    for (let curr in headerFootArray) {
      const currLi = document.createElement("li");
      currLi.classList.add("header-foot__li");
      const currBtn = document.createElement("button");
      currBtn.tabIndex = 0;
      currBtn.type = "submit";
      currBtn.classList.add("header-foot__btn", "link");
      const currText = document.createElement("span");
      currText.classList.add("header-foot__btn-text");
      currText.textContent = headerFootArray[curr];
      const currIcon = getSvg(pureArrow);
      currIcon.classList.add("header-foot__btn-icon");
      currBtn.append(currText, currIcon);
      const currWind = createHeaderFootWind(currBtn, curr); // ВРЕМЕННО!!!!
      currLi.append(currBtn, currWind);
      headerFootArrayElements.append(currLi);
    }

    function createHeaderFootWind(elem, num) {
      const currClass = "blank-show";
      const extraClass = "reverse-arrow";
      const Mainblank = document.createElement("div");
      Mainblank.classList.add("header-foot__mainblank");
      const blank = document.createElement("div");
      blank.classList.add("header-foot__blank");
      blank.setAttribute("data-simplebar", true);
      createWindLink(blank, num);
      elem.addEventListener("click", () => {
        if (document.querySelector("." + currClass)) {
          if (!Mainblank.classList.contains(currClass)) {
            if (document.querySelector("." + currClass)) {
              document
                .querySelector("." + extraClass)
                .classList.remove(extraClass);
              document
                .querySelector("." + currClass)
                .classList.remove(currClass);
            }
          }
        }
        document.querySelectorAll(".simplebar-content-wrapper").forEach((e) => {
          e.removeAttribute("tabindex");
        });
        elem.classList.toggle(extraClass);
        Mainblank.classList.toggle(currClass);
      });
      Mainblank.append(blank);
      return Mainblank;
    }

    function createWindLink(elem, num) {
      const mainPath = "imgs/header/imgs";
      let score = Number(num) * 4;
      const currLength = headerFootWindowArray.length;
      for (let i = 0; i < currLength; i++) {
        score = score % currLength;
        const currP = document.createElement("span");
        currP.classList.add("blank-p");
        const currLink = document.createElement("a");
        currLink.href = "#";
        currLink.classList.add("blank-a");
        currP.textContent = headerFootWindowArray[score];
        currLink.append(currP);
        currLink.style.backgroundImage = `url(${mainPath}/img-${
          score + 1
        }.jpg)`;
        elem.append(currLink);
        score++;
      }
    }

    const search = document.createElement("div");
    search.classList.add("search");
    const searchBtn = document.createElement("button");
    searchBtn.tabIndex = 0;
    searchBtn.classList.add("search__btn");
    searchBtn.setAttribute("aria-label", "Поиск");
    const searchInput = document.createElement("input");
    searchInput.placeholder = "Поиск по сайту";
    searchInput.classList.add("search__input");
    searchInput.type = "search";
    search.append(searchBtn, searchInput);

    headerFoot.append(headerFootArrayElements, search);
    headerContainerFoot.append(headerFoot);

    const cross = document.createElement("button");
    cross.classList.add("search__cross");
    cross.ariaLabel = "Закрытие поисковика";

    const copySearch = search.cloneNode(true);
    copySearch.classList.add("burger-search");
    copySearch.append(cross);
    copySearch.children[1].placeholder = "";

    copySearch.addEventListener("blur", () => {
      headerHead.classList.remove("header-head-active");
      cross.classList.remove("search__cross-active");
      copySearch.children[1].classList.remove("search__active");
      copySearch.children[1].value = "";
    });

    copySearch.children[0].addEventListener("click", (e) => {
      headerHead.classList.add("header-head-active");
      cross.classList.add("search__cross-active");
      banner.classList.add("search__container-active");
    });

    cross.addEventListener("click", (e) => {
      headerHead.classList.remove("header-head-active");
      cross.classList.remove("search__cross-active");
      copySearch.children[1].classList.remove("search__active");
      copySearch.children[1].value = "";
    });

    copySearch.children[0].addEventListener("click", (e) => {
      copySearch.children[1].classList.add("search__active");
    });
    headerHead.append(copySearch);

    const newBurgerSearch = document.createElement("div");
    newBurgerSearch.classList.add("burger", "container", "search-container");
    const copySearch2 = copySearch.cloneNode(true);
    copySearch2.classList.add("burger__banner-icon");
    copySearch2.children[0].classList.add("burger__search-icon");
    copySearch2.children[1].classList.add("burger__search-input");
    copySearch2.children[2].remove();
    newBurgerSearch.appendChild(copySearch2);

    const cross2 = document.createElement("button");
    cross2.classList.add("burger__cross2", "burger__cross2-active");
    cross2.ariaLabel = "Закрытие поисковика";
    cross2.addEventListener("click", () => {
      banner.classList.remove("search__container-active");
    });

    newBurgerSearch.append(cross2);
    banner.append(newBurgerSearch);

    headerContainer.append(headerContainerFoot);

    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("is-active");
      banner.classList.toggle("header__banner-acitve");
    });
  })();
});
