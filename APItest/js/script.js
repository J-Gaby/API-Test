function liste(){
$.ajax({  
    url: "http://jihane.fr/dwmg2/api/activite/index.php?action=display&type=all",   
    type: "GET",
    data: {},
    success: function (tableau) {
        $("#bodyact").text(" ")
        for (let i = 0; i < tableau.length ; i++) {
            $("#bodyact").append('<tr id="bodyacttr' + i + '"></tr>');

            // var sectiona = document.createElement("th");
            // sectiona.setAttribute("scope", "row");
            // sectiona.innerText = tableau[i].id ;
            // var parenta = document.getElementById("bodyacttr");
            // parenta.appendChild(sectiona)
            $('#bodyacttr' + i).append('<th>' + tableau[i].id + '</th>');

            // var sectionb = document.createElement("td");
            // sectionb.innerText = tableau[i].type ;
            // var parentb = document.getElementById("bodyacttr");
            // parentb.appendChild(sectionb)
            $('#bodyacttr' + i).append('<td>' + tableau[i].type + '</td>');

            // var sectionc = document.createElement("td");
            // sectionc.innerText = tableau[i].nom ;
            // var parentc = document.getElementById("bodyacttr");
            // parentc.appendChild(sectionc)
            $('#bodyacttr' + i).append('<td>' + tableau[i].nom + '</td>');

            // var sectiond = document.createElement("td");
            // sectiond.innerHTML += "<button type='button' class='btn btn-primary'>" + "Voir" + "</button>";
            // var parentd = document.getElementById("bodyacttr");
            // parentd.appendChild(sectiond)
            $('#bodyacttr' + i).append('<td><button type="button" class="btn btn-primary" id="button' + i + '" data-toggle="modal" data-target="#modalv">Voir</button></td>');
            
            $("#button" + i).on("click", function(parama, paramb, paramc, paramd, parame, paramf){
                var parama = tableau[i].id
                $('#idf').append(parama);
                $('#idf').val(parama);

                var paramb = tableau[i].type
                $('#typef').val(paramb);

                var paramc = tableau[i].nb_participants
                $('#nb_pf').val(paramc);

                var paramd = tableau[i].prix
                $('#prix').val(paramd);

                var parame = tableau[i].accessibilite
                $('#dif').val(parame);

                var paramf = tableau[i].nom
                $('#nom').val(paramf);
            });
        }
    },
    error: function() {
        alert("error")
    },
    dataType: "json"
});
}

function inputtype(){
    $.ajax({  
        url: "http://jihane.fr/dwmg2/api/activite/index.php?action=display",   
        type: "GET",
        data: {
            type : "order",
            orderby : "type"
        },
        success: function(tableau){
            $("#bodyact").text(" ")
            for (let i = 0; i < tableau.length ; i++) {
                $("#bodyact").append('<tr id="bodyacttr' + i + '"></tr>');

                $('#bodyacttr' + i).append('<th>' + tableau[i].id + '</th>');
    
                $('#bodyacttr' + i).append('<td>' + tableau[i].type + '</td>');
    
                $('#bodyacttr' + i).append('<td>' + tableau[i].nom + '</td>');
    
                $('#bodyacttr' + i).append('<td><button type="button" class="btn btn-primary" id="button' + i + '" data-toggle="modal" data-target="#modalv">Voir</button></td>');
                
                $("#button" + i).on("click", function(parama, paramb, paramc, paramd, parame, paramf){
                    var parama = tableau[i].id
                    $('#idf').val(parama);
    
                    var paramb = tableau[i].type
                    $('#typef').val(paramb);
    
                    var paramc = tableau[i].nb_participants
                    $('#nb_pf').val(paramc);
    
                    var paramd = tableau[i].prix
                    $('#prix').val(paramd);
    
                    var parame = tableau[i].accessibilite
                    $('#dif').val(parame);
    
                    var paramf = tableau[i].nom
                    $('#nom').val(paramf);
                });
            }
        },
        error: function() {
            alert("error")
        },
        dataType: "json"
    })
}

function inputprix(){
    $.ajax({  
        url: "http://jihane.fr/dwmg2/api/activite/index.php?action=display",   
        type: "GET",
        data: {
            type : "order",
            orderby : "price"
        },
        success: function(tableau){
            $("#bodyact").text(" ")
            for (let i = 0; i < tableau.length ; i++) {
                $("#bodyact").append('<tr id="bodyacttr' + i + '"></tr>');

                $('#bodyacttr' + i).append('<th>' + tableau[i].id + '</th>');
    
                $('#bodyacttr' + i).append('<td>' + tableau[i].type + '</td>');
    
                $('#bodyacttr' + i).append('<td>' + tableau[i].nom + '</td>');
    
                $('#bodyacttr' + i).append('<td><button type="button" class="btn btn-primary" id="button' + i + '" data-toggle="modal" data-target="#modalv">Voir</button></td>');
                
                $("#button" + i).on("click", function(parama, paramb, paramc, paramd, parame, paramf){
                    var parama = tableau[i].id
                    $('#idf').val(parama);
    
                    var paramb = tableau[i].type
                    $('#typef').val(paramb);
    
                    var paramc = tableau[i].nb_participants
                    $('#nb_pf').val(paramc);
    
                    var paramd = tableau[i].prix
                    $('#prix').val(paramd);
    
                    var parame = tableau[i].accessibilite
                    $('#dif').val(parame);
    
                    var paramf = tableau[i].nom
                    $('#nom').val(paramf);
                });
            }
        },
        error: function() {
            alert("error")
        },
        dataType: "json"
    })
}

$("#tritype").on("click", inputtype)
$("#triprix").on("click", inputprix)
liste()

$("#modif").on("click", function modif(){
    $.ajax({  
        url: "http://jihane.fr/dwmg2/api/activite/index.php",   
        type: "GET",
        data: {
            action : "update",
            id : $('#idf').val(),
            type : $('#typef').val(),
            nb_participants : $('#nb_pf').val(),
            prix : $('#prix').val(),
            accessibilite : $('#dif').val(),
            nom : $('#nom').val()
        },
        success: function(){
            liste()
        },
        error: function() {
            alert("error")
        },
        dataType: "text"
    })

});

$("#sup").on("click", function sup(){
    $.ajax({  
        url: "http://jihane.fr/dwmg2/api/activite/index.php",   
        type: "GET",
        data: {
            action : "delete",
            id : $('#idf').val(),
        },
        success: function(){
            liste()
        },
        error: function() {
            alert("error")
        },
        dataType: "text"
    })
});

$("#add").on("click", function add(){
    $.ajax({  
        url: "http://jihane.fr/dwmg2/api/activite/index.php?action=add",   
        type: "POST",
        data: {
            type : $('#typefadd').val(),
            nb_participants : $('#nb_pfadd').val(),
            prix : $('#prixadd').val(),
            accessibilite : $('#difadd').val(),
            nom : $('#nomadd').val()
        },
        success: function(){
            liste()
        },
        error: function() {
            alert("error")
        },
        dataType: "text"
    })
});

$("#tout").on("click", function(){
    $.ajax({  
        url: "http://jihane.fr/dwmg2/api/activite/index.php?action=display",   
        type: "POST",
        data: {
            type : "all",
        },
        success: function(){
            liste()
        },
        error: function() {
            alert("error")
        },
        dataType: "text"
    })
})