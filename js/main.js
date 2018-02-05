$(document).ready(function(){
  $('#searchUser').on('keyup', function(e){
    let username = e.target.value;
// Make request to Github
    $.ajax({
      url:'https://api.github.com/user/'+username,
      data:{
        client_id:'ea8b9ad48306d1a34ab2',
        client_secret:'002a4677b32b6059601d4a3d309696c94789d779'
      }



});
});
