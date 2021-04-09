/*
Was will ich wissen

Unternehmen
  Name
  PLZ, Ort
  Ansprechpartner, Email
  Anz. MA
  Anz. User
  Branche
  Produkte
  Rechtsform, Inhaberstruktur
  Altsystem

Opportunity
  Entscheidung bis


*/

function myFunction(event) {
  event.preventDefault();

  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function formToJSON(elements) {
  return [].reduce.call(
    elements,
    (data, element) => {
      data[element.name] = element.value;
      return data;
    },
    {}
  );
}

function handleSubmit(event) {
  //  const form = document.querySelector("#testform")[0];
  const form = document.getElementById("testform");
  const data = formToJSON(form.elements);
  // event.preventDefault();
  const r = JSON.stringify(data);
  console.log(r);
  window.alert(r);
}

setTimeout(console.log("Haalo"), 500);

window.onload = function () {
  console.log("start");
  form.addEventListener("submit", handleSubmit);
};
