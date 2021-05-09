import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
  <ReactLoading
    className="loading"
    type={type}
    color={color}
    height={200}
    width={100}
  />
);

export default Loading;
