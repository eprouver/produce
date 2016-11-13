(function($){
  // Search
  var $searchWrap = $('#search-form-wrap'),
    isSearchAnim = false,
    searchAnimDuration = 200;

  var startSearchAnim = function(){
    isSearchAnim = true;
  };

  var stopSearchAnim = function(callback){
    setTimeout(function(){
      isSearchAnim = false;
      callback && callback();
    }, searchAnimDuration);
  };

  $('#nav-search-btn').on('click', function(){
    if (isSearchAnim) return;

    startSearchAnim();
    $searchWrap.addClass('on');
    stopSearchAnim(function(){
      $('.search-form-input').focus();
    });
  });

  $('.search-form-input').on('blur', function(){
    startSearchAnim();
    $searchWrap.removeClass('on');
    stopSearchAnim();
  });

  // Share
  $('body').on('click', function(){
    $('.article-share-box.on').removeClass('on');
  }).on('click', '.article-share-link', function(e){
    e.stopPropagation();

    var $this = $(this),
      url = $this.attr('data-url'),
      encodedUrl = encodeURIComponent(url),
      id = 'article-share-box-' + $this.attr('data-id'),
      offset = $this.offset();

    if ($('#' + id).length){
      var box = $('#' + id);

      if (box.hasClass('on')){
        box.removeClass('on');
        return;
      }
    } else {
      var html = [
        '<div id="' + id + '" class="article-share-box">',
          '<input class="article-share-input" value="' + url + '">',
          '<div class="article-share-links">',
            '<a href="https://twitter.com/intent/tweet?url=' + encodedUrl + '" class="article-share-twitter" target="_blank" title="Twitter"></a>',
            '<a href="https://www.facebook.com/sharer.php?u=' + encodedUrl + '" class="article-share-facebook" target="_blank" title="Facebook"></a>',
            '<a href="http://pinterest.com/pin/create/button/?url=' + encodedUrl + '" class="article-share-pinterest" target="_blank" title="Pinterest"></a>',
            '<a href="https://plus.google.com/share?url=' + encodedUrl + '" class="article-share-google" target="_blank" title="Google+"></a>',
          '</div>',
        '</div>'
      ].join('');

      var box = $(html);

      $('body').append(box);
    }

    $('.article-share-box.on').hide();

    box.css({
      top: offset.top + 25,
      left: offset.left
    }).addClass('on');
  }).on('click', '.article-share-box', function(e){
    e.stopPropagation();
  }).on('click', '.article-share-box-input', function(){
    $(this).select();
  }).on('click', '.article-share-box-link', function(e){
    e.preventDefault();
    e.stopPropagation();

    window.open(this.href, 'article-share-box-window-' + Date.now(), 'width=500,height=450');
  });

  // Caption
  $('.article-entry').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }

  // Mobile nav
  var $container = $('#container'),
    isMobileNavAnim = false,
    mobileNavAnimDuration = 200;

  var startMobileNavAnim = function(){
    isMobileNavAnim = true;
  };

  var stopMobileNavAnim = function(){
    setTimeout(function(){
      isMobileNavAnim = false;
    }, mobileNavAnimDuration);
  }

  $('#main-nav-toggle').on('click', function(){
    if (isMobileNavAnim) return;

    startMobileNavAnim();
    $container.toggleClass('mobile-nav-on');
    stopMobileNavAnim();
  });

  $('#wrap').on('click', function(){
    if (isMobileNavAnim || !$container.hasClass('mobile-nav-on')) return;

    $container.removeClass('mobile-nav-on');
  });
})(jQuery);

var global_plants = [{
name: 'Arugula',
amount: '5',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Asparagus',
amount: '50',
sNoun: 'root',
pNoun: 'roots'
},
{
name: 'Dried Bean',
amount: '6',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Fava Bean',
amount: '6',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Chickpea',
amount: '6',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Lima Bean',
amount: '6',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Snap Bean',
amount: '6',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Soy Bean',
amount: '6',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Beet',
amount: '8',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Broccoli',
amount: '4',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Brussel Sprout',
amount: '2',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Cabbage',
amount: '6',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Carrot',
amount: '40',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Cauliflower',
amount: '2',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Celery',
amount: '2',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Chayote',
amount: '1',
sNoun: 'vine',
pNoun: 'vines'
},
{
name: 'Chicory',
amount: '2',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Bok Choy',
amount: '8',
sNoun: 'head',
pNoun: 'heads'
},
{
name: 'Collard',
amount: '3',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Corn',
amount: '20',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Cucumber',
amount: '6',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Eggplant',
amount: '2',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Endive',
amount: '2',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Garlic',
amount: '16',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Horseradish',
amount: '1',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Jicama',
amount: '2',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Kale',
amount: '5',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Kohlrabi',
amount: '5',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Leek',
amount: '12',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Lettuce',
amount: '10',
sNoun: 'head',
pNoun: 'heads'
},
{
name: 'Melon',
amount: '2',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Mustard',
amount: '10',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Okra',
amount: '6',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Onion',
amount: '20',
sNoun: 'set',
pNoun: 'sets'
},
{
name: 'Parsnip',
amount: '10',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Pea',
amount: '30',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Pepper',
amount: '3',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Potato',
amount: '10',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Pumpkin',
amount: '2',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Radiccio',
amount: '6',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Radish',
amount: '15',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Rhubarb',
amount: '3',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Rutabaga',
amount: '15',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Salsify',
amount: '10',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Scallion',
amount: '6',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Shallot',
amount: '6',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Sorrel',
amount: '3',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Spinach',
amount: '15',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Summer Squash',
amount: '2',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Winter Squash',
amount: '1',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Sunchoke',
amount: '8',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Sunflower',
amount: '1',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Sweet Potato',
amount: '8',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Swiss Chard',
amount: '3',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Tomatillo',
amount: '2',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Cherry Tomato',
amount: '4',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Cooking Tomato',
amount: '5',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Slicing Tomato',
amount: '4',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Turnip',
amount: '10',
sNoun: 'plant',
pNoun: 'plants'
},
{
name: 'Watermelon',
amount: '2',
sNoun: 'plant',
pNoun: 'plants'
}]
