"use strict"

//toggle function
const toggleFunction = function (element) {
  element.classList.toggle("active")
}

// navbar variables
const navbar = document.querySelector("[data-navbar]")

const navbarToggleButton = document.querySelector("[data-navbar-toggle-btn]")

navbarToggleButton.addEventListener("click", function () {
  toggleFunction(navbar)
})

// wishList button
const wishListButton = document.querySelectorAll("[data-wishList-btn]")

for (let i = 0; i < wishListButton.length; i++) {
  wishListButton[i].addEventListener("click", function () {
    toggleFunction(this)
  })
}

// go to top variable
const goTopButton = document.querySelector("[data-go-top]")

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 1000) {
    goTopButton.classList.add("active")
  } else {
    goTopButton.classList.remove("active")
  }
})
