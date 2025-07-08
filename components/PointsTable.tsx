'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { getShortMonthDate, getLogoSize } from '@/utils';
import { useViewport } from '@/utils/useViewport';
import labels from '@/labels/en/index.json';
import { useStandings } from '@/hooks/useApi';
import Image from 'next/image';
import { Team } from '@/types';

export default function PointsTable() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [lastUpdatedDate, setLastUpdatedDate] = useState<string>(new Date().toDateString());
  const { data: standingsData, isLoading, error } = useStandings();
  const width = useViewport();
  const logoSize = getLogoSize(width);

  useEffect(() => {
    if (standingsData) {
      setLastUpdatedDate(standingsData.data.lastUpdatedAt);
      setTeams(standingsData.data.points);
    }
  }, [standingsData]);

  const getPositionBadge = (position: number) => {
    if (position <= 4) return 'bg-green-100 text-green-800';
    if (position <= 6) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  const getFormIcon = (result: string) => {
    switch (result) {
      case 'W':
        return <span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">W</span>;
      case 'L':
        return <span className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">L</span>;
      case 'N':
        return <span className="bg-gray-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">N</span>;
      default:
        return <span className="bg-gray-300 w-6 h-6 rounded-full"></span>;
    }
  };

  const getTrendIcon = (change: 'up' | 'down' | 'same') => {
    switch (change) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <Minus className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{labels.IPL_LATEST_POINTS_TABLE}</h2>
        <div className="text-sm text-gray-600">
          {labels.LAST_UPDATED}: {getShortMonthDate(lastUpdatedDate)}
        </div>
      </div>

      {/* Qualification Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>{labels.TOP_4_QUALIFY}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span>{labels.ELIMINATION_ZONE}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>{labels.OUT_OF_CONTENTION}</span>
          </div>
        </div>
      </div>

      {/* Points Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {labels.POSITION}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {labels.TEAM}
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {labels.M}
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {labels.W}
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {labels.L}
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {labels.NRR}
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {labels.PTS}
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {labels.FORM}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teams.map((team) => (
                <tr key={team.position} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPositionBadge(team.position)}`}>
                        {team.position}
                      </span>
                      {getTrendIcon(team.recentChange)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <Image src={team.logo} alt={`${team.name} logo`} width={logoSize} height={logoSize} />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{team.name}</div>
                        <div className="text-sm text-gray-500">{team.shortName}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                    {team.matches}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-green-600">
                    {team.won}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-red-600">
                    {team.lost}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                    {team.nrr > 0 ? '+' : ''}{team.nrr.toFixed(3)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="text-lg font-bold text-gray-900">{team.points}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-1 justify-center">
                      {team.form.map((result, index) => (
                        <div key={index} className="flex-shrink-0">
                          {getFormIcon(result)}
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden divide-y divide-gray-200">
          {teams.map((team) => (
            <div key={team.position} className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPositionBadge(team.position)}`}>
                    {team.position}
                  </span>
                  <Image src={team.logo} alt={`${team.name} logo`} width={logoSize} height={logoSize} />
                  <div>
                    <div className="text-sm font-medium text-gray-900">{team.shortName}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">{team.points} pts</div>
                  <div className="text-xs text-gray-500">{team.won}W-{team.lost}L</div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">{labels.NRR}:</span>
                  <span className="ml-1 font-medium">{team.nrr > 0 ? '+' : ''}{team.nrr.toFixed(3)}</span>
                </div>
                <div>
                  <span className="text-gray-500">{labels.MATCHES}:</span>
                  <span className="ml-1 font-medium">{team.matches}</span>
                </div>
                <div className="flex flex-wrap gap-1 justify-center min-w-[90px]">
                  {team.form.map((result, index) => (
                    <div key={index} className="scale-75">
                      {getFormIcon(result)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="text-xs text-gray-500 space-y-1">
        <p><strong>{labels.M}:</strong> {labels.MATCHES_PLAYED} | <strong>{labels.W}:</strong> {labels.WON} | <strong>{labels.L}:</strong> {labels.LOST} | <strong>{labels.NRR}:</strong> {labels.NET_RUN_RATE} | <strong>{labels.PTS}:</strong> {labels.POINTS}</p>
        <p>{labels.POINTS_AWARD_CRITERIA}</p>
      </div>
    </div>
  );
}