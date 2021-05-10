import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import FlyListItem from './FlyListItem';
import { getArrayRoutes, formatLink } from '../utils/funtion-utilities';
import Loading from './Loading';

const FlyList = ({ enableSearh }) => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { query } = useParams();

  /*here according to the place of departure and destination
   selected, as well as the dates, we look for possible trips*/
  const requestDestinations = async () => {
    if (enableSearh) {
      setLoading(true);
      const { data } = await Axios(
        formatLink(
          `https://api.skypicker.com/flights?v=3&partner=skypicker&locale=en&${formatLink(
            query
          )}`
        )
      );

      /*once the answer is obtained we convert it to array*/
      setDestinations(getArrayRoutes(data, query));
      setLoading(false);
    }
  };

  useEffect(() => {
    requestDestinations();
  }, []);
  return (
    <div className="fly-list-container">
      {/* If the search is waiting, the load component is displayed, otherwise the results are mapped.
      FlyListItem has the logic to correctly render results that are roundtrip or one-way*/}
      {loading && enableSearh ? (
        <Loading color="#04aa6de0" />
      ) : (
        destinations.map((destination) => (
          <FlyListItem key={uuidv4()} destination={destination} />
        ))
      )}
    </div>
  );
};

export default FlyList;
