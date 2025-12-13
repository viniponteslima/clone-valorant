import "@/styles/reset.css";
import "@/styles/globals.css";

import { bgVideo } from "@/data/bgVideo";
import BackgroundVideo from "$/layout/BackgroundVideo";
import Chat from "$/layout/Chat";
import ConfigButton from "$/layout/ConfigButton";
import Economy from "$/layout/Economy";
import Page from "$/layout/Page";
import SocialBar from "$/layout/SocialBar";

export const metadata = {
	title: "Valorant",
	description: "Clone da interface do jogo Valorant.",
	icons: {
		icon: "/images/favicon.ico",
	},
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="pt-BR">
			<body>
				<Economy />
				<ConfigButton />
				<SocialBar />
				<Chat />

				<Page>
					<BackgroundVideo src={bgVideo} />
					{children}
				</Page>
			</body>
		</html>
	);
}
