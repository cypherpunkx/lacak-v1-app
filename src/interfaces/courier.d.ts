import { ReactNode } from "react";

export interface CourierOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

interface DetailProps {
  origin: string;
  destination: string;
  shipper: string;
  receiver: string;
}

interface HistoryProps {
  date: string;
  desc: string;
  location: string;
}

interface SummaryProps {
  awb: string;
  courier: string;
  service: string;
  status: string;
  date: string;
  desc: string;
  amount: string;
  weight: string;
}

export interface InfoProps {
  data?: DataProps;
  status?: number;
}

export interface DataProps {
  summary: SummaryProps;
  detail: DetailProps;
  history: HistoryProps[];
}
