// GreyTube — fullscreen bar remover
// Hides ytd-popup-container during fullscreen and restores it on exit

function handleFullscreen() {
  const isFullscreen = !!(
    document.querySelector('ytd-watch-flexy[fullscreen]') ||
    document.querySelector('ytd-app[is-fullscreen]') ||
    document.fullscreenElement
  );

  document.querySelectorAll('ytd-popup-container').forEach(el => {
    if (isFullscreen) {
      el.style.setProperty('display', 'none', 'important');
    } else {
      el.style.removeProperty('display');
    }
  });

  // Always remove permission bar regardless of fullscreen state
  document.querySelectorAll('ytd-permission-role-bottom-bar-renderer').forEach(el => el.remove());
}

handleFullscreen();

// Watch for DOM changes (fullscreen enter/exit, SPA navigation)
new MutationObserver(handleFullscreen).observe(document.documentElement, {
  childList: true,
  subtree: true
});
