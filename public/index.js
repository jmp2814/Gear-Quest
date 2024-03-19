fetch("/public/gear.json")
  .then((response) => response.json())
  .then((data) => {
    const cardContainer = document.getElementById("card-container");

    for (const card of data) {
      // Create card element
      const cardElement = document.createElement("div");
      cardElement.classList.add("col", "col-md-4", "mb-3");

      // Create card content
      const cardContent = `
            <div class="card">
              <img src="${card.image}" class="card-img-top" alt="${card.title}">
              <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">${card.description}</p>
                <a href="#" class="btn btn-primary">Check it out!</a>
              </div>
            </div>
          `;

      // Set card content
      cardElement.innerHTML = cardContent;

      // Append card to container
      cardContainer.appendChild(cardElement);
    }
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });
