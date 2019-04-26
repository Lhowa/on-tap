$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    $('#search').keyup(function(){
     var searchField = $('#search').val()
     $('#result').html('');
     //$('#state').val('');
     var searchField = $('#search').val();
     var expression = new RegExp(searchField, "i");
     $.getJSON('data.json', function(data) {
      $.each(data, function(key, value){
       // if (value.name.search(expression) != -1 || value.location.search(expression) != -1)//Search using both beer and location
       if (value.name.search(expression) != -1)
       {
        $('#result').append('<li class="list-group-item link-class"><div.css("background-image", "url('+value.image+')")"class="img-thumbnail" <div/> '+value.name+' | <span class="text-muted">'+value.location+'</span></li>');
       }
       if(searchField==""){
       $('#result').html("");   //empties result list
       return;                  //return to abort the previous empty call
       }
      });//end key value
     });//end data function
    });//end search
    });//end ready
