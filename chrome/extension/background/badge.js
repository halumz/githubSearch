chrome.storage.local.get('search', (obj) => {
  let search = obj.search;
  if (search) {
    search = JSON.parse(search);
    const len = search.filter(todo => !todo.marked).length;
    if (len > 0) {
      chrome.browserAction.setBadgeText({ text: len.toString() });
    }
  } else {
    // Initial
    // chrome.browserAction.setBadgeText({ text: '1' });
  }
});
