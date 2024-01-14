// const { queens } = require("./data.js")
// const { tributeChest } = require("./data")
const { database } = require("./data")
 
const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    database.queens.push(queenObject)
    console.log(queenId, queenName)
}


const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}!`
}

const payTribute = (tributeId, tributeDescription, queenId) => {
    const tributeObject = {
        id: tributeId,
        description: tributeDescription,
        queenId: queenId
    }

    database.tributeChest.push(tributeObject)

}

for (const queen of database.queens) {
    const hailMessage = hailTheQueen(queen.name)
    console.log(hailMessage)
}

for (const queen of database.queens) {
    for (tribute of tributeChest) {
        if (tribute.queenId === queen.id) 
        console.log(`${queen.name} has tribute ${tribute.description}`)
    }
}

module.exports = { createQueen, hailTheQueen, payTribute }