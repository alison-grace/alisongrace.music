import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Error({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, []);

  return null;
}
