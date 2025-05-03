const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("idle")
		.setDescription("Pings all idle users"),
	async execute(interaction) {
		// Fetch all members
		const members = await interaction.guild.members.fetch();

		// Filter to get idle non-bot members
		const idleMembers = members.filter(
			(member) => !member.user.bot && member.presence?.status === "idle"
		);

		if (idleMembers.size === 0) {
			return interaction.reply("No idle users found to ping.");
		}

		// Convert to mention format
		const mentions = idleMembers.map((member) => `<@${member.id}>`);

		// Combine mentions into a single message
		let message = mentions.join(" ");

		// Check if message exceeds Discord's character limit
		if (message.length > 2000) {
			message = "Too many idle users to mention in one message!";
		}

		await interaction.reply(message);
	},
};
