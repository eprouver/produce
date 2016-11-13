---
title: garden
date: 2016-11-13 11:37:50
---
<table class="table" id="plant-table">
<tr>
<th>Plant</th>
<th>Per Person</th>
</tr>
<tbody>
</tbody>
</table>


{% raw %}
<script>
(function fillTable(){
  if(typeof $ !== "function" || typeof _ !== "function"){
    setTimeout(fillTable, 1000);
    return;
  }

  global_plants.forEach(function(v){
    $("#plant-table tbody").append($('<tr>').html('<td>' + v.name+ '</td><td> ' + v.amount + ' '+ ((v.amount > 1)? v.pNoun : v.sNoun) + '</td>'));
    })

})();


</script>

{% endraw %}
