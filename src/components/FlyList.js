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

      setDestinations(getArrayRoutes(data, query));
      setLoading(false);
    }
  };

  useEffect(() => {
    requestDestinations();
  }, []);
  return (
    <div className="fly-list-container">
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
