import { Roboto } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu"
import Footer from "./components/footer"
import { TaskProvider } from "./components/taskContext";

const roboto = Roboto({
  weight: '400',
  subsets: ["latin"],
});

export const metadata = {
  title: "AB-NET",
  description: "une société de nettoyage, sur le secteur des bouches du rhones",
};


export default function RootLayout({ children }) {

  return (
    <html lang="fr">
      <body
        className={`${roboto.className} antialiased dark:bg-white dark:text-black`}
      >
        <Menu />
        <TaskProvider>{children}</TaskProvider>
        <Footer />
      </body>
    </html>
  );
}
