import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAppStore } from "@/store/useAppStore";
import BottomNav from "@/components/BottomNav";
import Explore from "@/pages/Explore";
import ParkDetail from "@/pages/ParkDetail";
import PlantClue from "@/pages/PlantClue";
import PhotoVerify from "@/pages/PhotoVerify";
import DiscoverySuccess from "@/pages/DiscoverySuccess";
import Garden from "@/pages/Garden";
import Records from "@/pages/Records";
import Profile from "@/pages/Profile";

export default function App() {
  const initStore = useAppStore((s) => s.initStore);

  useEffect(() => {
    initStore();
  }, [initStore]);

  return (
    <Router basename={import.meta.env.PROD ? "/PArkBuddies" : "/"}>
      <div className="app-container pb-20">
        <Routes>
          <Route path="/" element={<Navigate to="/explore" replace />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/park/:parkId" element={<ParkDetail />} />
          <Route path="/park/:parkId/clue/:plantId" element={<PlantClue />} />
          <Route path="/park/:parkId/verify/:plantId" element={<PhotoVerify />} />
          <Route path="/park/:parkId/discovered/:plantId" element={<DiscoverySuccess />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/records" element={<Records />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}
