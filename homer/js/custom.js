(function($){
	console.log('hey')
	function pageIsSelectmenuDialog( page ){
		var isDialog = false,
		id = page && page.attr("id");
		$(".filterable-select").each(function(){
		if($(this).attr("id")+"-dialog"===id){
			isDialog = true;
			return false;
		}
		});
		return isDialog
	}





})