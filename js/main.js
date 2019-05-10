let entertain = document.getElementById('entertain')

entertain.addEventListener("click", displayToggle)

function displayToggle() {
    var x = document.getElementById("special");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    console.log('clicked')
  }

AOS.init()