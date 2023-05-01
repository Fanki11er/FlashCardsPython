const endpoints = {
  baseURL: "http://localhost:8000",
  registerEndpoint: "/auth/register/",
  loginEndpoint: "/auth/login/",
  refreshToken: "/login/refresh/",
  statusEndpoint: "/flashcards/Status/",
  getUser: "/me/",
  createFlashCardEndpoint: "/flashcards/Create/",
  allFlashCards: "/flashcards/All/",
  learnEndpoint: "/flashcards/Learn/",
  updateLearnedFlashCardEndpoint: (id: number) => `/flashcards/Check/${id}/`,
  //Not tested
  // Probably for change
  flashCardEditEndpoint: "/flashcards/Update/",
  settingsEndpoint: "/account/Settings",
  deleteFlashCardEndpoint: "/flashcards/Delete",
};

export default endpoints;
