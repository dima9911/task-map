function tsvJSON(tsv){
 
  var lines=tsv.split("\n");
 
  var result = [];
 
  var headers=lines[0].split("\t");
 
  for(var i=1;i<lines.length;i++){
 
	  var obj = {};
	  var currentline=lines[i].split("\t");
 
	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }
 
	  result.push(obj);
 
  }
  
  return result; //JavaScript object
 // return JSON.stringify(result); //JSON
}

$(document).ready(function () {




var region = ["401", "811", "814" , "815", "rk", "483", "471", "486", "861", "877", "878", "866", "872", "424", "423", "426", "427", "302", "301", "381", "345", "384"];

var regionss = ["401", "811", "814" , "815", "rk", "483", "471", "486", "861", "877", "878", "866", "872", "424", "423", "426", "427", "302", "301", "381", "345", "384", "349", "821", "833", "341", "347", "351", "352", "343", "843", "836", "835", "846", "475", "841", "491", "482", "817", "492", "493", "390", "382", "346", "388", "818", "495", "487", "871", "867", "873", "844", "845", "353", "413", "421", "415", "394", "831", "385", "383", "834",  "484", "481", "812", "474", "473", "863", "847", "851", "865", "416", "411", "395", "391", "494"];


function send(i, coun) 
{ 
 $.ajax({
            type: "POST",
            data: { 
                        primer: "http://mediametrics.ru/rating/ru/"+ region[i] + "/online.tsv", 
                
            },
            url: "/script.php",
   
            success: function (data) {

            
				data1= JSON.parse(data);  

				data2 =  tsvJSON(data1);

				//console.log(data2[0]['URL']);

			//	document.body.appendChild("<a id='r_" + region[i] + "' class='tooltips' href='../''></a>");

				

				switch (coun) {
   case 0:

   if (data2[0]['Title'] != null)
				{
				$('body').append("<a id='r_" + region[i] + "' class='tooltips animated zoomIn' href='../''></a>");
				$('body').append("<span id='t_" + region[i] + "' class='tooltips wave2'></span>");
				// $('body').append("<span id='t_" + region[i] + "' class='tooltips wave'></span>");
			//	$('body').append("<span id='t_" + region[i] + "' class='tooltips dot'></span>");

				$("#r_" + region[i]).text(data2[0]['Title']);
				$("#r_" + region[i]).attr("href", "http://www."+data2[0]['URL']);

				}

   		if (i<region.length-1)
				{
				send(i+1, coun);
				}
				else
				{
					 setTimeout(function (){

					 		for (var j = 0; j <= region.length - 1; j++) {
						
						$("#r_" + region[j] + "").addClass("animated zoomOut");
						$("#t_" + region[j] + "").remove();




					}

					region = [ "484", "481", "812", "474", "473", "863", "847", "851", "865", "416", "411", "395", "391", "494"];
						send(0, coun+1);

						

					 },3000);



				}

      break;
   case 1:
      
      if (data2[0]['Title'] != null)
				{
				$('body').append("<a id='r_" + region[i] + "' class='tooltips animated zoomIn' href='../''></a>");
				$('body').append("<span id='t_" + region[i] + "' class='tooltips wave2'></span>");
				// $('body').append("<span id='t_" + region[i] + "' class='tooltips wave'></span>");
				//$('body').append("<span id='t_" + region[i] + "' class='tooltips dot'></span>");

				$("#r_" + region[i]).text(data2[0]['Title']);
				$("#r_" + region[i]).attr("href", "http://www."+data2[0]['URL']);

				}

   	if (i<region.length-1)
				{
				send(i+1, coun);
				}
				else
				{
					 setTimeout(function (){

					 		for (var j = 0; j <= region.length - 1; j++) {
						
						$("#r_" + region[j] + "").addClass("animated zoomOut");
						$("#t_" + region[j] + "").remove();




					}

					 region = [ "818", "495", "487", "871", "867", "873", "844", "845", "353", "413", "421", "415", "394", "831", "385", "383", "834"];
						send(0, coun+1);

					 },3000);

				

					

				}




     break;


      case 2:
      
      if (data2[0]['Title'] != null)
				{
				$('body').append("<a id='r_" + region[i] + "' class='tooltips animated zoomIn' href='../''></a>");
				$('body').append("<span id='t_" + region[i] + "' class='tooltips wave2'></span>");
				// $('body').append("<span id='t_" + region[i] + "' class='tooltips wave'></span>");
				//$('body').append("<span id='t_" + region[i] + "' class='tooltips dot'></span>");

				$("#r_" + region[i]).text(data2[0]['Title']);
				$("#r_" + region[i]).attr("href", "http://www."+data2[0]['URL']);

				}

 		if (i<region.length-1)
				{
				send(i+1, coun);
				}
				else
				{
					 setTimeout(function (){

					 		for (var j = 0; j <= region.length - 1; j++) {
						
						$("#r_" + region[j] + "").addClass("animated zoomOut");
						$("#t_" + region[j] + "").remove();




					}

region = [ "846", "475", "841", "491", "482", "817", "492", "493", "390", "382", "346", "388"];
						send(0, coun+1);

					 },3000);

					 //415
					

				}




      break;

      case 3:
      
      if (data2[0]['Title'] != null)
				{
				$('body').append("<a id='r_" + region[i] + "' class='tooltips animated zoomIn' href='../''></a>");
				$('body').append("<span id='t_" + region[i] + "' class='tooltips wave2'></span>");
				// $('body').append("<span id='t_" + region[i] + "' class='tooltips wave'></span>");
				//$('body').append("<span id='t_" + region[i] + "' class='tooltips dot'></span>");

				$("#r_" + region[i]).text(data2[0]['Title']);
				$("#r_" + region[i]).attr("href", "http://www."+data2[0]['URL']);

				}

	if (i<region.length-1)
				{
				send(i+1, coun);
				}
				else
				{
					 setTimeout(function (){

					 		for (var j = 0; j <= region.length - 1; j++) {
						
						$("#r_" + region[j] + "").addClass("animated zoomOut");
						$("#t_" + region[j] + "").remove();




					}

					 region = ["349", "821", "833", "341", "347", "351", "352", "343", "843", "836", "835"];
					 	send(0, coun+1);

					 },3000);

					

				}




      break;

      case 4:

if (data2[0]['Title'] != null)
				{
				$('body').append("<a id='r_" + region[i] + "' class='tooltips animated zoomIn' href='../''></a>");
				$('body').append("<span id='t_" + region[i] + "' class='tooltips wave2'></span>");
				// $('body').append("<span id='t_" + region[i] + "' class='tooltips wave'></span>");
			//	$('body').append("<span id='t_" + region[i] + "' class='tooltips dot'></span>");

				$("#r_" + region[i]).text(data2[0]['Title']);
				$("#r_" + region[i]).attr("href", "http://www."+data2[0]['URL']);

				}      

	if (i<region.length-1)
				{
				send(i+1, coun);
				}
				else
				{
					 setTimeout(function (){

					 		for (var j = 0; j <= region.length - 1; j++) {
						
						$("#r_" + region[j] + "").addClass("animated zoomOut");
						$("#t_" + region[j] + "").remove();




					}

						for (var k = 0; k <= regionss.length - 1; k++) {
						
						$("#r_" + regionss[k] + "").remove();
						$("#t_" + regionss[k] + "").remove();
						





					}



					 region = ["401", "811", "814" , "815", "rk", "483", "471", "486", "861", "877", "878", "866", "872", "424", "423", "426", "427", "302", "301", "381", "345", "384"];
					 	send(0, 0);

					 },3000);

					

				}



break;
 
}

                
            }
        });
}

send(0, 0);



    });


