"use strict";

window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  var tabsContainer = document.querySelector(".info-header");
  var tabs = document.querySelectorAll(".info-header-tab");
  var tabContent = document.querySelectorAll(".info-tabcontent");

  function hideShowTabcontent(showTabcontent) {
    for (var i = 0; i < tabs.length; i++) {
      tabContent[i].classList.remove("visible");
      if (showTabcontent === i) {
        tabContent[i].classList.toggle("visible");
      }
    }
  }
  hideShowTabcontent(0);
  tabsContainer.addEventListener("click", function (e) {
    var target = e.target;
    tabs.forEach(function (el, ind) {
      if (el.innerText == target.innerText && !tabContent[ind].classList.contains("visible")) {
        hideShowTabcontent(+ind);
      }
    });
  });

  var timerUntil = "2021-11-29";

  var timerComponents = [document.querySelector(".timer-numbers>.hours"), document.querySelector(".timer-numbers>.minutes"), document.querySelector(".timer-numbers>.seconds")];

  function remainingTime(deadline) {
    var dateNow = Date.parse(Date());
    var remainingTimeMS = Date.parse(deadline) - dateNow;
    var hours = Math.floor(remainingTimeMS / (1000 * 60 * 60));
    var minutes = Math.floor(remainingTimeMS / (1000 * 60) % 60);
    var seconds = Math.floor(remainingTimeMS / 1000 % 60);
    return {
      remainingTime: remainingTimeMS,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  function loopAndReplace(timerUnits, timerValues) {
    var objValuesArray = Object.values(timerValues);
    for (var i = 1; i < objValuesArray.length; i++) {
      if (objValuesArray[i].length < 1) {
        timerUnits[i - 1].innerText = "0" + objValuesArray[i];
      } else {
        timerUnits[i - 1].innerText = objValuesArray[i];
      }
    }
  }

  loopAndReplace(timerComponents, remainingTime(timerUntil));

  var second = setInterval(function () {
    loopAndReplace(timerComponents, remainingTime(timerUntil));
  }, 1000);

  if (remainingTime(timerUntil).remainingTime <= 0) {
    clearInterval(second);
  }

  var overlay = document.querySelector(".overlay");
  var close = document.querySelector(".popup-close");

  document.body.addEventListener("click", function (e) {
    if (e.target.className === "more" && e.target.tagName === "BUTTON" || e.target.className === "description-btn") {
      overlay.style.display = "block";
      this.classList.add("more-splash");
      document.body.style.overflow = "hidden";
    }
  });
  close.addEventListener("click", function () {
    overlay.style.display = "none";
    this.classList.remove("more-splash");
    document.body.style.overflow = "";
  });

  var message = {
    loading: 'Загрузка...',
    success: 'Спасибо, мы с вами свяжемся',
    failure: 'Что-то пошло не так'
  };
  var form = document.querySelector('.main-form'),
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div');

  statusMessage.classList.add('status');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    form.appendChild(statusMessage);
    var request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    var formData = new FormData(form);
    request.send(formData);
  });
});