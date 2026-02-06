import type { StateCreator } from 'zustand'

import type { BookingStore } from '@/modules/store'

interface OverviewSlice {
  hasViewedOverview: boolean
  setHasViewedOverview: (value: boolean) => void
}

const createOverviewSlice: StateCreator<
  BookingStore,
  [['zustand/immer', never]],
  [],
  OverviewSlice
> = (set) => ({
  hasViewedOverview: false,
  setHasViewedOverview: (value) =>
    set((state) => {
      state.hasViewedOverview = value
    }),
})

export { createOverviewSlice }
export type { OverviewSlice }
