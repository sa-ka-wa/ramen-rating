const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "image/My favorite ramen at Ichiran Ramen in Kyoto [i ate].jpeg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "image/Ramen.jpeg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "image/Sapporo ramen.jpeg",
  },
];
const displayRamen = () => {
  const ramenList = document.querySelector(".thumbnail");

  ramenList.innerHTML = "";

  ramens.forEach((ramen) => {
    console.log("Adding image:", ramen.image);

    const ramenItem = document.createElement("img");
    ramenItem.src = ramen.image;
    ramenItem.alt = ramen.name;
    ramenItem.classList.add("ramen-thumbnail");
    ramenItem.addEventListener("click", () => updateRamenDetails(ramen));

    ramenList.appendChild(ramenItem);
  });

  console.log("Updated .thumbnail:", ramenList.innerHTML);
};
const updateRamenDetails = (ramen) => {
  console.log("Updating details for:", ramen);

  document.getElementById("ramen-name").innerText = ramen.name;
  document.getElementById("ramen-restaurant").innerText = ramen.restaurant;
  document.getElementById("ramen-rating").innerText = ramen.rating;
  document.getElementById("ramen-comment").innerText = ramen.comment;
};
const addNewRamen = () => {
  const name = document.getElementById("name").value.trim();
  const restaurant = document.getElementById("restaurant").value.trim();
  const image = document.getElementById("image").value.trim();
  const rating = document.getElementById("rating").value.trim();
  const comment = document.getElementById("comment").value.trim();

  const newRamen = {
    id: ramens.length + 1,
    name,
    restaurant,
    image,
    rating: parseInt(rating),
    comment: comment,
  };
  ramens.push(newRamen);
  displayRamen();
  console.log("New ramen added:", newRamen);

  document.getElementById("name").value = "";
  document.getElementById("restaurant").value = "";
  document.getElementById("image").value = "";
  document.getElementById("rating").value = "";
  document.getElementById("comment").value = "";
};
document.getElementById("create-btn").addEventListener("click", addNewRamen);

displayRamen();
