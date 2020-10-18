import { TABLE_RESIZE } from "./types";
// ACTION CREATOR
export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data,
  }
}