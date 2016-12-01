---
title: 'The Gamble '
date: 2016-11-11 16:07:43
tags:
  - mini-game
comments: true
---
So, it's time for me to go off grid.

I know it's a gamble, but I think it's worth it.  In honor of this gamble I made a little slot-machine where winning unlocks the achievements I hope to gain in this adventure.

{% raw %}
<div id="slot-holder">		
<div id="slot" class="screen">

		</div>     
		<button id="spin" onclick="spin(this)">Spin</button>

<svg width="1" height="1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0 20" />
        </filter>
              <filter id="blur2">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0 10" />
        </filter>
              <filter id="blur3">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0 3" />
        </filter>
    </defs>
</svg>
</div>

<script>
(function(){

var $scope = {},
  animationEnd = ['webkitTransitionEnd', 'mozTransitionEnd', 'oTransitionEnd', 'msTransitionEnd', 'transitionEnd'];
$scope.spinrows = 20;
$scope.spintime = 800;
$scope.localslot = {
  "title": "",
  "symbols": [{
    "win": "Independence",
    "icon": "fa fa-truck",
    "name": "A"
  }, {
    "win": "A Mortgage Free Home",
    "icon": "fa fa-home",
    "name": "B"
  }, {
    "win": "Modern Comforts",
    "icon": "fa fa-bathtub",
    "name": "C"
  }, {
    "win": "Life Direction",
    "icon": "fa fa-map-signs",
    "name": "D"
  }, {
    "win": "Financial Security",
    "icon": "fa fa-bank",
    "name": "E"
  }, {
    "win": "Healthy Food",
    "icon": "fa fa-cutlery",
    "name": "F"
  }, {
    "win": "Respect for Nature",
    "icon": "fa fa-leaf",
    "name": "G"
  }],
  "paylines": [
    [
      [
        0, 0
      ],
      [
        1, 0
      ],
      [
        2, 0
      ]
    ],
    [
      [
        0, 1
      ],
      [
        1, 1
      ],
      [
        2, 1
      ]
    ],
    [
      [
        0, 2
      ],
      [
        1, 2
      ],
      [
        2, 2
      ]
    ],
    [
      [
        0, 0
      ],
      [
        1, 1
      ],
      [
        2, 2
      ]
    ],
    [
      [
        0, 2
      ],
      [
        1, 1
      ],
      [
        2, 0
      ]
    ],
    [
      [
        2, 2
      ],
      [
        1, 1
      ],
      [
        0, 0
      ]
    ],
    [
      [
        0, 2
      ],
      [
        1, 1
      ],
      [
        2, 2
      ]
    ],
    [
      [
        0, 0
      ],
      [
        1, 1
      ],
      [
        2, 0
      ]
    ],
    [
      [
        0, 1
      ],
      [
        1, 0
      ],
      [
        2, 1
      ]
    ],
    [
      [
        0, 1
      ],
      [
        1, 2
      ],
      [
        2, 1
      ]
    ]
  ],
  "combos": [
    ["A", "A", "A"],
    ["B", "B", "B"],
    ["C", "C", "C"],
    ["D", "D", "D"],
    ["E", "E", "E"],
    ["F", "F", "F"],
    ["G", "G", "G"]
  ],
  "columns": 3,
  "rows": 3
}

function createcell(dest, r) {
  if (dest === undefined) return null;
  var div = document.createElement('div'),

    rand = ~~(Math.random() * $scope.localslot.symbols.length);

  div.classList.add('cell');
  div.classList.add($scope.localslot.symbols[rand].name);
  div.setAttribute('data', $scope.localslot.symbols[rand].name);
  div.classList.add('r' + r);
  div.innerHTML = '<div class="' + $scope.localslot.symbols[rand].icon + '"></div>';
  div.dataset.win = $scope.localslot.symbols[rand].win;
  dest.appendChild(div);
  return div.cloneNode(true);
}

var isfirst = true;

function drawmachine() {
  var i, j, spinners = document.getElementsByClassName('spinner'),
    transfer;

  if (isfirst) {
    var spinner, transfer;
    for (var i = 0; i < $scope.localslot.columns; i++) {
      //Create the spinners
      spinner = document.createElement('div');
      spinner.setAttribute('class', 'spinner spinner-' + i);
      transfer = document.createElement('div');
      transfer.setAttribute('class', 'top');
      spinner.appendChild(transfer);
      transfer = document.createElement('div');
      transfer.setAttribute('class', 'middle');
      spinner.appendChild(transfer);
      transfer = document.createElement('div');
      transfer.setAttribute('class', 'bottom');
      transfer.classList.add('c' + i);
      spinner.appendChild(transfer);

      if (i === $scope.localslot.columns - 1) {
        for (j = 0; j < animationEnd.length; j++) {
          spinner.addEventListener(animationEnd[j], checkwinner);
        }
      }
      document.getElementById('slot').appendChild(spinner);
    }

    for (var i = 0; i < spinners.length; i++) {
      for (var j = 0; j < $scope.localslot.rows; j++) {
        //create identical children on bottom and top
        spinners[i].children[2].appendChild(createcell(spinners[i].children[0], j));
      }
    }
  } else {
    [].slice.call(spinners).forEach(function(v){
      v.style.transition = 'none';
      v.style.transform = 'translate3d(0,0,0)';
      //empty the top
      v.children[0].innerHTML = '';

      //Grab the bottom cells and add them to the top
      transfer = v.children[2].children;
      while (transfer.length > 0) {
        v.children[0].appendChild(transfer[0]);
      }

      //empty middle and bottom
      v.children[1].innerHTML = '';
      v.children[2].innerHTML = '';      
    })

  }

  //Add Cells to the middle
  for (var i = 0; i < spinners.length; i++) {
    for (var j = 0; j < $scope.spinrows; j++) {
      createcell(spinners[i].children[1], 'm');
    }
  }

  if (isfirst) {
    isfirst = false;
    return;
  }

  for (var i = 0; i < spinners.length; i++) {
    for (var j = 0; j < $scope.localslot.rows; j++) {
      createcell(spinners[i].children[2], j);
    }
  }

  function checkwinner() {
    var winarray = [],
      i, j, divs, results = [];

    for (i = 0; i < $scope.localslot.paylines.length; i++) {
      winarray.push({
        divs: $scope.localslot.paylines[i].map(
          function(v, j) {
            return document.querySelector(['.c', v[0], ' .r', v[1]].join(''));
          }),
        combo: $scope.localslot.paylines[i].map(
          function(v, j) {
            return document.querySelector(['.c', v[0], ' .r', v[1]].join('')).getAttribute('data');
          }).toString()
      });

    }

    for (i = 0; i < winarray.length; i++) {
      results = $scope.localslot.combos.map(function(v) {
        return v.toString() === winarray[i].combo;
      });
      if (results.indexOf(true) !== -1) {
        for (j = 0; j < winarray[i].divs.length; j++) {
          var child = winarray[i].divs[j].childNodes[0];
          child.classList.add('animated');
          child.classList.add('rubberBand');
          winarray[i].divs[j].style.color = 'black';
          winarray[i].divs[j].style.borderColor = 'black';
          winarray[i].divs[j].style.backgroundColor = '#FFEB3B'
        }

        if(window.swal){
          swal({title: winarray[i].divs[0].dataset.win,
            text: 'Achievement Unlocked!',
            type: 'success',
            animation: false});

            $scope.localslot.symbols = $scope.localslot.symbols.filter(function(v){
              return v.win != winarray[i].divs[0].dataset.win
            });

            if($scope.localslot.symbols.length == 0){
              setTimeout(function() {
                $('#slot-holder').slideUp(1000, function(){
                });
                document.getElementById('slot-holder').classList.add('animated')
                document.getElementById('slot-holder').classList.add('zoomOut')
              }, 2000);
            }
        }
      }
    }
  };

  function spinreed(i) {
    spinners[i].style.transition = ['all ', (i + 1) * $scope.spintime, 'ms cubic-bezier(0.21, -0.19, 0.6, 1)'].join('');
    setTimeout(function() {
      spinners[i].style.transform = ['translate3d(0,', -offheight, 'px,0)'].join('');
    }, 100);
  };

  setTimeout(function() {
    for (var i = 0; i < spinners.length; i++) {
      spinreed(i);
    }
  }, 100);
}

window.spin = function(self) {
  var winners = document.getElementsByClassName('glyphicon');
  for (var i = 0; i < winners.length; i++) {
      winners[i].classList.remove('animated');
  }
  setTimeout(drawmachine);
}

drawmachine();
var offheight = document.getElementsByClassName('top')[0].clientHeight + document.getElementsByClassName('middle')[0].clientHeight + 6;
})();
</script>
{% endraw %}

Ironically, in the UK a slot-machine is called a "Fruit Machine"... I'll take that as a good sign.

Please subscribe and follow me on social media - I plan to update frequently.
