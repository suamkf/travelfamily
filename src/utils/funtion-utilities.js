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

const comparteRegex = (data) => {
  let regex = /[A-Z]/g;
  return regex.test(data);
};
export const checkValidFromTo = (from, to) => {
  if (from && to)
    if (comparteRegex(from.split('-')[2]) && comparteRegex(to.split('-')[2]))
      return true;

  return false;
};

export const formatLink = (data) => {
  const regex = /[-]/g;
  return data.replace(regex, '/');
};

const formatDate = (data) => {
  return data.split('-').reverse().join('-');
};

function milisToTime(milliseconds) {
  var hours = milliseconds / (1000 * 60 * 60);
  var absoluteHours = Math.floor(hours);
  var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

  var minutes = (hours - absoluteHours) * 60;
  var absoluteMinutes = Math.floor(minutes);
  var m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

  return `${h}:${m} hs.`;
}

export const getCurrentDate = () => {
  const time = Date.now();
  const date = new Date(time);
  return `${date.getDate() + 1}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

export const getFutureDate = (addDays) => {
  const actualDateMillis = Date.now();
  const millisToAdd = addDays * 24 * 60 * 60 * 1000;
  const date = new Date(actualDateMillis + millisToAdd);
  return `${date.getDate() + 1}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

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

const convertEpochToMilis = (epochDate) => {
  var dateToEpoch = new Date(0);
  var timeMilis = dateToEpoch.setUTCSeconds(epochDate);
  return timeMilis;
};
export const getDateFromOpoch = (epochDate) => {
  var timeMilis = convertEpochToMilis(epochDate);
  var date = new Date(timeMilis);
  return `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} hs.`;
};

export const getArrayRoutes = (data, query) => {
  let arrayRoutes = [];
  data.data.map((route) =>
    arrayRoutes.push(getRouteData(route, query.length > 70 ? true : false))
  );
  return arrayRoutes;
};

const calculateScales = (departure, destination, routes) => {
  let final = 0;
  let index = 0;
  for (index; index < routes.length; index++) {
    if (routes[index].flyFrom === departure) break;
  }
  for (final; final < routes.length; final++) {
    if (routes[final].flyTo === destination) break;
  }

  return final - index - 1;
};
const getRouteData = (data, widthReturn) => {
  const routeMap = new Map();
  data.routes.forEach((element) => {
    const route = data.route;
    if (!routeMap.get('from')) {
      const from = route.find((element2) => element2.flyFrom === element[0]);
      const to = route.find((element2) => element2.flyTo === element[1]);
      routeMap.set('from', {
        from: from.cityFrom,
        to: to.cityTo,
        dTime: getDateFromOpoch(from.dTime),
        aTime: getDateFromOpoch(to.aTime),
        duration: milisToTime(
          convertEpochToMilis(to.aTime) - convertEpochToMilis(from.dTime)
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
        dTime: getDateFromOpoch(from.dTime),
        aTime: getDateFromOpoch(to.aTime),
        duration: milisToTime(
          convertEpochToMilis(to.aTime) - convertEpochToMilis(from.dTime)
        ),
        totalPrice: data.price,
        scales: calculateScales(element[1], element[0], data.route),
      });
    }
  });
  return routeMap;
};
