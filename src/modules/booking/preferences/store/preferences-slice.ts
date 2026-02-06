import type { StateCreator } from 'zustand'

import type { BookingStore } from '@/modules/store'

interface PreferencesSlice {
  preferenceNotes: string
  setPreferenceNotes: (notes: string) => void
}

const createPreferencesSlice: StateCreator<
  BookingStore,
  [['zustand/immer', never]],
  [],
  PreferencesSlice
> = (set) => ({
  preferenceNotes: '',
  setPreferenceNotes: (notes) =>
    set((state) => {
      state.preferenceNotes = notes
    }),
})

export { createPreferencesSlice }
export type { PreferencesSlice }
