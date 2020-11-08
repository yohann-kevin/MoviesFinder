export function dateFormat(data) {
    let lastDate = new Date(data);
    let newDate = new Intl.DateTimeFormat('fr').format(lastDate);
    return newDate;
}