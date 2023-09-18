/*jshint -W097 */
'use strict';
// Source: https://codegolf.stackexchange.com/questions/42289/return-the-clock-emoji-closest-to-the-current-time-when-run
function clockFace(h, m) {
    let d = ~~(h % 12 * 2 + m / 30 + 0.5);
    d += d < 2 ? 24 : 0;
    return String.fromCharCode(55357, 56655 + (d + d % 2 * 23) / 2);
}

function timeNow(utc) {
    let d = new Date();
    return clockFace(utc ? d.getUTCHours() : d.getHours(), utc ? d.getUTCMinutes() : d.getMinutes());
}

function getUTCTime() {
    return timeNow(true);
}

function dateToEmoji(date) {
    return clockFace(date.getHours(), date.getMinutes());
}

function dateToUTCEmoji(date) {
    return clockFace(date.getUTCHours(), date.getUTCMinutes());
}

export {
    clockFace as toEmoji,
    clockFace,
    timeNow as getTime,
    getUTCTime,
    dateToEmoji,
    dateToUTCEmoji,
};