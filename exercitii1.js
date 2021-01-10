
/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Exercitiu 1: Încălzire! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/


/*
Când efectuați aceste sarcini, vă recomandăm să
 utilizați console.log pentru a testa
 codul dvs. pentru a vă asigura că funcționează corect.*/

/*
Sarcina 1a - Vârsta votului
Urmează următoarea instrucțiune:
    1. Creați o variabilă numită voteAge și
    atribuiți-i o valoare
    2. In consola va aparea true  dacă vârsta
    este de 18 ani sau mai mare
    SUGESTIE: nu este necesară nicio funcție
*/
// let voteAge = 18;
// if (voteAge >= 18){
//     console.log(true);
// } else {
//     console.log(false);
// }
//


/*
Sarcina 1b - Valori
Urmează următoarele instrucțiuni:
    1. Declarați două variabile și
     atribuiți-le valori
    2. Folosiți o conditie pentru a modifica
    valoarea primei variabile pe baza
     valorii atribuite celei de-a doua variabila
    3. In consola va aparea  valoarea  primei variabile
    SUGESTIE: nu este necesară nicio funcție
*/

// let a = 10;
// let b = 11;
// if (b == 11){
//     console.log(a = "schimbare");
// }


/*
Sarcina 1c - Convert Strings to Numbers
Urmează următoarele instrucțiuni:
    1. Declarați o variabilă de tip
    string cu valoarea „1999”
    2. Convertiți valoarea stringului „1999”
    într-o valoare întreagă din 1999
    3. In consola va aparea rezultatul
    SUGESTIE: căutați metoda Number
*/

// let a = "1999";
// let b = Number(a);
// console.log(b);
// console.log(typeof b);


/*
Sarcina 1d - Înmulțirea

Urmează următoarele instrucțiuni:
    1. Creati funcția multiply de mai jos și transmiteți-i două numere
    2. Primiți numerele din parametrii: a și b
    3. Înmulțiți a și b și returnați rezultatul
*/

// function multiply(a, b){
//     let c = a * b;
//     console.log(c);
// }multiply(1,2);



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Exercitiu 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Vârsta în DogYears
/*
Urmează următoarele instrucțiuni:
    1. Invocați funcția dogYears de mai jos și transmiteți un parametru vârstă
    2. Folosiți valoarea primită pentru a calcula vârsta unui câine in ani (1 an uman este egal cu 7 ani la câini )
    3. Returnează vârsta  calculată
*/

// function dogYears(a){
//     let years = a * 7;
//     console.log(years)
// }dogYears(5);



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Exercitiu 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Alimentator pentru câini - În funcție de
// greutatea și vârsta lor, trebuie să știm
// câte kilograme de alimente să ne
// hrănească câinele în fiecare zi!
// / *
// Utilizați funcția hungryDog și cerințele de hrănire de mai jos pentru a face următoarele:
//   1. Creati funcția hungryDog de mai jos și dați-i un parametru a greutății în kilograme
//   2. De asemenea, treceți la hungryDog un parametru de vârstă în ani (notă: dacă câinele este un cățeluș, vârsta va fi zecimală. De exemplu: trei luni = 3/12 sau .25)
//   3. Faceți calculele corespunzătoare și returnați numărul de kilograme de hrană crudă pentru a hrăni câinele / cățelușul într-o zi
//
//   REȚINEȚI: Acest program ar trebui să gestioneze corect vârstele și greutățile adulților ȘI cățelușilor
//
//   Cerințe de hrănire:
//   Câini adulți mai mare de un an are 5 lbs(Pounds) - 5% din greutatea lor corporală
//      6 - 10 lbs(Pounds) - 4% din greutatea lor corporală
//      11 - 15 lbs(Pounds) - 3% din greutatea lor corporală
//      > 15lbs(Pounds) - 2% din greutatea corporală
//   Puii sub 1 an
//      2 - 4 luni 10% din greutatea corporală
//      4 - 7 luni 5% din greutatea corporală
//      7 - 12 luni 4% din greutatea corporală
//
//   NOTĂ: Dacă se face corect, o greutate de 15 lbs și vârsta de 1 an ar reveni 0,44999999999999996*/
// let mancare;
// function hungryDog(virsta, lbs){
//     if (virsta >= 1){
//         if ( lbs <=10 && lbs >6){
//             mancare = lbs * 4 / 100;
//         } else if ( lbs <15 && lbs>11){
//             mancare = lbs * 3 / 100;
//         }else if ( lbs>=15){
//             mancare = lbs * 2 / 100;
//         }
//         console.log(mancare);
//     } else if (virsta < 1) {
//         if (virsta > 2 / 12 && virsta < 4 / 12) {
//             mancare = lbs * 10 / 100;
//         } else if (virsta > 4 / 12 && virsta < 7) {
//             mancare = lbs * 5 / 100;
//         } else if (virsta > 7 / 12 && virsta <= 11 / 12) {
//             mancare = lbs * 4 / 100;
//         }
//         console.log(mancare);
//     }
//     } (hungryDog(1, 15));



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Exercitiu 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Piatra, hârtie, foarfeca - Să ne jucăm împotriva
// computerului!
// / *
// Creați o variabilă globală care generează aleatoriu
// alegerea computerului
// Utilizați Math.random pentru a determina alegerea
// computerului (Math.random dă un număr aleatoriu
// între 0 și 1)
// SUGESTIE: Deși puteți completa acest lucru doar cu
// condițiile bazate pe string, vă poate ajuta să
// comparați alegerea cu un număr atunci când utilizați
// Math.random ()
// Utilizați funcția de joc de mai jos pentru a face
// următoarele:
//    1. Primiți 2 parametri alegerea utilizatorului și
//    alegerea computerului
//    2. Returnati dacă utilizatorul a câștigat, a pierdut
//    sau a egalat pe baza acestor reguli de joc descrise
//    mai jos - String-urile returnate trebuie să se
//    potrivească exact cu șirurile de mai jos.
//     - câștiga ar trebui să întoarcă "câștigi!"
//     - pierde ar trebui să întoarcă "pierzi!"
//     - Egal ar trebui să returneze "este egalitate"
//
//    REGULI JOCULUI: foarfeca bate hârtia |
//    Hârtia bate Piatra | Piatra bate foarfeca | Sau există o egalitate
//
//    SUGESTIE: Amintiți-vă că ordinea în care trecem
//    în argumentele noastre contează atunci când vine
//    vorba de parametri*/

// let joc = ["piatra", "foarfeca", "hirtie"];
// let aleator = Math.floor(Math.random() * 2);
//
// let utilizator = prompt("Alegeti un element: piatra, foarfeca, hirtie!");
// function game(user, computer = aleator){
//     joc[0] > joc[1] && joc[0] < joc[2];
//     joc[1] > joc[2] && joc[1] < joc[0];
//     joc[2] > joc[0] && joc[2] < joc[1];
//     if(user === aleator){
//         console.log("este egalitate");
//     } else if(user < aleator){
//         console.log("pierzi!");
//     }else if(user > aleator){
//         console.log("câștigi!");
//     }
// } game(utilizator, aleator);



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Exercitiu 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Convertor Km
// // Sarcina 5a - KM in mile
// / *
// Folosind funcția miles de mai jos, faceți următoarele:
//    1. Primeste un numar de kilometri
//    2. Convertiți numărul de kiolmetre primite în mile
//    3. Returnati numărul de mile*/

// function miles(km){
//     return `${km}km in mile = ${km*1.6}`;
// }miles(50);



//Sarcina 5b - Picioare in CM
// / *
// Folosind funcția feet de mai jos faceți următoarele:
//    1. Primeste un numar de cm
//    2. Convertiți numărul de cm în picioare
//    3. Întoarceți numărul de picioare*/
//
// function feet(cm){
//     console.log(cm / 30.10);;
// }feet(50);



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Calculator de note
// / *
// Folosind funcția de grade de mai jos faceți următoarele:
//    1. Primește un scor din 100
//    2. Returnați nota corespunzătoare literei urmând
//    această scală de note:
//     90-100 ar trebui să returneze „ai un A”
//     80-89 ar trebui să returneze „ai un B”
//     70-79 ar trebui să returneze „ai un C”
//     60-69 ar trebui să returneze „ai un D”
//     mai jos ar trebui să returneze „ai un F”*/
// function grade(scor){
//     if (scor<=100 && scor>=90){
//         console.log("ai un A");
//     }  else  if (scor<=89 && scor>=80){
//         console.log("ai un B");
//     } else   if (scor<=79 && scor>=70){
//         console.log("ai un C");
//     }  else  if (scor<=69 && scor>=60){
//         console.log("ai un D");
//     }   else {
//         console.log("ai un F");
//     }
// }grade(50);



/*💪💪💪💪💪💪💪💪💪💪 Puternic 💪💪💪💪💪💪💪💪💪💪*/

//Contor vocal - Câte vocale există?
// / *
// Folosind funcția VowelCounter de mai jos, faceți
// următoarele:
//    1. Primiți un string ca parametru
//    2. Numărați și returnați numărul de vocale din
//    stringul respectiv.
//    Ar trebui să se ia atât  vocale cu majuscule, cât
//    și de vocale minuscule.
//    SUGESTIE - poate fi necesar să studiați Array
//    SUGESTIE - încercați să căutați metoda .includes ()*/

// let vocale = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
// function vowelCounter(text) {
//     let calcul = 0;
//     for (let letter of text.toLowerCase()){
//         if (vocale.includes(letter)){
//             calcul ++;
//         }
//     }
//     console.log(`Textul contine ${calcul} vocale`);
//     return calcul;
// }vowelCounter(prompt("introduceti un cuvint/propozitie pentru a-i fi calculat numarul de vocale: "));


