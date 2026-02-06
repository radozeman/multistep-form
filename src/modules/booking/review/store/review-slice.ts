import type { StateCreator } from 'zustand'

import type { BookingStore } from '@/modules/store'

interface ReviewSlice {
  hasReviewed: boolean
  setHasReviewed: (value: boolean) => void
}

const createReviewSlice: StateCreator<
  BookingStore,
  [['zustand/immer', never]],
  [],
  ReviewSlice
> = (set) => ({
  hasReviewed: false,
  setHasReviewed: (value) =>
    set((state) => {
      state.hasReviewed = value
    }),
})

export { createReviewSlice }
export type { ReviewSlice }
