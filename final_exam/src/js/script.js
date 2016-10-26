// "use strict";

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


//Image search
$(function() {
  
  var randomSet = ['sea', 'SPA', 'mountain', 'sport', 'music', 'travel', 'animals', 'cinema', 'cooking', 'beach'];

  function getRandomImages () {
    var randomNumber = Math.floor(Math.random()*randomSet.length);
    var randomItem = randomSet[randomNumber];
    getjson(randomItem);
  };

  getRandomImages();

  $('#search').on('click', function(e){
    var userQuery = $('#query').val();
    e.preventDefault();
    $('#query').val('');
    getjson(userQuery);
  });

  function getjson(userQuery) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() { 
      if (xhr.readyState == 4 && xhr.status == 200) {
        var responseData = JSON.parse(xhr.responseText);
        reloadMasonry(responseData);
      };
    }; 
    xhr.open('GET', 'https://pixabay.com/api/?key=3593835-08e61501cc3c4859963576f14&image_type=photo&per_page=7&orientation=horizontal&q=' + userQuery, true);
    xhr.send();
  };

  function reloadMasonry(responseData) {
    for (var i = 0; i < responseData.hits.length; i++) {
      var masonryItems = $('.grid-item');
      var imageTitles = $('.grid-item_title');
      $(masonryItems[i]).css("background-image","url(" + responseData.hits[i].webformatURL + ")");
      $(imageTitles[i]).text(responseData.hits[i].tags);
    };
  };
});