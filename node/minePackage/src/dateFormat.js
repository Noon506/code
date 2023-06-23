//格式化时间
function dateFormate(dateStr){
  const dt = dateStr;

  const y = dt.getFullYear();
  const m =  padZero(dt.getMonth() + 1);
  const d =  padZero(dt.getDate());

  const hh =  padZero(dt.getHours());
  const mm =  padZero(dt.getMinutes());
  const ss =  padZero(dt.getSeconds());

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}
//补零
function padZero(n){return n>9?n:'0'+n;};

module.exports = {dateFormate};