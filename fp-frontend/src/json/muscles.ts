import { IMuscle } from "../model/IMuscle"

export const getMuscles: () => Array<IMuscle> = () => [
  {
    muscleId: 1,
    muscleName: "Chest",
    items: [{
      itemId: 1,
      itemName: "Barbell Bench Press",
      state: 1,
      imgName: 'bench-press.gif'
    },
    {
      itemId: 2,
      itemName: "DumbBell Bench Press",
      state: 1,
      imgName: 'dumbbell-bench-press.gif'
    }]
  },
  {
    muscleId: 2,
    muscleName: "Back",
    items: [{
      itemId: 3,
      itemName: "Barbell Bench Press",
      state: 1,
      imgName: 'bench-press.gif'
    }]
  },
  {
    muscleId: 3,
    muscleName: "Shoulder",
    items: [{
      itemId: 1,
      itemName: "Barbell Bench Press",
      state: 1,
      imgName: 'bench-press.gif'
    },
    {
      itemId: 1,
      itemName: "Barbell Bench Press",
      state: 1,
      imgName: 'bench-press.gif'
    },
    {
      itemId: 1,
      itemName: "Barbell Bench Press",
      state: 1,
      imgName: 'bench-press.gif'
    }]
  }
]