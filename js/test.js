var url_ = "http://localhost:3000/users/";

/*
    GET METHOD
 */

function Buscar(){
		debugger;
		$.ajax({
			type: "GET",
			url: url_,
			success: function(result) {
				debugger;
				$('.main .get').html('Sucesso ao buscar o registro 1 de nome :' + result.users[0].nickname);
			},
			error: function(result){
				debugger;
				$('.main .get').html('Erro ao buscar os registros');
			}
		});
}

/*
    POST METHOD
 */

function Enviar(){
	debugger;
	var dataSent = {"nickname" : "Itiro2", "photo":"photo2.jpg", "perfilPublico" : false};
	
	$.ajax({
		type: "POST",
		url: url_,
		data: dataSent,
		success: function(data) {
				debugger;
				$('.main .post').html('Sucesso ao inserir o novo registro');
        },
        error: function(result){
            debugger;
            $('.main .post').html('Erro ao inserir o novo registro;');
        }
	});	
}
 
/*
    PUT METHOD
 */

function Alterar() {
    debugger;
	
    var id_ = "5611cd8696198da417a21f36";
    var dataSent = {"nickname" : "Itiro3", "photo":"photo1.jpg", "perfilPublico" : false};
    
    url_ = url_ + id_;
	
    $.ajax({
		type: "PUT",
		url: url_,
		data: dataSent,
		success: function(data) {
				debugger;
				$('.main .put').html('Sucesso ao alterar o novo registro');
        },
        error: function(result){
            debugger;
            $('.main .put').html('Erro ao alterar o novo registro;');
        }
	});	
}

/*
    DELETE METHOD
 */

function Deletar() {
    
    debugger;
    var id = "5611cd8696198da417a21f36";
    
    url_ = url_ + id;
	
    $.ajax({
		type: "DELETE",
		url: url_,
		success: function(data) {
				debugger;
				$('.main .delete').html('Sucesso ao deletar o registro');
        },
        error: function(result){
            debugger;
            $('.main .delete').html('Erro ao deletar o registro;');
        }
	});	
}