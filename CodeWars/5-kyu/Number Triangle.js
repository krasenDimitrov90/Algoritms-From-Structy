// NOT COMPLETED
// The requirement is to write a code with less then 101 charachters 
// and for digets to use only 1 and 0

// function p() {
//     let f='',s='',str=[];
//     for(let i=0;i<=9;i++){
//         f+=i;
//         s=f.split('').reverse().filter(x=>x!=i).join('');
//         str[i]=str[(9*2)-i]= f + s;
//     }
//     return str.join('\n');
// }

function p(f='',str=[],i=0) {
    for(;i<=9;i++){
        f+=i;
        str[i]=str[(9*2)-i]=f+f.split('').reverse().filter(x=>x!=i).join('');
    }
    return str.join('\n');
}


console.log(p());