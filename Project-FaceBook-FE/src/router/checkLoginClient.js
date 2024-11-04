import apiAuth from "@/apis/auth.api"
import { getAccessTokenFromLS, getProfileFromLS, setProfileToLS } from "@/utils/auth"
import { useToast } from "vue-toast-notification"
import "vue-toast-notification/dist/theme-sugar.css"

export default async function (to, from, next) {
  const toast = useToast()
  const accessToken = getAccessTokenFromLS()
  const profile = getProfileFromLS()
  if (accessToken && profile) {
    next()
    return
  }
  try {
    await apiAuth.checkToken().then((res) => {
      if (res.status === 200) {
        setProfileToLS(res.data.result)
        next()
      } else {
        next("/")
      }
    })
  } catch (error) {
    next("/")
  }
}
