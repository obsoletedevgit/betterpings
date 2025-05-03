const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('online')
		.setDescription('Pings all online users'),
	async execute(interaction) {
		// Fetch all members
		const members = await interaction.guild.members.fetch();

		// Filter to get online non-bot members
		const onlineMembers = members.filter(
			(member) =>
				!member.user.bot &&
				member.presence?.status === 'online'
		);

		if (onlineMembers.size === 0) {
			return interaction.reply('No online users found to ping.');
		}

		// Convert to mention format
		const mentions = onlineMembers.map((member) => `<@${member.id}>`);

		// Combine mentions into a single message
		let message = mentions.join(' ');

		// Check if message is too long
		if (message.length > 2000) {
			message = 'Too many online users to mention in one message!';
		}

		await interaction.reply(message);
	},
};
