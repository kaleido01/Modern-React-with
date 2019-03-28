import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 95ee9ed5fa629926d6f78ca3f287c47b80802ad2e45118d72cd73b67bbeacb72"
  }
});
