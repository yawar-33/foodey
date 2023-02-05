const isNull = (value) => {
    if (
        value === '' ||
        value === 0 ||
        value === 'Null' ||
        value === null ||
        value === undefined) {
        return true
    } else {
        return false
    }
}

module.exports = isNull