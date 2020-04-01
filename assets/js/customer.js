(function(){
    // service fixed issue
    var target = document.getElementById('category-issue');
    var height = document.getElementById('blog').offsetTop + 60;
    if(window.scrollY > height){
        target.classList.add("fixed");
    }else{
        target.classList.remove("fixed");
    }
    window.addEventListener('scroll',()=>{
        if(window.scrollY > height){
            target.classList.add("fixed");
        }else{
            target.classList.remove("fixed");
        }
    })
})()