const fs = require('fs')

fs.writeFileSync("notes.txt", 'This file was reated by Node.js')

fs.appendFileSync("notes.txt", 'Other line from Node.js')