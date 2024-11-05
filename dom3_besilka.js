// niza so 10 zborovi koi izbrav da bidat na ista tematika za polesno igranje, so fiksna golemina t.e sekoj e sostaven od 5 bukvi
var array = new Array("кабел", "мотор", "напон","ротор","мрежа", "диода", "бајти", "порта", "вирус", "плоча");

var random_zbor, blank_zbor, attempts; //promenlivi koi se dinamicki poradi tipot var

//pri load da se startuva igrata (pocetna funkcija za funkcioniranje na stranata)
function startGame() 
{
   
    random_zbor = array[Math.floor(Math.random() * array.length)]; //kreiram promenliva vo koja cuvam slucajno izbran zbor od 
    //nizata [pozicijata na elementite od nizata se bira slucajno, ja koristam math.floor fjata za da go zemam pomaliot cel broj
    //od intervalot i so soodvetno dobienata pozicija so array[pozicija] go odbivam zborot koj go cuvam vo promenlivata random_zbor]
    blank_zbor = Array(random_zbor.length).fill("_"); //izbraniot zbor go iscrtuva so _ _ _ _ _ (takvi 5 dolni crti)
    attempts = 5; //imame 5 pati moznost da vneseme bukva za da go pogodime zborot

    //za da bide polesno random se biraat 2 bukvi od odbraniot zbor koi kje bidat prikazani pi poceto na igrata, pa od korisnikot
    //ostanuva da gi pogodi ostanatite 3
    for (let i = 0; i < 2; i++) 
    {
        let index; //promenliva od fiksen tip bidejki e let
        do 
        {
            index = Math.floor(Math.random() * random_zbor.length);//random se bira pozicijata na koja kje bidat zadadeni bukvite soodvetno
            //pritoa ja koristime dolzinata na vekje izbraniot zbor 
        } 
        while (blank_zbor[index] != "_"); 
        blank_zbor[index] = random_zbor[index];//na soodvetna prazna pozicija smesti ja bukvata 
    }

    //prikazi ja sostojbata na igrata (tuka gi koristam ids definirani vo html dokumentot za da ja napolnat sodrzinata soodvetno i
    //da i dadam nekakva funkcionalnost)
    document.getElementById("blankword").innerText = blank_zbor.join(" ");
    document.getElementById("attemptsleft").innerText = attempts;
    document.getElementById("message").innerText = "";
    document.getElementById("letterInput").value = "";
}

// proveri dali vnesenata bukva od korisnikot e ista so bukvata koja ja sodrzi zborot 
function guessLetter() 
{
    let letter = document.getElementById("letterInput").value.toLowerCase(); //za da ne bide key sensitive i za posigurno, i da se 
    //vnese golema bukva taa da ja pretvori vo mala pa da sporeduva
    document.getElementById("letterInput").value = "";

    if (letter == "" || letter.length !== 1) //ako se vnese prazno mesto ili povekje od edna bukva
    {
        alert("Внеси само една буква!"); //kazi upatstvo kako se koristi
        return;
    }

    let found = false; //defaultno 
    for (let i = 0; i < random_zbor.length; i++) //se do krajot na zborot iteriraj i proveruvaj 
    {
        if (random_zbor[i] == letter && blank_zbor[i] == "_") //ako vnesena e bukva koja soodvetstvuva na praznoto mesto i pritoa 
        //e tocna 
        {
            blank_zbor[i] = letter; //ispisi ja i ne pravi nisto so attempts
            found = true;
        }
    }

    if (found) //ako e najdena bukvata i soodvetno se pogodi zborot, ispisi cestitiki
    {
        if (!blank_zbor.includes("_")) //se proveruva dali celiot zbor ne sodrzi vekje _ sto znaci deka celiot zbor bil pogoden
        {
            document.getElementById("message").innerText = "Честитки, го погодивте зборот : " + random_zbor + "!";
        }
        else 
        {
            document.getElementById("blankword").innerText = blank_zbor.join(" ");
        }
    } 
    else //ako ne se pogodi bukvata, namali gi sansite za gagjanje i koga kje se potrosat site sansi togas ispisi deka nema vekje obidi
    {
        attempts--;
        document.getElementById("attemptsleft").innerText = attempts;
        if (attempts === 0) 
        {
            document.getElementById("message").innerText = "Играта заврши и за жал немате повеќе обиди! Зборот беше: " + random_zbor;
        }
    }
}
addEventListener("load", startGame, false) //za povtoren reload na stranicata i odpocetok startuvanje na igrata
//povtoren reload moze da se napravi i so stiskanje na kopceto dali sakate da igrate povtorno
