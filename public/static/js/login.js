$(document).ready(function(){
    $("#login").submit(function(){
        var email = $("#email").val()
        var password = $("#password").val()
         $.ajax({
         url:"http://localhost:3000/user",
             dataType:'json',
             type:'GET',
             dataType:"json",
            // contentType:'application/json',
             
              success:function(data){
                for(var i=0; i<data.length;i++){
                    if(email==data[i].email && password==data[i].password){
                        windows.location.assign('http://localhost:3000/dashboard.html/'+email)
                    }
                    else{
                       alert("Your account does not exist. Reverting you to Sign Up") 
                       windows.location.assign('http://localhost:3000/signup')
            
                    }
                }

            //  windows.location.assign('http://localhost:3000/dashboard.html/'+firstname)
                // alert(data)
              },
              error:function(errorThrown){
                 console.log(errorThrown)
              }
 
 
         })
        
    });
})