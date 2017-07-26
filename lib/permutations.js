export function* permutations(permutation) {
    const length = permutation.length;
    let c = Array(length).fill(0);
    let i = 1;
    yield permutation;
    while (i < length) {
        if (c[i] < i) {
            let k = (i % 2) ? c[i] : 0;
            let p = permutation[i];
            permutation[i] = permutation[k];
            permutation[k] = p;
            ++c[i];
            i = 1;
            yield permutation;
        }
        else {
            c[i] = 0;
            i++;
        }
    }
}
