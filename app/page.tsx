'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import LiveScores from '@/components/LiveScores';
import PointsTable from '@/components/PointsTable';
import Fixtures from '@/components/Fixtures';
import { Ticket, Trophy, Calendar } from 'lucide-react';
import labels from '@/labels/en/index.json';
import { IMAGE_URLS } from '@/utils';

export default function Home() {
  const [activeTab, setActiveTab] = useState('live');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const tabs = [
    { id: 'live', label: labels.LIVE_SCORES, icon: Ticket },
    { id: 'table', label: labels.POINTS_TABLE, icon: Trophy },
    { id: 'fixtures', label: labels.FIXTURES, icon: Calendar }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'live':
        return <LiveScores />;
      case 'table':
        return <PointsTable />;
      case 'fixtures':
        return <Fixtures />;
      default:
        return <LiveScores />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <section style={{ backgroundImage: `url(${IMAGE_URLS.iplSpiral})` }} className={`bg-blue-900 bg-no-repeat text-white py-8 sm:py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {labels.IPL_DASHBOARD}
            </h1>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col xs:flex-row overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-4 border-b-2 transition-all duration-200 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600 bg-blue-50'
                      : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">{labels.IPL_DASHBOARD}</h3>
          </div>
        </div>
      </footer>
    </div>
  );
}