document.addEventListener('DOMContentLoaded', function(){
  graph();
},false);

function graph(){
  var scores={
  x: gon.x, // =>[1,2,3,4,5,6,7]
  y: gon.y, // =>[2,4,1,2,6,4,1]
  type: 'scatter'
  }
// scores2, scores3などデータが複数必要なら上と同様にして用意する
  var data =[scores]
//　[scores,scores2,scores3,........]　みたいに、データは複数個入れられる
  Plotly.newPlot('graph', data)  // div id ='graph' に描画
// option で第三引数にlayoutを入れられる。　例　plotly.newPlot('id',data,layout)
// 第四引数に{responsive: true}を入れるとレスポンシブ化
// plotly.new と同じネストのところに以下のようにhover eventなどを設定できる
// document.getElementById('graph').on('plotly_hover', function(e){     # plotly_unhover, plotly_clickなどもあり
// 処理内容
// e.pointsでデータを取得できる、インデックスを指定すれば細かい要素も取得できる。詳細は
// console.log(e.points)などで確認
// })
}
