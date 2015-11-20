$(document).ready(function(){
/////IF THE LOCAL STORAGE IS EMPTY UNCOMMENT THE populateStorage() TO POPULATE AND COMMENT IT BACK OUT////
// populateStorage()

	// modal popover
	$('#dir').popover();
	//pull array from local storage
	var currAlerts = JSON.parse(localStorage.alert);
	//create variables to store new changes
	var currAlerts1,currAlerts2,currAlerts3,currAlerts4,currAlerts5,currAlerts6,currAlerts7,currAlerts8;
	
	
///////////////////////////GRADE POINT AVERAGE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	$('#gpa').text(currAlerts[0].currAlert)
		var gpa = Number($('#gpa').text());
	$('#increaseGpa').on('click',function(){
		if(gpa < 4.4){
			gpa += .1;
			var	newAlert = gpa;
			$('#gpa').html(newAlert.toFixed(1))
		}else{
			// alert('You have reach the max.')embed max and min on side
		}
	});
	$('#decreaseGpa').on('click',function(){
		if(gpa > 2.0){
			gpa -= .1;
			var newAlert = gpa;
			$('#gpa').html(newAlert.toFixed(1))
		}else{
			// alert('You have reach the minium.')
		}
	});
	//activate or deactivate
	$('#active1').on('click',function(){
		if($('#active1').prop('checked') === true ){
			currAlerts1 = true;
			currAlerts[0].active = currAlerts1;// saves the new changes
			$('#status1').removeClass('no-act').addClass('active')
			var newMess = "On";
			$('#status1').html(newMess)
		}else {
			currAlerts1 = false;
			currAlerts[0].active = currAlerts1;
			$('#status1').removeClass('active').addClass('no-act')
			var mess = "Off"
			$('#status1').html(mess)
		}
	})//end of grade point average
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
		}else{
			// alert('You have reach the max.')embed max and min on side
		}
	});
	$('#subNum').on('click',function(){
		if(num > 0){
			num -= 1;
			var newAlert1 = num;
			$('#daysB4').html(newAlert1)
		}else{
			// alert('You have reach the minium.')
		}
	});
	$('#active2').on('click',function(){
		if($('#active2').prop('checked') === true){
			currAlerts2 = true;		
			$('#status2').removeClass('no-act').addClass('active');
			currAlerts[1].active = currAlerts3;	
			var newMess = "On";
			$('#status2').html(newMess)
		}else {
			currAlerts2 = false;
			currAlerts[1].active = currAlerts3;	
			$('#status2').removeClass('active').addClass('no-act')
			var mess = "Off"
			$('#status2').html(mess)
		}
	});//end of upcoming test
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ATTENDANCE//////////////////////////////////////////////
	var numDaysMissed = currAlerts[2].daysMissed;
	var upDate2 = numDaysMissed 
	$('#daysMissed').html(upDate2)

	// box to activate/deactivate
	$('#active3').on('click',function(){
		if($('#active3').prop('checked') === true){
			currAlerts3 = true;	
			currAlerts[2].active = currAlerts2;	
			$('#status3').removeClass('no-act').addClass('active')
			var newMess = "On";
			$('#status3').html(newMess)
		}else {
			currAlerts3 = false;
			currAlerts[2].active = currAlerts2;	
			$('#status3').removeClass('active').addClass('no-act')
			var mess = "Off"
			$('#status3').html(mess)
		}
	});
	$('#addDays').on('click',function(){
		if(upDate2 < 15){
			upDate2 += 1;
			var newAlert2 = upDate2;
			$('#daysMissed').html(newAlert2)
		}else{
			// alert('You have reach the max.')embed max and min on side
		}
	});
	$('#subDays').on('click',function(){
		if(upDate2 > 0){
			upDate2 -= 1;
			var newAlert2 = upDate2;
			$('#daysMissed').html(newAlert2)
		}else{
			// alert('You have reach the minium.')
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
	}else{
		// alert('If your child miss anymore assignments they will fail.')
	}
});
// decrease count
$('#decreaseAssign').on('click',function(){
	if(currAssign > 0){
		currAssign -= 1;
		upDateAssign = currAssign;
		$('#missedAssign').html(upDateAssign)
	}else{
		// alert('Can not go any lower.')
	}
});
// box to activate/deactivate
$('#active4').on('click',function(){
	if($('#active4').prop('checked') === true){
		currAlerts4 = true;	
		currAlerts[3].active = currAlerts5;		
		$('#status4').removeClass('no-act').addClass('active');
		var newMess = "On";
		$('#status4').html(newMess)
	}else {
		currAlerts[3].active = currAlerts5;		
		currAlerts4 = false;
		$('#status4').removeClass('active').addClass('no-act')
		var mess = "Off"
		$('#status4').html(mess)
	}
});// END OF ASSIGNMENTS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PRACTICES MISSED///////////////////////////////////////
	var pracMiss = currAlerts[4].pracMiss;
	var upDateMiss = pracMiss; 
	$('#pracMiss').html(upDateMiss);
	// box to activate/deactivate
	$('#active5').on('click',function(){
		if($('#active5').prop('checked') === true){
			currAlerts5 = true;
			currAlerts[4].active = currAlerts5;		
			$('#status5').removeClass('no-act').addClass('active');
			var newMess = "On";
			$('#status5').html(newMess)
		}else {
			currAlerts5 = false;
			currAlerts[4].active = currAlerts5;		
			$('#status5').removeClass('active').addClass('no-act')
			var mess = "Off"
			$('#status5').html(mess)
		}
	});
	$('#addPrac').on('click',function(){
		if(upDateMiss < 15){
			upDateMiss += 1;
			var newAlert3 = upDateMiss;
			$('#pracMiss').html(newAlert3)
		}else{
			// alert('You have reach the max.')embed max and min on side
		}
	});
	$('#subPrac').on('click',function(){
		if(upDateMiss > 0){
			upDateMiss -= 1;
			var newAlert3 = upDateMiss;
			$('#pracMiss').html(newAlert3)
		}else{
			// alert('You have reach the minium.')
		}
	});//END OF PRACTICE
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////GAME DAY//////////////////////////////////////////////////////
	var gameDay = currAlerts[5].gameDate;
	var game = gameDay; 
	$('#gameDay').html(game)
	// box to activate/deactivate
	$('#active6').on('click',function(){
		if($('#active6').prop('checked') === true){
			currAlerts6 = true;
			currAlerts[5].active = currAlerts6;		
			$('#status6').removeClass('no-act').addClass('active');
			var newMess = "On";
			$('#status6').html(newMess)
		}else {
			currAlerts6 = false;
			currAlerts[5].active = currAlerts6;		
			$('#status6').removeClass('active').addClass('no-act')
			var mess = "Off"
			$('#status6').html(mess)
		}
	});
	$('#add').on('click',function(){
		if(game < 15){
			game += 1;
			var newAlert4 = game;
			$('#gameDay').html(newAlert4)
		}else{
			// alert('You have reach the max.')embed max and min on side
		}
	});
	$('#sub').on('click',function(){
		if(game > 0){
			game -= 1;
			var newAlert4 = game;
			$('#gameDay').html(newAlert4)
		}else{
			// alert('You have reach the minium.')
		}
	});//END OF GAME DAY
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///ONLY USED TO POPULATE STORAGE IF THE STORAGE IS EMPTY//////////
function populateStorage() {
  localStorage.setItem('alert',JSON.stringify([
  	{currAlert:2.5,active:true},
  	{numOfDays:16,active:true},
  	{daysMissed:5,active:true},
  	{missedAssign:3,active:true},
  	{pracMiss:10,active:true},
  	{gameDate:5,active:true}]))
}

$('#save').on('click',function(){
	saveChanges()
	var newGPA = Number($('#gpa').text());
	var newDayB4 = Number($('#daysB4').text());
	var newDayMiss = Number($('#daysMissed').text());
	var newMissAssign = Number($('#missedAssign').text());
	var newPrac = Number($('#pracMiss').text());
	var newGame = Number($('#gameDay').text());
	localStorage.setItem('alert',JSON.stringify(
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
		if(currAlerts[i].active === true){
			$('#active' + (i+1)).prop('checked','true');
			$('#status' + (i+1)).removeClass('no-act').addClass('active')
			var newMess = "On";
			$('#status' + (i+1)).html(newMess)
		}else if(currAlerts[i].active === false){
			$('#status' + (i+1)).removeClass('active').addClass('no-act')
			var mess = "Off";
			$('#status' + (i+1)).html(mess)
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

})
























