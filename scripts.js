function SendME(element) {
    if (element.classList.contains("selected-skill")) {
        element.classList.remove("selected-skill");
    } else {
        element.classList.add("selected-skill");
    }
}

document.getElementById("generate").onclick = function() {
    tecList = document.getElementsByClassName("selected-skill")
    logo_img_path = document.getElementById("icon_prefix_logoPath").value
    title = document.getElementById("icon_prefix_title").value

    readme_context = `<div align="center">
    <a href="#">
        <img src="${logo_img_path}" alt="Logo" width="80" height="80">
    </a>
    <h1>${title}</h1>
</div>
<!-- Project Description -->
<div>
    <p align="center">
    This is my first use of Materialize CSS, a very simple personal resume site
    </p>
</div>
<br>
<br>
<!-- Project Details -->
<div align="center">
    <h2><strong>Technologies: </strong></h2>
    <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
    <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
    <a href="https://materializecss.com/" target="_blank"> <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" alt="materialize" width="40" height="40"/> </a>
</div>
    `

    for (let index = 0; index < tecList.length; index++) {
        const element = tecList[index];
        item = element.innerHTML
        item = item.substring(0, item.indexOf('>')) + ">";
        var a_tag = document.createElement('a')
        a_tag.innerHTML = item
            // a_tag.firstChild.style.width = "40px"
            // a_tag.firstChild.style.height = "40px"
        console.log(a_tag)
    }
}