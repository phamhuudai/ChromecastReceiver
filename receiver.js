const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();
// debugger

// Update style using javascript
let playerElement = document.getElementsByTagName("cast-media-player")[0];
playerElement.style.setProperty('--splash-image', 'url("image.png")');


context.start();