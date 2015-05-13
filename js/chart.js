// http://c3js.org/examples.html

console.log("console.log test print")
var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50],
            ['data3', 230, 50, 70, 260, 190, 340],
            ['data4', 180, 120, 120, 100, 30, 250],
        ],
        type: 'line'
    }
});
