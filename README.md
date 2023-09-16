# emoji-clockface

## require the package:

```javascript
let clockface = require('emoji-clockface');
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