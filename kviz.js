


let poleOtazek = [
    { poradi: 'Otázka 1/3', obrazek: 'obrazky/moncicak.jpg', otazka: 'Co je ikonická hračka z 80.let?', odpoved0: 'Kočičák', odpoved1: 'Mončičák', odpoved2: 'Opičák', odpoved3: '', odpoved: 'Mončičák' },
    { poradi: 'Otázka 2/3', obrazek: 'obrazky/ovoce.jpg', otazka: 'Jaké je Matějovo nejoblíbenější ovoce?', odpoved0: 'Kokos', odpoved1: 'Meloun', odpoved2: 'Jahoda', odpoved3: 'Ani jedno z toho', odpoved: 'Jahoda' },
    { poradi: 'Otázka 3/3', obrazek: 'obrazky/pivo.jpg', otazka: 'Co je potřeba pro úspěšné absolvování kurzu?', odpoved0: 'Umět JavaScript', odpoved1: 'Chodit po kurzu na pivo', odpoved2: '', odpoved3: '', odpoved: 'Umět JavaScript' }

];



let poradi = document.querySelector('#poradi');
let obrazek = document.querySelector('#obrazek');
let otazka = document.querySelector('#otazka');
let odpoved0 = document.querySelector('li[data-odpoved="0"]');
let odpoved1 = document.querySelector('li[data-odpoved="1"]');
let odpoved2 = document.querySelector('li[data-odpoved="2"]');
let odpoved3 = document.querySelector('li[data-odpoved="3"]');
let zvolenaOdpoved1 = '';
let zvolenaOdpoved2 = '';
let zvolenaOdpoved3 = '';


let odpovedi = document.querySelector('#odpovedi');
let kviz = document.querySelector('#kviz');
let moznosti = document.querySelector('#moznosti');
let obsah = document.querySelector('#obsah');
let vysledek = document.querySelector('#vysledek');
let nadpisVysledek = document.querySelector('.vysledek h2');
let i = 0;



function priNacteni() {
    poradi.innerHTML = poleOtazek[i].poradi;
    obrazek.src = poleOtazek[i].obrazek;
    otazka.innerHTML = poleOtazek[i].otazka;
    odpoved0.innerHTML = poleOtazek[i].odpoved0;
    odpoved1.innerHTML = poleOtazek[i].odpoved1;
    odpoved2.innerHTML = poleOtazek[i].odpoved2;
    odpoved3.style.display = 'none';

}



function zvoleniMoznosti(event) {

    console.log(event.srcElement.id);

    i = i + 1;
    odpoved3.style.display = 'initial';
    if (i < 3) {

        poradi.innerHTML = poleOtazek[i].poradi;
        obrazek.src = poleOtazek[i].obrazek;
        otazka.innerHTML = poleOtazek[i].otazka;
        odpoved0.innerHTML = poleOtazek[i].odpoved0;
        odpoved1.innerHTML = poleOtazek[i].odpoved1;

        if ((poleOtazek[i].odpoved3) == '') {
            odpovedi.removeChild(odpoved3);
        }
        else {
            odpoved3.innerHTML = poleOtazek[i].odpoved3;
        }

        if ((poleOtazek[i].odpoved2) == '') {
            odpovedi.removeChild(odpoved2);
        }
        else {
            odpoved2.innerHTML = poleOtazek[i].odpoved2;
        }


    }



    else {

        /*
                kviz.innerHTML = `<h2> Tvoje hodnocení </h2><h3>1. ${poleOtazek[0].otazka}</h3> Tvoje odpověď: ${poleOtazek[1].odpoved} <br> Správná odpověď: ${poleOtazek[0].odpoved} <h3>2. ${poleOtazek[1].otazka}</h3> Tvoje odpověď:${poleOtazek[0].otazka} <br> Správná odpověď: ${poleOtazek[1].odpoved}
                <h3>3. ${poleOtazek[2].otazka}</h3> Tvoje odpověď:${poleOtazek[0].otazka} <br> Správná odpověď: ${poleOtazek[2].odpoved} <br> <br>
                <h2> Správně 1 ze 3 otázek, úspěšnost je 33% </h2>`;
        */

    }
}

