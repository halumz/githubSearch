import React, { Component } from 'react';
import Pagination from 'rc-pagination';
import Select from 'react-select';
import listVIew from './list';
import Styles from './searchList.css';

export default class extends Component {
  render() {
    const { Search, searchText } = this.props;
    const { pageNumber, totalCount, perPage } = Search;
    if (totalCount === -1) {
      return (<div />);
    }
    if (totalCount === -2) {
      return (<h1>
        Some Error Occurs
      </h1>);
    }
    if (totalCount === 0) {
      return (<h1 className={Styles.errorP}>
        No data Found
      </h1>);
    }
    const onPageChange = (selected) => {
      if (selected !== pageNumber) {
        Search.pageNumber = selected;
        searchText(Search);
      }
    };
    const onChangeSort = (sort) => {
      if (sort !== Search.sort) {
        Search.sort = sort;
        Search.pageNumber = 1;
        searchText(Search);
      }
    };
    const localeEnglish = {
      items_per_page: '/ page',
      jump_to: 'Goto',
      page: '',
      prev_page: 'Previous Page',
      next_page: 'Next Page',
      prev_5: 'Previous 5 Pages',
      next_5: 'Next 5 Pages',
      prev_3: 'Previous 3 Pages',
      next_3: 'Next 3 Pages',
    };
    const paginationCconfig = {
      className: 'rc-pagination',
      current: pageNumber,
      pageSize: 5,
      total: parseInt((totalCount / perPage), 10),
      onChange: onPageChange,
      locale: localeEnglish,
    };
    const optionSort = [
      { value: 'default', label: 'Default' },
      { value: 'stars', label: 'Stars' },
      { value: 'forks', label: 'Forks' },
      { value: 'updated', label: 'Updated' },
    ];
    return (<div className={Styles.mainBody}>
      <div className={Styles.divCount}>
        <p className={Styles.pFound}>Found repos : </p>
        <p className={Styles.pCount}>{totalCount}</p>
      </div>
      <div className={Styles.divCount}>
        <p className={Styles.sortBy}>Sort by : </p>
        <Select
          value={Search.sort}
          options={optionSort}
          onChange={onChangeSort}
          className={Styles.sort}
        />
      </div>
      <div className={Styles.divCount}>
        { totalCount > perPage ? <Pagination {...paginationCconfig} style={{ padding: '0px' }} /> : ''}
      </div>
      {listVIew(Search.searchList)}
    </div>);
  }
}
