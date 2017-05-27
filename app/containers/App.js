import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchInput, SearchList } from '../components/index';
import { searchText } from '../actions/search';
import Styles from './App.css';

    // <link href="css/select.css" rel="stylesheet" media="screen">
    // <link href="css/pagination.css" rel="stylesheet" media="screen">
class App extends Component {
  render() {
    const { Search } = this.props;
    return (<div className={Styles.normal}>
      <SearchInput
        Search={Search}
        searchText={this.props.searchText}
        style={{ flex: '1' }}
      />
      {this.props.Search.isLoaded ? <div className={Styles.loaderBody} >
        <div className={Styles.loader} />
      </div> :
      <SearchList
        Search={Search}
        searchText={this.props.searchText}
        style={{ flex: '9' }}
      />}
    </div>);
  }
}
function mapStateToProps(state) {
  return {
    Search: state.Search,
  };
}

export default connect(mapStateToProps, {
  searchText,
})(App);
