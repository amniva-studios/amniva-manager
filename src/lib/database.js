/*

	This code was written by Scvrlae (@datonescvrlae) and is his property. Unauthorized use and/or
	distribution of this script is strongly prohibited! PLEASE ask first!

	  ██████  ▄████▄ ██▒   █▓ ██▀███   ██▓    ▄▄▄      ▓█████ 
	▒██    ▒ ▒██▀ ▀█▓██░   █▒▓██ ▒ ██▒▓██▒   ▒████▄    ▓█   ▀ 
	░ ▓██▄   ▒▓█    ▄▓██  █▒░▓██ ░▄█ ▒▒██░   ▒██  ▀█▄  ▒███   
	  ▒   ██▒▒▓▓▄ ▄██▒▒██ █░░▒██▀▀█▄  ▒██░   ░██▄▄▄▄██ ▒▓█  ▄ 
	▒██████▒▒▒ ▓███▀ ░ ▒▀█░  ░██▓ ▒██▒░██████▒▓█   ▓██▒░▒████▒
	
	This file is part of the Amniva Manager Discord bot owned and maintained by Scvrlae (@datonescvrlae).
	It is a public resource that can be used for learning!

*/

const {Hostname, User, Password, Name} = require("../json/secret/db-creds.json") // Credentials for database connection
const MySQL = require("mysql") // Module for interacting with SQL databases

module.exports = {
	// This function allows the bot to send a query to its database
	// It abstracts some annoying connection code and makes sure only SELECT and INSERT queries are allowed
	async query(queryStr) {
		const creds = {host: Hostname, user: User, password: Password, database: Name}
		const connection = MySQL.createConnection(creds) // Create a new connections with the database

		
	}
}
