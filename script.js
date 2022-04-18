var a;

function show() {
    if(a==0) {
        document.getElementById("research-testo").style.display="none";
        document.getElementById("research").style.marginBottom="0px"; //ritorna alla posizione di partenza
        document.getElementById("research").style.paddingTop="0px"; 

        return a=1;
    }

    else {
        document.getElementById("research-testo").style.display="inline";
        document.getElementById("research").style.marginBottom="1000px";
        document.getElementById("research").style.textAlign="left";
        document.getElementById("research").style.paddingTop="13px";

        return a=0;
    }
}

function show1() {
    if(a==0) {
        document.getElementById("attività-testo").style.display="none";
        document.getElementById("attività").style.marginBottom="0px"; //ritorna alla posizione di partenza
        document.getElementById("attività").style.paddingTop="0px"; 


        return a=1;
    }

    else {
        document.getElementById("attività-testo").style.display="inline";
        document.getElementById("attività").style.marginBottom="3400px";
        document.getElementById("attività").style.textAlign="left";
        document.getElementById("attività").style.paddingTop="13px";

        return a=0;
    }
}

function show2() {
    if(a==0) {
        document.getElementById("tesitirocinio-testo").style.display="none";
        document.getElementById("tesitirocinio").style.marginBottom="0px"; //ritorna alla posizione di partenza
        document.getElementById("tesitirocinio").style.paddingTop="0px"; 


        return a=1;
    }

    else {
        document.getElementById("tesitirocinio-testo").style.display="inline";
        document.getElementById("tesitirocinio").style.marginBottom="500px";
        document.getElementById("tesitirocinio").style.textAlign="left";
        document.getElementById("tesitirocinio").style.paddingTop="13px";

        return a=0;
    }
}

