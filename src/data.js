

export const housesGryffindor= (data) => {
  return data.characters.filter(character => character.house && character.house.includes("Gryffindor"));
}
export const housesSlytherin= (data) => {
  return data.characters.filter(character => character.house && character.house.includes("Slytherin"));
}
export const housesRavenclaw= (data) => {
  return data.characters.filter(character => character.house && character.house.includes("Ravenclaw"));
}
export const housesHufflepuff= (data) => {
  return data.characters.filter(character => character.house && character.house.includes("Hufflepuff"));
}

