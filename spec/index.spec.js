/*jshint -W097 */
'use strict';
import "jasmine";
import * as clockFace from '../index.js';

it('16:30', () => {
    expect(clockFace.toEmoji('16', '30')).toBe('🕟');
});

it('17:15', () => {
    expect(clockFace.toEmoji(17, 15)).toBe('🕠');
});

it('00:00', () => {
    expect(clockFace.toEmoji(0, 0)).toBe('🕛');
});

it('00:25', () => {
    expect(clockFace.toEmoji(0, 25)).toBe('🕧');
});

it('\'00:25\'', () => {
    expect(clockFace.toEmoji('00', '25')).toBe('🕧');
});

it('24:25', () => {
    expect(clockFace.toEmoji(24, 25)).toBe('🕧');
});

it('getTime', () => {
    clockFace.getTime();
});

it('getUTCTime', () => {
    let now = new Date();

    if (now.getHours() === now.getUTCHours()) {
        expect(clockFace.getUTCTime() === clockFace.getTime()).toBe(true);
    } else {
        expect(clockFace.getUTCTime() === clockFace.getTime()).toBe(false);
    }
});

it('dateToEmoji', () => {
    expect(clockFace.dateToEmoji(new Date('2023-09-17 03:14'))).toBe('🕒');
    expect(clockFace.dateToEmoji(new Date('2023-09-17 03:15'))).toBe('🕞');
});

it('dateToUTCEmoji', () => {
    let d = new Date();
    if (d.getHours() === d.getUTCHours()) {
        expect(clockFace.dateToUTCEmoji(d) === clockFace.dateToEmoji(d)).toBe(true);
    } else {
        expect(clockFace.dateToUTCEmoji(d) === clockFace.dateToEmoji(d)).toBe(false);
    }
});
