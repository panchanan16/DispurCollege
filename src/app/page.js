import Header from "@/components/main/header";
import SuperSection from "@/components/main/superSection";
import Mivi from "@/components/main/mivi";
import Highlight from "@/components/main/highlight";
import Quality from "@/components/quality/quality";
import Notification from "@/components/main/notification";
import Footer from "@/components/main/footer";
import TopScroll from "@/components/scroll/topScroll";
import Plasticfree from "@/components/plasticFree/pf";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Header />
      <TopScroll />
      <SuperSection />
      <Mivi />
      <Quality />
      <Notification />
      <Plasticfree />
      <Highlight />
      <Footer />
    </main>
  );
}
