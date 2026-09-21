// Cookie setzen und lesen

const setAndDeleteCookie = () => {
  const cookieBtn = document.querySelector(".cookieBtn");
  const cookieDeleteBtn = document.querySelector(".cookieDeleteBtn");
  cookieBtn.addEventListener("click", () => {
    document.cookie = "name=TestCookie; max-age=604800 ";
  });
  cookieDeleteBtn.addEventListener("click", () => {
    document.cookie = "name=TestCookie; max-age=0";
  });
};

const leseCookie = (cookieName) => {
  const cookies = document.cookie.split(";");
  const foundCookie = cookies.find((cookie) =>
    cookie.trim().startsWith(`${cookieName}`),
  );
  if (!foundCookie) return null;
  return foundCookie.trim().split("="[1]);
};

setAndDeleteCookie();
console.log(leseCookie("name"));
