import Sidebar from "../components/Sidebar";
import MapView from "../components/MapView";

export default function Home() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="ml-64 w-full">
                <MapView />
            </div>
        </div>
    );
}
