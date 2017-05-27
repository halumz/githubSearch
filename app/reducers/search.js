const initialState = {
  text: '',
  searchList: [],
  pageNumber: 1,
  totalCount: 0,
  perPage: 5,
  isLoaded: false,
  sort: 'default',
};
export default function search(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_TEXT':
      return {
        ...state,
        ...action.data,
      };
    default: return state;
  }
}
