let windowId = 0;
const CONTEXT_MENU_ID = 'github_search';

function closeIfExist() {
  if (windowId > 0) {
    chrome.windows.remove(windowId);
    windowId = chrome.windows.WINDOW_ID_NONE;
  }
}

function popWindow(type) {
  closeIfExist();
  const options = {
    type: 'popup',
    left: 100,
    top: 100,
    width: 500,
    height: 500,
  };
  if (type === 'open') {
    options.url = 'window.html';
    chrome.windows.create(options, (win) => {
      windowId = win.id;
    });
  }
}

chrome.contextMenus.create({
  id: CONTEXT_MENU_ID,
  title: 'Github Search',
  contexts: ['all'],
  documentUrlPatterns: [
    'https://github.com/*'
  ]
});

chrome.contextMenus.onClicked.addListener((event) => {
  if (event.menuItemId === CONTEXT_MENU_ID) {
    popWindow('open');
  }
});
