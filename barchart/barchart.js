var dataArray = [23,13,21,14,37,15,18,34,30];

var svg = d3.select('body').append('svg')
.attr("height",800)
.attr("width",800);

svg.selectAll("rect")
.data(dataArray)
.enter().append("rect")
.attr("height",function(d,i){return (d*10)})
.attr("width","40")
.attr("x",function(d,i){return (i*50)+40})
.attr("y",function(d,i){return 500-(d*10)})
.attr("class","bar");

svg.selectAll("text")
.data(dataArray)
.enter().append("text")
.text(function(d){return d;})
.attr("x",function(d,i){return (i*50)+50})
.attr("y",function(d,i){return 518-(d*10)})
.attr("class","tex");


var xScale = d3.scale.linear()
.domain([0,500])
.range([0,500]); 

var yScale = d3.scale.linear()
.domain([0,40])
.range([400,0]); 

var xAxis = d3.svg.axis()
.scale(xScale)
.orient("bottom")
.ticks(10);

svg.append("g")
.attr("transform","translate(35,500)")
.call(xAxis)
.attr("class","xAxis");

//axis(gAxis);

var yAxis = d3.svg.axis()
.scale(yScale)
.orient("left")
.ticks(5);

svg.append("g")
.attr("class", "xAxis")
.attr("transform", "translate(35,100)")
.call(yAxis);


