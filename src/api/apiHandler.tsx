import { CancelToken } from 'axios';
import axiosClient from './apiClient';

export const getLaunches = (
  windowStart: string,
  windowEnd: string,
  agency: string,
  signal: AbortSignal
) => {
  return axiosClient.get(
    `/launch?window_start__gte=${windowStart}&window_end__lte=${windowEnd}`,
    { signal }
  );
};

export const getAgencies = (signal: AbortSignal) => {
  return axiosClient.get('/agencies', { signal });
};
