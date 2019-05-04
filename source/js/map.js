var mapImage = document.querySelector('.page-footer__map-image');
mapImage.classList.remove('page-footer__map-image--nojs');

var myMap;
ymaps.ready(init);
function init () {
  myMap = new ymaps.Map('map', {
    center: [59.938631, 30.323055],
    zoom: 17
  }, {
    searchControlProvider: 'yandex#search'
  }),
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div class="map-pin" style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),
  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    balloonContent: 'ул. Большая Конюшенная, д. 19/8 Санкт-Петербург'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-pin.png',
    iconImageSize: [124, 106],
    iconImageOffset: [-62, -106]
  });

  myMap.geoObjects
  .add(myPlacemark);

  myMap.behaviors.disable('scrollZoom');
}
