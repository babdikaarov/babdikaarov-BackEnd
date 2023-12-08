const getRandomElement = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Expected an array");
  return arr[Math.floor(Math.random() * arr.length)];
};

function filterArrayByString(array, searchString) {
  // Convert the searchString to lowercase for case-insensitive matching
  const searchLower = searchString.toLowerCase();

  // Use the filter method to get the matching elements
  const filteredArray = array.filter((element) => {
    // Convert each array element to lowercase for case-insensitive matching
    const elementLower = element.person.toLowerCase();

    // Check if the element contains the search string
    return elementLower.includes(searchLower);
  });

  return filteredArray;
}

module.exports = {
  getRandomElement,
  filterArrayByString,
};
