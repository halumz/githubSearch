function saveState(state) {
  chrome.storage.local.set({ state: JSON.stringify(state) });
}
// todos unmarked count
function setBadge(Search) {
  if (chrome.browserAction) {
    const count = Search.sear.length;
    chrome.browserAction.setBadgeText({ text: count > 0 ? count.toString() : '' });
  }
}

export default function () {
  return next => (reducer, initialState) => {
    const store = next(reducer, initialState);
    store.subscribe(() => {
      const state = store.getState();
      saveState(state);
      // setBadge(state.Search);
    });
    return store;
  };
}
