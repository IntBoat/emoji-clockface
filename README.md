# emoji-clockface
Return Emoji clock-face, with UTC time support.

This project is a JavaScript module that exports several functions and prototype methods related to clock emojis.

The `clockFace` function takes hours and minutes as arguments and returns the corresponding clock emoji.

The `timeNow` function returns the current time as a clock emoji.

The `toEmoji` and `toUTCEmoji` prototype methods for the `Date` object return the time as a clock emoji in local and UTC time, respectively.

The `dateToEmoji` and `dateToUTCEmoji` functions take a `Date` object as an argument and return the corresponding clock emoji in local and UTC time, respectively.

## Require the package:

```javascript
let clockFace = require('emoji-clockface');
```

## Available functions:

```javascript
clockFace.toEmoji('16', '30'); // returns '🕟'
clockFace.toEmoji(17, 15); // returns '🕠'
clockFace.toEmoji(0, 0); // returns '🕛'
clockFace.toEmoji(0, 25); // returns '🕧'
clockFace.toEmoji(24, 25); // returns '🕧'

let now = new Date();
clockFace.dateToEmoji(now); // return current clockface with local time
clockFace.dateToUTCEmoji(now); // return current clockface with UTC time

now.toEmoji(); // return current clockface with local time
now.toUTCEmoji(); // return current clockface with UTC time
```