function formatNumber(number, template) {
    let numAsStr = number.toString();
    template = template.split('');

    if (template.filter(n => n === '#').length > numAsStr.length) {
        return "Invalid phone number"
    }
    let idx = 0;
    for (let i = 0, l = template.length; i < l; i++) {
        let current = template[i];
        if (current === '#') {
            template[i] = numAsStr[idx++];
        }
    }
    return template.join('');
}

console.log(formatNumber(79052479075, "+# ### ### ## ##")); // "+7 905 247 90 75")
console.log(formatNumber(79052479075, "+# (###) ### ##-##")); // "+7 905 247 90 75"
console.log(formatNumber(81237068908090, "+## ### ### ## ##")); // "+81 237 068 90 80")