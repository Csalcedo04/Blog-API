const d= new Date();
const nowDate =`${d.getUTCFullYear()}-${d.getUTCMonth()+1}-${d.getUTCDate()}T${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCMilliseconds()}Z`;
export {nowDate};