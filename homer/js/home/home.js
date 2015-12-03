$(document).ready(function(){
    var local_storage_path = 'gpa_app.alert';
    var currAlerts = JSON.parse(localStorage.getItem(local_storage_path));

    $( document ).on( "swipeleft", ".ui-page", function( event ) {
        console.log('hey');
        // getData(currAlerts)
    });
    $( document ).on( "swiperight", ".ui-page", function( event ) {
        console.log('right')
        // getData(currAlerts)
    });

var getData = function(array){
    console.log(array)
    var test = array[0].currAlert - 1;
    var test1 = array[0].currAlert;
    $('#goalGpa').html(test1)
    $('#currentGpa').html(test.toFixed(1))
    buildChart();
}
getData(currAlerts)
function buildChart(){
    nv.addGraph(function() {
        var chart = nv.models.lineChart();
        var fitScreen = false;
        var width = 800;
        var height = 300;
        var zoom =1;

        chart.useInteractiveGuideline(true);
        // chart.xAxis
            // .tickFormat(d3.format('%B,January'));
                chart.xAxis.tickFormat(function(d) {
            return d3.time.format('%m/%d/%y')(new Date(d))
        });
        chart.lines.dispatch.on("elementClick", function(evt) {
            console.log(evt);
        });
        var val = [1.5,1.6,1.7,1.8,1.9,2.0]     
        chart.yAxis
            .axisLabel('Grade Point Average')
            .tickFormat(d3.format(',.2f'))
            .ticks(10)
       
        d3.select('#chart1 svg')
            .attr('perserveAspectRatio', 'xMinYMid')
            .attr('width', width)
            .attr('height', height)
            .datum(sinAndCos());

        setChartViewBox();
       

        function setChartViewBox() {
            var w = width * zoom,
                h = height * zoom;

            chart
                .width(w)
                .height(h);

            d3.select('#chart1 svg')
                .attr('viewBox', '0 0 ' + w + ' ' + h)
                .transition().duration(500)
                .call(chart);
        }

        
        return chart;
    });

function randomGPA(){
    var num = Math.ceil(Math.random() * 4);
    
    if(num <= 2){
        return num*2
    }else{
        for(var i = 0; i < num; i++){
        num += .1;  
        }
    }
    console.log(num)
    
    return num
}
    function sinAndCos() {
        var sin = [],
            cos = [],
            rand = [],
            sin2 = [],
            rand2 = [];

        for (var i = 0; i < 5; i++) {
            sin.push({x: i, y: 3.2 });
            cos.push({x: i, y: 1.5});
            rand.push({x:i, y: 2.0});
            sin2.push({x:i, y: randomGPA()});
            rand2.push({x:i, y:4.5});
        }
            console.log(sin2)

        return [
            {
                values: sin,
                key: "Goal Gpa",
                color: "#ff7f0e",
                strokeWidth: 3.5
            },
            {
                values: cos,
                key: "Fail",
                color: "#EF9CFB"
            }, 
            {
                area: true,
                values: rand,
                key: "Eligibilty",
                color: "black",
                fillOpacity: .9
            },
            {
                    area:true,
                values: sin2,
                key: "Current GPA",
                color: "#2864A9",
                fillOpacity: .2
            }
            ,
             {
                values: rand2,
                key: "Success",
                color: "#667711"
            }
        ];
    };
}
 
})
