interface Fixture {
  id: string;
  date: string;
  startTime: string;
  homeTeam: {
    name: string;
    shortName: string;
    logo?: string;
  };
  awayTeam: {
    name: string;
    shortName: string;
    logo?: string;
  };
  venue: string;
  matchNumber: number;
}

interface Match {
  id: string;
  team1: {
    name: string;
    shortName: string;
    logo: string;
    score: string;
    overs: string;
  };
  team2: {
    name: string;
    shortName: string;
    logo: string;
    score: string;
    overs: string;
  };
  status: string;
  venue: string;
  isLive: boolean;
  currentOver: string;
  commentary: string[];
}

interface Team {
  position: number;
  name: string;
  shortName: string;
  logo: string;
  matches: number;
  won: number;
  lost: number;
  tied: number;
  nrr: number;
  points: number;
  form: string[];
  recentChange: 'up' | 'down' | 'same';
}

interface ITeam {
  name: string;
  shortName: string;
  logo?: string;
}
interface IReceivedFixtures {
  matchNumber: number;
  matchDay: number;
  date: string;
  day: string;
  startTime: string;
  homeTeam: string;
  awayTeam: string | null;
  venue: string;
}

interface IStanding {
  position: number;
  name: string;
  shortName: string;
  logo: string;
  matches: number;
  won: number;
  lost: number;
  tied: number;
  nrr: number;
  points: number;
  form: string[];
  recentChange: 'up' | 'down' | 'same';
}

export type { Fixture, Match, Team, ITeam, IReceivedFixtures, IStanding }