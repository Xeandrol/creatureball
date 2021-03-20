function result(x, y, z, j) {
  var x = document.getElementById("pf").value;
  var y = document.getElementById("gs").value;
  // var check = document.getElementById("bbqSalsa").checked;
  var z = document.getElementById("pokeball").value;
  var j = document.getElementById("pkStatus").value;
  var k = document.getElementById("halfLvl").value;
  if (x == 0 || y == 0) {
    document.getElementById("bonus").innerHTML = "Porcoddio errore";
  } else {
    /* if (check == true) {
      j = 4;
      document.getElementById("sad").innerHTML = ":)";
    } else {
      document.getElementById("sad").innerHTML = ":(";
    } */
    document.getElementById("bonus").innerHTML = parseInt(
      (x * y) / (z * j * k)
    );
  }

  /* else if ((check = false)) {
    document.getElementById("sad").innerHTML = ":(";
  } else if ((check = true)) {
    document.getElementById("sad").innerHTML = ":)";
  }*/
}
