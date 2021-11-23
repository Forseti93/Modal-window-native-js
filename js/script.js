/* //ожидание загружки виндов. весь код для страницы писать в эту функцию
window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  //#region tabs
  //контейнер табов
  let tabsContainer = document.querySelector(".info-header");
  //табы
  let tabs = document.querySelectorAll(".info-header-tab");
  //контент табов
  let tabContent = document.querySelectorAll(".info-tabcontent");
  //для таб-контентов начиная с номера таба с номером а: 
  //добавить класс "hide", убрать "show"
  function hideTabContent(a) {
    //для обращения к каждому емументу tabContent(object), используем for()
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }
  //скрываем всё после номера 1
  hideTabContent(1);
  //показать таб-контент для таба tabContent[b]
  function showTabContent(b) {
    //проверяем, что таб-контент спрятан
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }
  //следим за нажатиями на табы,
  //прячем все табы hideTabContent(0)
  //показываем табконтент нажатого таба showTabContent(i)
  tabsContainer.addEventListener("click", function (event) {
    //храним нажатый объект
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tabs.length; i++) {
        //если нажатый объект совпадает с табом tabs[i]...
        if (target == tabs[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
  //#endregion tabs
});
 */

/*ждём загрузки дома
объявили элементы хтмл
функция спрятать всё кроме 1 табконтента
функция показать нажатый
обработчик клика по табам*/

window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  let tabsContainer = document.querySelector(".info-header");
  let tabs = document.querySelectorAll("info-header-tab");
  let tabContent = document.querySelectorAll(".info-tabcontent");

  function hideShowTabcontent(showFrom) {
    for (let i = showFrom; i < tabs.length; i++) {
      tabs[i].classList.toggle("visible");
    }
  }
  hideTabcontent(1);
});
