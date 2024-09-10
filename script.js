const catFactElement = document.getElementById("cat-fact");
const generateFactButton = document.getElementById("generate-fact");
const loadingElement = document.getElementById("loading");

const catFacts = [
  "Cats have five toes on their front paws, but only four on the back.",
  "A group of cats is called a clowder.",
  "Cats sleep for around 13 to 16 hours a day!",
  "Cats can jump up to six times their body length.",
  "A cat’s nose is as unique as a human’s fingerprint.",
];

function fetchCatFactFromCloud() {
  // Simulate loading
  loadingElement.style.display = "block";
  catFactElement.textContent = "";

  setTimeout(() => {
    loadingElement.style.display = "none";
    const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];
    catFactElement.textContent = randomFact;
  }, 2000);
}

generateFactButton.addEventListener("click", fetchCatFactFromCloud);
