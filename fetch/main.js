"use strict";
async function fetchUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const user = await response.json()

    console.log(user)
  } catch (err) {
    console.error("Error:", err)
  }
}

fetchUser()

async function fetchPokemon() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/1")

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const bulbasaur = await response.json()

    console.log(bulbasaur)
  } catch (err) {
    console.error("Error:", err)
  }
}

fetchPokemon()

