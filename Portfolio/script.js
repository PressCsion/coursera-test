// const changeImage1 = () => {
//     const element = document.getElementById("change-image")
//     element.src = "../Portfolio/img/image_final_1_1.png"
//     return
// }  

// const changeImage2 = () => {
//     const element = document.getElementById("change-image")
//     element.src = "../Portfolio/img/image_final_1_2.png"
//     return
// }  

// const changeImage3 = () => {
//     const element = document.getElementById("change-image")
//     element.src = "../Portfolio/img/image_final_1_3.png"
//     return
// }  

// const changeImage4 = () => {
//     const element = document.getElementById("change-image")
//     element.src = "../Portfolio/img/image_final_1_4.png"
//     return
// }  

var t1 = document.getElementById("t1")
var t2 = document.getElementById("t2")
var t3 = document.getElementById("t3")
var t4 = document.getElementById("t4")
var p1 = document.getElementById("p1")    
var p2 = document.getElementById("p2") 
var p3 = document.getElementById("p3") 
var p4 = document.getElementById("p4")
var img = document.getElementById("chage-image")
var n = document.getElementById("space")
var left = document.getElementById("left")
var right = document.getElementById("right")
var degrade1 = document.getElementById("degrade1")

const b1 = () => {
    const element = document.getElementById("change-image")
    element.src = "../Portfolio/img/image_final_1.png"
    n.innerHTML ="1:3"
    t1.innerHTML ="Grids"
    p1.innerHTML ="I used a 12 coluns grid systen simulating the bootstrap organization style to make the development of the website easier. In the adaptative process to smart phones I have just stacked the itens and change the distances for an easy use."
    t2.innerHTML ="Styles"
    p2.innerHTML ="In the design I get inspired by Kandisky, trying to use colors that are associated with the nature, passing a good and serious vibe at same time. The elements also remete to nature with Eclipses and mountains. In the dev I tried to make a technology stand out design, with very used game/crypto site styles."
    t3.innerHTML ="Fonts"
    p3.innerHTML ="Used Krylon for the design area, a very simple a elegant font, while in the dev I used Impact, a very strong and flashy font."
    t4.innerHTML ="Objectives"
    p4.innerHTML ="I wanted to make a simple deisgn, where the importants areas such as contact and social medias area easy acess. And at the same time I aimed a unique and memorable website, to stand out between others portfolios."
    right.addEventListener("click",b2)
    left.addEventListener("click",b3)
    degrade1.innerHTML ="Design"
}


const b2 = () => {
    const element = document.getElementById("change-image")
    element.src = "../Portfolio/img/image_final_2.png"
    n.innerHTML ="2:3"
    t1.innerHTML ="Bootstrap"
    p1.innerHTML ="I made all the design thinking on the use of it. With it I made a personalized and adaptative design to the website. My biggest focus was in try to make it simple and organized."
    t2.innerHTML ="Transitions and animations"
    p2.innerHTML ="There are some different animations in this page, with different techniques. The sandwich menu transiction to X was madeusing CSS, the scorw animations where made using external sites and this final page content change was made using JS."
    t3.innerHTML ="Chalenges"
    p3.innerHTML ="This was my first website, the first time I made everything alone, without pre-made answers. So everything you see was a challenge, with erros that i need to investigate and correct, new techiques that I have need to find, every step in the contruction of this page was a new knowledge."
    t4.innerHTML =""
    p4.innerHTML =""
    right.addEventListener("click",b3)
    left.addEventListener("click",b1)
    degrade1.innerHTML ="Dev"
}

const b3 = () => {
    const element = document.getElementById("change-image")
    element.src = "../Portfolio/img/image_final_3.png"
    n.innerHTML ="3:3"
    t1.innerHTML ="What I learned"
    p1.innerHTML ="I learned a lot of page orgazanitation and transitions, also about hosting it and make it interactive. Many of the concepts I have about the front-end development that I used in the design page were wrong, I learned a lot of thing that will help me in my UX design path, creating more coherent and realistic designs."
    t2.innerHTML ="Next Steps"
    p2.innerHTML ="I deffinily want to practice more about front-end development, learning other highly used frameworks as React JS, keep building my self as a designer and front-end developer. I`m very excited to learn new things and the actual company process of page development, look for some place to guide me and build my knowledge would be amazing."
    t3.innerHTML ="To correct"
    p3.innerHTML ="The page isn't perfect yet: While scrow in some parts itens that should be clickabe aren`t; This Page changer has a bug afther 4 interactions; I want to change somethings in the smart phone devices adapatation."
    t4.innerHTML =""
    p4.innerHTML =""
    right.addEventListener("click",b1)
    left.addEventListener("click",b2)
    degrade1.innerHTML ="Final Considerations"
}

