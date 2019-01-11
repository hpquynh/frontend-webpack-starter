function importAll(r) {
  return r.keys().map(r)
}

importAll(require.context('../img/svg-sprites', false, /\.(svg)$/))
