export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
};

export const getStatusBadgeStyles = (status: string) => {
  switch (status) {
    case 'upcoming':
      return 'bg-blue-100 text-blue-800';
    case 'live':
      return 'bg-red-100 text-red-800';
    case 'completed':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getCapitalisedText = (receivedText: string) => receivedText.charAt(0).toUpperCase() + receivedText.slice(1);

export const getShortMonthDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });
};

export const IMAGE_URLS = {
  iplHero: 'https://documents.iplt20.com//ipl/assets/images/ipl-logo-new-old.png',
  iplSpiral: 'https://documents.iplt20.com/ipl/assets/images/rounded_spiral-new-story-helix-bg.png',
}

export const TEAM_CONFIG = {
  'Punjab Kings': {
    logo: 'https://scores.iplt20.com/ipl/teamlogos/PBKS.png',
    name: 'Punjab Kings',
    shortName: 'PBKS'
  },
  'Royal Challengers Bengaluru': {
    logo: 'https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/NVAlbtIyB81740555172aFPMviEPyJ1710927747rcb.png',
    name: 'Royal Challengers Bengaluru',
    shortName: 'RCB'
  },
  'Gujarat Titans': {
    logo: 'https://scores.iplt20.com/ipl/teamlogos/GT.png?v=1',
    name: 'Gujarat Titans',
    shortName: 'GT'
  },
  'Mumbai Indians': {
    logo: 'https://scores.iplt20.com/ipl/teamlogos/MI.png',
    name: 'Mumbai Indians',
    shortName: 'MI'
  },
  'Delhi Capitals': {
    logo: 'https://scores.iplt20.com/ipl/teamlogos/DC.png',
    name: 'Delhi Capitals',
    shortName: 'DC'
  },
  'Sunrisers Hyderabad': {
    logo: 'https://scores.iplt20.com/ipl/teamlogos/SRH.png',
    name: 'Sunrisers Hyderabad',
    shortName: 'SRH'
  },
  'Lucknow Super Giants': {
    logo: 'https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/gPLvfvSC1X1711457972LSG.png',
    name: 'Lucknow Super Giants',
    shortName: 'LSG'
  },
  'Kolkata Knight Riders': {
    logo: 'https://scores.iplt20.com/ipl/teamlogos/KKR.png',
    name: 'Kolkata Knight Riders',
    shortName: 'KKR'
  },
  'Rajasthan Royals': {
    logo: 'https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/sSNjJEkBAx1742900310RR---New-Logo.png',
    name: 'Rajasthan Royals',
    shortName: 'RR'
  },
  'Chennai Super Kings': {
    logo: 'https://scores.iplt20.com/ipl/teamlogos/CSK.png',
    name: 'Chennai Super Kings',
    shortName: 'CSK'
  }
}

export const TEAM_LOGO_SIZE = 64;
export const TEAM_LOGO_SIZE_SM = 52;

export function getLogoSize(width: number) {
  return width < 640 ? TEAM_LOGO_SIZE_SM : TEAM_LOGO_SIZE;
}
