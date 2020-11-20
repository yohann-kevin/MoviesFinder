export function dateFormat(data,language) {
    let lastDate = new Date(data);
    let newDate = new Intl.DateTimeFormat(language).format(lastDate);
    return newDate;
}