$(function(){

	var note = $('#note'),
		ts = new Date(2017, 7, 23),
		newYear = true;

	// if((new Date()) > ts){
	// 	// The new year is here! Count towards something else.
	// 	// Notice the *1000 at the end - time must be in milliseconds
	// 	ts = (new Date()).getTime() + 1*20*30*60*1000;
	// 	ts = (new Date()).getTime() + 9*60*60*1000;
	// 	newYear = false;
	// }
	ts = (new Date()).getTime() + 9*60*60*1000 + 30*60*1000 + 30*1000; // +1944001800030000

	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){

			var message = "";

			message += days + " day" + ( days==1 ? '':'s' );
			message += hours + " hour" + ( hours==1 ? '':'s' );
			message += minutes + " minute" + ( minutes==1 ? '':'s' );
			message += seconds + " second" + ( seconds==1 ? '':'s' );
		}
	});

});
