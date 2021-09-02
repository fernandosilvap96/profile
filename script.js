// Menu lateral com transição para as páginas
const nav = document.querySelector(".itens-menu"), 
    navList = nav.querySelectorAll("li"), 
    totalNavList =  navList.length, 
    allSection = document.querySelectorAll(".section"), 
    totalSection = allSection.length;

for(let i=0; i < totalNavList; i++){
    const a = navList[i].querySelector("a"); 
    console.log(a)
    a.addEventListener("click", function(){
        
        //Removendo a classe back-ection
        for (let i=0; i < totalSection; i++){
            allSection[i].classList.remove("back-section");
        }

        for(let j=0; j<totalNavList; j++){

            if(navList[j].querySelector("a").classList.contains("active")){
                // Adicionando a classe back-section
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active"); 
        
        }
        this.classList.add("active");
        showSection(this);

        //Para quando selecionado um botão do menu lateral, o mini-menu feche automaticamente
        if(window.innerWidth < 1200){
            lateralSectionBtn();
        }
    })
}

function showSection(element){

    for (let i=0; i < totalSection; i++){
        allSection[i].classList.remove("active");
    }

    const target = element.getAttribute("href").split("#")[1];
          console.log(target)  
          document.querySelector("#" + target).classList.add("active")
}

/*Tradução*/
function ChangeLang(a) {
 var b, elemento = "";
 if (document.createEvent) {
 var c = document.createEvent("HTMLEvents");
 c.initEvent("click", true, true)
 }
 if (a == 'pt') {
 elemento = $(".goog-te-banner-frame:eq(0)").contents().find("button[id*='restore']")
 } else {
 switch (a) {
 case 'de':
 b = "alem";
 break;
 case 'es':
 b = "espanhol";
 break;
 case 'fr':
 b = "fran";
 break;
 case 'en':
 b = "ing";
 break;
 case 'it':
 b = "italiano";
 break
 }
 elemento = $(".goog-te-menu-frame:eq(0)").contents().find("span:contains('" + b + "')");
 }
 if (elemento.length > 0) {
 if (document.createEvent) {
 elemento[0].dispatchEvent(c)
 } else {
 elemento[0].click()
 }
 }
}
function googleTranslateElementInit() {
 new google.translate.TranslateElement({
 pageLanguage: 'pt',
 autoDisplay: false,
 includedLanguages: 'de,es,fr,en,it',
 layout: google.translate.TranslateElement.InlineLayout.SIMPLE
 },
 'google_translate_element');
}



// Mini Menu responsivo

const miniMenu = document.querySelector(".mini-menu-button"), 
      lateral = document.querySelector(".lateral");

miniMenu.addEventListener("click", lateralSectionBtn)

function  lateralSectionBtn(){
    lateral.classList.toggle("open");
    miniMenu.classList.toggle("open");
    
    for (let i=0; i < totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}
