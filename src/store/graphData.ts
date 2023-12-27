import { create } from 'zustand'
import { DataItem } from '@/types/chartArray';

interface graphData {
  date: string | null;
  startRangeDay: string | null;
  endRangeDay: string | null;
  graphData: DataItem | null;
  avgGraphData: DataItem | null;
  updateDate: (newDate: string) => void;
  setStartRangeDay: (newDate: string) => void;
  setEndRangeDay: (newDate: string) => void;
  setGraphData: (data: DataItem) => void;
  setAvgGraphData: (data: DataItem) => void;
}

export const useGraphData = create<graphData>()((set) => ({
  date: '2022-01-23',
  startRangeDay: '2022-01-11',
  endRangeDay: '2022-01-18',
  graphData: null,
  avgGraphData: null,
  updateDate: (newDate: string) => set(() => ({date : newDate, startRangeDay: null, endRangeDay: null })),
  setStartRangeDay: (newDate: string) => set(() => ({startRangeDay: newDate, date: null, graphData: null})),
  setEndRangeDay: (newDate: string) => set(() => ({endRangeDay: newDate, date: null, graphData: null})),
  setGraphData: (data: DataItem) => set(() => ({graphData: data})),
  setAvgGraphData: (data: DataItem) => set(() => ({avgGraphData: data})),
}))