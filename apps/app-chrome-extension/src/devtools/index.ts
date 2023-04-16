chrome.runtime.onMessage.addListener((request: unknown) => {
  console.log('chrome.runtime.onMessage.addListener', request);
  // ...
});

chrome.devtools.panels.create(
  'My panel name',
  '',
  'assets/ngapp/index.html',
  (panel) => {
    panel.onShown.addListener((extPanelWindow) => {});
    panel.onHidden.addListener(() => {});
  }
);

export {};
