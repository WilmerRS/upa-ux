import LoadingPage from "./pages/LoadingPage";
import UnipamplonaLoginPage from "./pages/UnipamplonaLoginPage";

import "./App.css";

export type AppPages = "login" | "loading";

const App = ({
  documentFrame,
  page,
}: {
  documentFrame: Document;
  page: AppPages;
}) => {
  const pages: Record<AppPages, JSX.Element> = {
    login: <UnipamplonaLoginPage documentFrame={documentFrame} />,
    loading: <LoadingPage />,
  };

  return pages[page] || pages.loading;
};

export default App;
