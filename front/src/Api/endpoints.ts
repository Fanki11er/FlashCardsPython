const endpoints = {
  baseURL: "http://localhost:8000",
  registerEndpoint: "/auth/register/",
  loginEndpoint: "/auth/login/",
  refreshToken: "/login/refresh/",
  statusEndpoint: "/flashcards/Status/",
  getUser: "/me/",
  //Not tested
  createFlashCardEndpoint: "/flashcards/Create/",
  learnEndpoint: "/flashcards/Learn/",
  allFlashCards: "/flashcards/All/",
  // Probably for change
  flashCardEditEndpoint: "/flashcards/Update/",
  settingsEndpoint: "/account/Settings",
  deleteFlashCardEndpoint: "/flashcards/Delete",
  updateLearnedFlashCardEndpoint: "/FlashCards/Learn/Update",
};

export default endpoints;
