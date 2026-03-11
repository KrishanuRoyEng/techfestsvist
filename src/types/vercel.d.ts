import { ReactNode } from 'react';

declare module '@vercel/speed-insights/next' {
  export function SpeedInsights(props: {
    sampleRate?: number;
    route?: string;
    beforeSend?: (data: any) => any;
    debug?: boolean;
    endpoint?: string;
  }): ReactNode;
}

declare module '@vercel/analytics/next' {
  export function Analytics(props: {
    beforeSend?: (event: any) => any | null;
    debug?: boolean;
    mode?: 'development' | 'production' | 'test';
  }): ReactNode;
}
