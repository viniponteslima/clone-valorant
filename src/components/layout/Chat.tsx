import styles from "./Chat.module.css";

export default function Chat() {
	return (
		<div className={styles.chat}>
			<label htmlFor="chat">
				<span>Grupo:</span> <input type="text" id="chat" autoComplete="off" />
			</label>
			{/* <label htmlFor="anchorChat">
				<button type="button" id="anchorChat"></button>
			</label> */}
		</div>
	);
}
