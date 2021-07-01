// susirenkam visus elementus is htmlo
var lenta = document.querySelector('.lenta');
var turiai = document.querySelector('.turiai');
var prideti = document.querySelector('.prideti');
var max = document.querySelector('.max');
var trinti = document.querySelector('.trinti');
// susikuriam masyva, kuriame saugosim visas turio vertes
var vmas = [];

document.querySelector('.trinti').disabled = true;
document.querySelector('.max').disabled = true;

prideti.addEventListener('click', function() {
    if (lenta.childElementCount < figuros.length) {
        for (var i = 0; i < figuros.length; i++) {
            lenta.innerHTML += `<tr class="tr"><td>${figuros[i].ilgis}</td><td>${figuros[i].aukstis}</td><td>${figuros[i].plotis}</td></tr>`;
            var v = figuros[i].ilgis * figuros[i].aukstis * figuros[i].plotis; //skaiciuojam turi kiekvienam
            turiai.innerHTML += `<tr class="tr"><td>${v}</td></tr>`; // susidedam paskaiciuotus turius i antra lentele (vieno stulpelio)
            vmas.push(v);
        }
        console.log(vmas);
        console.log(lenta.childElementCount);
        document.querySelector('.prideti').disabled = true;
        document.querySelector('.max').disabled = false;
        document.querySelector('.trinti').disabled = false;
    }
});

max.addEventListener('click', function() {
    // bandom rasti didziausia verte is masyvo, kuris atitinka 'turiai' lentos vertes ir pageltoninti atitinkamu indeksu 'tr'us
    var largest = vmas[0];
    // tikrinam turiu masyva ir ieskom didziausios vertes
    for (var j = 0; j < vmas.length; j++) {
        if (vmas[j] >= largest) {
            largest = vmas[j];
        }
    }
    // dar syk perziurimas masyvas, kad susirasti visas reiksmes, atitinkancias didziausia anskciau rasta reiksme. Tuomet paimamas didziausias indeksas ir ji atitinkantis tr'as "nudazomas"
    for (var k = 0; k < vmas.length; k++) {
        if (vmas[k] == largest) {
            var maxRow = turiai.getElementsByTagName('td')[k];
            console.log(maxRow);
            maxRow.style.backgroundColor = "yellow";
            maxRow.style.color = "red";
            console.log('didziausios reismes indeksas: ' + k);
        }
    }
    console.log(vmas);
    document.querySelector('.max').disabled = true;
});


trinti.addEventListener('click', function() {
    // surenkam visus 'tr'us su pridedant eilutes uždėta .tr klase
    var trs = document.querySelectorAll('.tr');
    for (var l = trs.length - 1; l >= 0; l--) {
        // parentNode.removeChild realiai trina pats save. Jei sakom 'tr' parentNode, tai yra 'tbody'. Tuo tarpu 'tbody' childas yra 'tr'
        trs[l].parentNode.removeChild(trs[l]);
    }
    // isivalom sukurta masyva (kad vel indeksas masyvo atitinku tai, kas liko lenteleje (nieko))
    for (var m = vmas.length - 1; m >= 0; m--) {
        vmas.shift();
        console.log(vmas);
    }
    document.querySelector('.prideti').disabled = false;
    document.querySelector('.max').disabled = true;
    document.querySelector('.trinti').disabled = true;
    //  KODEL SITAS NEVEIKIA? parastes veikia (surenka visas), bet trynimas neveikia (trina tik kai kurias)
    // var tds = document.getElementsByTagName('td');
    // console.log(tds);
    // for (td of tds) {
    //     // td.style.border = "3px solid orange";
    //     td.remove();
    // }
});