let ar = [2, 5, 3, 8, 66, 7, 33, 1];

for (var i = 0; i < ar.length - 1; i++) {

    for (var j = 0; j < ar.length - i - 1; j++) {
        if (ar[j] < ar[j + 1]) {
            let temp = ar[j];
            ar[j] = ar[j + 1];
            ar[j + 1] = temp;
        }

    }

}
console.log(ar);

