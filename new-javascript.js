const notBoring = document.querySelector("#not-boring")
const boring = document.querySelector("#boring")
const switchButton = document.querySelector("#purple-box")
const monster = document.querySelector("#monster")
const red = document.querySelector(".red-box")
const mainContent = document.querySelector(".main-content")

let regular = true
let animTime = 1

// notBoring.style = 'display: none'
// notBoring.parentNode.removeChild(notBoring)

// boring.style = 'display: none'
// boring.parentNode.removeChild(boring)

switchButton.addEventListener("click", disappear)

monster.addEventListener("click", putBack)

function disappear() {
  setTimeout(function () {
    boring.style.display = "none"
    notBoring.style.display = "inline-block"
    notBoring.style.animation = "fade-in 4s ease"
    setTimeout(function () {
      mainContent.classList.remove("shrink")
      switchButton.style.width = "30vw"
      red.style.width = "25vw"
      boring.classList.remove("fade-out")
    }, 2000)
  }, 1000)
  mainContent.classList.add("shrink")
  switchButton.style.width = 0
  red.style.width = 0
  boring.classList.add("fade-out")
}

function putBack() {
  boring.style.display = "block"
  notBoring.classList.add("fade-out")
  notBoring.style.animation = " "
  setTimeout(function () {
    notBoring.style.display = "none"
  },200)
}