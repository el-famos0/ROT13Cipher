// Test made using EyeJS - https://eye.js.org

const path = require('path').normalize(__testDir + "/../JS/")

const rot13 = require(path + "translate.js")



eye.test("ROT13", "node",
	$ => $(rot13("attack")).Equal("nggnpx")
)