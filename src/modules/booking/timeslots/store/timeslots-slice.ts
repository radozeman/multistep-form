import type { StateCreator } from 'zustand'

import type { BookingStore } from '@/modules/store'

interface TimeslotsSlice {
  selectedTimeslot: string | null
  setSelectedTimeslot: (timeslot: string | null) => void
}

const createTimeslotsSlice: StateCreator<
  BookingStore,
  [['zustand/immer', never]],
  [],
  TimeslotsSlice
> = (set) => ({
  selectedTimeslot: null,
  setSelectedTimeslot: (timeslot) =>
    set((state) => {
      state.selectedTimeslot = timeslot
    }),
})

export { createTimeslotsSlice }
export type { TimeslotsSlice }
