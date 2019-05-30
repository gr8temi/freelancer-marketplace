// $(".view").click(function(){
//     var hrefs=$("#link").attr("href");
//     console.log(hrefs)
// })

$(document).ready(function(){
    console.log(localStorage)
    $.ajax({
        url:"http://localhost:3000/user",
        dataType:"json",
        contentType:'application/json',
        data:{
           format: 'json'
        },
        // dataType:'jsonp',

        success:function(data){
            console.log(data);
            var div = $(".freelance");
           
                for(var i=0; i<data.length;i++){
                    var string=
                    `
                    <div class="col-md-3">
                    <div class="boxes contain">
                    <center><img style="" src="static/img/user.png" alt"user img"></center>
                    <p ><b>Name</b>: `+data[i].firstname+ ` `+data[i].lastname+`</p>
                    <p><b>Address</b>:`+data[i].Address+`</p>           
                    <a id="view" data-id="" href="profile-check.html?`+data[i].id+`"><button class="btn btn-danger">
                    View Freelancer</button></a>
                    </div>
                    </div>
                    `;
                    // li.innerHTML = 
                    // localStorage.setItem('user', JSON.stringify(data))
                    div.append(string);
                
                }
                
        },
        type:'GET', 
    });
    var query=location.search.substring(1);
    console.log(query)
$.ajax({
 

     url:"http://localhost:3000/user/"+query,
     dataType:"json",
     contentType:'application/json',
     data:{
        format: 'json'
     },
     // dataType:'jsonp',

     success:function(data){
         console.log(data);
         var div = $(".freelancer");

             
                 var string=
                 `<ul>
                 <li>`+data.id +`</li>
                 <li>`+data.firstname+ `</li>
                 <li>`+data.lastname+ `</li>
                 </ul>`;

                 // li.innerHTML = 
                 div.append(string);
                 
                 
             
         
     },
     type:'GET',
 });  
    
    $("#show").click(function(){

        $.ajax({
 

            url:"http://localhost:3000/user/"+query+"?_embed=skills",
            dataType:"json",
            contentType:'application/json',
            data:{
               format: 'json'
            },
            // dataType:'jsonp',
       
            success:function(data){
                console.log(data.skills);

                var div = $(".skills");
                skill=data.skills;
                for(var i=0; i<=skill.length;i++){
                    
                    var string=
                    `
                    <ul>
                    <li>`+skill[i].id +`</li>
                    <li>`+skill[i].skill+ `</li>
                    <li>`+skill[i].rating+ `</li>
                    
                    </ul>
                    `;
                    // li.innerHTML = 
                    // localStorage.setItem('user', JSON.stringify(data))
                    div.append(string);
                
                }
                       
                        
                        
                    
                
            },
            type:'GET',
        });  
    })
    $("#pastjob").click(function(){

        $.ajax({
 

            url:"http://localhost:3000/user/"+query+"?_embed=pastJobs",
            dataType:"json",
            contentType:'application/json',
            data:{
               format: 'json'
            },
            // dataType:'jsonp',
       
            success:function(data){
                console.log(data.pastJobs);

                var div = $(".past-jobs");
                pastJobs=data.pastJobs;
                for(var i=0; i<=pastJobs.length;i++){
                    
                    var string=
                    `
                    <ul>
                    <li>`+pastJobs[i].id +`</li>
                    <li>`+pastJobs[i].pastJob+ `</li>
                    
                    
                    </ul>
                    `;
                    // li.innerHTML = 
                    // localStorage.setItem('user', JSON.stringify(data))
                    div.append(string);
                
                }
                       
                        
                        
                    
                
            },
            type:'GET',
        });  
    })

    $("#service").click(function(){

        $.ajax({
 

            url:"http://localhost:3000/user/"+query+"?_embed=services",
            dataType:"json",
            contentType:'application/json',
            data:{
               format: 'json'
            },
            // dataType:'jsonp',
       
            success:function(data){
                console.log(data);

                var div = $(".services");
                services=data.services;
                for(var i=0; i<services.length;i++){
                    
                    var string=
                    `
                    <ul>
                    <li>`+services[i].id +`</li>
                    <li>`+services[i].title+ `</li>
                    <li>`+services[i].description+ `</li>
                    
                    
                    </ul>
                    `;
                    // li.innerHTML = 
                    // localStorage.setItem('user', JSON.stringify(data))
                    div.append(string);
                
                }
                       
                        
                        
                    
                
            },
            type:'GET',
        });  
    })
})