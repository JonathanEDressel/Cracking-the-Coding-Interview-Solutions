
// Problem 1.1 - Is Unique
// Space Complexity - O(1)
// Time Complexity - O(n)... maybe O(1)
    //You could make the case it's O(1) since it'll never check more than 128 characters
var uniqueCharacters = function (input) {
    //assume there aren't more than 128 characters
    if (input.length > 128)
        return false;
    var track = {};
    for(var i = 0; i < input.length; i++) {
        if(input[i] in track)
            return false;
        track[input[i]] = 1;
    }
    return true;
};

// Space Complexity - O(1)
// Time Complexity - O(n log n + n) => O(n log n);
//assume we cannot use additional data structures
var uniqueCharacters2 = function (input) {
    input = input.split('').sort().join('');
    for(var i = 0; i < input.length - 1; i++) {
        var j = i + 1;
        if(input[i] === input[j])
            return false;
    }
    return true;
}
// console.log('asbdsfsd - ', uniqueCharacters2('asbdsfsd'))
// console.log('jonathed - ', uniqueCharacters2('jonathed'))
// console.log('im uniq - ', uniqueCharacters2('im uniq'))

// Problem 1.2 - Check Permutation
// Space Complexity - O(1)
// Time Complexity - O(n + m) => O(n)
var checkPermutation = function(str1, str2) {
    if(str1.length !== str2.length)
        return false;
    var track = {};
    for(var i = 0; i < str1.length; i++) {
        track[str1[i]]++;
    }
    for(var i = 0; i < str2.length; i++) {
        var s = str2[i];
        if(!(s in track) || track[s] <= 0)
            return false;
        track[s]--;
    }
    return true;
};

// Space Complexity - O(1)
// Time Complexity - O(n log n + m log m) => O(n log n)
//cannot use additional data structures
var checkPermutation2 = function(str1, str2) {
    if (str1.length !== str2.length)
        return false;
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    return str1 === str2;
}
// console.log('checkPermutation(listen, netsil) - ', checkPermutation('listen', 'netsil'))
// console.log('checkPermutation(bag, gap) - ', checkPermutation('bag', 'gap'))
// console.log('checkPermutation(bag, gab) - ', checkPermutation('bag', 'gab'))
// console.log('checkPermutation(jon, ben) - ', checkPermutation2('jon', 'ben'))

//Probelm 1.3 - URLify
// Space Compelxity - ??
// Time Complexity - O(n^2)
var setChartAt = function(str, i, c) {
    if (i < 0 || i >= str.length) 
        return str;
    var s = str.split('');
    s[i] = c;
    return s.join('');
}

var URLify = function(s) {
    var input = s;  
    var L = 0, R = input.length - 1;
    for (L = input.length - 1; L >= 0; L--) {
        if(input[L] !== ' ') {
            break;
        }
    }
    while (R >= 0) { //O(n)
        if (input[L] !== ' ') {
            input = setChartAt(input, R, input[L]); //O(m)
            R--; L--;
        }
        else {
            input = setChartAt(input, R, '0');
            input = setChartAt(input, R-1, '2');
            input = setChartAt(input, R-2, '%');
            R -= 3;
            L--;
        }
    }
    return input;
};
// console.log('URLify(My John Smith   ) -', URLify('Mr John Smith    ') + '/') //=> Mr%20John%20Smith
// console.log('URLify(Jane Doe) -', URLify('Jane Doe  '))
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