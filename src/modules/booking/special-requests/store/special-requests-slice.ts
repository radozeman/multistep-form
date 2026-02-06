import type { StateCreator } from 'zustand'

import type { BookingStore } from '@/modules/store'

interface SpecialRequestsSlice {
  specialRequestNotes: string
  setSpecialRequestNotes: (notes: string) => void
}

const createSpecialRequestsSlice: StateCreator<
  BookingStore,
  [['zustand/immer', never]],
  [],
  SpecialRequestsSlice
> = (set) => ({
  specialRequestNotes: '',
  setSpecialRequestNotes: (notes) =>
    set((state) => {
      state.specialRequestNotes = notes
    }),
})

export { createSpecialRequestsSlice }
export type { SpecialRequestsSlice }
