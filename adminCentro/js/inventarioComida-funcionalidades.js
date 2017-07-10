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



  }


  var employees = [
  {dept: 'arroz', age : 220},
  {dept: 'granos', age : 260},
  {dept: 'enlatados', age : 350},
  {dept: 'croquetas', age : 100},
  {dept: 'harina', age : 270}
];

var svgHeight = 400;
var svgWidth = 400;
var maxAge = 650; // You can also compute this from the data
var barSpacing = 1; // The amount of space you want to keep between the bars
var padding = {
    left: 20, right: 0,
    top: 20, bottom: 20
};


  function animateBarsUp() {
  var maxWidth = svgWidth - padding.left - padding.right;
  var maxHeight = svgHeight - padding.top - padding.bottom;

  // Define your conversion functions
  var convert = {    
    x: d3.scale.ordinal(),
    y: d3.scale.linear()
  };

  // Define your axis
  var axis = {
    x: d3.svg.axis().orient('bottom'),
    y: d3.svg.axis().orient('left')
  };
    
  // Define the conversion function for the axis points
  axis.x.scale(convert.x);
  axis.y.scale(convert.y);

  // Define the output range of your conversion functions
  convert.y.range([maxHeight, 0]);
  convert.x.rangeRoundBands([0, maxWidth]);
    
  // Once you get your data, compute the domains
  convert.x.domain(employees.map(function (d) {
      return d.dept;
    })
  );
  convert.y.domain([0, maxAge]);

  // Setup the markup for your SVG
  var svg = d3.select('.chart')
    .attr({
        width: svgWidth,
        height: svgHeight
    });
  
  // The group node that will contain all the other nodes
  // that render your chart
  var chart = svg.append('g')
    .attr({
        transform: function (d, i) {
          return 'translate(' + 29 + ',' + 20 + ')';
        }
      });
    
  chart.append('g') // Container for the axis
    .attr({
      class: 'x axis',
      transform: 'translate(0,' + maxHeight + ')'
    })
    .call(axis.x); // Insert an axis inside this node

  chart.append('g') // Container for the axis
    .attr({
      class: 'y axis',
      height: maxHeight
    })
    .call(axis.y); // Insert an axis inside this node

  var bars = chart
    .selectAll('g.bar-group')
    .data(employees)
    .enter()
    .append('g') // Container for the each bar
    .attr({
      transform: function (d, i) {
        return 'translate(' + convert.x(d.dept) + ', 0)';
      },
      class: 'bar-group'
    });

  bars.append('rect')
        .attr({
        y: maxHeight,
        height: 0,
        width: function(d) {return convert.x.rangeBand(d) - 1;},
        class: 'bar'
    })
    .transition()
    .duration(1500)
    .attr({
      y: function (d, i) {
        return convert.y(d.age);
      },
      height: function (d, i) {
        return maxHeight - convert.y(d.age);
      }
    });

  return chart;
}

$(window).load(function() {

   createChart();


  animateBarsUp();

});