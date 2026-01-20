import React from 'react';

export interface Tile {
  id: number;
  type: 'man' | 'pin' | 'sou' | 'honors';
  value: number;
  symbol: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}