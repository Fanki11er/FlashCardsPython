const endpoints = {
  baseURL: "https://localhost:8000",
  registerEndpoint: "/account/register",
  loginEndpoint: "/account/login",
  refreshEndpoint: "/Refresh",
  statusEndpoint: "/FlashCards/Status",
  createFlashCardEndpoint: "/FlashCards/Create",
  learnEndpoint: "/FlashCards/Learn/Portion",
  updateLearnedFlashCardEndpoint: "/FlashCards/Learn/Update",
  allFlashCards: "/FlashCards/GetAll",
  flashCardEditEndpoint: "/FlashCards/Edit",
  deleteFlashCardEndpoint: "/FlashCards/Delete",
  settingsEndpoint: "/account/Settings",
  refreshToken: "",
};

export default endpoints;
