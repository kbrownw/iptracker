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
  getIPData: (value?: string) => void;
}
