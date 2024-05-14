import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

export default function Layout({ children }) {
  const style = { minHeight: "700px" };

  return (
    <>
      <Header />
      <div style={style}>{children}</div>
      <Footer />
    </>
  );
}
