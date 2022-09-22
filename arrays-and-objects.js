//Arrays, Objects, Nested Arrays
const pokeBalls = ['Pokeball', 'Greatball', 'Ultraball', 'Masterball']
const itemPrice = [15, 30, 45, 60]
const shoppingCart = []
const shoppingCart2 = []
const pokemon =  [{
    name: 'Charmander', type: 'fire', pokedexnum: 004},
{   name: 'Bulbasaur', type: 'grass', pokedexnum: 001},
{   name: 'Squirtle', type: 'water', pokedexnum: 007},
{   name: 'Pikachu', type: 'electric', pokedexnum: 025},
]

//call full list
console.log(pokeBalls)
//call specific index of list
console.log(pokeBalls[1])

//call array
console.log(pokemon)
//call specific portion within array (ex get pokemon type of pokemon at index 1 -bulbasaur)
console.log(pokemon[1].type)

//function to list nested array by pulling just names (could be replaced with type or pokedex)
function openList() {
    for (index in pokemon)
    console.log(pokemon[index].name)
}
openList()

//function to pull specific object - would pull Squirtle
function specificPokemon(num) {
    console.log(pokemon[num])
}
specificPokemon(2)

//function to list nested array and create a list number to choose from ie 1-4 (instead of index starting at 0)
function listPokemon() {
    for (let index = 0; index <pokemon.length; index++) {
        console.log(`\nPokemon Number : ${index + 1};`)
        console.log(`Name: ${pokemon[index].name} Type: ${pokemon[index].type} PokeDex: ${pokemon[index].pokedexnum}`)
    }
}
listPokemon()

//Merge two arrays (pokeballs - itemprice) --need help from Alex
function mergeArray() {
    pokeBalls.forEach((pokeball) => {
        shoppingCart.push({
            type: pokeball,
            price: itemPrice,
        })
    })
}
mergeArray()
console.log(shoppingCart)
//Merge two arrays with randomization
function randomMergeArray() {
    pokeBalls.forEach((pokeball) => {
        shoppingCart2.push({
            type: pokeball,
            price: itemPrice[Math.floor(Math.random() * itemPrice.length)]
        })
    })
}
randomMergeArray()
console.log(shoppingCart2)