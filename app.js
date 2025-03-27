const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        console.table(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show','getIntoFrame');
        }else{
            entry.target.classList.remove('show','getIntoFrame');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden, .outOfFrame');
hiddenElements.forEach(el => observer.observe(el));