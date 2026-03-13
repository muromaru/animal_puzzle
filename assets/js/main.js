document.addEventListener('pointerdown', function(e) {
  if (!e.target.closest('.card')) {
    document.activeElement && document.activeElement.blur();
  }
});
