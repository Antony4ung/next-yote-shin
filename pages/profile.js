/* eslint-disable @next/next/no-img-element */
import { Box, Button, Container } from "@mui/material";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Component() {
  const { data: session, status } = useSession();

  if (status === "loading") return <h3>Loading...</h3>;

  return (
    <Box sx={{width:"100vw",height:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Container sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h4> Signed in as {session?.user.email}</h4>
        <Button color="error" variant="contained" sx={{mt:2}} onClick={() => signOut()}>Sign out</Button>
      </Container>
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
