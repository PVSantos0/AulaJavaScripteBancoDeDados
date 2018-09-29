var usuario;
var github = 'https://api.github.com/users/';

$('button').on('click', function(){
	usuario = $("#usuario").val();
	$.getJSON(github + usuario, function(data){
		$('#imagem').html('<img src="'+ data.avatar_url +'">').hide(1).fadeIn(2000);
		$('#nome').html(data.name);
	});
});
