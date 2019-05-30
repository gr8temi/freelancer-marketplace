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
                 `<center><div class="cardinfo ">
                 <div class="heading"></div>
                    <div class="member">
                        <img class="" src="static/img/user.png"
                    </div>

                    <p ><b>Name</b>: `+data.firstname+ ` `+data.lastname+`</p>
                 
                 </div></center>`;

                 // li.innerHTML = 
                 div.append(string);
                 
                 
             
         
     },
     type:'GET',
 });  

        // Get Freelancer Skills
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
                count=0;
                for(var i=0; i<=skill.length;i++){
                    count++
                    var string=
                    `

                    <p>`+count+ `:<b>Skill: </b>:`+skill[i].skill+ `</p>
                    <p style="border-bottom:1px solid grey;"><b>  Skill Rating:</b> `+skill[i].rating+ `</p>
                    
                    
                    `;
                    // li.innerHTML = 
                    // localStorage.setItem('user', JSON.stringify(data))
                    div.append(string);
                
                }
                       
                        
                        
                    
                
            },
            type:'GET',
        });  
    // Get FreeLancer Past Jobs
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
            pastJob=data.pastJobs;
            count=0;
            for(var i=0; i<=pastJob.length;i++){
                count++
                var string=
                `

                <p style="border-bottom:1px solid grey;">`+count+ `:`+pastJob[i].pastJob+ `</p>
                
                
                `;
                // li.innerHTML = 
                // localStorage.setItem('user', JSON.stringify(data))
                div.append(string);
            
            }
                   
                    
                    
                
            
        },
        type:'GET',
    });  
    // Get FreeLancer services
    $.ajax({
 

        url:"http://localhost:3000/user/"+query+"?_embed=services",
        dataType:"json",
        contentType:'application/json',
        data:{
           format: 'json'
        },
        // dataType:'jsonp',
   
        success:function(data){
            console.log(data.services);

            var div = $(".services");
            service=data.services;
            count=0;
            for(var i=0; i<=service.length;i++){
                count++
                var string=
                `

                <p >`+count+ `: Title: `+service[i].title+ `</p>
                <p style="border-bottom:1px solid grey;">Description: `+service[i].description+ `</p>
                
                `;
                // li.innerHTML = 
                // localStorage.setItem('user', JSON.stringify(data))
                div.append(string);
            
            }
                   
                    
                    
                
            
        },
        type:'GET',
    });  
    
})