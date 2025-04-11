const tagsElements = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.addEventListener('keyup', (event)=>{
    createTags(event.target.value);
    if(event.key ==='Enter')
    {
       setTimeout(()=>{
        event.target.value="";
       },10)
       randomSelect();
        
    }

})
 
 function createTags(input) {
    const tags = input.split(',').filter(tag  => tag.trim()!=='').map(tag => tag.trim());  //this line means split function convert into array fillter use here to filter the ' ' that is retuen by the ,
    
     tagsElements.innerHTML=""; // mutile times repeating lettter remove//
     
    
    
    
    tags.forEach(tag => {
        const t = document.createElement('span');
        t.classList.add('tag');
        t.innerText= tag;
        tagsElements.append(t)
    })
 }
 function randomSelect(){
    const times = 30;
    const int =100;
    const interval = setInterval(()=>{
        const randomtag = pickRandomTag();
        highlightTag(randomtag);
        setTimeout(()=>{
     unhighlightTag(randomtag)
        },int)
    },int)
 
 setTimeout(()=>{
    clearInterval(interval);
    setTimeout(()=>{
        const randomtag = pickRandomTag();
        highlightTag(randomtag);
    },int)
 },int*times);
}
 function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random()*tags.length)];
 }
 function highlightTag(tag){
    tag.classList.add('highlight')

 }
 function unhighlightTag(tag){
    tag.classList.remove('highlight')

 }