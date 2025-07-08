import { NextResponse } from 'next/server';
import { TEAM_CONFIG } from '@/utils';
import { IReceivedFixtures, ITeam } from '@/types';

// Mock data for fixtures
const fixtures: IReceivedFixtures[] = [
  {
    matchNumber: 1,
    matchDay: 1,
    date: "22-Mar-25",
    day: "Sat",
    startTime: "7:30 PM",
    homeTeam: "Kolkata Knight Riders",
    awayTeam: "Royal Challengers Bengaluru",
    venue: "Kolkata"
  },
  {
    matchNumber: 2,
    matchDay: 2,
    date: "23-Mar-25",
    day: "Sun",
    startTime: "3:30 PM",
    homeTeam: "Sunrisers Hyderabad",
    awayTeam: "Rajasthan Royals",
    venue: "Hyderabad"
  },
  {
    matchNumber: 3,
    matchDay: 2,
    date: "23-Mar-25",
    day: "Sun",
    startTime: "7:30 PM",
    homeTeam: "Chennai Super Kings",
    awayTeam: "Mumbai Indians",
    venue: "Chennai"
  },
  {
    matchNumber: 4,
    matchDay: 3,
    date: "24-Mar-25",
    day: "Mon",
    startTime: "7:30 PM",
    homeTeam: "Lucknow Super Giants",
    awayTeam: "Delhi Capitals",
    venue: "Visakhapatnam"
  },
  {
    matchNumber: 5,
    matchDay: 4,
    date: "25-Mar-25",
    day: "Tue",
    startTime: "7:30 PM",
    homeTeam: "Punjab Kings",
    awayTeam: "Gujarat Titans",
    venue: "Ahmedabad"
  },
  {
    matchNumber: 6,
    matchDay: 5,
    date: "26-Mar-25",
    day: "Wed",
    startTime: "7:30 PM",
    homeTeam: "Kolkata Knight Riders",
    awayTeam: "Rajasthan Royals",
    venue: "Guwahati"
  },
  {
    matchNumber: 7,
    matchDay: 6,
    date: "27-Mar-25",
    day: "Thu",
    startTime: "7:30 PM",
    homeTeam: "Sunrisers Hyderabad",
    awayTeam: "Lucknow Super Giants",
    venue: "Hyderabad"
  },
  {
    matchNumber: 8,
    matchDay: 7,
    date: "28-Mar-25",
    day: "Fri",
    startTime: "7:30 PM",
    homeTeam: "Chennai Super Kings",
    awayTeam: "Royal Challengers Bengaluru",
    venue: "Chennai"
  },
  {
    matchNumber: 9,
    matchDay: 8,
    date: "29-Mar-25",
    day: "Sat",
    startTime: "7:30 PM",
    homeTeam: "Gujarat Titans",
    awayTeam: "Mumbai Indians",
    venue: "Ahmedabad"
  },
  {
    matchNumber: 10,
    matchDay: 9,
    date: "30-Mar-25",
    day: "Sun",
    startTime: "3:30 PM",
    homeTeam: "Sunrisers Hyderabad",
    awayTeam: "Delhi Capitals",
    venue: "Visakhapatnam"
  },
  {
    matchNumber: 11,
    matchDay: 9,
    date: "30-Mar-25",
    day: "Sun",
    startTime: "7:30 PM",
    homeTeam: "Rajasthan Royals",
    awayTeam: "Chennai Super Kings",
    venue: "Guwahati"
  },
  {
    matchNumber: 12,
    matchDay: 10,
    date: "31-Mar-25",
    day: "Mon",
    startTime: "7:30 PM",
    homeTeam: "Mumbai Indians",
    awayTeam: "Kolkata Knight Riders",
    venue: "Mumbai"
  },
  {
    matchNumber: 13,
    matchDay: 11,
    date: "01-Apr-25",
    day: "Tue",
    startTime: "7:30 PM",
    homeTeam: "Punjab Kings",
    awayTeam: "Lucknow Super Giants",
    venue: "Lucknow"
  },
  {
    matchNumber: 14,
    matchDay: 12,
    date: "02-Apr-25",
    day: "Wed",
    startTime: "7:30 PM",
    homeTeam: "Royal Challengers Bengaluru",
    awayTeam: "Gujarat Titans",
    venue: "Bengaluru"
  },
  {
    matchNumber: 15,
    matchDay: 13,
    date: "03-Apr-25",
    day: "Thu",
    startTime: "7:30 PM",
    homeTeam: "Kolkata Knight Riders",
    awayTeam: "Sunrisers Hyderabad",
    venue: "Kolkata"
  },
  {
    matchNumber: 16,
    matchDay: 14,
    date: "04-Apr-25",
    day: "Fri",
    startTime: "7:30 PM",
    homeTeam: "Lucknow Super Giants",
    awayTeam: "Mumbai Indians",
    venue: "Lucknow"
  },
  {
    matchNumber: 17,
    matchDay: 15,
    date: "05-Apr-25",
    day: "Sat",
    startTime: "3:30 PM",
    homeTeam: "Chennai Super Kings",
    awayTeam: "Delhi Capitals",
    venue: "Chennai"
  },
  {
    matchNumber: 18,
    matchDay: 15,
    date: "05-Apr-25",
    day: "Sat",
    startTime: "7:30 PM",
    homeTeam: "Rajasthan Royals",
    awayTeam: "Punjab Kings",
    venue: "New Chandigarh"
  },
  {
    matchNumber: 20,
    matchDay: 16,
    date: "06-Apr-25",
    day: "Sun",
    startTime: "7:30 PM",
    homeTeam: "Sunrisers Hyderabad",
    awayTeam: "Gujarat Titans",
    venue: "Hyderabad"
  },
  {
    matchNumber: 21,
    matchDay: 17,
    date: "07-Apr-25",
    day: "Mon",
    startTime: "7:30 PM",
    homeTeam: "Mumbai Indians",
    awayTeam: "Royal Challengers Bengaluru",
    venue: "Mumbai"
  },
  {
    matchNumber: 19,
    matchDay: 18,
    date: "08-Apr-25",
    day: "Tue",
    startTime: "3:30 PM",
    homeTeam: "Kolkata Knight Riders",
    awayTeam: "Lucknow Super Giants",
    venue: "Kolkata"
  },
  {
    matchNumber: 22,
    matchDay: 18,
    date: "08-Apr-25",
    day: "Tue",
    startTime: "7:30 PM",
    homeTeam: "Chennai Super Kings",
    awayTeam: "Punjab Kings",
    venue: "New Chandigarh"
  },
  {
    matchNumber: 23,
    matchDay: 19,
    date: "09-Apr-25",
    day: "Wed",
    startTime: "7:30 PM",
    homeTeam: "Gujarat Titans",
    awayTeam: "Rajasthan Royals",
    venue: "Ahmedabad"
  },
  {
    matchNumber: 24,
    matchDay: 20,
    date: "10-Apr-25",
    day: "Thu",
    startTime: "7:30 PM",
    homeTeam: "Delhi Capitals",
    awayTeam: "Royal Challengers Bengaluru",
    venue: "Bengaluru"
  },
  {
    matchNumber: 25,
    matchDay: 21,
    date: "11-Apr-25",
    day: "Fri",
    startTime: "7:30 PM",
    homeTeam: "Kolkata Knight Riders",
    awayTeam: "Chennai Super Kings",
    venue: "Chennai"
  },
  {
    matchNumber: 26,
    matchDay: 22,
    date: "12-Apr-25",
    day: "Sat",
    startTime: "3:30 PM",
    homeTeam: "Lucknow Super Giants",
    awayTeam: "Gujarat Titans",
    venue: "Lucknow"
  },
  {
    matchNumber: 27,
    matchDay: 22,
    date: "12-Apr-25",
    day: "Sat",
    startTime: "7:30 PM",
    homeTeam: "Punjab Kings",
    awayTeam: "Sunrisers Hyderabad",
    venue: "Hyderabad"
  },
  {
    matchNumber: 28,
    matchDay: 23,
    date: "13-Apr-25",
    day: "Sun",
    startTime: "3:30 PM",
    homeTeam: "Royal Challengers Bengaluru",
    awayTeam: "Rajasthan Royals",
    venue: "Jaipur"
  },
  {
    matchNumber: 29,
    matchDay: 23,
    date: "13-Apr-25",
    day: "Sun",
    startTime: "7:30 PM",
    homeTeam: "Mumbai Indians",
    awayTeam: "Delhi Capitals",
    venue: "Delhi"
  },
  {
    matchNumber: 30,
    matchDay: 24,
    date: "14-Apr-25",
    day: "Mon",
    startTime: "7:30 PM",
    homeTeam: "Lucknow Super Giants",
    awayTeam: "Chennai Super Kings",
    venue: "Lucknow"
  },
  {
    matchNumber: 31,
    matchDay: 25,
    date: "15-Apr-25",
    day: "Tue",
    startTime: "7:30 PM",
    homeTeam: "Kolkata Knight Riders",
    awayTeam: "Punjab Kings",
    venue: "New Chandigarh"
  },
  {
    matchNumber: 32,
    matchDay: 26,
    date: "16-Apr-25",
    day: "Wed",
    startTime: "7:30 PM",
    homeTeam: "Rajasthan Royals",
    awayTeam: "Delhi Capitals",
    venue: "Delhi"
  },
  {
    matchNumber: 33,
    matchDay: 27,
    date: "17-Apr-25",
    day: "Thu",
    startTime: "7:30 PM",
    homeTeam: "Sunrisers Hyderabad",
    awayTeam: "Mumbai Indians",
    venue: "Mumbai"
  },
  {
    matchNumber: 34,
    matchDay: 28,
    date: "18-Apr-25",
    day: "Fri",
    startTime: "7:30 PM",
    homeTeam: "Royal Challengers Bengaluru",
    awayTeam: "Punjab Kings",
    venue: "Bengaluru"
  },
  {
    matchNumber: 35,
    matchDay: 29,
    date: "19-Apr-25",
    day: "Sat",
    startTime: "3:30 PM",
    homeTeam: "Gujarat Titans",
    awayTeam: "Delhi Capitals",
    venue: "Ahmedabad"
  },
  {
    matchNumber: 36,
    matchDay: 29,
    date: "19-Apr-25",
    day: "Sat",
    startTime: "7:30 PM",
    homeTeam: "Rajasthan Royals",
    awayTeam: "Lucknow Super Giants",
    venue: "Jaipur"
  },
  {
    matchNumber: 37,
    matchDay: 30,
    date: "20-Apr-25",
    day: "Sun",
    startTime: "3:30 PM",
    homeTeam: "Punjab Kings",
    awayTeam: "Royal Challengers Bengaluru",
    venue: "New Chandigarh"
  },
  {
    matchNumber: 38,
    matchDay: 30,
    date: "20-Apr-25",
    day: "Sun",
    startTime: "7:30 PM",
    homeTeam: "Mumbai Indians",
    awayTeam: "Chennai Super Kings",
    venue: "Mumbai"
  },
  {
    matchNumber: 39,
    matchDay: 31,
    date: "21-Apr-25",
    day: "Mon",
    startTime: "7:30 PM",
    homeTeam: "Kolkata Knight Riders",
    awayTeam: "Gujarat Titans",
    venue: "Kolkata"
  },
  {
    matchNumber: 40,
    matchDay: 32,
    date: "22-Apr-25",
    day: "Tue",
    startTime: "7:30 PM",
    homeTeam: "Lucknow Super Giants",
    awayTeam: "Delhi Capitals",
    venue: "Lucknow"
  },
  {
    matchNumber: 41,
    matchDay: 33,
    date: "23-Apr-25",
    day: "Wed",
    startTime: "7:30 PM",
    homeTeam: "Sunrisers Hyderabad",
    awayTeam: "Mumbai Indians",
    venue: "Hyderabad"
  },
  {
    matchNumber: 42,
    matchDay: 34,
    date: "24-Apr-25",
    day: "Thu",
    startTime: "7:30 PM",
    homeTeam: "Royal Challengers Bengaluru",
    awayTeam: "Rajasthan Royals",
    venue: "Bengaluru"
  },
  {
    matchNumber: 43,
    matchDay: 35,
    date: "25-Apr-25",
    day: "Fri",
    startTime: "7:30 PM",
    homeTeam: "Chennai Super Kings",
    awayTeam: "Sunrisers Hyderabad",
    venue: "Chennai"
  },
  {
    matchNumber: 44,
    matchDay: 36,
    date: "26-Apr-25",
    day: "Sat",
    startTime: "7:30 PM",
    homeTeam: "Kolkata Knight Riders",
    awayTeam: "Punjab Kings",
    venue: "Kolkata"
  },
  {
    matchNumber: 45,
    matchDay: 37,
    date: "27-Apr-25",
    day: "Sun",
    startTime: "3:30 PM",
    homeTeam: "Mumbai Indians",
    awayTeam: "Lucknow Super Giants",
    venue: "Mumbai"
  },
  {
    matchNumber: 46,
    matchDay: 37,
    date: "27-Apr-25",
    day: "Sun",
    startTime: "7:30 PM",
    homeTeam: "Delhi Capitals",
    awayTeam: "Royal Challengers Bengaluru",
    venue: "Delhi"
  },
  {
    matchNumber: 47,
    matchDay: 38,
    date: "28-Apr-25",
    day: "Mon",
    startTime: "7:30 PM",
    homeTeam: "Rajasthan Royals",
    awayTeam: "Gujarat Titans",
    venue: "Jaipur"
  },
  {
    matchNumber: 48,
    matchDay: 39,
    date: "29-Apr-25",
    day: "Tue",
    startTime: "7:30 PM",
    homeTeam: "Delhi Capitals",
    awayTeam: "Kolkata Knight Riders",
    venue: "Delhi"
  },
  {
    matchNumber: 49,
    matchDay: 40,
    date: "30-Apr-25",
    day: "Wed",
    startTime: "7:30 PM",
    homeTeam: "Chennai Super Kings",
    awayTeam: "Punjab Kings",
    venue: "Chennai"
  },
  {
    matchNumber: 50,
    matchDay: 41,
    date: "01-May-25",
    day: "Thu",
    startTime: "7:30 PM",
    homeTeam: "Rajasthan Royals",
    awayTeam: "Mumbai Indians",
    venue: "Jaipur"
  },
  {
    matchNumber: 51,
    matchDay: 42,
    date: "02-May-25",
    day: "Fri",
    startTime: "7:30 PM",
    homeTeam: "Gujarat Titans",
    awayTeam: "Sunrisers Hyderabad",
    venue: "Ahmedabad"
  },
  {
    matchNumber: 52,
    matchDay: 43,
    date: "03-May-25",
    day: "Sat",
    startTime: "7:30 PM",
    homeTeam: "Royal Challengers Bengaluru",
    awayTeam: "Chennai Super Kings",
    venue: "Bengaluru"
  },
  {
    matchNumber: 53,
    matchDay: 44,
    date: "04-May-25",
    day: "Sun",
    startTime: "3:30 PM",
    homeTeam: "Kolkata Knight Riders",
    awayTeam: "Rajasthan Royals",
    venue: "Kolkata"
  },
  {
    matchNumber: 54,
    matchDay: 44,
    date: "04-May-25",
    day: "Sun",
    startTime: "7:30 PM",
    homeTeam: "Punjab Kings",
    awayTeam: "Lucknow Super Giants",
    venue: "Dharamshala"
  },
  {
    matchNumber: 55,
    matchDay: 45,
    date: "05-May-25",
    day: "Mon",
    startTime: "7:30 PM",
    homeTeam: "Sunrisers Hyderabad",
    awayTeam: "Delhi Capitals",
    venue: "Hyderabad"
  },
  {
    matchNumber: 56,
    matchDay: 46,
    date: "06-May-25",
    day: "Tue",
    startTime: "7:30 PM",
    homeTeam: "Mumbai Indians",
    awayTeam: "Gujarat Titans",
    venue: "Mumbai"
  },
  {
    matchNumber: 57,
    matchDay: 47,
    date: "07-May-25",
    day: "Wed",
    startTime: "7:30 PM",
    homeTeam: "Kolkata Knight Riders",
    awayTeam: "Chennai Super Kings",
    venue: "Kolkata"
  },
  {
    matchNumber: 58,
    matchDay: 48,
    date: "17-May-25",
    day: "Sat",
    startTime: "7:30 PM",
    homeTeam: "Royal Challengers Bengaluru",
    awayTeam: "Kolkata Knight Riders",
    venue: "Bengaluru"
  },
  {
    matchNumber: 59,
    matchDay: 49,
    date: "18-May-25",
    day: "Sun",
    startTime: "3:30 PM",
    homeTeam: "Rajasthan Royals",
    awayTeam: "Punjab Kings",
    venue: "Jaipur"
  },
  {
    matchNumber: 60,
    matchDay: 49,
    date: "18-May-25",
    day: "Sun",
    startTime: "7:30 PM",
    homeTeam: "Delhi Capitals",
    awayTeam: "Gujarat Titans",
    venue: "Delhi"
  },
  {
    matchNumber: 61,
    matchDay: 50,
    date: "19-May-25",
    day: "Mon",
    startTime: "7:30 PM",
    homeTeam: "Lucknow Super Giants",
    awayTeam: "Sunrisers Hyderabad",
    venue: "Lucknow"
  },
  {
    matchNumber: 62,
    matchDay: 51,
    date: "20-May-25",
    day: "Tue",
    startTime: "7:30 PM",
    homeTeam: "Chennai Super Kings",
    awayTeam: "Rajasthan Royals",
    venue: "Delhi"
  },
  {
    matchNumber: 63,
    matchDay: 52,
    date: "21-May-25",
    day: "Wed",
    startTime: "7:30 PM",
    homeTeam: "Mumbai Indians",
    awayTeam: "Delhi Capitals",
    venue: "Mumbai"
  },
  {
    matchNumber: 64,
    matchDay: 53,
    date: "22-May-25",
    day: "Thu",
    startTime: "7:30 PM",
    homeTeam: "Gujarat Titans",
    awayTeam: "Lucknow Super Giants",
    venue: "Ahmedabad"
  },
  {
    matchNumber: 65,
    matchDay: 54,
    date: "23-May-25",
    day: "Fri",
    startTime: "7:30 PM",
    homeTeam: "Royal Challengers Bengaluru",
    awayTeam: "Sunrisers Hyderabad",
    venue: "Lucknow"
  },
  {
    matchNumber: 66,
    matchDay: 55,
    date: "24-May-25",
    day: "Sat",
    startTime: "7:30 PM",
    homeTeam: "Punjab Kings",
    awayTeam: "Delhi Capitals",
    venue: "Jaipur"
  },
  {
    matchNumber: 67,
    matchDay: 56,
    date: "25-May-25",
    day: "Sun",
    startTime: "3:30 PM",
    homeTeam: "Gujarat Titans",
    awayTeam: "Chennai Super Kings",
    venue: "Ahmedabad"
  },
  {
    matchNumber: 68,
    matchDay: 56,
    date: "25-May-25",
    day: "Sun",
    startTime: "7:30 PM",
    homeTeam: "Sunrisers Hyderabad",
    awayTeam: "Kolkata Knight Riders",
    venue: "Delhi"
  },
  {
    matchNumber: 69,
    matchDay: 57,
    date: "26-May-25",
    day: "Mon",
    startTime: "7:30 PM",
    homeTeam: "Punjab Kings",
    awayTeam: "Mumbai Indians",
    venue: "Jaipur"
  },
  {
    matchNumber: 70,
    matchDay: 58,
    date: "27-May-25",
    day: "Tue",
    startTime: "7:30 PM",
    homeTeam: "Lucknow Super Giants",
    awayTeam: "Royal Challengers Bengaluru",
    venue: "Lucknow"
  },
  {
    matchNumber: 71,
    matchDay: 60,
    date: "29-May-25",
    day: "Thu",
    startTime: "7:30 PM",
    homeTeam: "Qualifier 1",
    awayTeam: null,
    venue: "New Chandigarh"
  },
  {
    matchNumber: 72,
    matchDay: 61,
    date: "30-May-25",
    day: "Fri",
    startTime: "7:30 PM",
    homeTeam: "Eliminator",
    awayTeam: null,
    venue: "New Chandigarh"
  },
  {
    matchNumber: 73,
    matchDay: 63,
    date: "01-Jun-25",
    day: "Sun",
    startTime: "7:30 PM",
    homeTeam: "Qualifier 2",
    awayTeam: null,
    venue: "Ahmedabad"
  },
  {
    matchNumber: 74,
    matchDay: 65,
    date: "03-Jun-25",
    day: "Tue",
    startTime: "7:30 PM",
    homeTeam: "Final",
    awayTeam: null,
    venue: "Ahmedabad"
  }
]
export async function GET() {
  try {
    const getTeamConfig: (teamName: string | null) => ITeam = (teamName) => {
      if (teamName && Object.keys(TEAM_CONFIG).includes(teamName)) {
        const teamObject = TEAM_CONFIG[teamName as keyof typeof TEAM_CONFIG];
        return teamObject;
      }
      return {
        name: 'TBD',
        shortName: 'TBD'
      };
    };

    const formattedFixtures = fixtures.map((fixture) => ({
      ...fixture,
      id: fixture.matchNumber,
      homeTeam: getTeamConfig(fixture.homeTeam),
      awayTeam: getTeamConfig(fixture.awayTeam),
    }));
    return NextResponse.json({
      success: true,
      data: formattedFixtures
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch fixtures' },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-static'
