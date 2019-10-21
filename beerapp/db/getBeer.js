const axios = require('axios')
const fs = require('fs')
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors());

let baseURL = `https://api.punkapi.com/v2/`
let beerCount = 20

let ids = []


for(let i = 0; i < beerCount; i++) {
	let rand = Math.floor(Math.random() * 10000)
	ids.push(rand)
}


let calls = ids.map(id => `${baseURL}${id}`)
.map(url => axios.get(url))


Promise.all(calls)
.then(success => {
	let collectedData = success.map(res => res.data)
	let stringified = JSON.stringify(collectedData)
	fs.writeFile(__dirname + '/beerdata.json', stringified, 'utf8', (err) => {
		if(err) {
			console.error(err)
		}
		else {
			console.log(`successfully wrote ${collectedData.length} records to db/beerdata.json`)
		}
	}) 
})
.catch(err => {
	console.error(err)
	console.error('there was probably an issue with the rate limit, try again in 10 seconds or check the error messages above.')
})