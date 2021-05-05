function range(start, end) {
    if (start > end) { return false };
    if (start === end) { return [end] };
    return [start].concat(range(start + 1, end));

    // return (range(start, end - 1).push(end));
}
