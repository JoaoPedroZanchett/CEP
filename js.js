$(document).ready(function(){
	var cep;
	$("form").submit(function(event){
		event.preventDefault();
		cep = $("#cep").val();
		chamarAjax();
	})
	function chamarAjax(){
		$.ajax({
			url:"https://viacep.com.br/ws/"+cep+"/json/",
			method: "GET",
			success: function(data){
				$("#resultados").html("");
				console.log(data);
				var fotos = ["img/bairro.jpg", "img/cep.jpg", "img/complemento.jpg", "img/gia.png", "img/ibge.jpg", "img/localidade.jpg", "img/logradouro.jpg", "img/uf.png", "img/"]
				var itens = ["bairro", "cep", "complemento", "gia", "ibge", "localidade", "logradouro", "uf", "unidade"]
				for(var i = 0; i<itens.length; i++){
					if(data[itens[i]] != ""){
						$("#resultados").append('<div class="card col s3"><div class="card-image waves-effect waves-block waves-light"><img class="activator" style="height: 150px;" src="'+fotos[i]+'"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">'+itens[i].toUpperCase()+'</span></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">'+itens[i].toUpperCase()+'</span><p>'+data[itens[i]]+'</p></div></div>');
					}
				}
			},
			error: function(){
				alert("Ocorreu um erro inesperado, por favor tente novamente.")
			}
		});
	}
})
