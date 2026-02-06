import type { StateCreator } from 'zustand'

import type { BookingStore } from '@/modules/store'

interface ProgramsSlice {
  selectedProgramId: string | null
  setSelectedProgramId: (id: string | null) => void
}

const createProgramsSlice: StateCreator<
  BookingStore,
  [['zustand/immer', never]],
  [],
  ProgramsSlice
> = (set) => ({
  selectedProgramId: null,
  setSelectedProgramId: (id) =>
    set((state) => {
      state.selectedProgramId = id
    }),
})

export { createProgramsSlice }
export type { ProgramsSlice }
