var dataset = d3.json("data.json")

dataset.then(function(data){
  chartMaker(data);
  //buttonMaker(data)
  //console.log(data.colors[0]);
});

/*
var buttonMaker = function(data){
  var buttons = d3.selectAll("button")
                  .data(data)
                  .enter()
                  .append('button')
                  .text(function(data){
                    return d.name;
                  })
                  .on('click',function(data){
                    window.alert(d.weight);
                  });

}
*/

var chartMaker = function(data){
  //console.log(data.subjects[0]);
  var height = 500;
  var width = 700;

  var xScale = d3.scaleLinear()
                  .domain([0,data.length])
                  .range([0,width]);

  var yScale = d3.scaleLinear()
                  .domain([0,100])
                  .range([0,height]);


  var svg = d3.select("body")
              .append('svg')
              .attr("width",width)
              .attr("height",height);

  var rects = svg.selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr('x',function(data,i){
                  return xScale(i);
                })
                .attr('y',function(data){
                  return height-yScale(data.age);
                })
                .attr('width',width/data.length)
                .attr('height',function(data){
                  return yScale(data.age);
                })
                .attr('fill','blue');

}
