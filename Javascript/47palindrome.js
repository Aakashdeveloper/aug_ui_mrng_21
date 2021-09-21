1221
12321
123421

var palindrome =(data) => {
    var rem,temp, final = 0;
    temp = data;
    while(data>0){
        rem = data%10;
        data = parseInt(data/10)
        final = final*10+rem
    }
    if(final == temp){
        console.log(`Number ${temp} is palindrome`)
    }else{
        console.log(`Number ${temp} is Not a palindrome`)
    }
}

palindrome(1221)
VM239:10 Number 1221 is palindrome
undefined
palindrome(12221)
VM239:10 Number 12221 is palindrome
undefined
palindrome(12321)
VM239:10 Number 12321 is palindrome
undefined
palindrome(123421)
VM239:12 Number 123421 is Not a palindrome