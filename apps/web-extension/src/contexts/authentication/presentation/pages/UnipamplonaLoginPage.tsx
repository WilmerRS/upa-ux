import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import Notifications from "../components/Notifications";

const UnipamplonaLoginPage = ({
  documentFrame,
}: {
  documentFrame: Document;
}) => {
  return (
    <div className="h-screen">
      <div className="grid md:grid-cols-2 gap-4 h-[93%]">
        <LoginForm documentFrame={documentFrame} />
        <Notifications />
      </div>
      <div className="h-[7%]">
        <Footer />
      </div>
    </div>
  );
};

export default UnipamplonaLoginPage;
