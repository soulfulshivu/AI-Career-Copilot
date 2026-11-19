// ==============================
// SIDEBAR ACTIVE MENU
// ==============================

const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});

// ==============================
// ANIMATED COUNTERS
// ==============================

function animateCounter(element, target, suffix = "") {

    let count = 0;

    let speed = target / 80;

    const update = () => {

        count += speed;

        if (count >= target) {

            element.innerHTML = target + suffix;

        } else {

            element.innerHTML = Math.floor(count) + suffix;

            requestAnimationFrame(update);

        }

    };

    update();

}

// ==============================
// SELECT ALL KPI VALUES
// ==============================

const statNumbers = document.querySelectorAll(".stat-card h2");

if(statNumbers.length >= 5){

animateCounter(statNumbers[0],85,"%");
animateCounter(statNumbers[1],72,"%");
animateCounter(statNumbers[2],24);
animateCounter(statNumbers[3],14);
animateCounter(statNumbers[4],1);

}

// ==============================
// COMPANY ATS BAR CHART
// ==============================

const companyChart = document.getElementById("companyChart");

if(companyChart){

new Chart(companyChart,{

type:"bar",

data:{

labels:[
"Google",
"Microsoft",
"Amazon",
"Adobe",
"Flipkart"
],

datasets:[{

label:"ATS Match",

data:[82,91,74,79,69],

backgroundColor:[
"#4285F4",
"#00A4EF",
"#FF9900",
"#FF0000",
"#2874F0"
],

borderRadius:10

}]

},

options:{

responsive:true,

plugins:{

legend:{
display:false
}

},

scales:{

y:{

beginAtZero:true,

max:100

}

}

}

});

}

// ==============================
// AI CHAT
// ==============================

const input=document.querySelector(".chat-input input");

const sendBtn=document.querySelector(".chat-input button");

const chat=document.querySelector(".chat-box");

const replies={

"resume":"Your ATS score can improve by adding Docker, Kubernetes and AWS.",

"ats":"Current ATS Score is 85%. Missing keywords detected.",

"google":"Your hiring probability at Google is 72%.",

"amazon":"Amazon requires stronger DSA and OS concepts.",

"interview":"Practice System Design and Behavioural Questions.",

"skills":"Cloud Computing and DevOps are your biggest gaps.",

"default":"I'm your AI Career Copilot. Ask me about Resume, ATS, Companies, Interviews or Skills."

};

function sendMessage(){

const msg=input.value.trim();

if(msg==="") return;

chat.innerHTML+=`

<div class="user-message">

${msg}

</div>

`;

let answer=replies.default;

const lower=msg.toLowerCase();

for(let key in replies){

if(lower.includes(key)){

answer=replies[key];

}

}

setTimeout(()=>{

chat.innerHTML+=`

<div class="bot-message">

${answer}

</div>

`;

chat.scrollTop=chat.scrollHeight;

},600);

input.value="";

chat.scrollTop=chat.scrollHeight;

}

sendBtn.onclick=sendMessage;

input.addEventListener("keypress",function(e){

if(e.key==="Enter"){

sendMessage();

}

});
// =========================================
// COMPANY DATA
// =========================================

const companyData = {

    Google: {
        probability: 72,
        status: "High Chance",
        package: "₹32 LPA",
        difficulty: "★★★★☆",
        trend: "High",
        success: "18%"
    },

    Microsoft: {
        probability: 86,
        status: "Very High",
        package: "₹28 LPA",
        difficulty: "★★★☆☆",
        trend: "Very High",
        success: "26%"
    },

    Amazon: {
        probability: 79,
        status: "High",
        package: "₹30 LPA",
        difficulty: "★★★★☆",
        trend: "High",
        success: "22%"
    },

    Adobe: {
        probability: 83,
        status: "High",
        package: "₹27 LPA",
        difficulty: "★★★☆☆",
        trend: "Growing",
        success: "24%"
    }

};

// =========================================
// COMPANY SELECT
// =========================================

const companySelect = document.querySelector(".company-select select");

const circleValue = document.querySelector(".circle h1");

const circleStatus = document.querySelector(".circle p");

const insightCards = document.querySelectorAll(".insight-item h2");

if(companySelect){

companySelect.addEventListener("change",function(){

const company = companyData[this.value];

circleValue.innerHTML = company.probability + "%";

circleStatus.innerHTML = company.status;

if(insightCards.length >= 4){

insightCards[0].innerHTML = company.package;

insightCards[1].innerHTML = company.difficulty;

insightCards[2].innerHTML = company.trend;

insightCards[3].innerHTML = company.success;

}

});

}

// =========================================
// PROGRESS BAR ANIMATION
// =========================================

const progressBars = document.querySelectorAll(".progress-fill");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const width = entry.target.style.width;

entry.target.style.width = "0";

setTimeout(()=>{

entry.target.style.width = width;

},200);

}

});

});

progressBars.forEach(bar=>{

observer.observe(bar);

});

// =========================================
// GREETING
// =========================================

const heroTitle = document.querySelector(".hero h1");

if(heroTitle){

const hour = new Date().getHours();

let greeting = "";

if(hour < 12){

greeting = "☀️ Good Morning";

}

else if(hour < 18){

greeting = "🌤 Good Afternoon";

}

else{

greeting = "🌙 Good Evening";

}

heroTitle.innerHTML = `${greeting}, Shivanshi 👋`;

}

// =========================================
// LIVE CLOCK
// =========================================

const interviewCard = document.querySelector(".interview p");

function updateClock(){

if(!interviewCard) return;

const now = new Date();

interviewCard.innerHTML = now.toLocaleString();

}

setInterval(updateClock,1000);

updateClock();

// =========================================
// NOTIFICATION
// =========================================

const bell = document.querySelector(".notification");

if(bell){

bell.addEventListener("click",()=>{

alert(
`🔔 Notifications

• Resume analysed successfully

• ATS improved by 6%

• Google interview tomorrow

• AI generated new roadmap`
);

});

}

// =========================================
// FADE IN CARDS
// =========================================

const cards = document.querySelectorAll(".card,.stat-card");

const fadeObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-in");

}

});

},{
threshold:0.15
});

cards.forEach(card=>{

fadeObserver.observe(card);

});

// =========================================
// BUTTON RIPPLE EFFECT
// =========================================

const buttons = document.querySelectorAll("button");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const ripple = document.createElement("span");

const size = Math.max(
this.clientWidth,
this.clientHeight
);

ripple.style.width = ripple.style.height = size + "px";

ripple.style.left =

e.clientX -
this.getBoundingClientRect().left -
size/2 + "px";

ripple.style.top =

e.clientY -
this.getBoundingClientRect().top -
size/2 + "px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});
// ======================================
// CAREER READINESS RADAR CHART
// ======================================

const radarCanvas = document.getElementById("careerRadar");

if (radarCanvas) {

new Chart(radarCanvas, {

type: "radar",

data: {

labels: [

"Resume",

"Coding",

"Projects",

"Communication",

"Interview",

"Skills"

],

datasets: [{

label: "Career Readiness",

data: [92,78,85,88,74,80],

backgroundColor: "rgba(79,140,255,0.2)",

borderColor: "#4f8cff",

pointBackgroundColor:"#4f8cff",

borderWidth:3

}]

},

options:{

responsive:true,

plugins:{

legend:{

display:false

}

},

scales:{

r:{

beginAtZero:true,

max:100

}

}

}

});

}

// ======================================
// SKILL GAP DOUGHNUT CHART
// ======================================

const doughnut = document.getElementById("skillChart");

if(doughnut){

new Chart(doughnut,{

type:"doughnut",

data:{

labels:[

"Python",

"DSA",

"Cloud",

"System Design",

"Communication"

],

datasets:[{

data:[30,20,10,15,25],

backgroundColor:[

"#4f8cff",

"#22c55e",

"#ef4444",

"#f59e0b",

"#7c3aed"

]

}]

},

options:{

responsive:true,

plugins:{

legend:{

position:"bottom"

}

}

}

});

}

// ======================================
// REFRESH AI RECOMMENDATIONS
// ======================================

const recommendations = [

"Practice 5 Graph Problems",

"Learn Docker Basics",

"Complete AWS EC2 Tutorial",

"Revise DBMS Indexing",

"Improve Resume Projects",

"Mock Interview Today",

"Apply to 3 Companies",

"Improve LinkedIn Profile",

"Solve Leetcode Medium Questions",

"Watch System Design Videos"

];

const refreshBtn = document.querySelector(".card-header button");

if(refreshBtn){

refreshBtn.addEventListener("click",()=>{

const cards=document.querySelectorAll(".recommend-card p");

cards.forEach(card=>{

const random=Math.floor(

Math.random()*recommendations.length

);

card.innerHTML=recommendations[random];

});

});

}

// ======================================
// THEME TOGGLE
// ======================================

const toggle=document.createElement("button");

toggle.innerHTML="🌙";

toggle.style.position="fixed";

toggle.style.right="30px";

toggle.style.bottom="30px";

toggle.style.width="60px";

toggle.style.height="60px";

toggle.style.borderRadius="50%";

toggle.style.border="none";

toggle.style.background="#4f8cff";

toggle.style.color="white";

toggle.style.cursor="pointer";

toggle.style.fontSize="22px";

toggle.style.boxShadow="0 10px 25px rgba(0,0,0,.2)";

document.body.appendChild(toggle);

let dark=false;

toggle.onclick=function(){

dark=!dark;

if(dark){

document.body.style.background="#0f172a";

document.body.style.color="white";

toggle.innerHTML="☀️";

}

else{

document.body.style.background="#f4f7fb";

document.body.style.color="#14213d";

toggle.innerHTML="🌙";

}

localStorage.setItem("theme",dark);

}

const saved=localStorage.getItem("theme");

if(saved==="true"){

toggle.click();

}

// ======================================
// SAVE COMPANY
// ======================================

if(companySelect){

companySelect.addEventListener("change",()=>{

localStorage.setItem(

"selectedCompany",

companySelect.value

);

});

const oldCompany=

localStorage.getItem("selectedCompany");

if(oldCompany){

companySelect.value=oldCompany;

companySelect.dispatchEvent(new Event("change"));

}

}

// ======================================
// EXPORT REPORT
// ======================================

function exportDashboard(){

window.print();

}

const exportButton=document.createElement("button");

exportButton.innerHTML="📄 Export Report";

exportButton.style.position="fixed";

exportButton.style.bottom="100px";

exportButton.style.right="30px";

exportButton.style.padding="12px 18px";

exportButton.style.background="#22c55e";

exportButton.style.color="white";

exportButton.style.border="none";

exportButton.style.borderRadius="12px";

exportButton.style.cursor="pointer";

exportButton.onclick=exportDashboard;

document.body.appendChild(exportButton);

// ======================================
// ATS SUCCESS CONFETTI
// ======================================

const atsCard=document.querySelector(".stat-card h2");

if(atsCard){

const score=parseInt(atsCard.innerText);

if(score>=90){

setTimeout(()=>{

alert("🎉 Congratulations!\n\nYour ATS Score crossed 90%!");

},1200);

}

}

// ======================================
// AUTO UPDATE TIME
// ======================================

setInterval(()=>{

const date=new Date();

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=

`© 2026 AI Career Copilot | ${date.toLocaleTimeString()}`;

}

},1000);

// ======================================
// LOADING ANIMATION
// ======================================

window.onload=function(){

document.querySelectorAll(".card,.stat-card").forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(20px)";

setTimeout(()=>{

card.style.transition=".6s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*120);

});

};

// ======================================
// DEMO LOADING SCREEN
// ======================================

const loader=document.createElement("div");

loader.innerHTML="AI Career Copilot";

loader.style.position="fixed";
loader.style.top="0";
loader.style.left="0";
loader.style.width="100%";
loader.style.height="100%";
loader.style.background="#14213d";
loader.style.color="white";
loader.style.display="flex";
loader.style.justifyContent="center";
loader.style.alignItems="center";
loader.style.fontSize="32px";
loader.style.fontWeight="700";
loader.style.zIndex="99999";

document.body.appendChild(loader);

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.transition="1s";
loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},1000);

},1200);

});
