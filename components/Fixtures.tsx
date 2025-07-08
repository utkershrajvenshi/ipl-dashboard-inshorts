'use client';

import { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import labels from '@/labels/en/index.json';
import { useFixtures } from '@/hooks/useApi';
import { formatDate, getLogoSize } from '@/utils';
import Image from 'next/image';
import { useViewport } from '@/utils/useViewport';
import { Fixture } from '@/types';

export default function Fixtures() {
  const { data: fixturesData, isLoading, error } = useFixtures();
  const [fixtures, setFixtures] = useState<Fixture[]>([]);
  const width = useViewport();
  const logoSize = getLogoSize(width);

  useEffect(() => {
    if (fixturesData) {
      setFixtures(fixturesData.data);
    }
  }, [fixturesData]);

  const FixtureCard = ({ fixture }: { fixture: Fixture }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Match Header */}
      <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-600">{`${labels.MATCH} ${fixture.matchNumber}`}</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(fixture.date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{fixture.startTime}</span>
          </div>
        </div>
      </div>

      {/* Teams */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          {/* Team 1 */}
          <div className="flex items-center gap-3 flex-1">
            {fixture.homeTeam.logo && (
              <Image alt={`${fixture.homeTeam.name} logo`} src={fixture.homeTeam.logo} width={logoSize} height={logoSize} />
            )}
            <div>
              <p className="hidden xs:block font-semibold text-gray-900 sm:text-lg">{fixture.homeTeam.name}</p>
              <span className="text-sm text-gray-900 font-semibold xs:font-normal xs:text-gray-500 xs:text-sm">{fixture.homeTeam.shortName}</span>
            </div>
          </div>

          {/* VS */}
          <div className="px-4">
            <span className="text-lg font-bold text-gray-400">{labels.VS}</span>
          </div>

          {/* Team 2 */}
          <div className="flex items-center gap-3 flex-1 justify-end text-right">
            <div>
              <p className="hidden xs:block font-semibold text-gray-900 sm:text-lg">{fixture.awayTeam.name}</p>
              <span className="text-sm text-gray-900 font-semibold xs:font-normal xs:text-gray-500 xs:text-sm">{fixture.awayTeam.shortName}</span>
            </div>
            {fixture.awayTeam.logo && (
              <Image alt={`${fixture.awayTeam.name} logo`} src={fixture.awayTeam.logo} width={logoSize} height={logoSize} />
            )}
          </div>
        </div>

        {/* Venue */}
        <div className="flex items-center justify-center gap-1 text-gray-600 mb-3">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{fixture.venue}</span>
        </div>
      </div>
    </div>
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">{labels.MATCH_FIXTURES}</h2>
      </div>

      {/* Fixtures Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {fixtures.map((fixture) => (
          <FixtureCard key={fixture.id} fixture={fixture} />
        ))}
      </div>

      {/* No Matches State */}
      {fixtures.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📅</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{labels.NO_MATCHES_FOUND}</h3>
          <p className="text-gray-600">{labels.TRY_CHANGING_FILTER}</p>
        </div>
      )}

      {/* Season Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">{labels.IPL_2025_SEASON}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-blue-800">
          <div>
            <span className="font-medium">{labels.LEAGUE_STAGE}:</span> {labels.LEAGUE_STAGE_DATES}
          </div>
          <div>
            <span className="font-medium">{labels.PLAYOFFS}:</span> {labels.PLAYOFFS_DATES}
          </div>
          <div>
            <span className="font-medium">{labels.FINAL}:</span> {labels.FINAL_DATES}
          </div>
        </div>
      </div>
    </div>
  );
}