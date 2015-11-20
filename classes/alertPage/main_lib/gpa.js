//economics
var testdata1 = [
        { key: "Current Grade", y: 0 },
        { key: "Goal", y: 100 }
    ];

        var arcRadius1 = [
    { inner: 0.6, outer: 1 },
    { inner: 0.65, outer: 0.95 }
  ];

        var colors = ["green", "gray"];

        var height = 350;
        var width = 350;

        nv.addGraph(function () {
            var chart = nv.models.pieChart()
            .x(function (d) { return d.key })
            .y(function (d) { return d.y })
            .donut(true)
      .showLabels(false)
      .color(colors)
            .width(width)
            .height(height)
      .growOnHover(false)
      .arcsRadius(arcRadius1)
            .id('donut1'); // allow custom CSS for this one svg

            chart.title("0%");

            d3.select("#test1")
            .datum(testdata1)
            .transition().duration(1200)
            .attr('width', width)
            .attr('height', height)
            .call(chart);

            // update chart data values randomly
            setInterval(function () {
                if (testdata1[0].y < 100) {
                    testdata1[0].y = testdata1[0].y + 1;
                    testdata1[1].y = testdata1[1].y - 1;
                }
                else {
                    testdata1[0].y = 0;
                    testdata1[1].y = 100;
                }
                chart.title(testdata1[0].y + "%");
                chart.update();
            }, 4000);

            return chart;

        });
