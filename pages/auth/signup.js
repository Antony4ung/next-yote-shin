import { getProviders, getSession, signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Box, Button, TextField, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from "react-toastify";
import Image from "next/image";
import logo from '../../public/logo.png'
export default function SignUp() {
  const { data: session } = useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnteredPassword, setReEnteredPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSignUp = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@") || !password) {
      toast.error("Invalid details");
      return;
    }
    //POST form values
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        reEnteredPassword:reEnteredPassword
      }),
    });
    //Await for data for any desirable next steps
    const data = await res.json();

    if (data.message === "User created") {
      router.push("/auth/signin");
      toast.success(data.message);
    } else {
      toast.error(data.message);
      setPassword("");
      setReEnteredPassword("")
    }

    return;
    // console.log("done 2")
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Box sx={{ width: "350px" }}>
      <Box sx={{width:"100%",mb:3,display:"flex",justifyContent:"center"}}>
      <Image alt="" src={logo} width={70} height={70}/>
      </Box>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Yote Shin SignUp{" "}
        </h2>
        <Box
          component="form"
          onSubmit={onSignUp}
          sx={{ width: "100%", mb: 5 }}
          noValidate
          autoComplete="off"
        >
          <Box>
            <TextField
              sx={{ width: "100%", my: 2, minWidth: "300px" }}
              label="Name"
              variant="standard"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box>
            <TextField
              sx={{ width: "100%", my: 2, minWidth: "300px" }}
              label="Email"
              variant="standard"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box>
            <TextField
              sx={{ width: "100%", my: 2, minWidth: "300px" }}
              label="Password"
              variant="standard"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box>
            <TextField
              sx={{ width: "100%", my: 2, minWidth: "300px" }}
              label="Re-enter Password"
              variant="standard"
              type="password"
              value={reEnteredPassword}
              onChange={(e) => setReEnteredPassword(e.target.value)}
            />
          </Box>

          <Button
            onClick={onSignUp}
            value="Send"
            variant="contained"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Box>

        <Box sx={{}}>
          <h4 style={{ textAlign: "center" }}>
            {" "}
            Already have an account ?{" "}
            <Link href="/auth/signin">
              <a>SignIn</a>
            </Link>{" "}
          </h4>
        </Box>
      </Box>
    </Box>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const providers = await getProviders(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session: session },
  };
}

SignUp.getLayout = function (page) {
  return <>{page}</>;
};