import request from 'superagent';

function searchText(Search) {
  return (dispatch) => {
    dispatch({
      type: 'SEARCH_TEXT',
      data: {
        isLoaded: true,
      },
    });
    const url = 'https://api.github.com/search/repositories';
    request
      .get(url)
      .query({
        q: encodeURIComponent(Search.text),
        page: Search.pageNumber,
        per_page: Search.perPage,
        sort: Search.sort,
      })
      .end((err, res) => {
        let done = false;
        if (res && res.text) {
          const result = JSON.parse(res.text);
          if (result.total_count !== undefined) {
            done = true;
            dispatch({
              type: 'SEARCH_TEXT',
              data: {
                ...Search,
                totalCount: result.total_count,
                searchList: result.items,
                isLoaded: false,
              },
            });
          }
        }
        if (!done) {
          dispatch({
            type: 'SEARCH_TEXT',
            data: {
              ...Search,
              total_count: -2,
              searchList: [],
              isLoaded: false,
            }
          });
        }
      });
  };
}

export {
  searchText,
};
