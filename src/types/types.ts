export interface IPData {
  ipVersion: number;
  ipAddress: string;
  latitude: number;
  longitude: number;
  countryName: string;
  countryCode: string;
  timeZone: string;
  zipCode: string;
  cityName: string;
  regionName: string;
  continent: string;
  continentCode: string;
  isProxy: boolean;
}

export interface AppContextTypes {
  isLoading: boolean;
  error: any;
  ipData: IPData;
  isUserIP: boolean;
  noData: boolean;
  setNoData: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUserIP: React.Dispatch<React.SetStateAction<boolean>>;
  getIPData: (value?: string) => void;
  dnsIsLoading: boolean;
  dnsResponse: DNSData | undefined;
  dnsError: any;
  getIPFromDomain: (value: string) => void;
  userIPAddress: string;
  userIPIsLoading: boolean;
  userIPError: any;
  getUserIP: () => Promise<void>;
}

export interface DNSData {
  Status: number;
  TC: boolean;
  RD: boolean;
  RA: boolean;
  AD: boolean;
  CD: boolean;
  Question: [
    {
      name: string;
      type: number;
    }
  ];
  Answer: [
    {
      name: string;
      type: number;
      TTL: number;
      data: string;
    }
  ];
}
