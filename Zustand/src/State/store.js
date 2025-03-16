import { create } from "zustand";
import { combine } from "zustand/middleware";

const useStore = create(
  combine(
    {
      bears: 0,
      firstName: "Ashok",
      lastName: "Alagesan",
    },
    (set) => ({
      increasePopulation: (by) => set((state) => ({ bears: state.bears + by })),
      removeAllBears: () => set({ bears: 0 }),
      updateBears: (newBears) => set({ bears: newBears }),
      updateFirstName: (firstName) => set(() => ({ firstName })),
      updateLastName: (lastName) => set(() => ({ lastName })),
    })
  )
);

export default useStore;
