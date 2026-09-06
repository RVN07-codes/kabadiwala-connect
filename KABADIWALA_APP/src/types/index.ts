export type UserRole = 'collector' | 'recycler';

export type ScrapCategory =
  | 'Paper'
  | 'Plastic'
  | 'Metal'
  | 'E-Waste'
  | 'Battery'
  | 'PCB'
  | 'Cable';

export type LotStatus =
  | 'Draft'
  | 'Listed'
  | 'Pickup Requested'
  | 'Accepted'
  | 'Picked Up'
  | 'Handover Completed'
  | 'Payment Completed';

export interface ScrapLot {
  id: string;
  category: ScrapCategory;
  material: string;
  weight: number;
  unit: 'kg';
  estimatedValue: number;
  quotedPrice?: number;
  finalPrice?: number;
  status: LotStatus;
  collectorId: string;
  recyclerId?: string;
  location: string;
  createdAt: string;
}

export interface Recycler {
  id: string;
  name: string;
  location: string;
  distance: number;
  rating: number;
  authorized: boolean;
  materials: ScrapCategory[];
  pickupAvailable: boolean;
  priceMultiplier: number;
}

export interface Transaction {
  id: string;
  lotId: string;
  amount: number;
  status: 'Pending' | 'Paid';
  date: string;
}