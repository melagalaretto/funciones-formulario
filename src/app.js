/* eslint-disable */
import "bootstrap";
import "./style.css";
import validator from "validator";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};

let form = document.getElementById("formulario");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  let card = document.getElementById("card");
  let cvc = document.getElementById("cvc");
  let amount = document.getElementById("amount");
  let frname = document.getElementById("frname");
  let ltname = document.getElementById("ltname");
  let city = document.getElementById("city");
  let state = document.getElementById("state");
  let postal = document.getElementById("postal");
  let message = document.getElementById("message");
  let myAlert = document.getElementById("alert");

  //VALIDACIÓN DE CARD
  if (validator.isEmpty(card.value)) {
    card.classList.add("alert-danger");
    myAlert.classList.add("d-block");
  } else {
    card.classList.remove("alert-danger");
    myAlert.classList.remove("d-block");
  }
  //VALIDACIÓN DE CVC
  if (validator.isEmpty(cvc.value)) {
    cvc.classList.add("alert-danger");
    myAlert.classList.add("d-block");
  } else {
    cvc.classList.remove("alert-danger");
    myAlert.classList.remove("d-block");
  }
  //VALIDACIÓN DE AMOUNT
  if (validator.isEmpty(amount.value)) {
    amount.classList.add("alert-danger");
    myAlert.classList.add("d-block");
  } else {
    amount.classList.remove("alert-danger");
    myAlert.classList.remove("d-block");
  }
  //VALIDACIÓN DE FIRSTNAME
  if (validator.isEmpty(frname.value)) {
    frname.classList.add("alert-danger");
    myAlert.classList.add("d-block");
  } else {
    frname.classList.remove("alert-danger");
    myAlert.classList.remove("d-block");
  }
  //VALIDACIÓN DE LASTNAME
  if (validator.isEmpty(ltname.value)) {
    ltname.classList.add("alert-danger");
    myAlert.classList.add("d-block");
  } else {
    ltname.classList.remove("alert-danger");
    myAlert.classList.remove("d-block");
  }
  //VALIDACIÓN DE CITY
  if (validator.isEmpty(city.value)) {
    city.classList.add("alert-danger");
    myAlert.classList.add("d-block");
  } else {
    city.classList.remove("alert-danger");
    myAlert.classList.remove("d-block");
  }
  //VALIDACIÓN DE STATE
  if (state.value === "preference") {
    state.classList.add("alert-danger");
    myAlert.classList.add("d-block");
  } else {
    state.classList.remove("alert-danger");
    myAlert.classList.remove("d-block");
  }
  //VALIDACIÓN DE POSTALCODE
  if (validator.isEmpty(postal.value)) {
    postal.classList.add("alert-danger");
    myAlert.classList.add("d-block");
  } else {
    postal.classList.remove("alert-danger");
    myAlert.classList.remove("d-block");
  }
  //VALIDACIÓN DE MESSAGE
  if (validator.isEmpty(message.value)) {
    message.classList.add("alert-danger");
    myAlert.classList.add("d-block");
  } else {
    message.classList.remove("alert-danger");
    myAlert.classList.remove("d-block");
  }
});
