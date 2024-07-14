export function filerData(searchText, restaurants) {
    const filtredData = restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
  
    return filtredData;
  }