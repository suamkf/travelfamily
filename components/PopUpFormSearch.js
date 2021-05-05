import React from 'react';

const PopUpFormSearch = ({ placeHolder }) => {
  return (
    <>
      <form method="post" target="_blank">
        <input
          type="search"
          list="list-places"
          className="input-search-form2"
          placeholder={placeHolder}
        />
      </form>

      <datalist id="list-places">
        <option value="Camaro" />

        <option value="Corvette" />

        <option value="Impala" />

        <option value="Colorado" />
      </datalist>
    </>
  );
};

export default PopUpFormSearch;
