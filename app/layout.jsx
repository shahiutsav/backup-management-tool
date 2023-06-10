import "@styles/globals.css";
import Sidebar from "@components/Sidebar";
import { Poppins } from "next/font/google";
import Navbar from "@components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Backup Manager",
  description: "Manage all your file and database backups in one place.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className={`flex ${poppins.className} text-[#666666]`}>
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
