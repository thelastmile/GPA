$(document).ready(function(){
//modal popover
$('#dir').popover()
// functionailty broke down by each row and col individually
// first row first col Grade Point Average 
var currAlerts = JSON.parse(localStorage.alert);

//setting alerts of Grade Point Average//
$('#gpa').text(currAlerts[0].currAlert)
var newAlert;
var gpa = Number($('#gpa').text());

$('#increaseGpa').on('click',function(){
	if(gpa < 4.5){
		gpa += .1;
		newAlert = gpa;
		$('#gpa').html(newAlert.toFixed(1))
	}else{
		// alert('You have reach the max.')embed max and min on side
	}
});
$('#decreaseGpa').on('click',function(){
	if(gpa > 2.0){
		gpa -= .1;
		newAlert = gpa;
		$('#gpa').html(newAlert.toFixed(1))
	}else{
		// alert('You have reach the minium.')
	}
});
// checks # of alerts
var numOfAlerts = currAlerts[0].numOfAlerts;
var newNumOfAlerts = numOfAlerts; 
$('#alerts').html(newNumOfAlerts)

var currAlerts1,currAlerts2,currAlerts3,currAlerts4,currAlerts5,currAlerts6,currAlerts7,currAlerts8;
// box to activate or deactivate
$('#active1').on('click',function(){
	if($('#active1').prop('checked') === true ){
		currAlerts1 = true;
		currAlerts[0].active = currAlerts1;// saves the new changes
		$('#status1').removeClass('active').addClass('no-act')
		var newMess = "Uncheck To Deactivate.";
		$('#status1').html(newMess)
	}else {
		currAlerts1 = false;
		currAlerts[0].active = currAlerts1;
		$('#status1').removeClass('no-act').addClass('active')
		var mess = "Check To Activate."
		$('#status1').html(mess)
	}
});// end of col grade point average
// first row second col Attendance
var numDaysLeft = currAlerts[1].daysLeft;
var upDate = numDaysLeft 
$('#daysLeft').html(upDate)

// days missed
var numDaysMissed = currAlerts[1].daysMissed;
// get the new total from json
var upDate2 = numDaysMissed 
$('#daysMissed').html(upDate2)

// box to activate/deactivate
$('#active2').on('click',function(){
	if($('#active2').prop('checked') === true){
		currAlerts2 = true;	
		currAlerts[1].active = currAlerts2;	
		$('#status2').removeClass('active').addClass('no-act')
		var newMess = "Uncheck To Deactivate.";
		$('#status2').html(newMess)
	}else {
		currAlerts2 = false;
		currAlerts[1].active = currAlerts2;	
		$('#status2').removeClass('no-act').addClass('active')
		var mess = "Check To Activate."
		$('#status2').html(mess)
	}
});// end of first row
// second row first col Behavior
var referals = currAlerts[2].numOfReferals;
var numOfReferals = referals 
$('#referals').html(numOfReferals)
// teacher comments
$('#comments').on('click',function(){
	$('#hw').hide();
	$('#ps').hide();
	$('#tc').show();
})

// box to activate/deactivate
$('#active3').on('click',function(){
	if($('#active3').prop('checked') === true){
		currAlerts3 = true;		
		currAlerts[2].active = currAlerts3;	
		$('#status3').removeClass('active').addClass('no-act')
		var newMess = "Uncheck To Deactivate.";
		$('#status3').html(newMess)
	}else {
		currAlerts3 = false;
		currAlerts[2].active = currAlerts3;	
		$('#status3').removeClass('no-act').addClass('active');
		var mess = "Check To Activate."
		$('#status3').html(mess)
	}
});// end of col behavior
// second row second col upcoming test/quiz
var currTest = currAlerts[3].upcomingTest;
var upDateTest = currTest; 
$('#currTest').html(upDateTest)
//previous test/quiz
var prevTest = currAlerts[3].prevTest;
var lastTest = prevTest; 
$('#prevTest').html(prevTest)

// box to activate/deactivate
$('#active4').on('click',function(){
	if($('#active4').prop('checked') === true){
		currAlerts4 = true;		
		currAlerts[3].active = currAlerts4;	
		$('#status4').removeClass('active').addClass('no-act')
		var newMess = "Uncheck To Deactivate.";
		$('#status4').html(newMess)
	}else {
		currAlerts4 = false;
		currAlerts[3].active = currAlerts4;	
		$('#status4').removeClass('no-act').addClass('active');
		var mess = "Check To Activate."
		$('#status4').html(mess)
	}
});// end of second row
// third row first col assignments due
var currAssign = currAlerts[4].missedAssign;
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
//see homework
$('#homework').on('click',function(){
	$('#tc').hide();
	$('#ps').hide();
	$('#hw').show();
});

// box to activate/deactivate
$('#active5').on('click',function(){
	if($('#active5').prop('checked') === true){
		currAlerts5 = true;	
		currAlerts[4].active = currAlerts5;		
		$('#status5').removeClass('active').addClass('no-act')
		var newMess = "Uncheck To Deactivate.";
		$('#status5').html(newMess)
	}else {
		currAlerts[4].active = currAlerts5;		
		currAlerts5 = false;
		$('#status5').removeClass('no-act').addClass('active');
		var mess = "Check To Activate."
		$('#status5').html(mess)
	}
});// end of assignments due
// third row second col practice date
var pracMiss = currAlerts[5].pracMiss;
var upDateMiss = pracMiss; 
$('#pracMiss').html(upDateMiss);
// practice scheldule
$('#practice').on('click',function(){
	$('#tc').hide();
	$('#hw').hide();
	$('#ps').show();
});

// box to activate/deactivate
$('#active6').on('click',function(){
	if($('#active6').prop('checked') === true){
		currAlerts6 = true;
		currAlerts[5].active = currAlerts6;		
		$('#status6').removeClass('active').addClass('no-act')
		var newMess = "Uncheck To Deactivate.";
		$('#status6').html(newMess)
	}else {
		currAlerts6 = false;
		currAlerts[5].active = currAlerts6;		
		$('#status6').removeClass('no-act').addClass('active');
		var mess = "Check To Activate."
		$('#status6').html(mess)
	}
});// end of third row second col practice dates
// fourth row first col Game day
var gameDay = currAlerts[6].gameDate;
var game = gameDay; 
$('#gameDay').html(game)
// team scheldule
$('#games').on('click',function(){
	// alert('might use angular')
});

// box to activate/deactivate
$('#active7').on('click',function(){
	if($('#active7').prop('checked') === true){
		currAlerts7 = true;
		currAlerts[6].active = currAlerts7;		
		$('#status7').removeClass('active').addClass('no-act')
		var newMess = "Uncheck To Deactivate.";
		$('#status7').html(newMess)
	}else {
		currAlerts7 = false;
		currAlerts[6].active = currAlerts7;		
		$('#status7').removeClass('no-act').addClass('active');
		var mess = "Check To Activate."
		$('#status7').html(mess)
	}
});// end of fourth row second col holidays
// holidays
var holidays = currAlerts[7].commingHolidays;
var nextHolidays = holidays; 
$('#holidays').html(nextHolidays)
// school events
$('#events').on('click',function(){
	alert('might use angular')
});

// box to activate/deactivate
$('#active8').on('click',function(){
	if($('#active8').prop('checked') === true){
		currAlerts8 = true;
		currAlerts[7].active = currAlerts8;		
		$('#status8').removeClass('active').addClass('no-act')
		var newMess = "Uncheck To Deactivate.";
		$('#status8').html(newMess)
	}else {
		currAlerts8 = false;
		currAlerts[7].active = currAlerts8;		
		$('#status8').removeClass('no-act').addClass('active');
		var mess = "Check To Activate."
		$('#status8').html(mess)
	}
});// end of rows of alerts////////
console.log(localStorage)
$('#save').on('click',function(){
	saveChanges()
	var newGPA = Number($('#gpa').text());
	localStorage.setItem('alert',JSON.stringify(
		[
		{currAlert:newGPA,numOfAlerts:ranNum(),active:currAlerts1},
		{daysLeft:180,daysMissed:5,active:currAlerts2},
		{numOfReferals:16,active:currAlerts3},
		{upcomingTest:"11/5/2015",prevTest:"10/5/2015",active:currAlerts4},
		{missedAssign:3,active:currAlerts5},
		{pracMiss:10,active:currAlerts6},
		{gameDate:"11/7/2015",active:currAlerts7},
		{commingHolidays:"11/25/2015",active:currAlerts8}
	]))
})
function checkActive(){
	for (var i = 0; i < currAlerts.length; i++) {
		if(currAlerts[i].active === true){
			$('#active' + (i+1)).prop('checked','true');
			$('#status' + (i+1)).removeClass('active').addClass('no-act')
			var newMess = "Uncheck To Deactivate.";
			$('#status' + (i+1)).html(newMess)
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
	currAlerts7 = currAlerts[6].active;
	currAlerts8 = currAlerts[7].active;
}
function ranNum(){
	return Math.floor(Math.random()*10)
}
///ONLY USED TO POPULATE STORAGE IF THE STORAGE IS EMPTY//////////
// function populateStorage() {
//   localStorage.setItem('alert',JSON.stringify([{currAlert:2.5,numOfAlerts:0,active:true},{daysLeft:180,daysMissed:5,active:false},{numOfReferals:16,active:false},
//   	{upcomingTest:1152015,prevTest: 1052015,active:false},{missedAssign:3,
// 		active:true},{pracMiss:10,active:false},{gameDate:1172015,active:true},{
// 		commingHolidays:11252015,active:false}]))
// }
// populateStorage()

});
