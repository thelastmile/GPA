$(document).ready(function(){
	//VARIABLES FOR THE LOCAL STORAGE
	console.log("data render");
	var local_storage_path = 'gpa_app.alert';
	var grade_path = 'gpa_grades';
	var ave_path = 'gpa_averages';

	//pull array from local storage
	var currAlerts = JSON.parse(localStorage.getItem(local_storage_path));
	var grades = JSON.parse(localStorage.getItem(grade_path));
	var averages = JSON.parse(localStorage.getItem(ave_path))
	populateStorage()

	
	var val = 2.9;
	// $(document).bind("mobileinit", function(){
	//   	//apply overrides here
	// 	$.mobile.ignoreContentEnabled = true;
	// 	console.log('this worked jason')
	// });

    $( document ).on( "pageshow", "#paris", function(event) {
    	console.log("showing paris page");
			
			$.mobile.ignoreContentEnabled = true;
	    
	    if ($('#fillgauge1').length) {
				console.log('this worked jason')
	    	console.log(val)
	    	var config1 = liquidFillGaugeDefaultSettings();
		        config1.circleColor = "#5154D0";
		        config1.textColor = "#808080";
		        config1.waveTextColor = "#808080";
		        config1.waveColor = "#252773";
		        config1.circleThickness = 0.1;
		        config1.textVertPosition = 0.2;
		        config1.waveAnimateTime = 1000;
		        config1.textSize = 3;

	        var gauge1 = loadLiquidFillGauge("fillgauge1",val, config1);
		    	// initGraph2()
		  
		  	$('#fillgauge1').on('click',function(){
		  		console.log("the clicks work")
		  			console.log(val);
		        if(val === 2.9) {
		        	val = 3.6;
		            $('.info').html('Current GPA');
		            gauge1.update(val);        
		            console.log("showing current gpa");
		            gauge1.upDate(NewValue())
		        } else {
		        	val = 2.9;
		            $('.info').html('Goal GPA');
		            gauge1.update(val);        
		            console.log("showing target gpa")
		        }
		    });   
    	}  

    function NewValue(){
        if(Math.random() > .5){
            return Math.round(Math.random()*100);
        } else {
            return (Math.random()*100).toFixed(1);
        }
    }
    });

    $(document).on("pageshow", "#newyork", function(event) {
    	console.log("newyork is on the display")
    	initPage() 
			changeStorage();
			getAndSetGrade();
			transferData();
			calculateGPA();
			buildChart(); 
    })
    $(document).on("pageshow", "#buenosaires", function(event) {
    	console.log("buenosaires is on the display")
    	initPage() 
			changeStorage();
			getAndSetGrade();
			transferData();
			calculateGPA();
			buildChart(); 
    })
    $(document).on("pageshow", "#capetown", function(event) {
    	console.log("capetown is on the display")
    	initPage() 
			changeStorage();
			getAndSetGrade();
			transferData();
			calculateGPA();
			buildChart(); 
    })
     $(document).on("pageshow", ".inbox", function(event) {
    	console.log("inbox is on the display")
    	window.location.reload()
    	initPage() 
			changeStorage();
			getAndSetGrade();
			transferData();
			calculateGPA();
			buildChart(); 
    })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CREATED AN GLOBAL OBJECT THAT CAN STORE ALL VALUES JUST IN CASE THE LOCAL STORAGE DOESN'T WORK
var golbalObj = [
	{alertData: 0},
	{currData: 0}
];


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var initPage = function (){
			$('#gpa').text(currAlerts[0].currAlert)
				var gpa = Number($('#gpa').text());
			$('#increaseGpa').on('click',function(){
				if(gpa <= 4.4){
					gpa += .1;
					var	newAlert = gpa;
					$('#gpa').html(newAlert.toFixed(1))
				}
			});
			$('#decreaseGpa').on('click',function(){
				if(gpa >= 2.0){
					gpa -= .1;
					var newAlert = gpa;
					$('#gpa').html(newAlert.toFixed(1))
				}
			});

			// check activate or deactivate

		$('.ui-flipswitch').on('click',function(e){
			var $input = $(this).children('input'),
				inputVal = $input.prop('checked'),
				id = $input.attr('id'),
				newId = parseInt(id.split(' ')[0]);
				if(inputVal) {
					currAlerts1 = true;
					currAlerts[newId].active = currAlerts1;
				}else if(!inputVal) {
					currAlerts1 = false;
					currAlerts[newId].active = currAlerts1;
				}
		})

		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////UPCOMING TEST/QUIZ////////////////////////////////////////
			var daysb4 = currAlerts[1].numOfDays;
			var num = daysb4; 
			$('#daysB4').html(num)
			//setting alerts days b4 test//
			$('#addNum').on('click',function(){
				if(num < 250){
					num += 1;
					var newAlert1 = num;
					$('#daysB4').html(newAlert1)
				}
			});
			$('#subNum').on('click',function(){
				if(num > 0){
					num -= 1;
					var newAlert1 = num;
					$('#daysB4').html(newAlert1)
				}
			});

		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ATTENDANCE//////////////////////////////////////////////
			var numDaysMissed = currAlerts[2].daysMissed;
			var upDate2 = numDaysMissed 
			$('#daysMissed').html(upDate2)

			$('#addDays').on('click',function(){
				if(upDate2 < 15){
					upDate2 += 1;
					var newAlert2 = upDate2;
					$('#daysMissed').html(newAlert2)
				}
			});
			$('#subDays').on('click',function(){
				if(upDate2 > 0){
					upDate2 -= 1;
					var newAlert2 = upDate2;
					$('#daysMissed').html(newAlert2)
				}
			});// END OF ATTENDANCE
		///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ASSSIGNMENTS DUE/////////////////////////////////////
			var currAssign = currAlerts[3].missedAssign;
			$('#missedAssign').html(currAssign)
			var upDateAssign;
			// increase count
			$('#increaseAssign').on('click',function(){
				if(currAssign < 5){
					currAssign += 1;
					upDateAssign = currAssign;
					$('#missedAssign').html(upDateAssign);
				}
			});
			// decrease count
			$('#decreaseAssign').on('click',function(){
				if(currAssign > 0){
					currAssign -= 1;
					upDateAssign = currAssign;
					$('#missedAssign').html(upDateAssign)
				}
			});
		// END OF ASSIGNMENTS
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PRACTICES MISSED///////////////////////////////////////
			var pracMiss = currAlerts[4].pracMiss;
			var upDateMiss = pracMiss; 
			$('#pracMiss').html(upDateMiss);

			$('#addPrac').on('click',function(){
				if(upDateMiss < 15){
					upDateMiss += 1;
					var newAlert3 = upDateMiss;
					$('#pracMiss').html(newAlert3)
				}
			});
			$('#subPrac').on('click',function(){
				if(upDateMiss > 0){
					upDateMiss -= 1;
					var newAlert3 = upDateMiss;
					$('#pracMiss').html(newAlert3)
				}
			});//END OF PRACTICE
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////GAME DAY//////////////////////////////////////////////////////
			var gameDay = currAlerts[5].gameDate;
			var game = gameDay; 
			$('#gameDay').html(game)
			$('#add').on('click',function(){
				if(game < 15){
					game += 1;
					var newAlert4 = game;
					$('#gameDay').html(newAlert4)
				}
			});
			$('#sub').on('click',function(){
				if(game > 0){
					game -= 1;
					var newAlert4 = game;
					$('#gameDay').html(newAlert4)
				}
			});//END OF GAME DAY

		$('#save').on('click',function(){
			saveChanges()
			var newGPA = Number($('#gpa').text());
			var newDayB4 = Number($('#daysB4').text());
			var newDayMiss = Number($('#daysMissed').text());
			var newMissAssign = Number($('#missedAssign').text());
			var newPrac = Number($('#pracMiss').text());
			var newGame = Number($('#gameDay').text());
			
			localStorage.setItem(local_storage_path,JSON.stringify(
				[
				{currAlert:newGPA,active:currAlerts1},
				{numOfDays:newDayB4,active:currAlerts2},
				{daysMissed:newDayMiss,active:currAlerts3},
				{missedAssign:newMissAssign,active:currAlerts4},
				{pracMiss:newPrac,active:currAlerts5},
				{gameDate:newGame,active:currAlerts6}
			]))
		})
		

		function checkActive(){
			for (var i = 0; i < currAlerts.length; i++) {
				var idx = i + 1;
				if (currAlerts[i].active){
					$('.flip-checkbox-' + idx).find('.ui-flipswitch').addClass('ui-flipswitch-active');
				}
			}
		}
		checkActive()
		function saveChanges(){
			currAlerts1 = currAlerts[0].active;
			currAlerts2 = currAlerts[1].active;
			currAlerts3 = currAlerts[2].active;
			currAlerts4 = currAlerts[3].active;
			currAlerts5 = currAlerts[4].active;
			currAlerts6 = currAlerts[5].active;


		}
		
	}
			initPage()        

		function transferData(goal,curr){
			golbalObj[0].alertData = curr;
			golbalObj[1].currData = goal;
			return curr
			// console.log("tData",goal)
			// console.log("tData",curr)
			// calculateGPA(goal,curr);
			// console.log(golbalObj[0].alertData)
			// console.log(currAlerts[0])
			// console.log(grades)
			// console.log(averages[0])
		}
		// transferData()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//CHECKING IF THE STORAGE IS POPULATED WITH OUT DATA IF NOT IT POPULATES THE STORAGE

		function populateStorage() {
		  if(localStorage.getItem(local_storage_path) && localStorage.getItem(grade_path) && localStorage.getItem(ave_path)){
		  	// console.log('storage is filled')
		  }else{
		  	localStorage.setItem(local_storage_path,JSON.stringify([
			  	{currAlert:3.5,active:true},
			  	{numOfDays:16,active:true},
			  	{daysMissed:5,active:true},
			  	{missedAssign:3,active:true},
			  	{pracMiss:10,active:true},
			  	{gameDate:5,active:true}]));

			  	localStorage.setItem(grade_path,JSON.stringify([
					{sub: 'Economics', goalGrade:"A-", grade: "C-", val:randomNum()},
					{sub: 'English', goalGrade:"A-", grade:"D+", val:randomNum()},
					{sub:'History', goalGrade:"A-", grade:"B-", val:randomNum()},
					{sub:'Math', goalGrade:"A-", grade:"A", val:randomNum()},
					{sub:'Biology', goalGrade:"A-", grade:"D",val:randomNum()},
					{sub:'P.E.', goalGrade:"A-", grade:"A+",val:randomNum()}
					]));
			 }
			 		localStorage.setItem(ave_path,JSON.stringify([
						{currentGpa: 2.0}
			 		]))
		};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//INITIALIZING DATA FOR LOCAL STORAGE

	function randomNum(){
		var num = Math.ceil(Math.random() * 10 + 76);
			if(num < 87 && num > 81){
				return num + 5;
			}else{
				// console.log("high",num)
				return num
			}
	}

	var gradeScale = {
		'F': 0,
		'D-': .66,
		'D': 1,
		'D+': 1.33,
		'C-': 1.66,
		'C': 2,
		'C+': 2.33,
		'B-': 2.66,
		'B': 3,
		'B+': 3.33,
		'A-': 3.66,
		'A': 4,
		'A+': 4.33
	};



	var gradeObj = function(obj, item){
			for(var key in obj){
			if(item === key){
				return obj[key]
			}
		}

	}

	function valToLetterGrade(val){
		if(val <= 59){
			return "F";
		}else if(val >= 60 && val <= 63){
			return "D-";
		}else if(val >= 64 && val <= 66){
			return "D";
		}else if(val >= 67 && val <= 69){
			return "D+";
		}else if(val >= 70 && val <= 73){
			return "C-";
		}else if(val >= 74 && val <= 76){
			return "C";
		}else if(val >= 77 && val <= 79){
			return "C+";
		}else if(val >= 80 && val <= 83){
			return "B-";
		}else if(val >= 84 && val <= 86){
			return "B";
		}else if(val >= 87 && val <= 89){
			return "B+";
		}else if(val >= 90 && val <= 93){
			return "A-";
		}else if(val >= 94 && val <= 96){
			return "A";
		}else if(val >= 97 && val <= 100){
			return "A+";
		}
		
	};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//MODIFY DATA IN LOCAL STORAGE
	
	var containValOfGoalGpa4LocalStorage; 
	var containValOfCurrGpa4LocalStorage;
	var storage4CurrAndOldAve = [1.8,2.5,2.7,2.8,0]; 

	function changeStorage(){
		for (var i = 0; i < grades.length; i++) {
			// console.log("start",grades[i].val)
			grades[i].val = randomNum();
		}
	};
			
	function getAndSetGrade(){
		for (var i = 0; i < grades.length; i++) {
		// console.log("end",grades[i].grade)
			grades[i].grade = valToLetterGrade(grades[i].val);
		}
	};
	
	function calculateGPA(goal,curr){
		var goalGpa = 0,curGpa = 0;
    var weakClasses = [];
    var strongClasses = [];
		var gradeAry = [];

		for(var i = 0; i < grades.length; i++){
			goalGpa += gradeObj(gradeScale, grades[i].goalGrade);
			curGpa += gradeObj(gradeScale, grades[i].grade);
		
			var ave = curGpa/6;
			var goal = goalGpa/6;
      if(grades[i].val <= 80){
        var classSubject = $('<li><a class="bad" href="paris.html">'+ grades[i].sub + ' ' + grades[i].grade + '</a></li>');
        weakClasses.push(classSubject);
      }
      else if(grades[i].val >= 90){
        var classSubject = $('<li><a class="good" href="paris.html">'+ grades[i].sub + ' ' + grades[i].grade + '</a></li>');
       
        strongClasses.push(classSubject);
      }

			// console.log(grades[i].sub, grades[i].val)
			gradeAry.push(grades[i].val)
		}
			gradeAry.sort(function compare(a,b){return a-b});
		
			// console.log(gradeAry)
      $(".strong").html(strongClasses);
      $(".weak").html(weakClasses);
			var ave4CurrGpa = Number(ave.toFixed(1));
			averages[0].currentGpa = ave4CurrGpa;
			var goalSet = currAlerts[0].currAlert;
      var currSet = averages[0].currentGpa;
			
			// if(currSet < storage4CurrAndOldAve[3]){
			// 	currSet = storage4CurrAndOldAve[3] + .5; 
			// }

			storage4CurrAndOldAve.splice(storage4CurrAndOldAve.length-1,1,currSet)
			// console.log("container",storage4CurrAndOldAve)
      containValOfCurrGpa4LocalStorage = currSet; 
      containValOfGoalGpa4LocalStorage = goalSet;
			
			// console.log(goalSet,currSet)

      $('.goalGpa').html(goalSet.toFixed(1))
      $('.currentGpa').html(currSet.toFixed(1))
      // $('.data').html(currSet.toFixed(1))

			// console.log(averages[0].currentGpa)
			transferData(goalSet,currSet);
	}
	

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	//STIMULATING REAL TIME UPDATES FOR THE USERS

	setTimeout(function(){
		changeStorage();
		getAndSetGrade();
		calculateGPA();
		buildChart();
	},3000);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//GENERATING D3 GRAPH

  function buildChart(){
    var timeArray = ['8/9/15','9/9/15','10/9/15','11/9/15','12/9/15'];
      nv.addGraph(function() {
        var chart = nv.models.lineChart();
        var fitScreen = false;
        var width = 900; 
        var height = 700;
        var zoom = 1;

        chart.useInteractiveGuideline(true);
            chart.xAxis.tickFormat(function(d) {
            return d3.time.format('%m/%d/%y')(new Date(timeArray[d]))
        });

        chart.lines.dispatch.on("elementClick", function(evt) {
            console.log(evt);
        });

        chart.yAxis
            // .axisLabel('Grade Point Average')
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
	    };
      
        return chart;
  });
    
    function sinAndCos() {
        var sin = [],
            cos = [],
            rand = [],
            sin2 = [],
            rand2 = [];

	           for (var i = 0; i < storage4CurrAndOldAve.length; i++) {
				// storage4CurrAndOldAve.splice(storage4CurrAndOldAve[i],0,currSet);
            cos.push({x: i, y: 1.5});//base
            rand.push({x:i, y: 2.0});//elgibility
            rand2.push({x:i, y:4.5});//max
            sin.push({x: i, y: containValOfGoalGpa4LocalStorage});//goal
            sin2.push({x:i, y: storage4CurrAndOldAve[i]});//gpa

        }
					  // console.log("goal",containValOfGoalGpa4LocalStorage)
						// console.log("curr",containValOfCurrGpa4LocalStorage)
            // console.log(localStorage)

        return [
            {
                values: sin,
                key: "Goal gpa",
                color: "#ff7f0e",
                strokeWidth: 3.5
            },
            {
                values: cos,
                key: "Fail",
                color: "#FF0000",
                fillOpacity:.5
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
                key: "Current gpa",
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
      // $('.data').hide();

function clickEvents(){

$('#eco-teacher').on('change',function(){
	alert('Your message was sent');
	$("#eco-teacher").val('')
})
$('#eng-teacher').on('change',function(){
	alert('Your message was sent');
	$("#eng-teacher").val('')
})
$('#hist-teacher').on('change',function(){
	alert('Your message was sent');
	$("#hist-teacher").val('')
})
$('#math-teacher').on('change',function(){
	alert('Your message was sent');
	$("#math-teacher").val('')
})
$('#bio-teacher').on('change',function(){
	alert('Your message was sent');
	$("#bio-teacher").val('')
})
$('#pe-teacher').on('change',function(){
	alert('Your message was sent');
	$("#pe-teacher").val('')
})
}
  

    // setTimeout(function(){
    //     var updatedGpa = $('.data').text();
    //     console.log("test",updatedGpa)
    //     val = Number(updatedGpa);
    //     console.log("val",val)
    //     console.log("hey3")
    // },3002);

// function initGraph2(){

function liquidFillGaugeDefaultSettings(){
	console.log("test")
    return {
        minValue: 0, // The gauge minimum value.
        maxValue: 100, // The gauge maximum value.
        circleThickness: 0.05, // The outer circle thickness as a percentage of it's radius.
        circleFillGap: 0.05, // The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius.
        circleColor: "#178BCA", // The color of the outer circle.
        waveHeight: .1, // The wave height as a percentage of the radius of the wave circle.
        waveCount: 2, // The number of full waves per width of the wave circle.
        waveRiseTime: 1000, // The amount of time in milliseconds for the wave to rise from 0 to it's final height.
        waveAnimateTime: 18000, // The amount of time in milliseconds for a full wave to enter the wave circle.
        waveRise: true, // Control if the wave should rise from 0 to it's full height, or start at it's full height.
        waveHeightScaling: true, // Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill.
        waveAnimate: true, // Controls if the wave scrolls or is static.
        waveColor: "#178BCA", // The color of the fill wave.
        waveOffset: 0, // The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave.
        textVertPosition: .5, // The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top.
        textSize: 1, // The relative height of the text to display in the wave circle. 1 = 50%
        valueCountUp: true, // If true, the displayed value counts up from 0 to it's final value upon loading. If false, the final value is displayed.
        displayPercent: false, // If true, a % symbol is displayed after the value.
        textColor: "#045681", // The color of the value text when the wave does not overlap it.
        waveTextColor: "#A4DBf8" // The color of the value text when the wave overlaps it.
    };
}
function oldVal(){
	console.log("called")
	return 50;
}
function NewValue(){
    return 90
       
}
 
function loadLiquidFillGauge(elementId, value, config) {
    console.log("start")
    if(config == null) config = liquidFillGaugeDefaultSettings();

    if (value == 0) {
        // console.log("its this")
        value = 2.9;
    }

    var gauge = d3.select("#" + elementId);
    var radius = Math.min(parseInt(gauge.style("width")), parseInt(gauge.style("height")))/2;
    var locationX = parseInt(gauge.style("width"))/2 - radius;
    var locationY = parseInt(gauge.style("height"))/2 - radius;
    var fillPercent = Math.max(config.minValue, Math.min(config.maxValue, value))/config.maxValue;

    var waveHeightScale;
    if(config.waveHeightScaling){
        waveHeightScale = d3.scale.linear()
            .range([0,config.waveHeight,0])
            .domain([0,50,100]);
    } else {
        waveHeightScale = d3.scale.linear()
            .range([config.waveHeight,config.waveHeight])
            .domain([0,100]);
    }

    var textPixels = (config.textSize*radius/2);
    var textFinalValue = parseFloat(value).toFixed(2);
    var textStartValue = config.valueCountUp?config.minValue:textFinalValue;
    // var percentText = config.displayPercent?"":"B";
    // console.log(value);
    var circleThickness = config.circleThickness * radius;
    var circleFillGap = config.circleFillGap * radius;
    var fillCircleMargin = circleThickness + circleFillGap;
    var fillCircleRadius = radius - fillCircleMargin;
    var waveHeight = fillCircleRadius*waveHeightScale(fillPercent*2);

    var waveLength = fillCircleRadius*2/config.waveCount;
    var waveClipCount = 1+config.waveCount;
    var waveClipWidth = waveLength*waveClipCount;

    // Rounding functions so that the correct number of decimal places is always displayed as the value counts up.
    var textRounder = function(value){ return Math.round(value); };
    if(parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))){
        textRounder = function(value){ return parseFloat(value).toFixed(1); };
    }
    if(parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))){
        textRounder = function(value){ return parseFloat(value).toFixed(1); };
    }

    // Data for building the clip wave area.
    var data = [];
    for(var i = 0; i <= 40*waveClipCount; i++){
        data.push({x: i/(40*waveClipCount), y: (i/(40))});
    }

    // Scales for drawing the outer circle.
    var gaugeCircleX = d3.scale.linear().range([0,2*Math.PI]).domain([0,1]);
    var gaugeCircleY = d3.scale.linear().range([0,radius]).domain([0,radius]);

    // Scales for controlling the size of the clipping path.
    var waveScaleX = d3.scale.linear().range([0,waveClipWidth]).domain([0,1]);
    var waveScaleY = d3.scale.linear().range([0,waveHeight]).domain([0,1]);

    // Scales for controlling the position of the clipping path.
    var waveRiseScale = d3.scale.linear()
        // The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
        // such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
        // circle at 100%.
        .range([(fillCircleMargin+fillCircleRadius*2+waveHeight),(fillCircleMargin-waveHeight)])
        .domain([0,1]);
    var waveAnimateScale = d3.scale.linear()
        .range([0, waveClipWidth-fillCircleRadius*2]) // Push the clip area one full wave then snap back.
        .domain([0,1]);

    // Scale for controlling the position of the text within the gauge.
    var textRiseScaleY = d3.scale.linear()
        .range([fillCircleMargin+fillCircleRadius*2,(fillCircleMargin+textPixels*0.7)])
        .domain([0,1]);

    // Center the gauge within the parent SVG.
    var gaugeGroup = gauge.append("g")
        .attr('transform','translate('+locationX+','+locationY+')');

    // Draw the outer circle.
    var gaugeCircleArc = d3.svg.arc()
        .startAngle(gaugeCircleX(0))
        .endAngle(gaugeCircleX(1))
        .outerRadius(gaugeCircleY(radius))
        .innerRadius(gaugeCircleY(radius-circleThickness));
    gaugeGroup.append("path")
        .attr("d", gaugeCircleArc)
        .style("fill", config.circleColor)
        .attr('transform','translate('+radius+','+radius+')');

    function start(){
        // console.log(textFinalValue)
        return Number(textFinalValue).toFixed(1)
        
    }
// GPA GOAL GRADE
    function test1(){
        var local_storage_path = 'gpa_app.alert';
        var grade_path = 'gpa_grades';
        var ave_path = 'gpa_averages';

        //pull array from local storage
        var currAlerts = JSON.parse(localStorage.getItem(local_storage_path));
        var grades = JSON.parse(localStorage.getItem(grade_path));
        var averages = JSON.parse(localStorage.getItem(ave_path));
    
      // console.log(currAlerts[0].currAlert)

      return currAlerts[0].currAlert
       
    }

    // Text where the wave does not overlap.
    var text1 = gaugeGroup.append("text")
        .text(start())
        .attr("class", "liquidFillGaugeText")
        .attr("text-anchor", "middle")
        .attr("font-size", textPixels + "px")
        .style("fill", config.textColor)
        .attr('transform','translate('+radius+','+textRiseScaleY(config.textVertPosition)+')');

    // The clipping wave area.
    var clipArea = d3.svg.area()
        .x(function(d) { return waveScaleX(d.x); } )
        .y0(function(d) { return waveScaleY(Math.sin(Math.PI*2*config.waveOffset*-1 + Math.PI*2*(1-config.waveCount) + d.y*2*Math.PI));} )
        .y1(function(d) { return (fillCircleRadius*2 + waveHeight); } );
    var waveGroup = gaugeGroup.append("defs")
        .append("clipPath")
        .attr("id", "clipWave" + elementId);
    var wave = waveGroup.append("path")
        .datum(data)
        .attr("d", clipArea)
        .attr("T", 0);

    // The inner circle with the clipping wave attached.
    var fillCircleGroup = gaugeGroup.append("g")
        .attr("clip-path", "url(#clipWave" + elementId + ")");
    fillCircleGroup.append("circle")
        .attr("cx", radius)
        .attr("cy", radius)
        .attr("r", fillCircleRadius)
        .style("fill", config.waveColor);

    // Text where the wave does overlap.
    var text2 = fillCircleGroup.append("text")
        .text(test1())
        .attr("class", "liquidFillGaugeText")
        .attr("text-anchor", "middle")
        .attr("font-size", textPixels + "px")
        .style("fill", config.waveTextColor)
        .attr('transform','translate('+radius+','+textRiseScaleY(config.textVertPosition)+')');

    // Make the value count up.
    if(config.valueCountUp){
        var textTween = function(){
            var i = d3.interpolate(this.textContent, textFinalValue);
            // console.log(textFinalValue, start())
            // console.log(function(t) { this.textContent = textRounder(i(t)) })
        };
        text1.transition()
            .duration(config.waveRiseTime)
            .tween("text", textTween);
        text2.transition()
            .duration(config.waveRiseTime)
            .tween("text", textTween);
    }

    // Make the wave rise. wave and waveGroup are separate so that horizontal and vertical movement can be controlled independently.
    var waveGroupXPosition = fillCircleMargin+fillCircleRadius*2-waveClipWidth;
    if(config.waveRise){
        waveGroup.attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(0)+')')
            .transition()
            .duration(config.waveRiseTime)
            .attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(fillPercent)+')')
            .each("start", function(){ wave.attr('transform','translate(1,0)'); }); // This transform is necessary to get the clip wave positioned correctly when waveRise=true and waveAnimate=false. The wave will not position correctly without this, but it's not clear why this is actually necessary.
    } else {
        waveGroup.attr('transform','translate('+waveGroupXPosition+','+waveRiseScale(fillPercent)+')');
    }

    if(config.waveAnimate) animateWave();

    function animateWave() {
        wave.attr('transform','translate('+waveAnimateScale(wave.attr('T'))+',0)');
        wave.transition()
            .duration(config.waveAnimateTime * (1-wave.attr('T')))
            .ease('linear')
            .attr('transform','translate('+waveAnimateScale(1)+',0)')
            .attr('T', 1)
            .each('end', function(){
                wave.attr('T', 0);
                animateWave(config.waveAnimateTime);
            });
    }

    function GaugeUpdater(){
        this.update = function(value){
            var newFinalValue = parseFloat(value).toFixed(2);
            var textRounderUpdater = function(value){ return Math.round(value); };
            if(parseFloat(newFinalValue) != parseFloat(textRounderUpdater(newFinalValue))){
                textRounderUpdater = function(value){ return parseFloat(value).toFixed(1); };
            }
            if(parseFloat(newFinalValue) != parseFloat(textRounderUpdater(newFinalValue))){
                textRounderUpdater = function(value){ return parseFloat(value).toFixed(2); };
            }

            var textTween = function(){
                var i = d3.interpolate(this.textContent, parseFloat(value).toFixed(2));
                // console.log(function(t) { this.textContent = textRounderUpdater(i(t)) })
            };

            text1.transition()
                .duration(config.waveRiseTime)
                .tween("text", textTween);
            text2.transition()
                .duration(config.waveRiseTime)
                .tween("text", textTween);

            var fillPercent = Math.max(config.minValue, Math.min(config.maxValue, value))/config.maxValue;
            var waveHeight = fillCircleRadius*waveHeightScale(fillPercent*100);
            console.log("wave",waveHeight)
            var waveRiseScale = d3.scale.linear()
                // The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
                // such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
                // circle at 100%.
                .range([(fillCircleMargin+fillCircleRadius*2+waveHeight),(fillCircleMargin-waveHeight)])
                .domain([0,1]);
            var newHeight = waveRiseScale(fillPercent);
            var waveScaleX = d3.scale.linear().range([0,waveClipWidth]).domain([0,1]);
            var waveScaleY = d3.scale.linear().range([0,waveHeight]).domain([0,1]);
            var newClipArea;
            if(config.waveHeightScaling){
                newClipArea = d3.svg.area()
                    .x(function(d) { return waveScaleX(d.x); } )
                    .y0(function(d) { return waveScaleY(Math.sin(Math.PI*2*config.waveOffset*-1 + Math.PI*2*(1-config.waveCount) + d.y*2*Math.PI));} )
                    .y1(function(d) { return (fillCircleRadius*2 + waveHeight); } );
            } else {
                newClipArea = clipArea;
            }

            var newWavePosition = config.waveAnimate?waveAnimateScale(1):0;
            wave.transition()
                .duration(0)
                .transition()
                .duration(config.waveAnimate?(config.waveAnimateTime * (1-wave.attr('T'))):(config.waveRiseTime))
                .ease('linear')
                .attr('d', newClipArea)
                .attr('transform','translate('+newWavePosition+',0)')
                .attr('T','1')
                .each("end", function(){
                    if(config.waveAnimate){
                        wave.attr('transform','translate('+waveAnimateScale(0)+',0)');
                        animateWave(config.waveAnimateTime);
                    }
                });
            waveGroup.transition()
                .duration(config.waveRiseTime)
                .attr('transform','translate('+waveGroupXPosition+','+newHeight+')')
        }
    }

    return new GaugeUpdater();
}


// }

});
