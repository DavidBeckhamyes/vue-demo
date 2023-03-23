// 定义格式化时间的方法
function dateFormat(dtStr) {
    const dt = new Date(dtStr);

    const y = dt.getFullYear();
    const m = paddingZero(dt.getMonth() + 1);
    const d = paddingZero(dt.getDate());

    const hh = paddingZero(dt.getHours());
    const mm = paddingZero(dt.getMinutes());
    const ss = paddingZero(dt.getSeconds());

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

// 定义补零的函数
function paddingZero(n) {
    return n > 9 ? n : "0" + n;
}

module.exports = {
    dateFormat
}