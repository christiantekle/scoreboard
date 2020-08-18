import Api from "./Api";

export const getGames = async () => {
  const api = new Api();

  try {
    const response = await api.get("/api/games");
    return response;
  } catch (error) {
    // TODO implement error handling: notify the user that sth went wrong
    console.log(error);
  }
};

export const addGame = async (name) => {
  const api = new Api();

  try {
    const response = await api.post("/api/games", {
      name,
      status: "Game Started",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
