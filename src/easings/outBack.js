function outBack(n) {
    const s = 1.70158;

    return --n * n * ((s + 1) * n + s) + 1;
}

export default outBack;
