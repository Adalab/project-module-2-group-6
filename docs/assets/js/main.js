console.log(1);const styleBlue=document.querySelector(".style1"),styleRed=document.querySelector(".style2"),styleYellow=document.querySelector(".style3"),colorLeftSquare=document.querySelector(".js-square"),colorName=document.querySelector(".js-name"),colorIcons=document.querySelectorAll(".js-icon"),colorBorder=document.querySelectorAll(".js-border");function handlerStyle(){console.log(event.currentTarget.classList),"style1"===event.currentTarget.classList.value?console.log("Ha elegido el estilo 1"):"style2"===event.currentTarget.classList.value?(console.log("Ha elegido el estilo 2"),changeColors("dark-red","medium-red","light-red")):"style3"===event.currentTarget.classList.value&&console.log("Ha elegido el estilo 3")}function changeColors(e,t,o){colorName.classList.add(e),colorLeftSquare.classList.add(t);for(const t of colorIcons)t.classList.add(e);for(const e of colorBorder)e.classList.add(o)}styleBlue.addEventListener("click",handlerStyle),styleRed.addEventListener("click",handlerStyle),styleYellow.addEventListener("click",handlerStyle);const inputName=document.querySelector(".js-name"),inputJob=document.querySelector(".js-job"),inputPhone=document.querySelector(".js-phone"),inputEmail=document.querySelector(".js-email"),inputLinkedin=document.querySelector(".js-linkedin"),inputGithub=document.querySelector(".js-github"),printPhone=document.querySelector(".js-phone-icon"),printName=document.querySelector(".card__top__title__name"),printJob=document.querySelector(".card__top__title__role"),printEmail=document.querySelector(".js-email-icon"),printLinkedin=document.querySelector(".js-linkedin-print"),printGithub=document.querySelector(".js-github-print"),userData={};function saveFormValues(){userData.name=inputName.value,userData.job=inputJob.value,userData.phone=inputPhone.value,userData.email=inputEmail.value,userData.linkedin=inputLinkedin.value,userData.github=inputGithub.value,console.log(userData.name),console.log(userData.job),console.log(userData.phone),console.log(userData.email),console.log(userData.linkedin),console.log(userData.github)}function sendUserData(){printName.innerHTML=userData.name,printJob.innerHTML=userData.job,printPhone.href="tel:"+userData.phone,printEmail.href="mailto:"+userData.email,printLinkedin.href="https://www.linkedin.com/in/"+userData.linkedin,printGithub.href="https://github.com/"+userData.github}function printUserData(){saveFormValues(),sendUserData()}inputName.addEventListener("keyup",printUserData),inputJob.addEventListener("keyup",printUserData),inputPhone.addEventListener("keyup",printUserData),inputEmail.addEventListener("keyup",printUserData),inputLinkedin.addEventListener("keyup",printUserData),inputGithub.addEventListener("keyup",printUserData);const click=document.querySelector(".click"),section=document.querySelector(".colors-container"),arrowDown=document.querySelector(".arrow-down"),arrowUp=document.querySelector(".arrow-up");function displayArrow(){section.classList.toggle("hidden"),arrowUp.classList.toggle("hidden"),arrowDown.classList.toggle("hidden")}click.addEventListener("click",displayArrow);const click2=document.querySelector(".click2"),section2=document.querySelector(".form__section__signup"),arrowDown2=document.querySelector(".arrow-down2"),arrowUp2=document.querySelector(".arrow-up2");function displayArrow2(){section2.classList.toggle("hidden"),arrowUp2.classList.toggle("hidden"),arrowDown2.classList.toggle("hidden")}click2.addEventListener("click",displayArrow2);const click3=document.querySelector(".click3"),section3=document.querySelector(".form__share__button"),arrowDown3=document.querySelector(".arrow-down3"),arrowUp3=document.querySelector(".arrow-up3");function displayArrow3(){section3.classList.toggle("hidden"),arrowUp3.classList.toggle("hidden"),arrowDown3.classList.toggle("hidden")}click3.addEventListener("click",displayArrow3);