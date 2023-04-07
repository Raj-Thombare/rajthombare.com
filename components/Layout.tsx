import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  children: JSX.Element;
  className?: string;
};

const Layout: React.FC<Props> = ({ children, className }) => {
  return (
    <>
      <Navbar />
        <div className={className}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
