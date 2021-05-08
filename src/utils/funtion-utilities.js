import MobileDetect from 'mobile-detect';

export const getListAiportByCity = (data) => {
  let list = [];
  for (let i = 0; i < data.length; i++) {
    let city = data[i].city.name;
    let pais = data[i].city.country
      ? data[i].city.country.name
      : data[i].country.name;
    list.push([city, pais, data[i].id]);
  }

  return list;
};

export const detector = new MobileDetect(window.navigator.userAgent);

export const checkValidFromTo = (from, to) => {
  let regex = /[A-Z]/g;
  if (from && to)
    if (regex.test(from.split('-')[2]) && regex.test(to.split('-')[2]))
      return true;

  return false;
};
