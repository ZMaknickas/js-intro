function capitalizeWords(line) {
    return line.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
console.log(capitalizeWords("laba diena su vistiena"));