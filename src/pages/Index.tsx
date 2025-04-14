
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Load Flowise script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js';
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      window.Chatbot?.initFull({
        chatflowid: "e08f4890-b07b-42f5-b19a-bb72805e6fa1",
        apiHost: "http://localhost:3000",
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Chat Assistant
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-6 min-h-[600px]">
            <div id="flowise-fullchatbot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
