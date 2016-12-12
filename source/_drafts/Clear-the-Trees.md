---
title: Clear the Trees
date: 2016-11-04 16:12:14
tags:
  - mini-game
  - land
---

One of the first things I'm going to have to take on is clearing a lot of trees.

Having been raised on a steady diet of Arbor day saplings and FernGully - I might find it sad to cut down a lot of trees... so why not destroy a bunch of cartoon trees first.

Remember, the forest was once a terrifying place of wolves and witches, then: civilization.

Mouse over the trees below to clear them, or double click to clear the whole area.  

{% raw %}

<div id="cut-the-trees" style="display:none">
<div class="grass">
  <h1 class="text-center"></h1>
</div>

<div style="display:none">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="tree" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
  <rect rx="30" stroke="#7B4F24" id="svg_4" height="225.00001" width="90" y="263" x="221" stroke-opacity="null" stroke-width="20" fill="#A6723D"></rect>
    <ellipse stroke="#79AB03" ry="167.94306" rx="173.5" id="svg_2" cy="176.94306" cx="263.5" stroke-width="20" fill="#91CC04"></ellipse>
</svg>
</div>
</div>

<script>
(function init(){

  if(typeof $ !== "function" || typeof _ !== "function"){
    setTimeout(init, 1000);
    return;
  }

$('#cut-the-trees').slideDown(1000);

var tree = $('#cut-the-trees .tree');
var grass = $('#cut-the-trees .grass');

function enterer(x) {
      var me = $(this).css({
        'pointer-events': 'none'
      })
      me[0].classList.add('animated')
      if(typeof x == 'number'){
        me[0].classList.add($(me[0]).position().left > x ?'rotateOutDownLeft' : 'rotateOutDownRight');
      }else{
        me[0].classList.add(Math.random() > 0.5 ? 'rotateOutDownLeft' : 'rotateOutDownRight');
      }

      $('#post-Clear-the-Trees .article-share-link').removeClass('animated bounce share-now');

      setTimeout(function() {
        me.remove();
        if ($('.tree').length == 1) {
          $('#cut-the-trees h1').text('You Did It!').addClass('animated tada');
          $('.grass').empty();

          setTimeout(function() {
            $('#cut-the-trees').slideUp(1000, function(){
              $('#cut-the-trees h1').remove();
              $('#cut-the-trees').removeClass('animated zoomOut')
              $('#post-Clear-the-Trees .article-share-link').addClass('animated bounce share-now');
              setTimeout(init, 1000);
              });
            document.getElementById('cut-the-trees').classList.add('animated')
            document.getElementById('cut-the-trees').classList.add('zoomOut')
          }, 1000);
        }
      }, 500)
    }

    while ($('.grass .tree').length < 60) {
      var h = Math.random() * 95;
      var w = (Math.random() * 95);
      grass.append(tree.clone().removeClass('hide').css({
        top: h + '%',
        'z-index': Math.round(h),
        left: w + '%'
      }).on('mouseenter', enterer))
    }

    $('#cut-the-trees .grass').on('dblclick', function(event){
      clearSelection();
      event.preventDefault();
      event.stopPropagation();
      $('.tree:visible').sort(function(a, b){
        return Math.abs(event.pageX - $(a).offset().left) > Math.abs(event.pageX - $(b).offset().left) ? 1: -1
        }).each(function(i, v){
        setTimeout(function(){
          enterer.apply(v, [event.pageX])
        }, i * 50)
      })
    })
})();


</script>

{% endraw %}
