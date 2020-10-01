let menyyAndmed = [
    {nimi: 'Esileht', url: 'index.html', title: 'Matkaklubi'},
    {nimi: 'Meist', url: 'index2.html', title: 'Matkaklubi-meist'},
    {nimi: 'Kontakt', url: 'kontakt.html', title: 'Matkaklubi-kontakt'},

];

let matkadeAndmed = [
    {
        pildiUrl: './assets/moto.jpg',
        nimi: 'Motomatk',
        lyhikirjeldus: 'See seiklus ühedab sinu ja su kaherattalise!!',
        url: 'vaataLähemalt.html',
        htmlId: '#esimReg',
        sisu: [{
            pildiUrl: './assets/moto.jpg',
            nimi: 'Motomatk',
            lyhikirjeldus: 'See seiklus ühedab sinu ja su kaherattalise!!',
            url: './vaataLähemalt.html',
        }]
    },
    {
        pildiUrl: './assets/mägi01.jpg',
        nimi: 'Mäematk',
        lyhikirjeldus: 'matk kõrgele mäele',
        url: 'vaataLähemalt.html',
        htmId: '#teineReg',
        sisu:[{
            pildiUrl: './assets/mägi01.jpg',
            nimi: 'Mäematk',
            lyhikirjeldus: 'matk kõrgele mäele',
        }]
    },
    {
        pildiUrl: './assets/mägi01.jpg',
        nimi: '',
        lyhikirjeldus: 'matk kõrgele mäele'
    }
];

function menyyValik(menyyObjekt) {
    let klassid = 'nav-item nav-link';
    if (menyyObjekt.title === document.title) {
        klassid += 'active';
    }

    let menyyTekst = `<a class="${klassid}" href="${menyyObjekt.url}">
                      ${menyyObjekt.nimi}</a>`;
    return menyyTekst;
}

function matkakaart(matkaObjektid) {
    let kaart = `
        <div class="card col-md-6 col-lg-4 m2" >
            <img class="card-img-top" src="${matkaObjektid.pildiUrl}" alt="">
            <div class="card-body">
                <div class="card-title">${matkaObjektid.nimi}</div>
                <div class="card-text">${matkaObjektid.lyhikirjeldus}</div>
                <a href="${matkaObjektid.url}" class="btn btn-primary">Vaata lähemalt</a>
            </div>
        </div>  `;
    return kaart;
}


function matkaSisukaart(matkaObjektid) {
    let kaart = `
        <div class="col-12 matkaAndmed">${matkaObjektid.nimi}</div>
        <div class="col-sm-12  p-1 col-md-6 ">
            <img class="card-img-top" src="${matkaObjektid.pildiUrl}" alt="">
        </div>
        
        <div class="col-sm-12  p-1 col-md-6 tekst">${matkaObjektid.lyhikirjeldus}</div>
        `;
    return kaart;
}

let menyyKast = document.querySelector('.navbar-nav');

let koguMenyy = '';
for (let i = 0; i < menyyAndmed.length; i++) {
    koguMenyy += menyyValik(menyyAndmed[i]);
}
menyyKast.innerHTML = koguMenyy;

let matkaKaardid = document.querySelector('#matkakaardid');
if (matkaKaardid) {
    let matkadeSisu = '';
    for (let i = 0; i < matkadeAndmed.length; i++) {
        matkadeSisu += matkakaart(matkadeAndmed[i]);
    }

    matkaKaardid.innerHTML = matkadeSisu;
}

for (let i = 0; i < matkadeAndmed.length; i++) {
    let matkaElement = document.querySelector(matkadeAndmed[i].htmlId);
    if(matkaElement){
        let matkadeSisu = '';
        for (let j = 0; j < matkadeAndmed[i].sisu.length; j++) {
            matkadeSisu += matkaSisukaart(matkadeAndmed[i].sisu[j]);
        }
        matkaElement.innerHTML = matkadeSisu;
    }
}




