function selectSkill(element) {
    if (element.classList.contains("selected-tech")) {
        element.classList.remove("selected-tech");
    } else {
        element.classList.add("selected-tech");
    }
}


function generateReadme() {
    logo = document.getElementById("logo-path").value
    title = document.getElementById("title").value
    description = document.getElementById("description").value
    techList = document.querySelectorAll(".selected-tech")
    githubRepo = "https://afsharsharifi.github.io/GithubReadmeGenerator/icons/"
    arrIMG = new Array()
    for (let index = 0; index < techList.length; index++) {
        const element = techList[index];
        item = element.firstElementChild
        item.width = 40
        image_name = item.src.split("/").slice(-1)[0]
        new_src = githubRepo + image_name
        item.src = new_src
        // image = item.outerHTML
        // console.log(image);
        arrIMG.push(item.outerHTML)
    }

    let result = `
<div align="center">
<a href="#">
<img src="${logo}" alt="Logo" width="80" height="80">
</a>
<h1>${title}</h1>
</div>
<!-- Project Description -->
<div>
<pre align="center">
${description}
</pre>
</div>
<br>
<br>
<!-- Project Details -->
<div align="center">
<h2>Technologies: </h2>
${arrIMG.slice(Math.max(arrIMG.length - 5, 0)).join(" ")}
</div>
`

    return result
}


function copyToClipboard(text) {
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
}


document.getElementById("update-preview").onclick = function() {
    document.getElementById("preview").innerHTML = generateReadme()
}

document.getElementById("copy-preview").onclick = function() {
    copyToClipboard(generateReadme())
}