import React from 'react';

const PopUpFormSearch = ({ placeHolder }) => {
  return (
    <>
      <form method="post" target="_blank">
        <input
          type="search"
          list="listamodelos"
          className="input-search-form"
          placeholder={placeHolder}
        />
      </form>

      <datalist id="listamodelos">
        <option value="Camaro" />

        <option value="Corvette" />

        <option value="Impala" />

        <option value="Colorado" />
      </datalist>
    </>
  );
};

export default PopUpFormSearch;
