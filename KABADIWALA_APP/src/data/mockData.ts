import { Recycler, ScrapLot } from '@/types';

export const mockRecyclers: Recycler[] = [
  {
    id: 'REC001',
    name: 'GreenCycle Recycling',
    location: 'Jalgaon, Maharashtra',
    distance: 12.4,
    rating: 4.8,
    authorized: true,
    materials: [
      'Mobile Phones',
      'Computers & Laptops',
      'LCD / LED Displays',
      'PCB',
      'Cables & Wires',
      'Battery',
    ],
    pickupAvailable: true,
    priceMultiplier: 1.05,
  },

  {
    id: 'REC002',
    name: 'EcoMetal Recyclers',
    location: 'Bhusawal, Maharashtra',
    distance: 4.2,
    rating: 4.6,
    authorized: true,
    materials: [
      'Mobile Phones',
      'Cables & Wires',
      'Battery',
      'Motors & Components',
    ],
    pickupAvailable: true,
    priceMultiplier: 1.0,
  },

  {
    id: 'REC003',
    name: 'TechCycle Solutions',
    location: 'Nashik, Maharashtra',
    distance: 82,
    rating: 4.7,
    authorized: true,
    materials: [
      'Mobile Phones',
      'Computers & Laptops',
      'PCB',
      'Battery',
      'LCD / LED Displays',
    ],
    pickupAvailable: false,
    priceMultiplier: 1.12,
  },
];

export const mockLots: ScrapLot[] = [
  {
    id: 'LOT-S2C-0001',
    category: 'PCB',
    material: 'Printed Circuit Boards',
    weight: 8.5,
    unit: 'kg',
    estimatedValue: 1275,
    status: 'Listed',
    collectorId: 'COL001',
    location: 'Bhusawal, Maharashtra',
    createdAt: '2026-09-06',
  },

  {
    id: 'LOT-S2C-0002',
    category: 'Cables & Wires',
    material: 'Copper Electronic Cables',
    weight: 12.75,
    unit: 'kg',
    estimatedValue: 828,
    status: 'Listed',
    collectorId: 'COL002',
    location: 'Bhusawal, Maharashtra',
    createdAt: '2026-09-06',
  },

  {
    id: 'LOT-S2C-0003',
    category: 'Computers & Laptops',
    material: 'Mixed Laptop Components',
    weight: 6.25,
    unit: 'kg',
    estimatedValue: 1750,
    status: 'Listed',
    collectorId: 'COL003',
    location: 'Bhusawal, Maharashtra',
    createdAt: '2026-09-06',
  },
];