import type { StateCreator } from 'zustand'

import type { BookingStore } from '@/modules/store'

interface ReservationSlice {
  reservationDate: string | null
  setReservationDate: (date: string | null) => void
}

const createReservationSlice: StateCreator<
  BookingStore,
  [['zustand/immer', never]],
  [],
  ReservationSlice
> = (set) => ({
  reservationDate: null,
  setReservationDate: (date) =>
    set((state) => {
      state.reservationDate = date
    }),
})

export { createReservationSlice }
export type { ReservationSlice }
