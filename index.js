
function calculate() {

  let vardas1 = document.getElementById("Tavovardas").value;
  let vardas2 = document.getElementById("Simpatijosvardas").value;

  if (/\d/.test(vardas1) || /\d/.test(vardas2)) {
    alert("įveskite vardą, nenaudokite skaičių!!")
    return;
  };

  if (vardas1 === "" || vardas2 === "") {
    alert("įveskite vardą")
    return;
  }
  vardas1 = vardas1.length;
  vardas2 = vardas2.length;

  const sum = Math.floor((vardas1 / 10) / (vardas2 / 10) * 100);

  if (sum > 99) {
    document.getElementById("result").innerText = "It's a match ❤️";
  } else {
    document.getElementById("result").innerText = "Jūsų suderinamumas " + sum + "%";
  }
}



// do not allow number entry
// create errors/alers?
