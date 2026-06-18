

const bootText = document.getElementById("boot-text");
const nameElement = document.getElementById("name");
const subtitle = document.getElementById("subtitle");

const lines = [

"BOOTING SYSTEM...",
"",
"[████████████████████] 100%",
"",
"Loading AI modules...",
"Loading Cybersecurity modules...",
"Loading IoT modules...",
"Loading Portfolio...",
"",
"System Ready.",
""
];

let lineIndex = 0;

function writeBoot(){

```
if(lineIndex < lines.length){

    bootText.innerHTML += lines[lineIndex] + "<br>";

    lineIndex++;

    setTimeout(writeBoot,400);

}else{

    typeName();
}
```

}

const name = "> JUANA_AMARO_GONZALEZ";

let charIndex = 0;

function typeName(){

```
nameElement.style.display = "block";

function typing(){

    if(charIndex < name.length){

        nameElement.textContent += name[charIndex];

        charIndex++;

        setTimeout(typing,90);

    }else{

        subtitle.style.display = "block";
    }
}

typing();
```

}

setTimeout(writeBoot,2200);
