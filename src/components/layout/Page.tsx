import styles from "./Page.module.css";

export default function Page({ children }: { children: React.ReactNode }) {
	return <section className={styles.page}>{children}</section>;
}
