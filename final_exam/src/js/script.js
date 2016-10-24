"use strict";

//Slider settings
$(function(){
  $('.slick-item').slick({
    arrows: true,
    speed: 500,
  });
});


//Masonry settings
$('.grid').masonry({
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer',
  itemSelector: '.grid-item',
  percentPosition: true
});


$(function() {
});
  
  $('#search').on('click', function(e){
    // $('.result').remove();
    var userQuery = $('#query').val();
    e.preventDefault();
    getjson(userQuery);
  });


function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

var xhr = createCORSRequest('GET', 'https://pixabay.com/api/key=3593835-08e61501cc3c4859963576f14&image_type=photo&per_page=7&q=sun');
if (!xhr) {
  throw new Error('CORS not supported');
}

createCORSRequest();



  function getjson(userQuery) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() { 
      if (xhr.readyState == 4 && xhr.status == 200) {
        var replyObj = JSON.parse(xhr.responseText);
        var searchResults = replyObj.hits;
        console.log(replyObj.hits);


        // var html = $('#myTemplate').html();
        // var content = tmpl(html, {
        //   data: searchResults
        // });

        // $('.search_results').append(content);    
      };
    }; 

    xhr.open("GET", 'https://pixabay.com/api/key=3593835-08e61501cc3c4859963576f14&image_type=photo&per_page=7&q=' + userQuery, true);
    xhr.send();
  };
  


/*var slider = {
  slides:['step-1.png','step-2.jpg','step-3.jpg'],
  frame:0, // текущий кадр для отбражения - индекс картинки из массива
  set: function(image) { // установка нужного фона слайдеру
    document.getElementById("slider_1").style.backgroundImage = "url(build/img/"+image+")";
  },
  left: function() { // крутим на один кадр влево
    this.frame--;
    if(this.frame < 0) 
      this.frame = this.slides.length-1;
      this.set(slider.slides[slider.frame]);
  },
  right: function() { // крутим на один кадр вправо
    this.frame++;
    console.log(slider.slides.length);
    if(this.frame == slider.slides.length) {
      this.frame = 0
    };
    slider.set(slider.slides[slider.frame]);    
  },
  init: function() { // запуск слайдера с картинкой с нулевым индексом
    this.set(this.slides[this.frame]);
  }
};
window.onload = function() { // запуск слайдера после загрузки документа
  slider.init();
    var sliderLeft = document.getElementById('arrow_left');
    sliderLeft.addEventListener('click', slider.left);
    var sliderRight = document.getElementById('arrow_right');
    sliderRight.addEventListener('click', slider.right);
    // console.log(sliderLeft, sliderRight);
  //   setInterval(function() { // ставим пятисекундный интервал для перелистывания картинок
  //   slider.right();
  // },5000);
};*/

    // console.log(sliderLeft, sliderRight)



// var slides1 = document.querySelectorAll('#slides1 .slide');
// var controls1 = document.querySelectorAll('#slides1 .arrow');
// var slides2 = document.querySelectorAll('#slides2 .slide');
// var controls2 = document.querySelectorAll('#slides2 .arrow');
// var slides3 = document.querySelectorAll('#slides3 .slide');
// var controls3 = document.querySelectorAll('#slides3 .arrow');
// console.log(slides1);
// console.log(slides2);
// console.log(slides3);

// console.log(controls1);
// console.log(controls2);
// console.log(controls3);

// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,4000);


// sliderInit(slides1, controls1);
// sliderInit(slides2, controls1);
// sliderInit(slides3, controls1);

// function sliderInit() {
//   var nextFrame = document.querySelector('.right');
//   nextFrame.addEventListener('click', nextSlide );

// }

// function nextSlide() {
//   goToSlide(currentSlide+1);
// }

// function previousSlide() {
//   goToSlide(currentSlide-1);
// }

// function goToSlide(n) {
//   slides1[currentSlide].className = 'slide';
//   currentSlide = (n+slides1.length)%slides1.length;
//   slides1[currentSlide].className = 'slide show';
// }


// var next = document.getElementsByClassName('arrow_right');
// for (var i = 0; i < next.length; i++) {
//   next[i].addEventListener ('click', nextSlide)
// }
// next.addEventListener ('click', nextSlide)
// var previous = document.getElementsByClassName('arrow_left');
// previous.addEventListener ('click', previousSlide)

// function nextSlide() {
//     // pauseSlideshow();
//     nextSlide();
// };
// function previousSlide() {
//     // pauseSlideshow();
//     previousSlide();
// };