import { getProviders, getSession, signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Box, Button, TextField, useTheme } from "@mui/material";
import LoginBtn from "../../components/LoginBtn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from "react-toastify";
import logo from '../../public/logo.png'
import Image from "next/image";

export default function Signin({ providers }) {
  const { data: session } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
      
    });

    if (result.ok) {
      toast.success("Login success");
      router.push('/')
    }

    if (result.error) {
      toast.error(result.error);
      setEmail("");
      setPassword("");
    }
  };

  

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        
      }}
    >
      <Box sx={{ width: "350px" }}>
      <Box sx={{width:"100%",mb:3,display:"flex",justifyContent:"center"}}>
      <Image alt="" src={logo} width={70} height={70}/>
      </Box>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Yote Shin SignIn{" "}
        </h2>
        <Box
          component="form"
          onSubmit={handleSignIn}
          sx={{ width: "100%", mb: 5 }}
          noValidate
          autoComplete="off"
        >
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

          <Button
            onClick={handleSignIn}
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
            Do not have an account ?{" "}
            <Link href="/auth/signup">
              <a>SignUp</a>
            </Link>{" "}
          </h4>
        </Box>

        <LoginBtn
          name={providers?.google.name}
          fun={providers?.google.id}
          color="error"
          icon={<GoogleIcon sx={{ ml: 2 }} />}
        />
        <LoginBtn
          name={providers?.github.name}
          fun={providers?.github.id}
          color="warning"
          icon={<GitHubIcon sx={{ ml: 2 }} />}
        />
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
    props: { providers: providers },
  };
}

Signin.getLayout = function (page) {
  return <>{page}</>;
};
