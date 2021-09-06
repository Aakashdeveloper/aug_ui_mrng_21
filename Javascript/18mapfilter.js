> map is use to iterate over the array of elements
> it always return the same length of output as input array
> it is use to apply logics like(math, return html)

var a = [4,5,7,9,23,45,11,27,34,54,39,6,18]
a.map((data) => {return data*2})

[8, 10, 14, 18, 46, 90, 22, 54, 68, 108, 78, 12, 36]

var a = [4,5,7,9,23,45,11,27]
a.map((data) => {return `<p>${data*2}</p>`})
["<p>8</p>", "<p>10</p>", "<p>14</p>", "<p>18</p>", "<p>46</p>", "<p>90</p>", "<p>22</p>", "<p>54</p>"]

var a = [4,5,7,9,23,45,11,27,34,54,39,6,18]
a.map((data) => {return data>20})
[false, false, false, false, true, true, false, true, true, true, true, false, false]

>filter is use to filter out the data
> it may or may not return the same length of output as input array
>  it only return those value for which output/condition is true

var a = [4,5,7,9,23,45,11,27,34,54,39,6,18]
a.filter((data) => {return data>20})
[23, 45, 27, 34, 54, 39]

var a = [0,1,2,3,4]
a.map((data) => { return data*2})
[0, 2, 4, 6, 8]

a.filter((data) => { return data*2})
[1, 2, 3, 4]

0*2 = 0 (false)
1*2 = 2 (true)
2*2 = 4 (true)
3*2 = 6 (true)
4*2 = 8 (true)