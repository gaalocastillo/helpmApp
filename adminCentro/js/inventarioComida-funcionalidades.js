function createChart(){
  // var data = [{year: 2006, books: 54},
  //           {year: 2007, books: 43},
  //           {year: 2008, books: 41},
  //           {year: 2009, books: 44},
  //           {year: 2010, books: 35}];

  // var barWidth = 40;
  // var width = (barWidth + 10) * data.length;
  // var height = 200;

  // var x = d3.scale.linear().domain([0, data.length]).range([0, width]);
  // var y = d3.scale.linear().domain([0, d3.max(data, function(datum) { return datum.books; })]).
  //   rangeRound([0, height]);

  // // add the canvas to the DOM
  // var barDemo = d3.select("#bar-demo").
  //   append("svg:svg").
  //   attr("width", width).
  //   attr("height", height);

  // barDemo.selectAll("rect").
  //   data(data).
  //   enter().
  //   append("svg:rect").
  //   attr("x", function(datum, index) { return x(index); }).
  //   attr("y", function(datum) { return height - y(datum.books); }).
  //   attr("height", function(datum) { return y(datum.books); }).
  //   attr("width", barWidth).
  //   attr("fill", "#2d578b");
  // barDemo.selectAll("text").
  //   data(data).
  //   enter().
  //   append("svg:text").
  //   attr("x", function(datum, index) { return x(index) + barWidth; }).
  //   attr("y", function(datum) { return height - y(datum.books); }).
  //   attr("dx", -barWidth/2).
  //   attr("dy", "1.2em").
  //   attr("text-anchor", "middle").
  //   text(function(datum) { return datum.books;}).
  //   attr("fill", "white");
  // barDemo.selectAll("text.yAxis").
  //   data(data).
  //   enter().append("svg:text").
  //   attr("x", function(datum, index) { return x(index) + barWidth; }).
  //   attr("y", height).
  //   attr("dx", -barWidth/2).
  //   attr("text-anchor", "middle").
  //   attr("style", "font-size: 12; font-family: Helvetica, sans-serif").
  //   text(function(datum) { return datum.year;}).
  //   attr("transform", "translate(0, 18)").
  //   attr("class", "yAxis");
  var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("data.tsv", function(d) {
  d.frequency = +d.frequency;
  return d;
}, function(error, data) {
  if (error) throw error;

  x.domain(data.map(function(d) { return d.letter; }));
  y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, "%"))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Frequency");

  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter); })
      .attr("y", function(d) { return y(d.frequency); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.frequency); });
});

 
  }

$(window).load(function() {

   createChart();

});