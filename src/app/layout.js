import "@/styles/reset.css";
import "@/styles/globals.css";

import SocialBar from '@/components/layout/SocialBar';
import Economy from '@/components/layout/Economy';
import ConfigButton from '@/components/layout/ConfigButton';
import Chat from '@/components/layout/Chat';
import TurnHorizontal from '@/components/layout/TurnHorizontal';
import Page from '@/components/layout/Page';
import BackgroundVideo from '@/components/layout/BackgroundVideo';

export const metadata = {
  title: "Valorant",
  description: "Clone da interface do jogo Valorant.",
  icons: {
    icon: '/images/favicon.ico'
  }
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
          <BackgroundVideo src={'/videos/EP9A3_910_Homescreen.mp4'} />
          {children}
        </Page>

      </body>
    </html>
  );
}
