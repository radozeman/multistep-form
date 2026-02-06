import type { StateCreator } from 'zustand'

import type { BookingStore } from '@/modules/store'

interface GuestsSlice {
  guestCount: number
  setGuestCount: (count: number) => void
}

const createGuestsSlice: StateCreator<
  BookingStore,
  [['zustand/immer', never]],
  [],
  GuestsSlice
> = (set) => ({
  guestCount: 1,
  setGuestCount: (count) =>
    set((state) => {
      state.guestCount = count
    }),
})

export { createGuestsSlice }
export type { GuestsSlice }
