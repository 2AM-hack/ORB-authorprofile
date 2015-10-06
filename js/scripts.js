$(document).ready(function(){
	var httpRequest;
	var urlStub = 'https://badges.mozillascience.org/papers/';
	// var doi = '10.5334/jors.ad';
	var orcid = '0000-0002-9107-7681';

	var url = urlStub + '/users/' + orcid + '/badges';

	$.getJSON(url, function(data){
		var badges = [];

		$.each(data, function(){
			badges.push(data.evidenceUrl);
  		});


		console.log(data);
		console.log(badges);
	});
});