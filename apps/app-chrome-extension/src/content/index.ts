// console.info('load: chrome-ext template-vanilla-ts content script');

window.addEventListener(
  'message',
  ({ data }: { data: unknown }) => {
    console.log('content script addEventListener message:', data);
    // if (
    //   true
    // ) {
    //   console.log('sendMessage');
    //   chrome.runtime.sendMessage(data);
    // }
  }
);

const s = document.createElement('script');
s.src = chrome.runtime.getURL(
  'inject-js-library/main.js'
);
s.type = 'module';
s.onload = () => {
  s.remove();
};
(document.head || document.documentElement).appendChild(s);

export {};
