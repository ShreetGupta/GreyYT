// GreyTube — fullscreen bar handler
// Uses fullscreenchange event instead of MutationObserver — zero scroll overhead

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

  document.querySelectorAll('ytd-permission-role-bottom-bar-renderer').forEach(el => el.remove());
}

// Fire on actual fullscreen transitions only — not on every DOM change
document.addEventListener('fullscreenchange', handleFullscreen);
document.addEventListener('webkitfullscreenchange', handleFullscreen);

// Also handle YouTube's SPA navigation (page changes without reload)
document.addEventListener('yt-navigate-finish', handleFullscreen);

handleFullscreen();
