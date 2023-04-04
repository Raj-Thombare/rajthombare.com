import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({children, className}) {
  return (
    <>
        <Navbar />
          <div className={className}>
            {children}
          </div>
        <Footer />
    </>
  );
}

