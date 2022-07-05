const { fetchProvincesService, fetchCitiesService } = require("../services");

const API = "https://api.rajaongkir.com/starter";

const fetchProvincesController = async (req, res) => {
  try {
    const data = await fetchProvincesService();
    return res.status(200).send({
      success: true,
      message: "Provinces data",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("failed");
  }
};

const fetchCitiesController = async (req, res) => {
  try {
    const data = await fetchCitiesService(req);
    return res.status(200).send({
      success: true,
      message: "Cities data",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("failed");
  }
};
module.exports = { fetchProvincesController, fetchCitiesController };
