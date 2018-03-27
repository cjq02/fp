import * as _ from "lodash";
import { IItem } from "../model/IItem"
import { IMuscle } from "../model/IMuscle"

const createItems: () => Array<IItem> = () => {
    let itemIndex: number = 3001;
    let items = [
        // chest
        { itemId: itemIndex++, itemName: "Barbell Bench Press", muscleId: 201, imgName: 'bench-press.gif' },
        { itemId: itemIndex++, itemName: "Dumbbell Bench Press", muscleId: 201, imgName: 'dumbbell-bench-press.gif' },
        { itemId: itemIndex++, itemName: "Mechanical Butterfly Pinch", muscleId: 201, imgName: 'mechanical-butterfly-pinch.gif' },
    
        // back
        { itemId: itemIndex++, itemName: "Pullups", muscleId: 202, imgName: 'pullups.gif' },
        { itemId: itemIndex++, itemName: "Reverse Grip Bent-Over Rows", muscleId: 202, imgName: 'reverse-grip-bent-over-rows.gif' },
        { itemId: itemIndex++, itemName: "Wide-Grip Lat Pull-Down", muscleId: 202, imgName: 'wide-grip-lat-pull-down.gif' },
    
        // shoulder
        { itemId: itemIndex++, itemName: "Mechanical Lateral Raise", muscleId: 203, imgName: 'mechanical-lateral-raise.gif' },
        { itemId: itemIndex++, itemName: "Dumbbell Side Lateral Raise", muscleId: 203, imgName: 'dumbbell-side-lateral-raise.gif' }
    ]
    return items;
}

const createMuscles: () => Array<IMuscle> = () => [
    { muscleId: 201, muscleName: "Chest" },
    { muscleId: 202, muscleName: "Back" },
    { muscleId: 203, muscleName: "Shoulders" },
    { muscleId: 204, muscleName: "Biceps" },
    { muscleId: 205, muscleName: "Triceps" }
]

const createCategories = () => {
    let data = _.groupBy(createItems(), "muscleId");
    let result: any[] = [];
    let muscleById = _.keyBy(createMuscles(), "muscleId");

    _.forEach(data, (value, key) => {
        result.push({
            ...muscleById[key],
            items: value
        })
    })
    return result;
}

export const muscleItems  = createItems();
export const muscleCategories  = createCategories();