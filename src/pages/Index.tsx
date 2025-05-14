
// Teams AI Integration Demo Page

import React, { useState } from "react";
import TeamsStatusCard from "../components/TeamsStatusCard";
import AiChatDemo from "../components/AiChatDemo";

const Index = () => {
  const [teamsStatus, setTeamsStatus] = useState<"connected" | "not_connected">("not_connected");

  const handleTeamsConnect = () => {
    // Mock connection - in real app, implement OAuth2 logic here
    setTeamsStatus("connected");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center px-4 py-10">
      {/* Hero Section */}
      <div className="max-w-2xl w-full mb-10 text-center">
        <div className="mx-auto" style={{ maxWidth: 68 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft Logo"
            className="mx-auto mb-3 w-12 h-12"
            loading="lazy"
          />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-blue-900 mb-3">
          AI App Integration for Microsoft Teams
        </h1>
        <p className="text-lg text-blue-800 mb-6">
          Connect your Microsoft Teams workspace and try out our AI chat assistant demo below!
        </p>
      </div>

      {/* Status + Chat Side by Side (responsive) */}
      <div className="flex flex-col sm:flex-row items-center gap-8 w-full max-w-4xl">
        <TeamsStatusCard status={teamsStatus} onConnect={handleTeamsConnect} />
        <div className="flex-1 w-full">
          <AiChatDemo />
        </div>
      </div>
      <div className="mt-10 text-gray-400 text-xs text-center">
        <div>
          (For production: actual Teams integration uses Microsoft Graph API and secure backend. This is a UI/demo mockup.)
        </div>
        <div>
          <a
            href="https://docs.microsoft.com/en-us/microsoftteams/platform/get-started/get-started-overview"
            className="underline text-blue-600 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn about building Teams apps
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
