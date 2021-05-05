var kutyak = [
        
        {
            nev: "Szotyi",
            kor: 14,
            fajta: "Keverék"
        },
        
        {
            nev: "Szami",
            kor: 8,
            fajta: "Bulldog"
        },
        
        {
            nev: "Maci",
            kor: 7,
            fajta: "Vizsla"
        }
 
    ];
var irany=true;


$(function(){
    tablazatKiir();
    
    
});
function tablazatKiir(){
   $("article").empty();
   
   $("article").append("<table>");
   $("article table").append("<tr><th>Név</th><th>Kor</th><th>Fajta</th></tr>");
   
    for (var i = 0; i < kutyak.length; i++) {
        //$("article table").append("<tr><th>"+kutyak[i].nev+"</th><th>"+kutyak[i].kor+"</th><th>"+kutyak[i].fajta+"</th></tr>");
     $("article table").append("<tr>");
     for(var item in kutyak[i]){
            $("article table tr").eq(i + 1).append("<td>" + kutyak[i][item] + "</td>");
        }
    }
    $("article th").click(rendezes);
}

function rendezes(){
    if (irany) {
        kutyak.sort(function (a,b){
       return Number(a.nev>b.nev)-0.5; 
    });
    }
    else{
       kutyak.sort(function (a,b){
       return Number(a.nev<b.nev)-0.5; 
    });     
    }
    irany=!irany;//tagadjuk,logikai kifejezés
   
    tablazatKiir();
}
