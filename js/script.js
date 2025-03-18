const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "https://moringa.instructure.com/courses/967/files/517801/preview",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "https://moringa.instructure.com/courses/967/files/517800/preview",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "https://moringa.instructure.com/courses/967/files/517799/preview",
  },
];
const displayRamen = () => {
  const ramenList = document.querySelector(".thumbnail");
  ramenList.innerHTML = "";
  ramens.forEach((ramen) => {
    ramenList.innerHTML += `
  <div id="ramen-detail">
    <img src="${ramen.image}" alt="${ramen.name}" />
  </div>
    `;
    const ramenItem = document.createElement("img");
    ramenItem.src = ramen.image;
    ramenItem.alt = ramen.name;
    ramenItem.classList.add("ramen-thumbnail");
  });

  ramenItem.addEventListener("click", () => {
    document.getElementById("ramen-name").innerText = ramen.name;
    document.getElementById("restaurant").innerText = ramen.restaurant;
    document.getElementById("rating").innerText = ramen.rating;
    document.getElementById("comment").innerText = ramen.comment;
  });

  ramenList.appendChild(ramenItem);
  const handleclick = (e) => {
    console.log(e.target);
  };

  const newRamen = () => {
    name = document.getElementById("name").value;
    restaurant = document.getElementById("restaurant").value;
    image = document.getElementById("image").value;
    rating = document.getElementById("rating").value;
    comment = document.getElementById("comment").value;
  };
  newRamen();

  const createNewRamen = {
    id: ramens.length + 1,
    name: name,
    restaurant: restaurant,
    image: image,
    rating: rating,
    comment: comment,
  };
  ramens.push({ name, restaurant, image, rating, comment });
  console.log(ramens);

  const ramenDetail = document.querySelectorAll("#ramen-detail");
  ramenDetail.addEventListener("click", () => {
    handleclick();
  });
};
displayRamen();
