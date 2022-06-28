import { SessionProvider } from "next-auth/react";
import Layout from "../components/layout";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CustomLayout from "../components/customLayout";
import { Provider } from "react-redux";
import { store,wrapper } from "../redux/store";

function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  if (Component.getLayout) {
    return Component.getLayout(
      <SessionProvider session={session}>
        <Provider store={store}>
          <CustomLayout>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              draggable
              pauseOnHover
            />
            <Component {...pageProps} />
          </CustomLayout>
        </Provider>
      </SessionProvider>
    );
  }

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            draggable
            pauseOnHover
          />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default wrapper.withRedux(App);