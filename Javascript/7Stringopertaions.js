var city = "LonDOn"

city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"
city[0]
"L"
city[1]
"o"
city.length
6
city[city.length-1]
"n"

var name = "  Nikita  "
name.length
10
name[name.length-1]
" "
name.trim()
"Nikita"
var out = name.trim()
out[out.length-1]
"a"

var name = "  Nikita .  "
name.trim()
"Nikita ."

var a = "John"
var b = "john"

a.toUpperCase() == b.toUpperCase()
true

var city = "amStERdaM"  ('Amsterdam')

var city = 'amStERdaM'
undefined
city.charAt(0)
"a"
city.charAt(1)
"m"
city.charAt(1).toUpperCase()
"M"
city.charAt(0).toUpperCase()
"A"

var city = "amStERdaM"
city.slice(1)
"mStERdaM"
city.slice(2)
"StERdaM"
city.slice(2,5)
"StE"
city.slice(2,6)
"StER"
city.slice(-1)
"M"
city.slice(-2)
"aM"
city.slice(0,-1)
"amStERda"
city.slice(0,-2)
"amStERd"


var city = "amStERdaM"
undefined
city.charAt(0)
"a"
city.charAt(0).toUpperCase()
"A"
city.slice(1)
"mStERdaM"
city.slice(1).toLowerCase()
"msterdam"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Amsterdam"

var city = "paRiS"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Paris"

var a = "i am learning javascript"
a.replace('javascript','js')

var a = "i am learning javascript"
a.replace('javascript','js')
"i am learning js"
var a = "javascript i am learning javascript"
undefined
a.replace('javascript','js')
"js i am learning javascript"
a.replace(/javascript/g,'js')
"js i am learning js"
var name = "  Nikita .  "
undefined
name.replace(/ /g,'')
"Nikita."
name.replace(/ /g,'-')
"--Nikita-.--"


const url = "https://github.com/Aakashdeveloper/aug_node_mrng_21"
undefined
url.split('/')
(5) ["https:", "", "github.com", "Aakashdeveloper", "aug_node_mrng_21"]
url.split('/')[0]
"https:"
var out = url.split('/')
undefined
out[out.length-1]
"aug_node_mrng_21"

var a = "javascript i am learning javascript"
undefined
a.split(' ')
(5) ["javascript", "i", "am", "learning", "javascript"]

var a = "javascript"
a.split('')
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]

var b = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
b.toString()
"j,a,v,a,s,c,r,i,p,t"
b.toString().replace(/,/g,'')
"javascript"