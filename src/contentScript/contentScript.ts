import { useEffect, useState } from 'react';

function getData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const heading = document.querySelector('h1');
    setData(heading.textContent);
  }, []);

  return data;
}

const data = getData();
console.log(data);


// chrome.runtime.sendMessage('I am loading content script', (response) => {
//     console.log(response);
//     console.log('I am content script')

// })

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === 'EXECUTE_SCRIPT') {
      const data = getData();
      chrome.runtime.sendMessage({ type: 'DATA', data: data });
    }
  });

window.onload = (event) => {
    console.log('page is fully loaded');
};
