localStorage
> presistant storage
> wrt to browser
> we habe to remove manually

localStorage.setItem('tokenName','76576vyt65e45edc56')
localStorage.getItem('tokenName')
"76576vyt65e45edc56"
localStorage.removeItem('tokenName')

sessionStorage
> temp storage
> save wrt to tab

sessionStorage.setItem('tokenName','76576vyt65e45edc56')
sessionStorage.getItem('tokenName')
"76576vyt65e45edc56"
sessionStorage.removeItem('tokenName')

cookies
> save wrt to website
> expireIn time

document.cookie
document.cookie="city=delhi; expires=Fri, 27 Aug 2021 14:00:00 UTC"