var dataset = [23,40,8,30,15,12,15,20,21,9,17,19];

var w = 700;
var h = 500;
var barWidth = 50;

var svg = d3.select("body")
            .append("svg")
            .attr("width",w)
            .attr("height",h);

var rects =    svg.selectAll("rect")
                  .data(dataset)
                  .enter()
                  .append("rect")
                  .attr("x", function(d,i){
                    return i * 50;
                  })
                  .attr("y", function(d){
                    return h - (d * 4);
                  })
                  .attr("width", 50)
                  .attr("height", function(d){
                    return d * 4;
                  })
                  .attr("fill", function(d){
                    return "rgb( 109, 168, " + Math.round(d * 10) + ")";
                  });

var labels = svg.selectAll("text")
                .data(dataset)
                .enter()
                .append("text")
                .text(function(d){
                  return d;
                })
                .attr("x", function(d, i){
                  return i * barWidth + 17;
                })
                .attr("y", function(d){
                  return h - (d * 4) + 13;
                })
                .attr("fill","white");

  var legend = svg.append('rect')
                  .attr('y',0)
                  .attr('x',350)
                  .attr('height',150)
                  .attr('width',200)
                  .attr('fill','transparent')
                  .attr('stroke','black')
                  .attr('class','legend')
/*
  var legendLabels = svg.selectAll('text')
                        .data(dataset)
                        .enter()
                        .append('text')
                        .text(function(d){
                          return d;
                        })
                        .attr('x',function(d,i){
                          return d;
                        })
                        .attr('y',function(d){
                          return d;
                        });
*/
