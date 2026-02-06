import type { StateCreator } from 'zustand'

import type { BookingStore } from '@/modules/store'

interface ShuttleServiceSlice {
  needsShuttle: boolean
  setNeedsShuttle: (value: boolean) => void
}

const createShuttleServiceSlice: StateCreator<
  BookingStore,
  [['zustand/immer', never]],
  [],
  ShuttleServiceSlice
> = (set) => ({
  needsShuttle: false,
  setNeedsShuttle: (value) =>
    set((state) => {
      state.needsShuttle = value
    }),
})

export { createShuttleServiceSlice }
export type { ShuttleServiceSlice }
