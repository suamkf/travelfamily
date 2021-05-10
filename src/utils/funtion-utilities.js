import MobileDetect from 'mobile-detect';

//method to get the airports ordered by city
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
// method to detect user device (mobile, desktop)
export const detector = new MobileDetect(window.navigator.userAgent);

//method to find the char "-" into string
const comparteRegex = (data) => {
  let regex = /[A-Z]/g;
  return regex.test(data);
};

//method to validate the fly from and to
export const checkValidFromTo = (from, to) => {
  if (from && to)
    if (comparteRegex(from.split('-')[2]) && comparteRegex(to.split('-')[2]))
      return true;

  return false;
};

// method to replace char "-" to "/"
export const formatLink = (data) => {
  const regex = /[-]/g;
  return data.replace(regex, '/');
};

//method to convert date yyyy-mm-dd to dd-mm-yyyy
const formatDate = (data) => {
  return data.split('-').reverse().join('-');
};

// method to convert milliseconds to time hh:mm
function milisToTime(milliseconds) {
  var hours = milliseconds / (1000 * 60 * 60);
  var absoluteHours = Math.floor(hours);
  var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

  var minutes = (hours - absoluteHours) * 60;
  var absoluteMinutes = Math.floor(minutes);
  var m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

  return `${h}:${m} hs.`;
}

//method to get current date
export const getCurrentDate = () => {
  const time = Date.now();
  const date = new Date(time);
  return `${date.getDate() + 1}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

/*metod to get future date, this use for examples to show the offers items for the current user 
date to X date in the future.
If current date is 1/01/2020 andd addDays = 5 then return 6/01/2020*/
export const getFutureDate = (addDays) => {
  const actualDateMillis = Date.now();
  const millisToAdd = addDays * 24 * 60 * 60 * 1000;
  const date = new Date(actualDateMillis + millisToAdd);
  return `${date.getDate() + 1}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

/*method to generate the query, depending if the return date has been selected,
 it is included on the queryt*/
export const getQuery = (data) => {
  const fromData = data.get('From').split('-')[2];
  const toData = data.get('To').split('-')[2];
  if (comparteRegex(fromData) && comparteRegex(toData))
    return `flyFrom=${fromData}&to=${toData}${
      data.get('dateFrom')
        ? `&dateFrom=${formatDate(data.get('dateFrom'))}&dateTo=${formatDate(
            data.get('dateFrom')
          )}`
        : `&dateFrom=${getCurrentDate()}&dateTo=${getCurrentDate()}`
    }${
      data.get('dateTo')
        ? `&typeFlight=return&returnFrom=${formatDate(
            data.get('dateTo')
          )}&returnTo=${formatDate(data.get('dateTo'))}`
        : ''
    }`;
};

//convert epoch date to millis
const convertEpochToMilis = (epochDate) => {
  var dateToEpoch = new Date(0);
  var timeMilis = dateToEpoch.setUTCSeconds(epochDate);
  return timeMilis;
};
/*convert epoch date to Date. for example
1621976700 to 25/5/2021 21:5 hs.*/
export const getDateFromOpoch = (epochDate) => {
  var timeMilis = convertEpochToMilis(epochDate);
  var date = new Date(timeMilis);
  return `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} hs.`;
};

//method to convert routes to simple Array
export const getArrayRoutes = (data, query) => {
  let arrayRoutes = [];
  data.data.map((route) =>
    arrayRoutes.push(getRouteData(route, query.length > 70 ? true : false))
  );
  return arrayRoutes;
};
//method to calculate scales
const calculateScales = (departure, destination, routes) => {
  let final = 0;
  let index = 0;
  for (index; index < routes.length; index++) {
    if (routes[index].flyFrom === departure) break;
  }
  for (final; final < routes.length - 1; final++) {
    if (routes[final].flyTo === destination) break;
  }

  return final - index;
};
//method to get a Map with the info of fly from and to
const getRouteData = (data, widthReturn) => {
  const routeMap = new Map();
  data.routes.forEach((element) => {
    const route = data.route;
    if (!routeMap.get('from')) {
      const from = route.find((element2) => element2.flyFrom === element[0]);
      const to = route.find((element2) => element2.flyTo === element[1]);
      routeMap.set('from', {
        from: from.cityFrom,
        flyFrom: from.flyFrom,
        flyTo: to.flyTo,
        to: to.cityTo,
        dTime: getDateFromOpoch(from.dTimeUTC),
        aTime: getDateFromOpoch(to.aTimeUTC),
        duration: milisToTime(
          convertEpochToMilis(to.aTimeUTC) - convertEpochToMilis(from.dTimeUTC)
        ),
        totalPrice: data.price,
        scales: calculateScales(element[0], element[1], data.route),
      });
    } else if (widthReturn) {
      const from = route.find((element2) => element2.flyFrom === element[0]);
      const to = route.find((element2) => element2.flyTo === element[1]);
      routeMap.set('to', {
        from: from.cityFrom,
        to: to.cityTo,
        flyFrom: from.flyFrom,
        flyTo: to.flyTo,
        dTime: getDateFromOpoch(from.dTimeUTC),
        aTime: getDateFromOpoch(to.aTimeUTC),
        duration: milisToTime(
          convertEpochToMilis(to.aTimeUTC) - convertEpochToMilis(from.dTimeUTC)
        ),
        totalPrice: data.price,
        scales: calculateScales(element[0], element[1], data.route),
      });
    }
  });
  return routeMap;
};
