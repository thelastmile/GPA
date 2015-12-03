$(document).ready(function(){
	var local_storage_path = 'gpa_app.alert';
	var grade_path = 'gpa_grades';
	var ave_path = 'gpa_averages';
/////IF THE LOCAL STORAGE IS EMPTY UNCOMMENT THE populateStorage() TO POPULATE AND COMMENT IT BACK OUT////

	//pull array from local storage
	var currAlerts = JSON.parse(localStorage.getItem(local_storage_path));
	var grades = JSON.parse(localStorage.getItem(grade_path));
	var averages = JSON.parse(localStorage.getItem(ave_path))
	//create variables to store new changes
	var currAlerts1,currAlerts2,currAlerts3,currAlerts4,currAlerts5,currAlerts6,currAlerts7,currAlerts8;
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
	gradeObj();

	$(document).on('pageshow', function(){
		// initPage()
		// console.log()
	})

		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		///ONLY USED TO POPULATE STORAGE IF THE STORAGE IS EMPTY//////////
		function populateStorage() {
		  if(localStorage.getItem(local_storage_path) && localStorage.getItem(grade_path) && localStorage.getItem(ave_path)){
		  	// console.log('storage is filled')
		  }else{
		  	localStorage.setItem(local_storage_path,JSON.stringify([
			  	{currAlert:2.5,active:true},
			  	{numOfDays:16,active:true},
			  	{daysMissed:5,active:true},
			  	{missedAssign:3,active:true},
			  	{pracMiss:10,active:true},
			  	{gameDate:5,active:true}]));

			  	localStorage.setItem(grade_path,JSON.stringify([
					{sub: 'Economics', goalGrade:"A-", grade: "C-",  goalVal:90 ,val:randomNum()},
					{sub: 'English', goalGrade:"A-", grade:"D+",  goalVal:90 ,val:randomNum()},
					{sub:'History', goalGrade:"A-", grade:"B-",  goalVal:90 ,val:randomNum()},
					{sub:'Math', goalGrade:"A-", grade:"A", goalVal:90 ,val:randomNum()},
					{sub:'Biology', goalGrade:"A-", grade:"D",  goalVal:90 ,val:randomNum()},
					{sub:'P.E.', goalGrade:"A-", grade:"A+",  goalVal:90 ,val:randomNum()}
					]));
			 }
			 		localStorage.setItem(ave_path,JSON.stringify([
						{goalAve: 4.0, currentGpa: 2.0, difference: 2.0}
			 		]))
			 // console.log(grades)
		};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	

// 	// variables for the localStorage
// 	var eco,eng,hist,math,bio,pe;
// 	var changeGpa4Alert;
// 	var aveAry = [];	
// 		function valToLetterGrade(val){
// 			if(val <= 59){
// 				aveAry.push(0)
// 				return "F";
// 			}else if(val >= 60 && val <= 63){
// 				aveAry.push(.66)
// 				return "D-";
// 			}else if(val >= 64 && val <= 66){
// 				aveAry.push(1)
// 				return "D";
// 			}else if(val >= 67 && val <= 69){
// 				aveAry.push(1.33)
// 				return "D+";
// 			}else if(val >= 70 && val <= 73){
// 				aveAry.push(1.66)
// 				return "C-";
// 			}else if(val >= 74 && val <= 76){
// 				aveAry.push(2)
// 				return "C";
// 			}else if(val >= 77 && val <= 79){
// 				aveAry.push(2.33)
// 				return "C+";
// 			}else if(val >= 80 && val <= 83){
// 				aveAry.push(2.66)
// 				return "B-";
// 			}else if(val >= 84 && val <= 86){
// 				aveAry.push(3)
// 				return "B";
// 			}else if(val >= 87 && val <= 89){
// 				aveAry.push(3.33)
// 				return "B+";
// 			}else if(val >= 90 && val <= 93){
// 				aveAry.push(3.66)
// 				return "A-";
// 			}else if(val >= 94 && val <= 96){
// 				aveAry.push(4)
// 				return "A";
// 			}else if(val >= 97 && val <= 100){
// 				aveAry.push(4.33)
// 				return "A+";
// 			}
			
// 		};

// 		function saveData(goal,cur,dif){
// 			localStorage.setItem(ave_path,JSON.stringify([
// 				{goalAve:goal,currentGpa:cur,difference:dif.toFixed(1)}
// 				]))
// 		}

// 		window.setInterval(function changeStorage(){
// 			for (var i = 0; i < grades.length; i++) {
// 				grades[i].val = randomNum();
// 			// console.log("start",grades[i].val)
// 			};

// 		},4000)

// 		window.setInterval(function getAndSetGrade(){
// 			for (var i = 0; i < grades.length; i++) {
// 				grades[i].grade = valToLetterGrade(grades[i].val);
// 			// console.log("end",grades[i].grade)
// 			};
// 		},4000)

// 		function checkAverage(array){
// 			var empty = [];
// 			var firstAry = [];
// 			var newArray = array.join(",").match(/([a-zA-Z]){1}([\+\-])?/g);
// 				for(var i = 0; i < newArray.length; i++){
// 					var gradeVal = gradeObj(gradeScale, newArray[i]);
// 					empty.push(gradeVal);
// 				}
// 			var count = 0;
// 			for (var i = 0; i < empty.length; i++) {
// 				count += empty[i];
// 			}
// 			var result = count/6
// 			var finalAve = parseInt(result).toFixed(1);
// 			return finalAve;
// 		};

// console.log(aveAry)
// 		window.setInterval(function calculateGPA(){
// 			var goalGpa = 0,curGpa = 0,newGoal,updated,goalGradeAry=[],gradeAry=[],difference;
// 			for(var i = 0; i < grades.length; i++){
// 				goalGpa += grades[i].goalVal;
// 				curGpa += grades[i].val;

// 				// goalGradeAry.push(grades[i].goalGrade);
// 				gradeAry.push(grades[i].grade)

// 			// console.log(grades[i].val)
// 			}
// 				newGoal = currAlerts[0].currAlert;
// 				updated = checkAverage(gradeAry);

// 				console.log(updated)
// 				averages[0].goalAve = newGoal;
// 				averages[0].currentGpa = updated;
// 				difference = newGoal - updated;
// 				console.log("goal",averages[0].goalAve,"current",updated,"dif",difference.toFixed(1))
				
// 				// console.log('test',averages[0])
// 				saveData(newGoal,updated,difference)
// 		},4000)

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
			// console.log(currAlerts[0])
			// console.log(grades)
			// console.log(averages[0])


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
		
	// }
	// initPage()
	// renderData(currAlerts)
})//END
























