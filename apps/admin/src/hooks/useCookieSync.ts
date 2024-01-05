import { createEffect, createSignal, onCleanup } from "solid-js";
import { getCookie } from "@smartybox/libs/cookies";

// Custom hook for syncing a state with a cookie
const useCookieSync = () => {
  // Create a shared state using createSignal
  const [sharedState, setSharedState] = createSignal({
    token: getCookie("token") || "",
  });

  // Create an effect to sync the shared state with the cookie
  createEffect(() => {
    // Function to handle changes in the cookie
    const handleCookieChange = () => {
      const newToken = getCookie("token") || "";
      setSharedState((prev) => ({ ...prev, token: newToken }));
    };

    window.addEventListener("cookieChange", handleCookieChange);

    // Cleanup function to remove the event listener when the component unmounts
    onCleanup(() => {
      window.removeEventListener("cookieChange", handleCookieChange);
    });
  }, []); // The empty dependency array ensures the effect runs only once during component mount

  return [sharedState, setSharedState];
};

export default useCookieSync;
