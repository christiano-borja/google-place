import { SnackbarProgrammatic as Snackbar } from "buefy";

function _display({
  message,
  type = "is-white",
  position = "is-bottom",
  actionText = "OK",
  queue = true,
  duration = 5000
}) {
  Snackbar.open({ message, type, position, actionText, queue, duration });
}

function displaySuccess(message) {
  _display({ message, type: "is-success" });
}

function displayError(message) {
  _display({ message, type: "is-danger" });
}

function displayInfo(message) {
  _display({ message, type: "is-info" });
}

export const messageHelper = {
  displaySuccess,
  displayError,
  displayInfo
};
