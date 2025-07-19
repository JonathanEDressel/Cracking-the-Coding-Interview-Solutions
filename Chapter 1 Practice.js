
//Problem 1.1 - Is Unique
var uniqueCharacters = function (input) {
    var track = {};
    for(var i = 0; i < input.length; i++) {
        if(track[input[i]])
            return false;
        track[input[i]] = i;
    }
    return true;
};
// console.log('asbdsfsd - ', uniqueCharacters('asbdsfsd'))
// console.log('jonathed - ', uniqueCharacters('jonathed'))
// console.log('im uniq - ', uniqueCharacters('im uniq'))


//Problem 1.2 - Check Permutation
var checkPermutation = function(str1, str2) {
    if(str1.length !== str2.length)
        return false;
    var track = {};
    
    for(var i = 0; i < str1.length; i++) {
        var s = str1[i];
        if(s in track)
            track[s] += 1;
        else
            track[s] = 1;
    }

    for(var i = 0; i < str2.length; i++) {
        var s = str2[i];
        if(!(s in track) || track[s] <= 0)
            return false;
        track[s] -= 1;
    }
    return true;
};
// console.log('checkPermutation(listen, netsil) - ', checkPermutation('listen', 'netsil'))
// console.log('checkPermutation(bag, gap) - ', checkPermutation('bag', 'gap'))
// console.log('checkPermutation(bag, gab) - ', checkPermutation('bag', 'gab'))
// console.log('checkPermutation(jon, ben) - ', checkPermutation('jon', 'ben'))

//Probelm 1.3 - URLify

var setChartAt = function(str, i, c) {
    if (i < 0 || i >= str.length) 
        return str;
    return str.substring(0, i) + c + str.substring(i + 1);
}

var URLify = function(s) {
    var input = s;  
    var L = 0, R = input.length - 1;
    for (L = input.length - 1; L >= 0; L--) {
        if(input[L] !== ' ') {
            break;
        }
    }

    while (R >= 0) {
        if (input[L] !== ' ') {
            setChartAt(input, R, input[L]);
            // input[R] = input[L];
            R--; L--;
        }
        else {
            setChartAt(input, R, '0');
            // input[R] = '0'; 
            R--;
            setChartAt(input, R, '2');
            // input[R] = '2';
            R--;
            setChartAt(input, R, '%');
            // input[R] = '%'; 
            R--;
            L--;
        }
    }
    return input;
};
//'Mr John Smith    '
console.log('URLify(My John Smith   ) -', URLify('Mr John Smith    ') + '/') //=> Mr%20John%20Smith
// console.log('URLify(Jane Doe) -', URLify('Jane Doe'))
// console.log('URLify(   ) -', URLify('   '))
// console.log('URLify( Jane) -', URLify(' Jane'))
// console.log('URLify(Jane ) -', URLify('Jane '))

//Problem 1.4 - Palindrome Permutation
var palPermutation = function(s) {

    //break down each string
        //determine if each is a palindrome
};

//Problem 1.5




//Problem 1.6

//Problem 1.7

//Problem 1.8

//Problem 1.9