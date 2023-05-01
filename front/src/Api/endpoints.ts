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
  flashCardEditEndpoint: (id: number) => `/flashcards/Update/${id}/`,
  deleteFlashCardEndpoint: (id: number) => `/flashcards/Delete/${id}/`,
  //Not tested
  getSettingsEndpoint: "/Settings/",
  changeSettingsEndpoint: "/Settings/Change/",
  // Probably for change
};

export default endpoints;
