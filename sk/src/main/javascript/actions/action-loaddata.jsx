export const LOAD_DATA = {
    LOAD: "LOAD_DATA_LOAD",
    SUCCESS: "LOAD_DATA_SUCCESS",
    FAILURE: "LOAD_DATA_FAILURE"
};

export const dataLoaded = (data) => {
    return {
        type: LOAD_DATA.SUCCESS,
        payload: data
    };
};

export const dataLoadFailed = (error) => {
    return {
        type: LOAD_DATA.FAILURE,
        payload: error
    };
};

export const loadData = (data) => {
    return {
        type: LOAD_DATA.LOAD,
        payload: data
    };
};
