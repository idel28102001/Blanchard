document.addEventListener("DOMContentLoaded", () => {
  (() => {
    function restartMap() {
      ymaps.ready(() => {
        const myMap = new ymaps.Map("map", {
            center: [55.75846806898367, 37.60108849999989],
            zoom: 14,
            controls: [],
            behaviors: ["drag"],
          }),
          myPlacemarkWithContent = new ymaps.Placemark(
            [55.75846806898367, 37.60108849999989],
            {},
            {
              iconLayout: "default#imageWithContent",
              iconImageHref: "imgs/contacts/mark.svg",
              iconImageSize: [20, 20],
            }
          );
        const zoomControl = new ymaps.control.ZoomControl({
          options: {
            size: "small",
            position: {
              right: 10,
              bottom: 342,
            },
          },
        });
        const geolocationControl = new ymaps.control.GeolocationControl({
          options: {
            size: "small",
            position: {
              bottom: 306,
              right: 10,
            },
          },
        });
        let pixelCenter = myMap.getGlobalPixelCenter();
        const currWidth = Number(
          document.querySelector("#map").children[0].style.width.slice(0, -2)
        );
        const currHeight = Number(
          document.querySelector("#map").children[0].style.height.slice(0, -2)
        );
        pixelCenter = [pixelCenter[0] + currWidth / 2.48, pixelCenter[1] - 68];
        const newCenter = myMap.options
          .get("projection")
          .fromGlobalPixels(pixelCenter, myMap.getZoom());
        myMap.setCenter(newCenter);
        myMap.controls.add(zoomControl);
        myMap.controls.add(geolocationControl);
        myMap.geoObjects.add(myPlacemarkWithContent);
        myMap.container.fitToViewport();
      });
    }

    restartMap();
    window.addEventListener("resize", () => {
      document.querySelector("#map").innerHTML = "";
      restartMap();
    });
  })();
});
