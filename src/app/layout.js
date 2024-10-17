import "@/styles/reset.css";
import "@/styles/globals.css";

export const metadata = {
  title: "Valorant",
  description: "Clone da interface do jogo Valorant.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
