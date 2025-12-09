import "@/styles/reset.css";
import "@/styles/globals.css";

import BackgroundVideo from "@/components/layout/BackgroundVideo";
import Chat from "@/components/layout/Chat";
import ConfigButton from "@/components/layout/ConfigButton";
import Economy from "@/components/layout/Economy";
import Page from "@/components/layout/Page";
import SocialBar from "@/components/layout/SocialBar";
import TurnHorizontal from "@/components/layout/TurnHorizontal";

export const metadata = {
	title: "Valorant",
	description: "Clone da interface do jogo Valorant.",
	icons: {
		icon: "/images/favicon.ico",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="pt-br">
			<body>
				<Economy />
				<ConfigButton />
				<SocialBar />
				<Chat />
				<TurnHorizontal />

				<Page>
					<BackgroundVideo src={"/videos/bgVideo.mp4"} />
					{children}
				</Page>
			</body>
		</html>
	);
}
