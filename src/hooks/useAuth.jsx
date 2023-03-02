import Cookies from "js-cookie";

const useAuth = () => {
    const cookie = Cookies.get("JWT")
    console.log(cookie)

   return cookie !== undefined
}
export default useAuth;