import { TEAM_CONFIG } from '@/utils';
import { IStanding } from '@/types';
import { NextResponse } from 'next/server';
import fetch from 'node-fetch';

// Mock data for standings
const standings = [
  {
    position: 1,
    name: 'Rajasthan Royals',
    shortName: 'RR',
    logo: '💜',
    matches: 14,
    won: 10,
    lost: 4,
    tied: 0,
    nrr: 0.449,
    points: 20,
    form: ['W', 'W', 'L', 'W', 'W'],
    recentChange: 'up'
  },
  {
    position: 2,
    name: 'Kolkata Knight Riders',
    shortName: 'KKR',
    logo: '🟣',
    matches: 14,
    won: 9,
    lost: 5,
    tied: 0,
    nrr: 1.428,
    points: 18,
    form: ['W', 'L', 'W', 'W', 'L'],
    recentChange: 'same'
  },
  {
    position: 3,
    name: 'Sunrisers Hyderabad',
    shortName: 'SRH',
    logo: '🧡',
    matches: 14,
    won: 8,
    lost: 6,
    tied: 0,
    nrr: 0.414,
    points: 16,
    form: ['L', 'W', 'W', 'L', 'W'],
    recentChange: 'up'
  },
  {
    position: 4,
    name: 'Chennai Super Kings',
    shortName: 'CSK',
    logo: '🟡',
    matches: 14,
    won: 7,
    lost: 7,
    tied: 0,
    nrr: 0.528,
    points: 14,
    form: ['W', 'L', 'L', 'W', 'L'],
    recentChange: 'down'
  }
];

const apiUrl =
  'https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/feeds/stats/203-groupstandings.js'; // **Replace with your actual API endpoint**

async function callApiAndPrintResponse() {
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const text = await response.text();

  // The response is like: ongroupstandings({...});
  // We need to extract the JSON part.
  const startIndex = text.indexOf('(');
  const endIndex = text.lastIndexOf(')');

  if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
    throw new Error(
      'Could not parse JSONP response: Parentheses not found or invalid.'
    );
  }

  const jsonString = text.substring(startIndex + 1, endIndex);

  const data = JSON.parse(jsonString);

  return data.points;
}

function cleanData(data: any[]): IStanding[] {
  return data.map((point) => ({
    position: Number(point.OrderNo),
    name: point.TeamName,
    shortName: TEAM_CONFIG[point.TeamName as keyof typeof TEAM_CONFIG].shortName,
    logo: TEAM_CONFIG[point.TeamName as keyof typeof TEAM_CONFIG].logo,
    matches: Number(point.Matches),
    won: Number(point.Wins),
    lost: Number(point.Loss),
    tied: Number(point.Tied),
    nrr: Number(point.NetRunRate),
    points: Number(point.Points),
    form: point.Performance.split(','),
    recentChange: point.Status.toLowerCase()
  }));
}

export async function GET() {
  try {
    const data = await callApiAndPrintResponse();
    return NextResponse.json({
      success: true,
      data: {
        points: cleanData(data),
        lastUpdatedAt: new Date().toDateString()
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch standings' },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-static'
