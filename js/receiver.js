const context = cast.framework.CastReceiverContext.getInstance();


// Update style using javascript
let playerElement = document.getElementsByTagName("cast-media-player")[0];
playerElement.style.setProperty('--splash-image', 'url("https://raw.githubusercontent.com/phamhuudai/ChromecastReceiver/master/icon.png")');


context.start();