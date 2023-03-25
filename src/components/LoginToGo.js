import Link from "next/link";

const LoginToGo = (props) => {
  return (
    <Link href={"/auth/login"}>
      <h1 style={{ textAlign: "center" }}>
        Please Login to acess full functonallity
      </h1>
    </Link>
  );
};

export default LoginToGo;
