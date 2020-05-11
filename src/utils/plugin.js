// Vue 移动端适配（1rem = 100px）
function initRem() {
  let cale =
    window.screen.availWidth > 750 ? 2 : window.screen.availWidth / 375;
  window.document.documentElement.style.fontSize = `${100 * cale}px`;
}

initRem();

window.addEventListener("resize", function() {
  initRem();
});
