# postMessage

使用 `window.open('xx.html', '_blank')`，打开的页面是能够监听到的:

`window.addEventListener("message", receiveMessage, false);`

receiveMessage 是回调函数