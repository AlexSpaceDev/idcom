import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Nosotros from "./Nosotros";
import Valores from "./Valores";
import Servicios from "./Servicios";
import CatalogModal from "./CatalogModal";
import Contacto from "./Contacto";
import Footer from "./Footer";
import WhatsappFab from "./WhatsappFab";
import Toast from "./Toast";

export default function Landing() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInitial, setModalInitial] = useState<string | null>(null);
  const [preselectedService, setPreselectedService] = useState<string | null>(null);
  const [toast, setToast] = useState("");

  const openCatalog = (svcId: string | null = null) => {
    setModalInitial(svcId);
    setModalOpen(true);
  };
  const closeCatalog = () => setModalOpen(false);

  const navigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const requestServiceFromCatalog = (svcId: string) => {
    setModalOpen(false);
    setPreselectedService(svcId);
    setTimeout(() => navigate("contacto"), 120);
  };

  return (
    <div className="min-h-screen bg-white text-[#2D2D2D] selection:bg-[#F5A800] selection:text-[#1A1A1A]">
      <Navbar onOpenCatalog={() => openCatalog()} onNavigate={navigate} />
      <main>
        <Hero onNavigate={navigate} />
        <Nosotros />
        <Valores />
        <Servicios
          onSelect={(id) => openCatalog(id)}
          onOpenCatalog={() => openCatalog()}
        />
        <Contacto
          preselectedService={preselectedService}
          onConsumeSelection={() => setPreselectedService(null)}
          onToast={setToast}
        />
      </main>
      <Footer onOpenCatalog={() => openCatalog()} onNavigate={navigate} />
      <CatalogModal
        open={modalOpen}
        initialServiceId={modalInitial}
        onClose={closeCatalog}
        onRequestService={requestServiceFromCatalog}
      />
      <WhatsappFab />
      <Toast message={toast} onClose={() => setToast("")} />
    </div>
  );
}
