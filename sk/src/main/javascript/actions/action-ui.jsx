export const UI = {
    UPDATE_INPUT: "UI_UPDATE_INPUT",
    SEND_COMMAND: "UI_SEND_COMMAND",
    UPDATE_RESULT: "UI_UPDATE_RESULT",
};

export const updateInput = (input) => {
  return {
      type: UI.UPDATE_INPUT,
      payload: input
  }
};

export const sendCommand = (command) => {
    return {
        type: UI.SEND_COMMAND,
        payload: command
    }
};

export const updateResult = (result) => {
    return {
        type: UI.UPDATE_RESULT,
        payload: result
    }
};