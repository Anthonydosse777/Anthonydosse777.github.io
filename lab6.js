const url = "https://brianobruno.github.io/cats.json";
const options = {
  method: "GET",
};

const catImage = document.getElementById("catImage");
const fetchButton = document.getElementById("fetchButton");
const factsTable = document.getElementById("factsTable");

async function fetchCatFacts() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    myObj = JSON.parse(result);

    const sortedFacts = myObj.facts.sort((a, b) => a.factId - b.factId);

    factsTable.innerHTML = "";

    sortedFacts.forEach((fact) => {
      const row = factsTable.insertRow();
      const idCell = row.insertCell();
      const factCell = row.insertCell();
      idCell.textContent = fact.factId;
      factCell.textContent = fact.text;
    });

    catImage.src = myObj.catPhoto;
  } catch (error) {
    console.log("error", error);
  }
}