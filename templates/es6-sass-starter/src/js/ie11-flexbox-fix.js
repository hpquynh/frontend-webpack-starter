const isIE11 = !!window.MSInputMethodContext && !!document.documentMode

if (isIE11) {
  document.body.addClass('is-ie11')
}
