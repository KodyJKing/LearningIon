var express = require('express')
app = express()

app.use(express.static('www'))

app.listen(3000, function() {
	console.log('Listening on port 3000.')
})