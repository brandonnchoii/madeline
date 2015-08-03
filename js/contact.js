function goBack() {
    window.history.back();
 } 

 $("#back").click(function() {
 	goBack();
 });

 $(document).ready(function(){
    $("#email").on('click',function(){
       window.location.href = "mailto:mstambler13@gmail.com?subject=&body=Hi%20Maddie,"; 
    });
});