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



    for (let index = 0; index < tecList.length; index++) {
        const element = tecList[index];
        item = element.firstElementChild
        item.width = 40
        item.height = 40
        console.log(item);
        var a_tag = document.createElement('a')
        a_tag.innerHTML = item
        console.log(a_tag);
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
        ${description}
    </div>
    `




    // document.write(readme_context)
}