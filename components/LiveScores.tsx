'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, Clock, MapPin } from 'lucide-react';
import labels from '@/labels/en/index.json';
import { useLiveMatches } from '@/hooks/useApi';
import Image from 'next/image';
import { getLogoSize } from '@/utils';
import { useViewport } from '@/utils/useViewport';
import { Match } from '@/types';

export default function LiveScores() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [selectedMatch, setSelectedMatch] = useState<string | null>(null);
  const { data: liveMatchData, isLoading, error } = useLiveMatches();
  const width = useViewport();
  const logoSize = getLogoSize(width);

  useEffect(() => {
    if(liveMatchData?.data){
      setMatches(liveMatchData.data)
    }
  }, [liveMatchData])

  const MatchCard = ({ match }: { match: Match }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Match Header */}
      <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
        <div className="flex items-center gap-2">
          {match.isLive && (
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-red-600">{labels.LIVE}</span>
            </div>
          )}
          <div className="flex items-center gap-1 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{match.venue}</span>
          </div>
        </div>
      </div>

      {/* Teams and Scores */}
      <div className="p-4">
        {/* Team 1 */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <Image src={match.team1.logo} alt={`${match.team1.name} logo`} width={logoSize} height={logoSize} />
            <div>
              <h3 className="font-semibold text-gray-900">{match.team1.name}</h3>
              <span className="text-sm text-gray-500">{match.team1.shortName}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">{match.team1.score}</div>
            <div className="text-sm text-gray-500">({match.team1.overs} ov)</div>
          </div>
        </div>

        {/* Team 2 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Image src={match.team2.logo} alt={`${match.team2.name} logo`} width={logoSize} height={logoSize} />
            <div>
              <h3 className="font-semibold text-gray-900">{match.team2.name}</h3>
              <span className="text-sm text-gray-500">{match.team2.shortName}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">{match.team2.score}</div>
            <div className="text-sm text-gray-500">({match.team2.overs} ov)</div>
          </div>
        </div>

        {/* Match Status */}
        <div className={`text-center py-2 px-4 rounded-md ${
          match.isLive 
            ? 'bg-orange-50 text-orange-800 border border-orange-200' 
            : 'bg-green-50 text-green-800 border border-green-200'
        }`}>
          <span className="font-medium">{match.status}</span>
        </div>

        {/* Live Commentary Toggle */}
        {match.isLive && (
          <button
            onClick={() => setSelectedMatch(selectedMatch === match.id ? null : match.id)}
            className="w-full mt-3 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            {selectedMatch === match.id ? labels.HIDE_COMMENTARY : labels.VIEW_LIVE_COMMENTARY}
          </button>
        )}
      </div>

      {/* Live Commentary */}
      {selectedMatch === match.id && match.isLive && (
        <div className="border-t bg-gray-50 p-4">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Play className="h-4 w-4" />
            {labels.LIVE_COMMENTARY}
          </h4>
          <div className="space-y-2">
            {match.commentary.map((comment, index) => (
              <div key={index} className="text-sm text-gray-700 bg-white p-2 rounded border-l-4 border-blue-500">
                {comment}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  if(isLoading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{labels.LIVE_SCORES}</h2>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="h-4 w-4" />
          <span>{labels.UPDATED_NOW}</span>
        </div>
      </div>

      {/* Live Matches Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>

      {/* No Matches State */}
      {matches.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🏏</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{labels.NO_LIVE_MATCHES}</h3>
          <p className="text-gray-600">{labels.CHECK_BACK_LATER}</p>
        </div>
      )}
    </div>
  );
}