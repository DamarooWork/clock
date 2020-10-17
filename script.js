const deg = 6
const hr = document.querySelector('#hr')
const mn = document.querySelector('#mn')
const sc = document.querySelector('#sc')

setInterval(() => {
    let day  = new Date();
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * deg
    let ss = day.getSeconds() * deg
    
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`
    mn.style.transform = `rotateZ(${mm+(ss/60)}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`

    
})


let colors = ["a83232", "a84a32", "a86332", "a88932", "a8a032", 
"92a832",  "7da832", "67a832", "55a832", "3ca832", "32a842",
"32a857", "32a873", "32a889", "32a8a6", "3290a8", "3279a8",
  "3267a8", "3251a8",  "3240a8", "#232a8", "4232a8", "5132a8",
   "5f32a8", "7532a8",   "8932a8", "9a32a8", "a832a6", "a83290",
    "a8327d", "a8326b",    "a8325b", "a83250", "a83244"];

 
let random = Math.random()*(colors.length-1);
let i = Math.round(random)
let iLink = Math.round(random)

function next_cl() {
    document.getElementById("textChange").style.color='#'+colors[i];
    document.getElementById("link").style.color='#'+colors[i++];
    if (i == colors.length) i=0;
}
setInterval(next_cl,100);


