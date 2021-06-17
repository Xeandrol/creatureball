function result(x, y, z, j) {
  var x = document.getElementById("pf").value;
  var y = document.getElementById("gs").value;
  // var check = document.getElementById("bbqSalsa").checked;
  var z = document.getElementById("pokeball").value;
  var j = document.getElementById("pkStatus").value;
  var k = document.getElementById("halfLvl").value;
  if (x == 0) {
    document.getElementById("bonus").innerHTML = "0 Hp rimanenti.";
  } else {
    /* if (check == true) {
      j = 4;
      document.getElementById("sad").innerHTML = ":)";
    } else {
      document.getElementById("sad").innerHTML = ":(";
    } */
    var res = parseInt((x * y * 3) / (z * j * k));
    if (res > 22) {
      document.getElementById("greve").innerHTML = "Quasi impossibile";
    } else {
      document.getElementById("greve").innerHTML = "";
    }
    document.getElementById("bonus").innerHTML = res;
  }

  /* else if ((check = false)) {
    document.getElementById("sad").innerHTML = ":(";
  } else if ((check = true)) {
    document.getElementById("sad").innerHTML = ":)";
  }*/
}
