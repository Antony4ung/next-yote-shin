import axios from "axios";

export const fetchVideoParams = async (id,type,callback) => {
  const videoParamsArr = await axios.get(
    `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=143d8b8fb24e648fe921adc63cfb0c67&language=en-US`
  );
  const videoKeyArr = videoParamsArr?.data.results
    .slice(0, 3)
    .map((item) => item.key);

    callback(videoKeyArr)
};

export const fetchDetails = async (id,type,callback) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=143d8b8fb24e648fe921adc63cfb0c67&language=en-US`
  );
  callback(data);
};
