window.onload = function graph_test() {
  TESTER = document.getElementById('tester');
  Plotly.plot( TESTER, [{
    x: gon.x,
    y: gon.y }],
  {margin: { t: 0 }});
}


// addEventListenerだと
// 最初のHTMLドキュメントの読み込みと解析が完了した時に、スタイルシートや画像、サブフレームの読み込みが終わるのを待たずに発火
// onloadより良い時があるらしい？

document.addEventListener('DOMContentLoaded', function(){
  graph();
},false);

function graph(){
  var scores={
  x: gon.x,
  y: gon.y, 
  type: 'scatter'
  }
  var data =[scores]
  Plotly.newPlot('graph', data)
}
