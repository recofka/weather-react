export function Unix_timestamp(day) {
    var dt = new Date(day * 1000);
    return dt.toUTCString().slice(0, 11);
}