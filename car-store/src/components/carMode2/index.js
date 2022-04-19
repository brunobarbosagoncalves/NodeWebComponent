import React from 'react';
import PropTypes from 'prop-types';

import '../../App.css';

class Car extends React.Component {
  constructor() {
    super();
    this.onAdd = this.onAdd.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getData = this.getData.bind(this);

    this.state = {
      props: [],
      data: [],
      localData: {},
      items: [],
    };
  }

  getData() {
    this.setState(() => ({ items: this.serializeInput(this.props.data) }));
  }

  componentDidMount() {
    this.setState(() => ({
      props: Object.values(this.props)[1],
    }));
    this.getData();
  }

  serializeInput = (_data) => {
    //input on Js
    if (Array.isArray(_data)) return _data;

    //input on HTML dom
    try {
      if (Array.isArray(JSON.parse(_data))) return JSON.parse(_data);
    } catch (error) {}

    //default
    return [];
  };

  onChange = ({ target: { name, value } }) => {
    this.setState(() => ({
      localData: { ...this.state.localData, [name]: value },
    }));
  };

  onAdd = () => {
    if (!this.state.localData.name) return false;
    if (!this.state.localData.price) return false;

    const ttitems = [...this.state.items, { ...this.state.localData }];

    this.setState(() => ({
      items: [...this.state.items, this.state.localData],
      localData: { name: '', price: '' },
    }));
  };

  render() {
    console.log('PROPS', this.props);
    return (
      <div className="car-store">
        <p>Mode 2 - react-to-webcomponents</p>
        <div className="car-store-form">
          <div className="car-store-input-container">
            <input
              name="name"
              value={this.state.localData.name}
              placeholder="name"
              className="car-store-input"
              type="text"
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="car-store-input-container">
            <input
              name="price"
              value={this.state.localData.price}
              placeholder="price"
              className="car-store-input"
              type="number"
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="car-store-button-container">
            <button
              className="car-store-button"
              type="button"
              onClick={this.onAdd}
            >
              Add
            </button>
          </div>
        </div>
        <div className="car-store-list">
          {console.log('this.state.items', this.state.items)}
          {this.state.items &&
            Array.isArray(this.state.items) &&
            this.state.items.map((item) => (
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
  }
}

Car.propTypes = {
  items: PropTypes.array,
};

export default Car;
