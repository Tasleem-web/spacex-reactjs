import { FILTER_ACTION } from "./type";


export function filterCapsule(dataToSubmit) {
    console.log("dataToSubmit", dataToSubmit);
    return {
        type: FILTER_ACTION,
        payload: dataToSubmit
    }
}