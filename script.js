let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contens");
let tablink;
let tabcontent;
function opentab(tabname){
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
