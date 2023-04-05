import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = ({children, className}) => {
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

export default Layout;