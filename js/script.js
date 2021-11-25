window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  //#region Tabs
  let tabsContainer = document.querySelector(".info-header");
  let tabs = document.querySelectorAll(".info-header-tab");
  let tabContent = document.querySelectorAll(".info-tabcontent");
  //функция тоглит класс visible у табконтента
  function hideShowTabcontent(showTabcontent) {
    for (let i = 0; i < tabs.length; i++) {
      tabContent[i].classList.remove("visible");
      if (showTabcontent === i) {
        tabContent[i].classList.toggle("visible");
      }
    }
  }
  hideShowTabcontent(0); //какой таб показать (от 0)
  //тоглим класс при клике на табы
  tabsContainer.addEventListener("click", function (e) {
    let target = e.target;
    tabs.forEach(function (el, ind) {
      if (
        el.innerText == target.innerText &&
        !tabContent[ind].classList.contains("visible")
      ) {
        hideShowTabcontent(+ind);
      }
    });
  });
  //#endregion tabs

  //#region timer
  //Set deadline, timer end date in format YYYY-MM-DD
  const timerUntil = "2021-11-28";
  //array of timer's HTML elements
  const timerComponents = [
    document.querySelector(".timer-numbers>.hours"),
    document.querySelector(".timer-numbers>.minutes"),
    document.querySelector(".timer-numbers>.seconds"),
  ];
  //Calculates remaining time in milliseconds and returns object
  //deadline - end of countdown
  function remainingTime(deadline) {
    const dateNow = Date.parse(Date());
    const remainingTimeMS = Date.parse(deadline) - dateNow;
    const hours = Math.floor((remainingTimeMS / (1000 * 60 * 60 * 24)) % 24);
    const minutes = Math.floor((remainingTimeMS / (1000 * 60)) % 60);
    const seconds = Math.floor((remainingTimeMS / 1000) % 60);
    return {
      remainingTime: remainingTimeMS,
      hours,
      minutes,
      seconds,
    };
  }
  //function assigns innerText to timer
  //arguments of function are: (HTML elements of timer) and (object from function remainingTime)
  function loopAndReplace(timerUnits, timerValues) {
    const objValuesArray = Object.values(timerValues);
    for (let i = 1; i < objValuesArray.length; i++) {
      if (objValuesArray[i] / 10 < 1) {
        timerUnits[i - 1].innerText = `0${objValuesArray[i]}`;
      } else {
        timerUnits[i - 1].innerText = objValuesArray[i];
      }
    }
  }
  //to show countdown after page loaded
  loopAndReplace(timerComponents, remainingTime(timerUntil));
  //interval that starts functions evey second
  const second = setInterval(function () {
    loopAndReplace(timerComponents, remainingTime(timerUntil));
  }, 1000);
  //clear interval second when coundown is <= 0
  if (remainingTime(timerUntil).remainingTime <= 0) {
    clearInterval(second);
  }
  //#endregion timer
});
