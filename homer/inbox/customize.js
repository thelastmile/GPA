$(document).ready(function(){
	var local_storage_path = 'gpa_app.alert';

/////IF THE LOCAL STORAGE IS EMPTY UNCOMMENT THE populateStorage() TO POPULATE AND COMMENT IT BACK OUT////

	//pull array from local storage
	var currAlerts = JSON.parse(localStorage.getItem(local_storage_path));
	//create variables to store new changes
	var currAlerts1,currAlerts2,currAlerts3,currAlerts4,currAlerts5,currAlerts6,currAlerts7,currAlerts8;
	$( document ).on( "swipeleft", ".ui-page", function( event ) {
      console.log('hey');
      window.location.reload()
      // window.reload(newyork.html)
       // getData(currAlerts)
    });
    $( document ).on( "swiperight", ".ui-page", function( event ) {
	    console.log('right')
       // getData(currAlerts)
    });
	
///////////////////////////GRADE POINT AVERAGE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var initPage = function (){
	populateStorage()

	$('#gpa').text(currAlerts[0].currAlert)
		var gpa = Number($('#gpa').text());
	$('#increaseGpa').on('click',function(){
		if(gpa < 4.4){
			gpa += .1;
			var	newAlert = gpa;
			$('#gpa').html(newAlert.toFixed(1))
		}
	});
	$('#decreaseGpa').on('click',function(){
		if(gpa > 2.0){
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///ONLY USED TO POPULATE STORAGE IF THE STORAGE IS EMPTY//////////
function populateStorage() {
  if(localStorage.getItem(local_storage_path) ){
  }else{
  	localStorage.setItem(local_storage_path,JSON.stringify([
	  	{currAlert:2.5,active:true},
	  	{numOfDays:16,active:true},
	  	{daysMissed:5,active:true},
	  	{missedAssign:3,active:true},
	  	{pracMiss:10,active:true},
	  	{gameDate:5,active:true}]))
  	}
}
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
	console.log(localStorage)

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
	

})//END
























