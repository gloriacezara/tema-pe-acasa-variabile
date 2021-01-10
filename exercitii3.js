// Nu modificați  numele funcțiilor

const getBiggest = (x, y) => {
    // x și y sunt numere întregi. Returnează numărul întreg mai mare
    // dacă sunt aceleași returnează fie unul
    return Math.max(x,y)
    }
    getBiggest(5, 6);

const greeting = (language) => {
// returnează o felicitare pentru trei limbi diferite:    // language: 'German' -> 'Guten Tag!'
    // limba: 'Spanish' -> 'Hola!'
    // limba: 'Chinese' -> 'Ni Hao!'
    // dacă limba este nedefinită, return 'Hello!'
    if (language === "German"){
        return "Guten Tag!";
    } else if (language === "Spanish"){
        return "Hola!";
    } else if (language === "Chinese"){
        return "Ni Hao!"
    } else {
        return "Hello!"
    }
}
greeting ("German");

const isTenOrFive = (num) => {
    // returnează true dacă num este 10 sau 5
    // altfel returnează false
    return num === 10 || num === 5;
}
isTenOrFive(50);

const isInRange = (num) => {
    // returnează adevărat dacă num este mai mic de 50 și mai mare de 20
    return num > 20 && num < 50;
    }
    isInRange(35);

const isInteger = (num) => {
    // returnează adevărat dacă num este un număr întreg
    // 0,8 -> fals
    // 1 -> adevărat
    // -10 -> adevărat
    // altfel returnează false
    // sugestie: puteți rezolva acest lucru folosind Math.floor
    };

const fizzBuzz = (num) => {
    // returnează adevărat dacă num este un număr întreg
    // 0,8 -> fals
    // 1 -> adevărat
    // -10 -> adevărat
    // altfel returnează false
    // sugestie: puteți rezolva acest lucru folosind Math.floor
};

const isPrime = (num) => {
    // returnează adevărat dacă num este prim.
    // altfel returnează false
    // sugestie: un număr prim este doar divizibil în mod egal prin el însuși și 1
    // sugestie2: puteți rezolva acest lucru folosind un ciclu for
    // notă: 0 și 1 NU sunt considerate numere prime
    };

const returnFirst = (arr) => {
    // returnează primul element din array
};

const returnLast = (arr) => {
    // returnează ultimul element din array
};

const getArrayLength = (arr) => {
    // returnează lungimea din array
};

const incrementByOne = (arr) => {
    // arr este un array de numere întregi
    // măriți fiecare număr întreg cu unu
    // returnează array-ul
};

const addItemToArray = (arr, item) => {
    // adăugați elementul la sfârșitul array-ului
    // returnează matricea
};

const addItemToFront = (arr, item) => {
    // adăugați elementul în partea din față a array-ului
    // returnează array-ului
    // sugestie: utilizați metoda array .unshift
};

const wordsToSentence = (words) => {
    // words este un array de string-uri
    // returnează un string care conține toate cuvintele concatenate împreună
    // spațiile trebuie să fie între fiecare cuvânt
    // exemplu: ['Hello', 'world!'] -> 'Hello world!'
    };

const contains = (arr, item) => {
    // verificați dacă item se află în interiorul arr
    // returnează true dacă este,
    // în caz contrar returnează false
    };

const addNumbers = (numbers) => {
    // numbers este un array de numere întregi.
    // aduna toate numerele întregi și returnează valoarea
    };

const averageTestScore = (testScores) => {
    // testScores este un array.
    // mergi prin  testScores și
    // calculează media.
    // returnează media
};

const largestNumber = (numbers) => {
    // numbers este un array de numere întregi
    // returnează cel mai mare număr întreg
};
