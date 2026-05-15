import About from "./pages/About";
import Home from "./pages/Home";
import Importance from "./pages/Importance";
import Services from "./pages/Services";
import { services_first,services_second } from "./utils/data";
import BackGround from "./pages/BackGround";
import DueDiligence from "./pages/DueDiligence";
import RiskAssessment from "./pages/RiskAssessment";
import ProcessAudit from "./pages/ProcessAudit";
import Investigation from "./pages/Investigation";
import Surveillance from "./pages/Surveillance";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#244787] to-[#297d96]">
        <Home />
        <Importance />
        <Services services={services_first} />
        <Services  services={services_second} />
        <DueDiligence />
        <BackGround />
        <RiskAssessment />
        <ProcessAudit />
        <Investigation />
        <Surveillance />
        <About />
        <ContactUs />
      </div>
    </>
  );
}

export default App;
