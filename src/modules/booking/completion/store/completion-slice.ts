import type { StateCreator } from 'zustand'

import type { BookingStore } from '@/modules/store'

interface CompletionSlice {
  isCompleted: boolean
  setIsCompleted: (value: boolean) => void
}

const createCompletionSlice: StateCreator<
  BookingStore,
  [['zustand/immer', never]],
  [],
  CompletionSlice
> = (set) => ({
  isCompleted: false,
  setIsCompleted: (value) =>
    set((state) => {
      state.isCompleted = value
    }),
})

export { createCompletionSlice }
export type { CompletionSlice }
