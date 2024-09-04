import { getAccessTokenFromLS, getProfileFromLS } from "@/utils/auth"
import { useToast } from "vue-toast-notification"
import "vue-toast-notification/dist/theme-sugar.css"

export default async function (to, from, next) {
  const toast = useToast()
  const accessToken = getAccessTokenFromLS()
  const profile = getProfileFromLS()
  if (accessToken && profile && profile.role == 1) {
    next()
    return
  }else{
    toast.error('Login failure', {
      position: 'bottom-right'
    })
  }

  try {
    await apiAuth.checkToken().then((res)=>{
      if (res.status === 200) {
        setProfileToLS(res.data.result)
        next()
      } else {
        toast.warning('Thông báo<br>Bạn cần đăng nhập hệ thống trước!', {
          position: 'bottom-right'
        })
        next("/admin/login")
      }
    })
  } catch (error) {
    toast.warning('Thông báo<br>Bạn cần đăng nhập hệ thống trước!', {
      position: 'bottom-right'
    })
    next("/admin/login")
  }
}
