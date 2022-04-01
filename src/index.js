function isEven (num) {
  return (isNaN(num)) ? 
    false : 
    Boolean(!(num & 1));
}

module.exports = isEven;