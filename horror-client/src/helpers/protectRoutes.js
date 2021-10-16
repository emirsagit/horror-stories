import { useRouter } from "next/router";
import { REDIRECT_AFTER_AUTH } from "../constants/env";

export default function protectRoutes(pageProps, user) {
  const router = useRouter();

  if (pageProps.protected && !user) {
    return <Layout>Loading...</Layout>;
  } else if (pageProps.isRedirect && user) {
    router.push(REDIRECT_AFTER_AUTH);
  }
}
