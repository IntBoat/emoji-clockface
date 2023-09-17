/*jshint -W097 */
'use strict';
const clockFace = require('./index');
const {test, expect} = require('@jest/globals');

test('16:30', () => {
    expect(clockFace.toEmoji('16', '30')).toBe('🕟');
});

test('17:15', () => {
    expect(clockFace.toEmoji(17, 15)).toBe('🕠');
});

test('00:00', () => {
    expect(clockFace.toEmoji(0, 0)).toBe('🕛');
});

test('00:25', () => {
    expect(clockFace.toEmoji(0, 25)).toBe('🕧');
});

test('\'00:25\'', () => {
    expect(clockFace.toEmoji('00', '25')).toBe('🕧');
});

test('24:25', () => {
    expect(clockFace.toEmoji(24, 25)).toBe('🕧');
});

test('getTime', () => {
    clockFace.getTime();
});

test('getUTCTime', () => {
    let now = new Date();
    now.toUTCEmoji();

    if (now.getHours() === now.getUTCHours()) {
        expect(clockFace.getUTCTime() === clockFace.getTime()).toBe(true);
    } else {
        expect(clockFace.getUTCTime() === clockFace.getTime()).toBe(false);
    }
});

test('toEmoji', () => {
    let now = new Date();
    now.toEmoji();
});

test('toUTCEmoji', () => {
    let now = new Date();
    now.toUTCEmoji();

    if (now.getHours() === now.getUTCHours()) {
        expect(now.toUTCEmoji() === now.toEmoji()).toBe(true);
    } else {
        expect(now.toUTCEmoji() === now.toEmoji()).toBe(false);
    }
});

test('dateToEmoji', () => {
    expect(clockFace.dateToEmoji(new Date('2023-09-17 03:14'))).toBe('🕒');
    expect(clockFace.dateToEmoji(new Date('2023-09-17 03:15'))).toBe('🕞');
});

test('dateToUTCEmoji', () => {
    let d = new Date();
    if (d.getHours() === d.getUTCHours()) {
        expect(clockFace.dateToUTCEmoji(d) === clockFace.dateToEmoji(d)).toBe(true);
    } else {
        expect(clockFace.dateToUTCEmoji(d) === clockFace.dateToEmoji(d)).toBe(false);
    }
});
