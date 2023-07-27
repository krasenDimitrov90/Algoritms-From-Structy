function ipToNum(ip) {
    let nums = ip.split('.');
    const subtracters = [128, 64, 32, 16, 8, 4, 2, 1];
    const binaries = [];

    for (let i = 0; i < nums.length; i++) {
        let current = Number(nums[i]);
        let binary = [];
        for (let j = 0; j < subtracters.length; j++) {
            let subtracter = subtracters[j];
            if (current >= subtracter) {
                binary[j] = 1;
                current -= subtracter;
            } else {
                binary[j] = 0;
            }
        }
        binaries.push(binary.join(''));
    }

    const merged = binaries.reduce((acc, arr) => {
        acc.push(...arr);
        return acc;
    }, []).join('');

    let decimal = 0;

    for (let i = 0; i < 32; i++) {
        decimal += Number(merged[32 - i - 1]) * (2 ** i);
    }

    return decimal;
}

function numToIp(num) {

    let merged = [];
    for (let i = 0; i < 32; i++) {
        let subtracter = 2 ** (32 - i - 1);
        if (num >= subtracter) {
            num -= subtracter;
            merged[i] = 1;
        } else {
            merged[i] = 0
        }
    }
    const binaries = [];

    for (let i = 0; i < 32; i += 8) {
        binaries.push(merged.slice(i, i + 8));
    }

    let ip = [];

    for (let i = 0; i < binaries.length; i++) {
        let current = binaries[i];
        let decimal = 0;
        for (let i = 0; i < 8; i++) {
            decimal += Number(current[8 - i - 1]) * (2 ** i);
        }
        ip.push(decimal);
    }
    return (ip.join('.'))
}

console.log(ipToNum('192.168.1.1')) //returns 3232235777
console.log(ipToNum('10.0.0.0')) //returns 167772160
console.log(ipToNum('176.16.0.1')) //returns 2953838593

console.log(numToIp(3232235777))//returns '192.168.1.1'
console.log(numToIp(167772160)) //returns '10.0.0.0'
console.log(numToIp(2953838593)) //returns '176.16.0.1'

console.log(numToIp(ipToNum('192.168.1.1'))) //returns '192.168.1.1'
console.log(ipToNum(numToIp(3232235777))) //returns 3232235777

// console.log(ipToNum('192.168.1.1'));
// console.log(numToIp(3232235777));
//original IP address
//     192.168.1.1
//breaks down into 4 binary octets
//     11000000 . 10101000 . 00000001 . 00000001
//which are merged together (unsigned 32-bit binary)
//     11000000101010000000000100000001
//and finally converted to base 10
//     3232235777