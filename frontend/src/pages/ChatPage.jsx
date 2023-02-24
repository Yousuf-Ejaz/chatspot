import axios from "axios";
import { useEffect, useState } from "react";

function ChatPage() {
	const [data, setData] = useState([]);

	const loadData = async () => {
		const chats = await axios.get("/api/chat");
		setData(chats.data);
	};
	useEffect(() => {
		loadData();
	}, []);

	return (
		<div>
			{" "}
			{data.map((e) => (
				<h4 key={e._id}>{e.chatName}</h4>
			))}
		</div>
	);
}
export default ChatPage;
