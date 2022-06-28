import { Box, CircularProgress } from "@mui/material";
import { getSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../components/Banner";
import ModalCom from "../../components/Modal";
import VideoRow from "../../components/Row";
import {
  getPopularTv,
  getOriginalsTv,
  getTopRatedTv,
  getActionTv,
  getComedyTv,
  getHorrorTv,
  getRomanceTv,
  getDocumentariesTv,
} from "../../redux/actions/videoAction";

export default function Component() {

  const dispatch = useDispatch();

  const originalData = useSelector(
    (state) => state.originalsTvReducer.original?.results
  );
  const trendingData = useSelector(
    (state) => state.trendingTvReducer.trending?.results
  );
  const topRatedData = useSelector(
    (state) => state.topRatedTvReducer.topRated?.results
  );
  const actionVideoData = useSelector(
    (state) => state.actionTvReducer.action?.results
  );
  const comedyData = useSelector(
    (state) => state.comedyTvReducer.comedy?.results
  );
  const horrorData = useSelector(
    (state) => state.horrorTvReducer.horror?.results
  );
  const romanceData = useSelector(
    (state) => state.romanceTvReducer.romance?.results
  );
  const documentaryData = useSelector(
    (state) => state.documentaryTvReducer.documentary?.results
  );


  useEffect(() => {
    dispatch(getPopularTv(1));
    dispatch(getOriginalsTv(1));
    dispatch(getTopRatedTv(1));
    dispatch(getActionTv(1));
    dispatch(getComedyTv(1));
    dispatch(getHorrorTv(1));
    dispatch(getRomanceTv(1));
    dispatch(getDocumentariesTv(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{}}>
      

      {originalData ? (
        <Banner type="tv" isTv data={originalData} />
      ) : (
        <Box
          sx={{
            display: "flex",
            py: 3,
            justifyContent: "center",
            width: "100%",
            height: "95vh",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {trendingData ? (
        <VideoRow title="Trendings" type="tv" data={trendingData} />
      ) : (
        <Box
          sx={{
            display: "flex",
            py: 3,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {topRatedData ? (
        <VideoRow title="Top rated" type="tv" data={topRatedData} />
      ) : (
        <Box
          sx={{
            display: "flex",
            py: 3,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {actionVideoData ? (
        <VideoRow title="Action" type="tv" data={actionVideoData} />
      ) : (
        <Box
          sx={{
            display: "flex",
            py: 3,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {comedyData ? (
        <VideoRow title="Comedy" type="tv" data={comedyData} />
      ) : (
        <Box
          sx={{
            display: "flex",
            py: 3,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {horrorData ? (
        <VideoRow title="Horror" type="tv" data={horrorData} />
      ) : (
        <Box
          sx={{
            display: "flex",
            py: 3,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {romanceData ? (
        <VideoRow title="Romance" type="tv" data={romanceData} />
      ) : (
        <Box
          sx={{
            display: "flex",
            py: 3,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {documentaryData ? (
        <VideoRow title="Documentary" type="tv" data={documentaryData} />
      ) : (
        <Box
          sx={{
            display: "flex",
            py: 3,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
