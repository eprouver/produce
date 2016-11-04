---
title: Clear the Trees
date: 2016-11-04 16:12:14
tags:
---

One of the first things I'm going to have to take on is clearing a lot of trees.

{% raw %}

<div id="cut-the-trees" style="display:none">
<div class="grass">
  <h1 class="text-center">Clear the Trees</h1>
</div>

<div style="display:none">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="tree" viewBox="0 0 511.998 511.998" style="enable-background:new 0 0 511.998 511.998;" xml:space="preserve">
<path style="fill:#91CC04;" d="M412.659,176.848c6.124-15.223,9.314-31.567,9.314-48.066C421.973,57.771,364.205,0,293.197,0  c-12.822-0.002-25.324,1.871-37.198,5.427c-25.473,7.629-48.049,23.035-64.627,44.516C127.866,54.542,77.575,108.67,77.575,174.544  c0,34.181,13.49,66.302,37.374,89.783c2.726,51.479,45.464,92.52,97.606,92.52c6.869,0,13.615-0.735,20.171-2.107  c8.118-1.699,15.931-4.406,23.273-8.048c8.356-4.146,16.109-9.477,23.004-15.889c0.09,0.051,0.18,0.098,0.268,0.147  c15.481,8.788,33.044,13.481,51.2,13.481c57.319,0,103.952-46.635,103.952-103.956C434.423,217.349,426.638,194.94,412.659,176.848z  "/>
<path style="fill:#A78966;" d="M255.999,346.692c-7.342,3.641-15.155,6.347-23.273,8.048v133.986  c0,12.853,10.42,23.273,23.273,23.273c12.853,0,23.273-10.42,23.273-23.273V330.952c-0.088-0.051-0.178-0.098-0.268-0.147  C272.109,337.216,264.356,342.547,255.999,346.692z"/>
<path style="fill:#79AB03;" d="M191.372,49.943c-63.507,4.599-113.797,58.728-113.797,124.601c0,34.181,13.49,66.302,37.374,89.783  c2.726,51.479,45.464,92.52,97.606,92.52c6.869,0,13.615-0.735,20.171-2.107c8.118-1.699,15.931-4.406,23.273-8.048V5.427  C230.526,13.058,207.95,28.463,191.372,49.943z"/>
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

for (var i = 0; i < 80; i++) {
  var h = Math.random() * 95;
  var w = (Math.random() * 95) - 10;
  grass.append(tree.clone().removeClass('hide').css({
    top: (h - 15) + '%',
    'z-index': Math.round(h),
    left: w + '%'
  }).on('mouseenter', enterer))
}
  }, 3000)
</script>

{% endraw %}
