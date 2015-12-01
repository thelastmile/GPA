$(document).ready(function(){
	var local_storage_path = 'gpa_app.alert';
	var grade_path = 'gpa_grades';
	var ave_path = 'gpa_averages';

	//pull array from local storage
	var currAlerts = JSON.parse(localStorage.getItem(local_storage_path));
	var grades = JSON.parse(localStorage.getItem(grade_path));
	var averages = JSON.parse(localStorage.getItem(ave_path))
	populateStorage()


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		

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
					{sub: 'Economics', goalGrade:"A-", grade: "C-", val:randomNum()},
					{sub: 'English', goalGrade:"A-", grade:"D+", val:randomNum()},
					{sub:'History', goalGrade:"A-", grade:"B-", val:randomNum()},
					{sub:'Math', goalGrade:"A-", grade:"A", val:randomNum()},
					{sub:'Biology', goalGrade:"A-", grade:"D",val:randomNum()},
					{sub:'P.E.', goalGrade:"A-", grade:"A+",val:randomNum()}
					]));
			 }
			 		localStorage.setItem(ave_path,JSON.stringify([
						{currentGpa: 2.0, difference: 2.0}
			 		]))
		};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	function randomNum(){
			var num = Math.ceil(Math.random() * 100)
			if(num < 60){
				return num + 40;
			}else{
				return num;
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
	// gradeObj();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	// variables for the localStorage
	var eco,eng,hist,math,bio,pe;
	var changeGpa4Alert;
	var aveAry = [];	
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

		// function saveData(goal,cur,dif){
		// 	localStorage.setItem(ave_path,JSON.stringify([
		// 		{goalAve:goal,currentGpa:cur,difference:dif.toFixed(1)}
		// 		]))
		// }

		setTimeout(function changeStorage(){
			for (var i = 0; i < grades.length; i++) {
				// console.log("start",grades[i].val)
				grades[i].val = randomNum();
			};

		},4000)

		setTimeout(function getAndSetGrade(){
			for (var i = 0; i < grades.length; i++) {
				// console.log("end",grades[i].grade)
				grades[i].grade = valToLetterGrade(grades[i].val);
			};
		},5000)

	
		

	// function checkAverage(array){
	// 	var empty = [];
	// 	var firstAry = [];
	// 	var newArray = array.join(",").match(/([a-zA-Z]){1}([\+\-])?/g);
	// 		for(var i = 0; i < newArray.length; i++){
	// 			var gradeVal = gradeObj(gradeScale, newArray[i]);
	// 			empty.push(gradeVal);
	// 		}
	// 	var count = 0;
	// 	for (var i = 0; i < empty.length; i++) {
	// 		count += empty[i];
	// 	}
	// 	var result = count/6
	// 	var finalAve = parseInt(result).toFixed(1);
	// 	console.log("test1",finalAve)
	// 	return finalAve;
	// };

	setTimeout(function calculateGPA(){
		var goalGpa = 0,curGpa = 0;

		for(var i = 0; i < grades.length; i++){
			goalGpa += gradeObj(gradeScale, grades[i].goalGrade);
			curGpa += gradeObj(gradeScale, grades[i].grade);
		
			var ave = curGpa/6;
			var goal = goalGpa/6;
			console.log(grades[i].sub, grades[i].val)

      if(grades[i].val <= 76){
        var $list = $('<li class="bad">'+ grades[i].sub + ' ' + grades[i].grade + '</li>')
        $list.appendTo($(".weak"));
      }

		}
			console.log("cur",Number(ave.toFixed(1)))
			var ave4CurrGpa = Number(ave.toFixed(1));
			averages[0].currentGpa = ave4CurrGpa;
			var goalSet = currAlerts[0].currAlert;
      var currSet = averages[0].currentGpa;

      $('#goalGpa').html(goalSet.toFixed(1))
      $('#currentGpa').html(currSet.toFixed(1))

	},6000)


console.log(grades)


});
