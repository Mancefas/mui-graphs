import { create } from 'zustand'
import { DataItem } from '@/types/chartArray';

interface graphDayData {
  date: string;
  updateDate: (newDate: string) => void;
  graphData: DataItem | null;
  setGraphData: (data: DataItem) => void;
}

export const useGraphDayData = create<graphDayData>()((set) => ({
  date: '2022-01-23',
  updateDate: (newDate: string) => set(() => ({date : newDate})),
  graphData: null,
  setGraphData: (data: DataItem) => set(() => ({graphData: data})),
}))