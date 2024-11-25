let a = [8, 4, 6, 12, 9, 1, 3]

for (elem = 1; elem < a.length; elem++) {

    for (let i = elem; i >0; i--) {
        if (a[i] < a[i - 1]) {
            let temp = a[i];
            a[i] = a[i - 1];
            a[i - 1] = temp;
        }
    }
}
console.log(a)