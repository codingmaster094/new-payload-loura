import Header from "../(frontend)/header/page";
import "../../../public/css/globals.css";
import Footer from "../(frontend)/footer/page";


export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
