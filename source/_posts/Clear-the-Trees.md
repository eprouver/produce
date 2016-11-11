---
title: Clear the Trees
date: 2016-11-04 16:12:14
tags:
  - clearing-trees
  - interactive
---

One of the first things I'm going to have to take on is clearing a lot of trees.

{% raw %}

<div id="cut-the-trees" style="display:none">
<div class="grass">
  <h1 class="text-center">Clear the Trees</h1>
</div>

<div style="display:none">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="tree" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
  <rect rx="30" stroke="#7B4F24" id="svg_4" height="225.00001" width="90" y="263" x="221" stroke-opacity="null" stroke-width="20" fill="#A6723D"></rect>
    <ellipse stroke="#79AB03" ry="167.94306" rx="173.5" id="svg_2" cy="176.94306" cx="263.5" stroke-width="20" fill="#91CC04"></ellipse>
</svg>
</div>
</div>

<script>
setTimeout(function(){
$('#cut-the-trees').slideDown(1000);

var tree = $('#cut-the-trees .tree');
var grass = $('#cut-the-trees .grass');

function enterer() {
  var me = $(this).css({
    'pointer-events': 'none'
  })
  me[0].classList.add('animated')
  me[0].classList.add(Math.random() > 0.5 ? 'rotateOutDownLeft' : 'rotateOutDownRight');
  setTimeout(function() {
    me.remove();
    if ($('.tree').length == 1) {
      $('#cut-the-trees h1').text('You Did It!').addClass('animated tada');

      setTimeout(function() {
        $('#cut-the-trees').slideUp(1000);
        document.getElementById('cut-the-trees').classList.add('animated')
        document.getElementById('cut-the-trees').classList.add('zoomOut')
      }, 2000);
    }
  }, 2000)
}

for (var i = 0; i < 60; i++) {
  var h = Math.random() * 95;
  var w = (Math.random() * 95);
  grass.append(tree.clone().removeClass('hide').css({
    top: h + '%',
    'z-index': Math.round(h),
    left: w + '%'
  }).on('mouseenter', enterer))
}
  }, 3000)
</script>

{% endraw %}
