window.onload = function graph_test() {
  TESTER = document.getElementById('tester');
  Plotly.plot( TESTER, [{
    x: gon.x,
    y: gon.y }],
  {margin: { t: 0 }});
}

