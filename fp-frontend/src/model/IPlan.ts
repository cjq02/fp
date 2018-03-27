import { IMuscle } from "./IMuscle"

export interface IPlan {
    planId?: number,
    planName?: string,
    items?: Array<IMuscle>
}