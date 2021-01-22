var data = [{ item: '1', value: 30 }, { item: '2', value: 50 }, { item: '3', value: 20 }, { item: '4', value: 60 }]
var pie = d3.pie().value(d => d.value);

// 生成饼布局
// var pie = d3.pie().value(function (d) {
// return d.value;
// })(data);
const arcs = pie(data);
var svg = d3.select('body').append('svg').attr('width', 600).attr('height', 400)
var color = ["#343e73",
    , "#22a6a1"
    , "#ffda8a"
    , "#ff9c4d"
]
var arc = d3.arc().innerRadius(0).outerRadius(Math.min(600, 400) / 2);
const g = svg.append("g")
    .attr("transform", `translate(${600 / 2},${400 / 2})`);
g.selectAll("path")
    .data(arcs)
    .enter().append("path")
    .attr("fill", (d, i) => color[i])
    .attr("stroke", "white")
    .attr("d", arc)