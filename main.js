const randomFactURL = "https://catfact.ninja/fact";
const breedsURL = "https://catfact.ninja/breeds";


const catFactsContainer = document.getElementById("catFacts");
const getCatFactButton = document.getElementById("getCatFactButton");
const breedList = document.getElementById("breedList");
const loadMoreBreeds = document.getElementById("loadMoreBreeds");

let currentBreedPage = 1;


const options = { method: "GET" };


async function loadRandomFact() {
  try {
    const response = await fetch(randomFactURL, options);
    const data = await response.json();

    if (catFactsContainer) {
        // Bootstrap: "alert alert-info" blue alert-box styling
      catFactsContainer.innerHTML = `<p class="alert alert-info">${data.fact}</p>`;
    }
  } catch (error) {
    console.error("Error fetching random cat fact:", error);
  }
}

async function loadBreeds(page = 1) {
  try {
    const response = await fetch(`${breedsURL}?limit=10&page=${page}`, options);
    const result = await response.json();

    if (breedList) {
      result.data.forEach((breed) => {
        const card = document.createElement("div");
        //  Bootstrap: responsive columns
        card.className = "col-md-6 col-lg-4";
        // Bootstrap: Card styling, shadows, padding, and title
        card.innerHTML = `
          <div class="card h-100 shadow-sm p-3">
            <h5 class="card-title">${breed.breed}</h5>
            <p><b>Origin:</b> ${breed.country}</p>
            <p><b>Coat:</b> ${breed.coat}</p>
            <p><b>Pattern:</b> ${breed.pattern}</p>
          </div>
        `;

        breedList.appendChild(card);
      });
    }
  } catch (error) {
    console.error("Error fetching cat breeds:", error);
  }
}


if (getCatFactButton) {
  getCatFactButton.addEventListener("click", loadRandomFact);
}


if (breedList) {
  loadBreeds(currentBreedPage);

  if (loadMoreBreeds) {
    loadMoreBreeds.addEventListener("click", () => {
      currentBreedPage++;
      loadBreeds(currentBreedPage);
    });
  }

  const searchInput = document.getElementById("search");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      const cards = document.querySelectorAll("#breedList .card"); // Uses Bootstrap class "card" for filtering

      cards.forEach(card => {
        const title = card.querySelector(".card-title").textContent.toLowerCase();//   Bootstrap "card-title" styling the cards 
        card.parentElement.style.display = title.includes(query) ? "block" : "none";
      });
    });
  }
}

