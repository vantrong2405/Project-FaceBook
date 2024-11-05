<template>
  <div class="-z-30">
    <div class="flex items-center justify-end gap-1 px-4 sm:gap-2">
      <div
        id="menu-box"
        class=" dark:hover:text-black dark:text-black flex cursor-pointer items-center justify-center rounded-full bg-myGray-900 p-2 text-lg transition-colors duration-300 hover:bg-myGray-700"
         @click="toggleDarkMode"
      >
      <CloudSun class=" w-5" v-if="!isDarkMode"/>
        <MoonStar class=" w-5"  v-if="isDarkMode" />
      </div>
      <div
        id="menu-box"
        class="dark:hover:text-black dark:text-black flex cursor-pointer items-center justify-center rounded-full bg-myGray-900 p-2 text-lg transition-colors duration-300 hover:bg-myGray-700"
        @click="(isShowMenu = !isShowMenu), (isShowMore = false), (isShowMessager = false), (isShowNotice = false)"
      >
        <svg-menu class="hidden w-5 lg:block" />
        <svg-create class="block w-5 lg:hidden" />
      </div>

      <div
        id="messenger-box"
        class="dark:hover:text-black dark:text-black flex cursor-pointer items-center justify-center rounded-full bg-myGray-900 p-2 transition-colors duration-300 hover:bg-myGray-700"
        @click="(isShowMenu = false), (isShowMore = false), (isShowMessager = !isShowMessager), (isShowNotice = false)"
      >
        <svg-messenger class="w-5" />
      </div>

      <div
        id="notifications-box"
        @click="
          (isShowMenu = false),
            (isShowMore = false),
            (isShowMessager = false),
            (isShowNotice = !isShowNotice),
            AnimationEvent
        "
        class="dark:hover:text-black dark:text-black flex cursor-pointer items-center justify-center rounded-full bg-myGray-900 p-2 transition-colors duration-300 hover:bg-myGray-700"
      >
        <svg-notifications class="w-5" />
      </div>

      <div
        id="pp-info"
        @click="(isShowMore = !isShowMore), (isShowMenu = false), (isShowMessager = false), (isShowNotice = false)"
        class="dark:hover:text-black dark:text-black flex cursor-pointer items-center justify-center rounded-full bg-myGray-900 transition-colors duration-300 hover:bg-myGray-700"
      >
      <div id="pp" class="relative overflow-hidden rounded-full border" style="width: 34px; height: 34px;">
  <img :src="userCurrent && userCurrent.avatar ? userCurrent.avatar : avatar" alt="" style="width: 100%; height: 100%;" />
</div>
      </div>
    </div>

    <!--Menu-->
    <div v-if="isShowMenu == true">
      <div
        class="dark:hover:text-black dark:text-black absolute right-0 top-full box-border h-[80vh] border-spacing-0 rounded-xl border-2 border-solid bg-gray-100 shadow-2xl"
      >
        <div class="mx-2 flex justify-between bg-white">
          <h3 class="mx-2 my-2 text-xl font-bold">Menu</h3>
        </div>
        <div class="flex h-[80vh] overflow-hidden rounded-xl">
          <div class="w-96 bg-white hover:overflow-auto">
            <div>
              <div class="">
                <input
                  type="text"
                  class="mx-2 my-3 w-56 rounded-2xl border-none bg-gray-100 outline-none"
                  placeholder="Tìm kiếm trong menu"
                />
              </div>
            </div>

            <div class="overflow-scroll">
              <span class="mx-4 font-semibold">Xã hội</span>
              <div>
                <a href="" class="mx-2 my-2 flex rounded-xl hover:bg-gray-100">
                  <div>
                    <CalendarDays class="ml-6 mr-2 mt-3" />
                  </div>

                  <div class="m-1">
                    <p class="font-semibold">Sự kiện</p>
                    <p class="text-xs text-gray-400">
                      Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng và ở quanh đây.
                    </p>
                  </div>
                </a>
              </div>

              <div>
                <a href="" class="mx-2 my-2 flex rounded-xl hover:bg-gray-100">
                  <Users class="ml-6 mr-2 mt-3" />
                  <div class="m-1">
                    <p class="font-semibold">Bạn bè</p>
                    <p class="text-xs text-gray-400">Tìm kiếm bạn bè hoặc những người bạn có thể biết.</p>
                  </div>
                </a>
              </div>

              <div>
                <a href="" class="mx-2 my-2 flex rounded-xl hover:bg-gray-100">
                  <Group class="ml-6 mr-2 mt-3" />
                  <div class="m-1">
                    <p class="font-semibold">Nhóm</p>
                    <p class="text-xs text-gray-400">Kết nối với những người cùng chung sở thích.</p>
                  </div>
                </a>
              </div>

              <div>
                <a href="" class="mx-2 my-2 flex rounded-xl hover:bg-gray-100">
                  <Newspaper class="ml-6 mr-2 mt-3" />
                  <div class="m-1">
                    <p class="font-semibold">Bảng tin</p>
                    <p class="text-xs text-gray-400">Xem bài viết phù hợp của những người và Trang bạn theo dõi.</p>
                  </div>
                </a>
              </div>
            </div>

            <hr class="mx-3 my-2" />

            <div>
              <span class="mx-4 font-semibold">Giải trí</span>
              <div>
                <a href="" class="mx-2 my-2 flex rounded-xl hover:bg-gray-100">
                  <MonitorPlay class="ml-6 mr-2 mt-3" />

                  <div class="m-1">
                    <p class="font-semibold">Video chơi game</p>
                    <p class="text-xs text-gray-400">
                      Xem, kết nối với những game và người phát trực tiếp mà bạn yêu thích.
                    </p>
                  </div>
                </a>
              </div>

              <div>
                <a href="" class="mx-2 my-2 flex rounded-xl hover:bg-gray-100">
                  <Tv class="ml-6 mr-2 mt-3" />
                  <div class="m-1">
                    <p class="font-semibold">Video</p>
                    <p class="text-xs text-gray-400">
                      Đích đến của video phù hợp với sở thích và quan hệ kết nối của bạn.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="w-52 bg-white hover:overflow-auto">
            <div>
              <h1 class="m-2 mx-4 box-border text-xl font-semibold">Tạo</h1>
            </div>
            <div>
              <div class="mx-2 my-3 box-border py-1 hover:bg-gray-100">
                <a href="" class="flex">
                  <div class="mx-2 h-8 w-8 bg-gray-200">
                    <SquarePen class="m-1" />
                  </div>
                  <div>
                    <p class="font-xl box-border pt-1 font-semibold">Đăng</p>
                  </div>
                </a>
              </div>

              <div class="mx-2 my-3 box-border rounded-xl py-1 hover:bg-gray-100">
                <a href="" class="flex">
                  <div class="mx-2 h-8 w-8 rounded-xl bg-gray-200">
                    <BookOpen class="m-1" />
                  </div>
                  <div>
                    <p class="font-xl box-border pt-1 font-semibold">Tin</p>
                  </div>
                </a>
              </div>

              <div class="mx-2 my-3 box-border rounded-xl py-1 hover:bg-gray-100">
                <a href="" class="flex">
                  <div class="mx-2 h-8 w-8 rounded-xl bg-gray-200">
                    <Videotape class="m-1" />
                  </div>
                  <div>
                    <p class="font-xl box-border pt-1 font-semibold">Thước phim</p>
                  </div>
                </a>
              </div>

              <div class="mx-2 my-3 box-border rounded-xl py-1 hover:bg-gray-100">
                <a href="" class="flex">
                  <div class="mx-2 h-8 w-8 rounded-xl bg-gray-200">
                    <Sparkle class="m-1" />
                  </div>
                  <div>
                    <p class="font-xl box-border pt-1 font-semibold">Sự kiện trong đời</p>
                  </div>
                </a>
              </div>

              <hr class="mx-4 my-2" />

              <div class="mx-2 my-3 box-border rounded-xl py-1 hover:bg-gray-100">
                <a href="" class="flex">
                  <div class="mx-2 h-8 w-8 rounded-xl bg-gray-200">
                    <PanelsTopLeft class="m-1" />
                  </div>
                  <div>
                    <p class="font-xl box-border pt-1 font-semibold">Trang</p>
                  </div>
                </a>
              </div>

              <div class="mx-2 my-3 box-border rounded-xl py-1 hover:bg-gray-100">
                <a href="" class="flex">
                  <div class="mx-2 h-8 w-8 rounded-xl bg-gray-200">
                    <Megaphone class="m-1" />
                  </div>
                  <div>
                    <p class="font-xl box-border pt-1 font-semibold">Quảng cáo</p>
                  </div>
                </a>
              </div>

              <div class="mx-2 my-3 box-border rounded-xl py-1 hover:bg-gray-100">
                <a href="" class="flex">
                  <div class="mx-2 h-8 w-8 rounded-xl bg-gray-200">
                    <Group class="m-1" />
                  </div>
                  <div>
                    <p class="font-xl box-border pt-1 font-semibold">Nhóm</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--EndMenu-->

    <!--Mess-->
    <div v-if="isShowMessager == true">
      <div class="dark:hover:text-black dark:text-black absolute right-0 top-full box-border w-[350px] rounded-lg border-2 border-solid bg-white">
        <div class="mx-2 mt-2 flex justify-between">
          <h3 class="mx-2 text-xl font-bold">Đoạn chát</h3>
          <div class="flex">
            <div class="mx-1 my-2 box-border cursor-pointer rounded-xl px-2 py-1 hover:bg-gray-200">
              <Ellipsis class="h-5 w-5" />
            </div>
            <div class="mx-1 my-2 box-border cursor-pointer rounded-xl px-2 py-1 hover:bg-gray-200">
              <ExternalLink class="h-5 w-5" />
            </div>
            <div class="mx-1 my-2 box-border cursor-pointer rounded-xl px-2 py-1 hover:bg-gray-200">
              <MessageCirclePlus class="h-5 w-5" />
            </div>

            <div></div>
          </div>
        </div>
        <div>
          <input type="text" class="mx-4 w-56 rounded-xl bg-gray-100" placeholder="Tìm kiếm trên Messenger" />
        </div>

        <div>
          <div>
            <div>
              <div class="m-3 flex cursor-pointer items-center rounded-xl hover:bg-gray-100">
                <div>
                  <img
                    class="mx-2 my-2 h-14 w-14 rounded-full"
                    src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <p class="font-semibold">Thiện Ân</p>
                  </div>
                  <div class="flex">
                    <p>Hello my fen</p>
                    <p class="mx-1">.</p>
                    <p>1 giờ</p>
                  </div>
                </div>
              </div>
              <div class="m-3 flex cursor-pointer items-center rounded-xl hover:bg-gray-100">
                <div>
                  <img
                    class="mx-2 my-2 h-14 w-14 rounded-full"
                    src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <p class="font-semibold">Thiện Ân</p>
                  </div>
                  <div class="flex">
                    <p>Hello my fen</p>
                    <p class="mx-1">.</p>
                    <p>1 giờ</p>
                  </div>
                </div>
              </div>
              <div class="m-3 flex cursor-pointer items-center rounded-xl hover:bg-gray-100">
                <div>
                  <img
                    class="mx-2 my-2 h-14 w-14 rounded-full"
                    src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <p class="font-semibold">Thiện Ân</p>
                  </div>
                  <div class="flex">
                    <p>Hello my fen</p>
                    <p class="mx-1">.</p>
                    <p>1 giờ</p>
                  </div>
                </div>
              </div>
              <div class="m-3 flex cursor-pointer items-center rounded-xl hover:bg-gray-100">
                <div>
                  <img
                    class="mx-2 my-2 h-14 w-14 rounded-full"
                    src="https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/0878913035-1620532649.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <p class="font-semibold">Thiện Ân</p>
                  </div>
                  <div class="flex">
                    <p>Hello my fen</p>
                    <p class="mx-1">.</p>
                    <p>1 giờ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--EndMess-->

    <!--Notice-->
    <div
      v-if="isShowNotice == true"
      class="dark:hover:text-black dark:text-black absolute right-0 top-full box-border h-[80vh] w-96 overflow-auto rounded-lg border-2 border-solid bg-white font-semibold shadow-2xl"
    >
      <div class="m-2">
        <div class="z-50 my-2">
          <header class="z-0 flex justify-between bg-white">
            <h3 class="mx-2 text-xl font-bold">Thông báo</h3>
            <Ellipsis class="mx-2 rounded-lg hover:bg-gray-200" />
          </header>
        </div>

        <div class="mx-3 bg-white">
          <button
            class="my-1 mr-3 rounded-3xl px-2 py-1 text-center hover:bg-gray-300 focus:bg-blue-100 focus:text-blue-500"
          >
            Tất cả
          </button>
          <button
            class="my-1 mr-3 rounded-3xl px-2 py-1 text-center hover:bg-gray-300 focus:bg-blue-100 focus:text-blue-500"
          >
            Chưa đọc
          </button>
        </div>

        <div class="text-end">
          <a href="https://www.facebook.com/notifications" class="px-2 py-1 text-blue-400 hover:opacity-80">
            Xem tất cả
          </a>
        </div>

        <div v-for="index in 10" :key="index">
          <a href="" class=" ">
            <div class="mx-1 flex rounded-xl p-2 hover:bg-gray-200">
              <div class="mr-2">
                <img
                  src="https://images.ctfassets.net/hrltx12pl8hq/4MFiRr9vFnbWzYoNSPiYXy/fca130dd40da59b06e83ee8d5789a23e/file-converter-shutterstock.jpg"
                  class="h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div class="">
                <div class="mr-1">
                  <p><b>Văn trọng</b> đã đăng 1 ảnh mới</p>
                </div>
                <div class="to-blue-700">11 giờ trước</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div
      v-if="isShowMore == true"
      class="absolute right-0 top-full box-content w-96 rounded-xl border-2 border-solid bg-gray-50 shadow-xl dark:hover:text-black dark:text-black"
    >
      <div class="m-2 box-border rounded-xl border-2 border-solid bg-white px-2 shadow-sm">
        <div class="mx-1 my-1 rounded-xl hover:bg-gray-100">
          <router-link :to="`/profile/${userCurrent.username}`" class="flex">
            <div>
              <img
                class="mx-1 my-2 h-10 w-10 rounded-full"
                :src="userCurrent.avatar ? userCurrent.avatar : avatar"
                alt=""
              />
            </div>
            <div>
              <p class="mx-2 my-1 mt-3 text-base font-semibold">{{ userCurrent.name }}</p>
            </div>
          </router-link>
        </div>

        <hr class="mx-2 my-2" />
        <a
          href="https://www.facebook.com/notifications"
          class="mx-2 mb-3 flex rounded-lg bg-gray-200 py-2 hover:bg-gray-400 focus:hidden"
        >
          <div class="mx-auto flex items-center">
            <div class="mr-4">
              <Repeat class="my-1 w-4" />
            </div>
            <p class="bg-red text-base font-semibold" target="_blank">Xem tất cả trang cá nhân</p>
          </div>
        </a>
      </div>
      <div>
        <div class="mx-3 my-2">
          <a href="" class="flex justify-between rounded-xl px-1 py-2 hover:bg-gray-200">
            <div class="flex">
              <div class="rounded-full bg-gray-300 py-1">
                <Settings class="mx-1.5 my-0.5 p-1" />
              </div>
              <div class="mx-2 my-1 text-base font-semibold">Cài đặt và quyền riêng tư</div>
            </div>

            <div class="mx-2 mt-1">
              <i class="fa-solid fa-arrow-right-long"></i>
            </div>
          </a>
        </div>

        <div class="mx-3 my-2">
          <a href="" class="flex justify-between rounded-xl px-1 py-2 hover:bg-gray-200">
            <div class="flex">
              <div class="rounded-full bg-gray-300 py-1">
                <CircleHelp class="mx-1.5 my-0.5 p-1" />
              </div>
              <div class="mx-2 my-1 text-base font-semibold">Cài đặt và quyền riêng tư</div>
            </div>
            <div class="mx-2 mt-1">
              <i class="fa-solid fa-arrow-right-long"></i>
            </div>
          </a>
        </div>
        <div class="mx-3 my-2">
          <router-link to="/reset-password">
            <div class="flex justify-between rounded-xl px-1 py-1 hover:bg-gray-200">
              <div class="flex">
                <div class="rounded-full bg-gray-300 py-1">
                  <KeyRound class="mx-1.5 my-0.5 p-1" />
                </div>
                <div class="mx-2 py-1 text-base font-semibold">Đổi mật khẩu</div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="mx-3 my-2">
          <div class="flex justify-between rounded-xl px-1 py-1 hover:bg-gray-200" @click="logOut()">
            <div class="flex">
              <div class="rounded-full bg-gray-300 py-1">
                <LogOut class="mx-1.5 my-0.5 p-1" />
              </div>
              <div class="mx-2 py-1 text-base font-semibold">Đăng xuất</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  KeyRound,
  BookOpen,
  CalendarDays,
  CircleHelp,
  Ellipsis,
  ExternalLink,
  LogOut,
  Megaphone,
  MessageCirclePlus,
  PanelsTopLeft,
  Settings,
  Sparkle,
  SquarePen,
  Tv,
  Videotape,
  Repeat,
  Users,
  Group,
  MonitorPlay,
  Newspaper,
  MoonStar,
  CloudSun
} from "lucide-vue-next"
import svgMenu from "../svg/svgMenu.vue"
import svgMessenger from "../svg/svgMessenger.vue"
import svgNotifications from "../svg/svgNotifications.vue"
import svgCreate from "../svg/svgCreate.vue"
import "vue-toast-notification/dist/theme-sugar.css"
import { clearLS, getProfileFromLS } from "@/utils/auth"
import pathConstant from "@/views/client/constant/path.constant"
import { useDarkMode } from "@/composables/useDarkMode";    

export default {
  setup() {
    const { toggleDarkMode, isDarkMode } = useDarkMode();
    return { toggleDarkMode, isDarkMode };
  },  
  async created() {
    this.userCurrent = getProfileFromLS()
  },
  components: {
    svgMenu,
    svgMessenger,
    svgNotifications,
    svgCreate,
    KeyRound,
    BookOpen,
    CalendarDays,
    ExternalLink,
    Ellipsis,
    MessageCirclePlus,
    Megaphone,
    Settings,
    PanelsTopLeft,
    Sparkle,
    CircleHelp,
    SquarePen,
    Tv,
    Videotape,
    Users,
    Group,
    MonitorPlay,
    Newspaper,
    LogOut,
    Repeat,
    MoonStar,
    CloudSun 
  },
  data() {
    return {
      isShowMenu: false,
      isShowMessager: false,
      isShowNotice: false,
      isShowMore: false,
      avatar: "https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg",
      userCurrent: {},
      pathConstant: pathConstant
    }
  },
  methods: {
    logOut() {
      clearLS()
      this.$router.push(pathConstant.default)
      this.$toast.success("Logout success", {
        position: "top-right"
      })
    }
  }
}
</script>
