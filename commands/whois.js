/*

	This code was written by Scvrlae (@datonescvrlae) and is his property. Unauthorized use and/or
	distribution of this script is strongly prohibited! PLEASE ask first!

	  ██████  ▄████▄ ██▒   █▓ ██▀███   ██▓    ▄▄▄      ▓█████ 
	▒██    ▒ ▒██▀ ▀█▓██░   █▒▓██ ▒ ██▒▓██▒   ▒████▄    ▓█   ▀ 
	░ ▓██▄   ▒▓█    ▄▓██  █▒░▓██ ░▄█ ▒▒██░   ▒██  ▀█▄  ▒███   
	  ▒   ██▒▒▓▓▄ ▄██▒▒██ █░░▒██▀▀█▄  ▒██░   ░██▄▄▄▄██ ▒▓█  ▄ 
	▒██████▒▒▒ ▓███▀ ░ ▒▀█░  ░██▓ ▒██▒░██████▒▓█   ▓██▒░▒████▒
	
	This file is part of the Amniva Manager Discord bot owned and maintained by Scvrlae (@datonescvrlae).
	It is private and not available for use under any circumstances!

*/

const {SlashCommandBuilder} = require("discord.js") // Class used to create slash commands

module.exports = {
	data: new SlashCommandBuilder() // Set data related to how the command will register
		.setName("whois")
		.setDescription("No description yet.")

	// The Discord user we wanna fetch relevant Roblox data of
	// We'll use the UserId of this person to get the connected Roblox UserId
	.addUserOption(option => option
		.setName("user")
		.setDescription("The user to fetch Roblox data from.")

		.setRequired(true)
	),

	// This is the function that will be called when the command is ran
	async execute(interaction) {
		const user = interaction.options.getUser("user")
	}
}
