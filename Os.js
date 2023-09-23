const os = require("os");
console.log(os.arch());
const free = os.freemem();
console.log(free);
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.homedir());