
let deferredPrompt;
if ('serviceWorker' in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('Service worker registration succeeded:', registration);
    }, /*catch*/ function(error) {
      console.log('Service worker registration failed:', error);
    });
  } else {
    console.log('Service workers are not supported.');
  }
// this event will fire when chrome wants to show the banner
// we can just show the banner with a user gesture like click to somewhere
window.addEventListener('beforeinstallprompt', (e) => {
	e.preventDefault();
    deferredPrompt = e;
        // Show the prompt
        window.addEventListener('click',()=>{
            deferredPrompt.prompt();
        })
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
          });
});