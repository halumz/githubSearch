import React, { Component } from 'react';
import Styles from './searchInput.css';

export default class SearchInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.Search.text || '',
    };
  }
  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      event.preventDefault();
      const Search = this.props.Search;
      if (this.state.text.length > 0 && this.state.text !== Search.text) {
        Search.text = this.state.text;
        Search.pageNumber = 1;
        this.props.searchText(Search);
      }
    }
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };
  render() {
    return (<div className={Styles.containerStyle}>
      <input
        type="search"
        className={Styles.inputStyle}
        placeholder="Search Here.."
        autoFocus="true"
        value={this.state.text}
        onChange={this.handleChange}
        onKeyPress={this.onKeyPress}
      />
    </div>);
  }
}
