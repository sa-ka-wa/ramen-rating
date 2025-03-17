const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "shoyu.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "miso.jpg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "tonkotsu.jpg",
  },
];
const displayRamen = () => {
  const ramenList = document.querySelector(".ramen-list");
  ramenList.inertHTML = "";
  ramens.forEach((ramen) => {
    ramenList.innerHTML += `
      <div class="ramen">
        <img src="images/${ramen.image}" alt="${ramen.name}">
        <h2>${ramen.name}</h2>
        <h3>${ramen.restaurant}</h3>
        <div class="rating">${
          ramen.rating ? `${"★".repeat(ramen.rating)}` : "No rating yet"
        }</div>
        <p>${ramen.comment ? ramen.comment : ""}</p>
      </div>
    `;
  });
};
displayRamen();
