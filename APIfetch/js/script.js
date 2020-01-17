// function liste(){
// $.ajax({  
//     url: "http://jihane.fr/dwmg2/api/activite/index.php?action=display&type=all",   
//     type: "GET",
//     data: {},
//     success: function (tableau) {
//         $("#bodyact").text(" ")
//         for (let i = 0; i < tableau.length ; i++) {
//             $("#bodyact").append('<tr id="bodyacttr' + i + '"></tr>');

//             // var sectiona = document.createElement("th");
//             // sectiona.setAttribute("scope", "row");
//             // sectiona.innerText = tableau[i].id ;
//             // var parenta = document.getElementById("bodyacttr");
//             // parenta.appendChild(sectiona)
//             $('#bodyacttr' + i).append('<th>' + tableau[i].id + '</th>');

//             // var sectionb = document.createElement("td");
//             // sectionb.innerText = tableau[i].type ;
//             // var parentb = document.getElementById("bodyacttr");
//             // parentb.appendChild(sectionb)
//             $('#bodyacttr' + i).append('<td>' + tableau[i].type + '</td>');

//             // var sectionc = document.createElement("td");
//             // sectionc.innerText = tableau[i].nom ;
//             // var parentc = document.getElementById("bodyacttr");
//             // parentc.appendChild(sectionc)
//             $('#bodyacttr' + i).append('<td>' + tableau[i].nom + '</td>');

//             // var sectiond = document.createElement("td");
//             // sectiond.innerHTML += "<button type='button' class='btn btn-primary'>" + "Voir" + "</button>";
//             // var parentd = document.getElementById("bodyacttr");
//             // parentd.appendChild(sectiond)
//             $('#bodyacttr' + i).append('<td><button type="button" class="btn btn-primary" id="button' + i + '" data-toggle="modal" data-target="#modalv">Voir</button></td>');
            
//             $("#button" + i).on("click", function(parama, paramb, paramc, paramd, parame, paramf){
//                 var parama = tableau[i].id
//                 $('#idf').append(parama);
//                 $('#idf').val(parama);

//                 var paramb = tableau[i].type
//                 $('#typef').val(paramb);

//                 var paramc = tableau[i].nb_participants
//                 $('#nb_pf').val(paramc);

//                 var paramd = tableau[i].prix
//                 $('#prix').val(paramd);

//                 var parame = tableau[i].accessibilite
//                 $('#dif').val(parame);

//                 var paramf = tableau[i].nom
//                 $('#nom').val(paramf);
//             });
//         }
//     },
//     error: function() {
//         alert("error")
//     },
//     dataType: "json"
// });
// }

// liste()

// $("#modif").on("click", function modif(){
//     $.ajax({  
//         url: "http://jihane.fr/dwmg2/api/activite/index.php",   
//         type: "GET",
//         data: {
//             action : "update",
//             id : $('#idf').val(),
//             type : $('#typef').val(),
//             nb_participants : $('#nb_pf').val(),
//             prix : $('#prix').val(),
//             accessibilite : $('#dif').val(),
//             nom : $('#nom').val()
//         },
//         success: function(){
//             liste()
//         },
//         error: function() {
//             alert("error")
//         },
//         dataType: "text"
//     })

// });

// $("#sup").on("click", function sup(){
//     $.ajax({  
//         url: "http://jihane.fr/dwmg2/api/activite/index.php",   
//         type: "GET",
//         data: {
//             action : "delete",
//             id : $('#idf').val(),
//         },
//         success: function(){
//             liste()
//         },
//         error: function() {
//             alert("error")
//         },
//         dataType: "text"
//     })
// });

// $("#add").on("click", function add(){
//     $.ajax({  
//         url: "http://jihane.fr/dwmg2/api/activite/index.php?action=add",   
//         type: "POST",
//         data: {
//             type : $('#typefadd').val(),
//             nb_participants : $('#nb_pfadd').val(),
//             prix : $('#prixadd').val(),
//             accessibilite : $('#difadd').val(),
//             nom : $('#nomadd').val()
//         },
//         success: function(){
//             liste()
//         },
//         error: function() {
//             alert("error")
//         },
//         dataType: "text"
//     })
// });


function liste(){
    fetch ('http://jihane.fr/dwmg2/api/voiture/liste.php')
        .then (
            function(response){
                return response.json()
            }
        )
        .then (
            function(tableau){
            var parent = document.getElementById("bodyact");
            parent.innerText = " " ;

            for (let i = 0; i < tableau.length ; i++) {
            var section = document.createElement("tr");
            section.setAttribute("id", "bodyacttr" + i);
            var parent = document.getElementById("bodyact");
            parent.appendChild(section)

            var sectiona = document.createElement("th");
            sectiona.setAttribute("scope", "row");
            sectiona.innerText = tableau[i].id ;
            var parenta = document.getElementById("bodyacttr" + i);
            parenta.appendChild(sectiona)

            var sectionb = document.createElement("td");
            sectionb.innerText = tableau[i].marque ;
            var parentb = document.getElementById("bodyacttr" + i);
            parentb.appendChild(sectionb)

            var sectionc = document.createElement("td");
            sectionc.innerText = tableau[i].gamme ;
            var parentc = document.getElementById("bodyacttr" + i);
            parentc.appendChild(sectionc)

            var sectiond = document.createElement("td");
            sectiond.innerHTML += '<button type="button'  + i + '" class="btn btn-primary" data-toggle="modal" data-target="#modalv">' + "Voir" + '</button>';
            sectiond.addEventListener("click", function(){
                var parama = tableau[i].id;
                var parentaa = document.getElementById("idf");
                parentaa.innerHTML = parama;
                
                var paramb = tableau[i].marque;
                var parentab = document.getElementById("typef");
                parentab.setAttribute("value", paramb)
                
                var paramc = tableau[i].model
                var parentac = document.getElementById("nb_pf");
                parentac.setAttribute("value", paramc)
                
                var paramd = tableau[i].gamme
                var parentad = document.getElementById("prix");
                parentad.setAttribute("value", paramd)
                
                var parame = tableau[i].prix
                var parentae = document.getElementById("dif");
                parentae.setAttribute("value", parame)
                
            })
            var parentd = document.getElementById("bodyacttr" + i);
            parentd.appendChild(sectiond)
            }
        }
    )
}

liste()

function modif(){
    var idm = document.getElementById("idf").innerText;
    var marquem = document.getElementById("typef").value;
    var modelm = document.getElementById("nb_pf").value;
    var gammem = document.getElementById("prix").value;
    var prixm = document.getElementById("dif").value;
    fetch ('http://jihane.fr/dwmg2/api/voiture/update.php?id='+idm+'&marque='+marquem+'&model='+modelm+'&gamme='+gammem+'&prix='+prixm)
        .then (
            function(response){
                return response.text()
            }
        )
        .then (
            function(){
                liste()
            }
        )
}

function sup(){
    var idm = document.getElementById("idf").innerText;
    fetch ('http://jihane.fr/dwmg2/api/voiture/delete.php?id='+idm)
        .then (
            function(response){
                return response.text()
            }
        )
        .then (
            function(){
                liste()
            }
        )
}

function add(){
    var marquec = document.getElementById("typefadd").value;
    var modelc = document.getElementById("nb_pfadd").value;
    var gammec = document.getElementById("prixadd").value;
    var prixc = document.getElementById("difadd").value;
    
    const user = 
     
    const options = {
        method: 'POST',
        body: user.text,
        headers: {
            'Content-Type': 'application/text'
        }
    }

    fetch ('http://jihane.fr/dwmg2/api/voiture/create.php', options)
        .then (
            function(response){
                return response.text()
            }
        )
        .then (
            function(){
                liste()
            }
        )
}

// ?marque='+marquec+'&model='+modelc+'&gamme='+gammec+'&prix='+prixc