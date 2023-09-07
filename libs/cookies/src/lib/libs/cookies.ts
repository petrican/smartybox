interface CookieType {
  cookieName: string;
  cookieValue: string;
  expireDays: number;
}

export function setCookie(cookie: CookieType): void {
  const currentDate = new Date();
  // cookie expiration will be set to the number of expireDays (passed within cookie object -> expireDays) from the current time
  currentDate.setTime(
    currentDate.getTime() + cookie.expireDays * 24 * 60 * 60 * 1000
  );
  const expiresIn = "expires=" + currentDate.toUTCString();
  document.cookie =
    cookie.cookieName +
    "=" +
    cookie.cookieValue +
    ";" +
    expiresIn +
    ";Secure;path=/";
}

export function getCookie(cookieName: string) {
  const lookupCookie = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const foundCookie = decodedCookie.split(";");
  for (let i = 0; i < foundCookie.length; i++) {
    let cookieItem = foundCookie[i];
    while (cookieItem.charAt(0) === " ") {
      cookieItem = cookieItem.substring(1);
    }
    if (cookieItem.indexOf(lookupCookie) === 0) {
      return cookieItem.substring(lookupCookie.length, cookieItem.length);
    }
  }
  return "";
}

export function deleteCookie(cookieName: string) {
  document.cookie =
    cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
