
import { User, LogIn } from "lucide-react";

type TeamsStatus = "connected" | "not_connected";

interface TeamsStatusCardProps {
  status: TeamsStatus;
  onConnect?: () => void;
}

const TeamsStatusCard = ({ status, onConnect }: TeamsStatusCardProps) => {
  const isConnected = status === "connected";
  return (
    <div className="rounded-2xl shadow-md p-6 bg-white flex flex-col items-center gap-2 border border-blue-100 min-w-[250px]">
      <div className="flex items-center gap-2">
        <User className="text-blue-700" size={28} aria-label="Teams user" />
        <span className="text-lg font-semibold">Microsoft Teams</span>
      </div>
      <div className={`mt-2 text-sm ${isConnected ? "text-green-600" : "text-gray-500"}`}>
        {isConnected ? "Connected" : "Not connected"}
      </div>
      {!isConnected && (
        <button
          onClick={onConnect}
          className="mt-4 px-4 py-2 bg-blue-700 hover:bg-blue-800 transition-colors text-white rounded-lg font-medium flex items-center gap-2"
        >
          <LogIn size={18} /> Connect to Teams
        </button>
      )}
      {isConnected && (
        <span className="mt-4 text-xs text-gray-400">You can now use AI chat in Teams!</span>
      )}
    </div>
  );
};

export default TeamsStatusCard;
