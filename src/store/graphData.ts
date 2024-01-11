import { create } from 'zustand'
import { DataItem } from '@/types/chartArray';

interface graphData {
  date: string | null;
  startRangeDay: string | null;
  endRangeDay: string | null;
  graphData: DataItem | null;
  avgGraphData: DataItem | null;
  showGraph: string;
  updateDate: (newDate: string) => void;
  setStartRangeDay: (newDate: string) => void;
  setEndRangeDay: (newDate: string) => void;
  setGraphData: (data: DataItem) => void;
  setAvgGraphData: (data: DataItem) => void;
  setShowGraph: (newGraph: string) => void;
}

export const useGraphData = create<graphData>()((set) => ({
  date: '2022-01-23',
  startRangeDay: '2022-01-11',
  endRangeDay: '2022-01-18',
  graphData: null,
  avgGraphData: null,
  showGraph: 'hourly',
  updateDate: (newDate: string) => set(() => ({date : newDate, showGraph: 'hourly'})),
  setStartRangeDay: (newDate: string) => set(() => ({startRangeDay: newDate, showGraph: 'daily'})),
  setEndRangeDay: (newDate: string) => set(() => ({endRangeDay: newDate, showGraph: 'daily'})),
  setGraphData: (data: DataItem) => set(() => ({graphData: data})),
  setAvgGraphData: (data: DataItem) => set(() => ({avgGraphData: data})),
  setShowGraph: (newGraph: string) => set(() => ({showGraph: newGraph})),
}))