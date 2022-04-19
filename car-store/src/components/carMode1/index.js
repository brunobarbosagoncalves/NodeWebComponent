import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Car = ({ data }) => {
  const [items, setitems] = useState([]);
  const [localdata, setlocaldata] = useState();

  const serializeInput = (_data) => {
    //input on Js
    if (Array.isArray(_data)) return _data;

    //input on HTML dom
    try {
      if (Array.isArray(JSON.parse(_data))) return JSON.parse(_data);
    } catch (error) {}

    //default
    return [];
  };

  //event on start
  useEffect(() => {
    setitems(serializeInput(data));
    return () => {};
  }, []);

  //event on update
  useEffect(() => {
    items;
    return () => {};
  }, [items]);

  const onChange = ({ target: { name, value } }) => {
    setlocaldata({ ...localdata, [name]: value });
  };

  const onAdd = () => {
    if (!localdata.name) return false;
    if (!localdata.price) return false;

    setitems(() => [...items, localdata]);
    setlocaldata(() => ({}));
  };

  return (
    <div className="car-store">
      <p>Model 1 - Pure</p>
      <div className="car-store-form">
        <div className="car-store-input-container">
          <input
            name="name"
            value={localdata?.name || ''}
            placeholder="name"
            className="car-store-input"
            type="text"
            onChange={onChange}
          />
        </div>
        <div className="car-store-input-container">
          <input
            name="price"
            value={localdata?.price || ''}
            placeholder="price"
            className="car-store-input"
            type="number"
            onChange={onChange}
          />
        </div>
        <div className="car-store-button-container">
          <button className="car-store-button" type="button" onClick={onAdd}>
            Adicionar
          </button>
        </div>
      </div>
      <div className="car-store-list">
        {items &&
          Array.isArray(items) &&
          items.map((item) => (
            <div key={item.name} className="car-store-list-container">
              <div className="car-store-list-name">{item.name}</div>
              <div className="car-store-list-price">
                {Number(item.price).toFixed(2)}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

Car.propTypes = {
  items: PropTypes.array,
};

export default Car;
