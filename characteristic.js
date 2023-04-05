const characters = (string) => {

    let firstString = string.split('').slice(0, 1).join('').toUpperCase()
    let secondString = string.split('').slice(1).join('').toLowerCase()
    console.log(firstString.concat(secondString))
    return firstString.concat(secondString)
}

module.exports = characters