import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import Footer from "../static/Footer";
import WhatsAppButton from "../../../../components/WhatsappButton";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default HomeLayout;
