$(document).ready(function(){
	//VARIABLES FOR THE LOCAL STORAGE

	var local_storage_path = 'gpa_app.alert';
	var grade_path = 'gpa_grades';
	var ave_path = 'gpa_averages';

	//pull array from local storage
	var currAlerts = JSON.parse(localStorage.getItem(local_storage_path));
	var grades = JSON.parse(localStorage.getItem(grade_path));
	var averages = JSON.parse(localStorage.getItem(ave_path))
	populateStorage()

    $( document ).on( "pageshow", function(event) {
			initPage() 
			changeStorage();
			getAndSetGrade();
			transferData();
			calculateGPA();
			buildChart();       
    });
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

		function transferData(){
			var goal = golbalObj[0].alertData = currAlerts[0].currAlert;
			var curr = golbalObj[1].currData = averages[0].currentGpa;

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
			console.log(goalSet,currSet)

      $('#goalGpa').html(goalSet.toFixed(1))
      $('#currentGpa').html(currSet.toFixed(1))

	}
	

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	//STIMULATING REAL TIME UPDATES FOR THE USERS

	setTimeout(function(){
		changeStorage();
		getAndSetGrade();
		transferData();
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
    
   





});
