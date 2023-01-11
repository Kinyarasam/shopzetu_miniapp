   Page({
      onLoad() {
        this.webViewContext = my.createWebViewContext('web-view-1');
 
      },
      // Receive message from HTML5
      onMessage(e) {
        console.log('on Message',e); //{'sendToMiniProgram': '0'}
        // Send message to HTML5
      this.webViewContext.postMessage({'sendToWebView': '2'});
      }
    })