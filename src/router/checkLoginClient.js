import axios from "axios";
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import baseRequest from "@/baseAPI/baseRequest";

export default async function (to, from, next) {
    const toast = useToast();
    const check = localStorage.getItem('access_token');
    const profile = localStorage.getItem('profile');
    if (check && profile !== 'undefined' && profile) {
        next();
        return;
    }
    try {
        const res = await axios.get('http://localhost:4000/users/me', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('access_token')
            }
        });

        if (res.status === 200) {
            localStorage.setItem('profile', JSON.stringify(res.data.result));
            console.log(res);
            next();
        } else {
            toast.warning('Thông báo<br>Bạn cần đăng nhập hệ thống trước!', {
                position: 'bottom-right',
            });
            next('/');
        }
    } catch (error) {
        toast.warning('Thông báo<br>Bạn cần đăng nhập hệ thống trước!', {
            position: 'bottom-right'
        });
        next('/');
    }
}