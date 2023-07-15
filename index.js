 function moveDodgerLeft() {
    var dodger = document.getElementById("dodger");
    var leftPosition = parseInt(dodger.style.left) || 0;
    var newLeftPosition = leftPosition - 5;

    dodger.style.left = newLeftPosition + "px";
  }

  function moveDodgerRight() {
    var dodger = document.getElementById("dodger");
    var leftPosition = parseInt(dodger.style.left) || 0;
    var newLeftPosition = leftPosition + 5;

    dodger.style.left = newLeftPosition + "px";
  }
