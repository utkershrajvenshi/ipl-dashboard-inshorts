import { NextResponse } from 'next/server';
import { TEAM_CONFIG } from '@/utils';

// Mock data for matches
const matches = [
  {
    id: '1',
    team1: {
      ...TEAM_CONFIG['Mumbai Indians'],
      score: '178',
      overs: '18.3'
    },
    team2: {
      ...TEAM_CONFIG['Chennai Super Kings'],
      score: '125/6',
      overs: '16.1'
    },
    status: 'CSK need 54 runs in 24 balls',
    venue: 'Wankhede Stadium, Mumbai',
    isLive: true,
    currentOver: '16.2',
    commentary: [
      '16.2 - SIX! Dhoni launches it over deep mid-wicket! What a shot!',
      '16.1 - Dot ball, tight delivery outside off',
      '16.0 - FOUR! Swept beautifully through square leg',
      '15.5 - Single to deep cover'
    ]
  },
  {
    id: '2',
    team1: {
      ...TEAM_CONFIG['Royal Challengers Bengaluru'],
      score: '201/3',
      overs: '20.0'
    },
    team2: {
      ...TEAM_CONFIG['Kolkata Knight Riders'],
      score: '68/2',
      overs: '8.3'
    },
    status: 'KKR need 134 runs in 72 balls',
    venue: 'Eden Gardens, Kolkata',
    isLive: true,
    currentOver: '8.4',
    commentary: [
      '8.4 - WICKET! Caught at long-on, great catch by Maxwell!',
      '8.2 - Dot ball, beaten by pace',
      '8.1 - FOUR! Cut shot through point for boundary',
      '7.5 - Two runs to deep square leg'
    ]
  },
  {
    id: '3',
    team1: {
      ...TEAM_CONFIG['Delhi Capitals'],
      score: '156/8',
      overs: '20.0'
    },
    team2: {
      ...TEAM_CONFIG['Punjab Kings'],
      score: '159/3',
      overs: '18.1'
    },
    status: 'PBKS won by 7 wickets',
    venue: 'Arun Jaitley Stadium, Delhi',
    isLive: false,
    currentOver: '',
    commentary: []
  }
];

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: matches
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch matches' },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-static'