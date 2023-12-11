// Ditt animals-array
const animals = ["Hund", "Katt", "Fugl", "Hamster", "Kanin"];

// Ditt colors-array
const colors = ["Rød", "Blå", "Grønn", "Gul", "Lilla"];

// Funksjon for å generere et tilfeldig tall innenfor et gitt intervall
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funksjon for å generere et tilfeldig sett av traits
function generateRandomTraits() {
  const traits = ["Sosial", "Leken", "Kjærlig", "Eventyrlysten", "Rolig"];
  const numberOfTraits = getRandomInt(1, 4);
  // Shuffler traits-arrayet for å få tilfeldig rekkefølge
  const shuffledTraits = traits.sort(() => 0.5 - Math.random());
  // Velger det tilfeldige antallet traits
  return shuffledTraits.slice(0, numberOfTraits);
}

// Tomt array for å lagre pets-objekter
const pets = [];

// Fyll pets-arrayet med objekter
for (let i = 0; i < animals.length; i++) {
  const pet = {
    dyrenavn: animals[i], // Velg dyrenavnet fra animals-arrayet
    farge: colors[getRandomInt(0, colors.length - 1)], // Velg en tilfeldig farge fra colors-arrayet
    alder: getRandomInt(1, 15), // Generer en tilfeldig alder mellom 1 og 15 år
    traits: generateRandomTraits(), // Bruk funksjonen til å generere tilfeldige traits
  };
  pets.push(pet); // Legg til objektet i pets-arrayet
}

// Funksjon for å finne et kjæledyr etter navn ved hjelp av find-metoden
function findPetByName(name) {
  return pets.find((pet) => pet.dyrenavn === name);
}

// Funksjon for å finne indeksen til det første kjæledyret av en gitt farge ved hjelp av findIndex
function findIndexByColor(color) {
  return pets.findIndex((pet) => pet.farge === color);
}

// Funksjon for å finne det siste kjæledyret av en spesifikk alder ved hjelp av findLastIndex og findLast
function findLastPetByAge(age) {
  // Finn indeksen til siste kjæledyr med ønsket alder
  const lastIndex = pets.findIndex((pet) => pet.alder === age);
  // Hent det siste kjæledyret basert på indeksen
  return pets[lastIndex];
}

// Funksjon for å filtrere kjæledyr etter et spesifikt trekk ved hjelp av filter
function filterPetsByTrait(trait) {
  return pets.filter((pet) => pet.traits.includes(trait));
}

// Bruk forEach for å logge detaljene til hvert kjæledyr
pets.forEach((pet) => {
  console.log(
    `${pet.dyrenavn} - Farge: ${pet.farge}, Alder: ${
      pet.alder
    }, Traits: ${pet.traits.join(", ")}`
  );
});
