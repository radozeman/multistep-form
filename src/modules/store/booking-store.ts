import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { createJSONStorage, persist } from 'zustand/middleware'

import {
  createCompletionSlice,
  type CompletionSlice,
} from '@/modules/booking/completion/store'
import {
  createGuestsSlice,
  type GuestsSlice,
} from '@/modules/booking/guests/store'
import {
  createOverviewSlice,
  type OverviewSlice,
} from '@/modules/booking/overview/store'
import {
  createPreferencesSlice,
  type PreferencesSlice,
} from '@/modules/booking/preferences/store'
import {
  createProgramsSlice,
  type ProgramsSlice,
} from '@/modules/booking/programs/store'
import {
  createReservationSlice,
  type ReservationSlice,
} from '@/modules/booking/reservation/store'
import {
  createReviewSlice,
  type ReviewSlice,
} from '@/modules/booking/review/store'
import {
  createShuttleServiceSlice,
  type ShuttleServiceSlice,
} from '@/modules/booking/shuttle-service/store'
import {
  createSpecialRequestsSlice,
  type SpecialRequestsSlice,
} from '@/modules/booking/special-requests/store'
import {
  createTimeslotsSlice,
  type TimeslotsSlice,
} from '@/modules/booking/timeslots/store'

type BookingStore = CompletionSlice &
  GuestsSlice &
  OverviewSlice &
  PreferencesSlice &
  ProgramsSlice &
  ReservationSlice &
  ReviewSlice &
  ShuttleServiceSlice &
  SpecialRequestsSlice &
  TimeslotsSlice

const useBookingStore = create<BookingStore>()(
  persist(
    immer((...a) => ({
      ...createCompletionSlice(...a),
      ...createGuestsSlice(...a),
      ...createOverviewSlice(...a),
      ...createPreferencesSlice(...a),
      ...createProgramsSlice(...a),
      ...createReservationSlice(...a),
      ...createReviewSlice(...a),
      ...createShuttleServiceSlice(...a),
      ...createSpecialRequestsSlice(...a),
      ...createTimeslotsSlice(...a),
    })),
    {
      name: 'booking-store',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export { useBookingStore }
export type { BookingStore }
