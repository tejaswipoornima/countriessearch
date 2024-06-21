import React from 'react';
import './CountryList.css';

const CountryList = ({ countries }) => {
  return (
    <div className="country-list">
      {countries.map((country) => (
        <div key={country.cca3} className="countryCard">
          <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
