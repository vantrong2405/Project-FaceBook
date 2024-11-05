import { getAccessTokenFromLS, setAccessTokenToLS, setProfileToLS } from "@/utils/auth";
import { HttpStatusCode } from "@/views/client/constant/httpStatusCode";
import axios from "axios";
import { createApp } from "vue";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

const app = createApp({});
app.use(ToastPlugin);
const toast = app.config.globalProperties.$toast;

class Http {
  constructor() {
    this.updateToken();
    this.instance = axios.create({
      baseURL: "http://localhost:4000/",
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.initializeInterceptors()
  }

  updateToken() {
    this.accessToken = getAccessTokenFromLS()
  }

  initializeInterceptors() {
    this.instance.interceptors.request.use(
      (config) => {
        this.updateToken()
        if (this.accessToken) {
          config.headers.Authorization = `Bearer ${this.accessToken}`
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.instance.interceptors.response.use(
      (response) => {
        if (response.config.url === "/users/update-me") {
          setProfileToLS(response.data.result);
        }
        return response;
      },
      (error) => {
          let message = error.response?.data?.message || error.message
          if (error.response?.data?.errors) {
            const errorMessages = Object.values(error.response.data.errors)
              .map((err) => err.msg)
              .join(", ");
            message = errorMessages || message;
          }
          if (toast) toast.error(message, { position: "top-right" })
        return Promise.reject(error);
      }
    );
  }
}

const http = new Http().instance;
export default http;
