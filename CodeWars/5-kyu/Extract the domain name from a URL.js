function domainName(url) {
    url = url.replace(/(http(s*):\/\/)*(w*\.*)/, '');
    return url.slice(0,url.indexOf('.'))
}

console.log(domainName("http://github.com/carbonfive/raygun")); // "github"
console.log(domainName("http://www.zombie-bites.com")); // "zombie-bites"
console.log(domainName("https://www.cnet.com")); // "cnet"
console.log(domainName("www.cnet.com")); // "cnet"