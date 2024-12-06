export const categoryOptions = [
  {
    value: "marine_ecosystems",
    option: "Marine Ecosystems",
  },
  {
    value: "oceanography",
    option: "Oceanography",
  },
  {
    value: "marine_life",
    option: "Marine Life",
  },
  {
    value: "climate_and_oceans",
    option: "Climate & Oceans",
  },
  {
    value: "conservation",
    option: "Conservation",
  },
  {
    value: "ocean_history",
    option: "Ocean History",
  },
  {
    value: "pollution_and_impact",
    option: "Pollution & Impact",
  },
  {
    value: "sustainable_practices",
    option: "Sustainable Practices",
  },
  {
    value: "ocean_trivia",
    option: "Ocean Trivia",
  },
];

export const difficultyOptions = [
  {
    value: "easy",
    option: "Easy",
  },
  {
    value: "medium",
    option: "Medium",
  },
  {
    value: "hard",
    option: "Hard",
  },
];

export const alphabeticNumeral = (index: number) => {
  const asciiCode = index + 65;
  const letter = String.fromCharCode(asciiCode);
  return letter + ". ";
};

export const showCategory = (category: string) => {
  if (category === "marine_ecosystems") return "Marine Ecosystems";
  else if (category === "oceanography") return "Oceanography";
  else if (category === "marine_life") return "Marine Life";
  else if (category === "climate_and_oceans") return "Climate & Oceans";
  else if (category === "conservation") return "Conservation";
  else if (category === "ocean_history") return "Ocean History";
  else if (category === "pollution_and_impact") return "Pollution & Impact";
  else if (category === "sustainable_practices") return "Sustainable Practices";
  else if (category === "ocean_trivia") return "Ocean Trivia";
};
