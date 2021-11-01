import { useRouter } from "next/router";
import { REDIRECT_AFTER_AUTH } from "../constants/env";
import { useEffect } from "react";

export default function protectRoutes(pageProps, user, changeNotificationMessage) {
  const router = useRouter();

  useEffect(() => {
    if (pageProps.isRedirect && user) {
      router.push(REDIRECT_AFTER_AUTH);
    } else if (pageProps.mustVerified && !user.is_verified) {
      router.push(REDIRECT_AFTER_AUTH);
      changeNotificationMessage("Erişim için mail adresinizi onaylayın", "caution");
    }
  }, [router, pageProps, user]);
}
