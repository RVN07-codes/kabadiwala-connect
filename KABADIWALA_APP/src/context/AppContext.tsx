import React, { createContext, useContext, useState } from 'react';
import { ScrapLot, UserRole, Recycler, Transaction } from '@/types';
import { mockLots, mockRecyclers } from '@/data/mockData';

interface AppContextType {
  role: UserRole | null;
  setRole: (role: UserRole) => void;

  lots: ScrapLot[];
  recyclers: Recycler[];
  transactions: Transaction[];

  selectedLot: ScrapLot | null;
  setSelectedLot: (lot: ScrapLot | null) => void;

  createLot: (
    category: ScrapLot['category'],
    material: string,
    weight: number,
    estimatedValue: number
  ) => ScrapLot;

  updateLot: (id: string, updates: Partial<ScrapLot>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<UserRole | null>(null);

  const [lots, setLots] = useState<ScrapLot[]>(mockLots);

  const [recyclers] = useState<Recycler[]>(mockRecyclers);

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const [selectedLot, setSelectedLot] = useState<ScrapLot | null>(null);

  const createLot = (
    category: ScrapLot['category'],
    material: string,
    weight: number,
    estimatedValue: number
  ) => {
    const newLot: ScrapLot = {
      id: `LOT-S2C-${String(lots.length + 1).padStart(4, '0')}`,
      category,
      material,
      weight,
      unit: 'kg',
      estimatedValue,
      status: 'Listed',
      collectorId: 'COL001',
      location: 'Bhusawal, Maharashtra',
      createdAt: new Date().toISOString(),
    };

    setLots((previous) => [...previous, newLot]);

    return newLot;
  };

  const updateLot = (id: string, updates: Partial<ScrapLot>) => {
    setLots((previous) =>
      previous.map((lot) =>
        lot.id === id ? { ...lot, ...updates } : lot
      )
    );

    setSelectedLot((current) =>
      current && current.id === id
        ? { ...current, ...updates }
        : current
    );
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        lots,
        recyclers,
        transactions,
        selectedLot,
        setSelectedLot,
        createLot,
        updateLot,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApp must be used inside AppProvider');
  }

  return context;
}