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
    rating: 3,
    comment: "Rich broth!",
  },
];

// Function to display ramen images and attach event listeners
const displayRamen = () => {
  const ramenList = document.querySelector(".thumbnail");
  ramenList.innerHTML = ""; // Clear previous items

  ramens.forEach((ramen) => {
    const ramenItem = document.createElement("img");
    ramenItem.src = ramen.image;
    ramenItem.alt = ramen.name;
    ramenItem.classList.add("ramen-thumbnail");

    // Add event listener to update ramen details
    ramenItem.addEventListener("click", () => updateRamenDetails(ramen));

    ramenList.appendChild(ramenItem);
  });
};

// Function to update ramen details when an image is clicked
const updateRamenDetails = (ramen) => {
  document.getElementById("ramen-name").innerText = ramen.name;
  document.getElementById("ramen-restaurant").innerText = ramen.restaurant;
  document.getElementById("ramen-rating").innerText = ramen.rating;
  document.getElementById("ramen-comment").innerText =
    ramen.comment || "No comment available";
};

// Function to add a new ramen entry
const addNewRamen = () => {
  const name = document.getElementById("name").value.trim();
  const restaurant = document.getElementById("restaurant").value.trim();
  const image = document.getElementById("image").value.trim();
  const rating = document.getElementById("rating").value.trim();
  const comment = document.getElementById("comment").value.trim();

  // Validation to ensure no empty values
  if (!name || !restaurant || !image || !rating) {
    alert("Please fill in all fields!");
    return;
  }

  const newRamen = {
    id: ramens.length + 1,
    name,
    restaurant,
    image,
    rating: parseInt(rating),
    comment: comment || "No comment",
  };

  // Add to array and refresh display
  ramens.push(newRamen);
  displayRamen(); // Refresh ramen list
  console.log("New ramen added:", newRamen);

  // Clear input fields after adding
  document.getElementById("name").value = "";
  document.getElementById("restaurant").value = "";
  document.getElementById("image").value = "";
  document.getElementById("rating").value = "";
  document.getElementById("comment").value = "";
};

// Attach event listener to Create button
document.getElementById("create-btn").addEventListener("click", addNewRamen);

// Initialize ramen display on page load
displayRamen();
