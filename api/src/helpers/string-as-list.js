module.exports = function stringAsList(string) {
    return string.split(',').map((value) => value.trim())
}
