function SendME(element) {
    if (element.classList.contains("selected-skill")) {
        element.classList.remove("selected-skill");
    } else {
        element.classList.add("selected-skill");
    }
}

document.getElementById("generate").onclick = function() {
    tecList = document.querySelectorAll(".selected-skill")
    logo_img_path = document.getElementById("icon_prefix_logoPath").value
    title = document.getElementById("icon_prefix_title").value
    description = document.getElementById("textarea1").value
    arrIMG = new Array()


    for (let index = 0; index < tecList.length; index++) {
        const element = tecList[index];
        item = element.firstElementChild
        item.width = 40
        item.height = 40
            // console.log(item);
        arrIMG.push(item.outerHTML)
    }
    readme_context = `
<div align="center">
<a href="#">
<img src="${logo_img_path}" alt="Logo" width="80" height="80">
</a>
<h1>${title}</h1>
</div>
<!-- Project Description -->
<div>
<p align="center">
${description}
</p>
</div>
<br>
<br>
<!-- Project Details -->
<div align="center">
<h2><strong>Technologies: </strong></h2>
${arrIMG}
</div>
    `

    function copyToClipboard(text) {
        const elem = document.createElement('textarea');
        elem.value = text;
        document.body.appendChild(elem);
        elem.select();
        document.execCommand('copy');
        document.body.removeChild(elem);
    }

    copyToClipboard(readme_context)

    document.getElementById("generator-box").innerHTML = '<button class="btn green white-text"><i class="material-icons left">check</i>Copyied to Clipboard</button>'
}