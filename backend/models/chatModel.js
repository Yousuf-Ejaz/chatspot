const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
	{
		isGroupChat: {
			type: Boolean,
			default: false,
		},
		users: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
				required: true,
			},
		],
		chatName: {
			type: String,
			trim: true,
			required: true,
		},
		latestMessage: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Message",
		},
		groupAdmin: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
