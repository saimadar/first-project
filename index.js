document.addEventListener('DOMContentLoaded', ()=>{


const navlinks= document.querySelectorAll('.nav-links');

navlinks.forEach(link => {
    link.addEventListener('click', function(){
        navlinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

const getstartedbtn = document.querySelector('#get-started-btn');
if(getstartedbtn){
    getstartedbtn.addEventListener('click',()=>{
        const message = "welcome! we are glad you are here.";
        alert(message);
    })
    }

    const nameinput = document.querySelector('#name');
    const emailinput = document.querySelector('#email');
    const messageinput = document.querySelector('#message');
    const charactercounter = document.querySelector('#char-counter');

    const max_characters=200;

    if(messageinput&&charactercounter){
        messageinput.addEventListener('input',()=> {
            const currentlength = messageinput.value.length;
            charactercounter.textContent=`${currentlength} / ${max_characters}Characters`;
        
        });
}

const contactform=document.querySelector('#contact-form');
if(contactform){
contactform.addEventListener('submit',(e)=>{
e.preventDefault();

const name=nameinput? nameinput.value.trim():'';
const email= emailinput? emailinput.value.trim():'';
const message = messageinput? messageinput.value.trim():'';

if(!name || !email || !message){
    showFeedback('please fill out all required fields,','error');
    return;
}

showFeedback('thankyou! your message has been submitted successfully','success');
contactform.reset();




})



}
const scrolltopbtn=document.querySelector('#scroll-top-btn');
if (scrolltopbtn){
    window.addEventListener('scroll',()=>{
        if(window.scrollY>300){
            scrolltopbtn.style.display='block';
        }
        else{
            scrolltopbtn.style.display='none';
        }
    });

    scrolltopbtn.addEventListener('click',()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    })
}

    const yearspan=document.querySelector('#current-year');
    if(yearspan){
        yearspan.textContent=new Date().getFullYear();
    }


const themetogglebtn=document.querySelector('#theme-toggle-btn');
if(themetogglebtn){
    themetogglebtn.addEventListener('click',()=>{

        document.body.classList.toggle('dark-theme');
    });
}
      
        


   



















})
