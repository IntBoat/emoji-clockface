const clockFace = require('./index');

test("16:30", () => {
    expect(clockFace.toEmoji('16', '30')).toBe("🕟");
});

test("17:15", () => {
    expect(clockFace.toEmoji(17, 15)).toBe("🕠");
});

test("00:00", () => {
    expect(clockFace.toEmoji(0, 0)).toBe("🕛");
});

test("00:25", () => {
    expect(clockFace.toEmoji(0, 25)).toBe("🕧");
});

test("24:25", () => {
    expect(clockFace.toEmoji(24, 25)).toBe("🕧");
});

test("getTime", () => {
    clockFace.getTime();
});

test("getUTCTime", () => {
    expect(clockFace.getUTCTime() === clockFace.getTime()).toBeFalsy();
});

test("toEmoji", () => {
    let now = new Date();
    now.toEmoji();
});

test("toUTCEmoji", () => {
    let now = new Date();
    now.toUTCEmoji();

    expect(now.toUTCEmoji() === now.toEmoji()).toBeFalsy();
});

test("dateToEmoji", () => {
    expect(clockFace.dateToEmoji(new Date("2023-09-17 03:14"))).toBe("🕒");
    expect(clockFace.dateToEmoji(new Date("2023-09-17 03:15"))).toBe("🕞");
});

test("dateToUTCEmoji", () => {
    let d = new Date();
    expect(clockFace.dateToUTCEmoji(d) === clockFace.dateToEmoji(d)).toBeFalsy();
});
