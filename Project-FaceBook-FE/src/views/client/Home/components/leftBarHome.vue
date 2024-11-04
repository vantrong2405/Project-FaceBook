<template>
  <div class="hidden min-h-screen w-80 bg-white shadow-sm xl:block dark:!text-white dark:!bg-black">
    <div class="w-80">
      <div class="fixed">
        <div class="scroll-container flex h-screen w-80 flex-col justify-between px-2 pb-12 pt-4 xl:flex">
          <div class="flex-1 pb-[10%]">
            <div class="visible">
              <div id="left-bar-top" class="w-full">
                <ul class="">
                  <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900  dark:hover:text-black">
                    <img :src="userCurrent.avatar ? userCurrent.avatar : avatar" class="h-9 w-9 rounded-full" alt="" />
                    <span class="text-tiny font-semibold">{{ userCurrent.name }}</span>
                  </li>
                  <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900 dark:hover:bg-slate-600 dark:hover:text-black ">
                    <img src="../../../../assets/images/png/friends.png" class="w-9 rounded-full" alt="Bạn bè" />
                    <span class="text-tiny font-semibold ">Bạn bè</span>
                  </li>
                  <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900 dark:hover:bg-slate-600 dark:hover:text-black">
                    <img src="../../../../assets/images/png/groups.png" class="w-9 rounded-full" alt="Nhóm" />
                    <span class="text-tiny font-semibold">Nhóm</span>
                  </li>
                  <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900 dark:hover:bg-slate-600 dark:hover:text-black">
                    <img
                      src="../../../../assets/images/png/marketplace.png"
                      class="w-9 rounded-full"
                      alt="Marketplace"
                    />
                    <span class="text-tiny font-semibold">Marketplace</span>
                  </li>
                  <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900 dark:hover:bg-slate-600 dark:hover:text-black">
                    <img src="../../../../assets/images/png/watch.png" class="w-9 rounded-full" alt="Video" />
                    <span class="text-tiny font-semibold">Video</span>
                  </li>
                  <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900 dark:hover:bg-slate-600 dark:hover:text-black">
                    <img src="../../../../assets/images/png/memories.png" class="w-9 rounded-full" alt="Kỷ niệm" />
                    <span class="text-tiny font-semibold">Kỷ niệm</span>
                  </li>
                  <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900 dark:hover:bg-slate-600 dark:hover:text-black">
                    <img src="../../../../assets/images/png/saved.png" class="w-9 rounded-full" alt="Đã lưu" />
                    <span class="text-tiny font-semibold">Đã lưu</span>
                  </li>
                  <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900 dark:hover:bg-slate-600 dark:hover:text-black">
                    <img src="../../../../assets/images/png/pages.png" class="w-9 rounded-full" alt="Trang" />
                    <span class="text-tiny font-semibold">Trang</span>
                  </li>
                  <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900 dark:hover:bg-slate-600 dark:hover:text-black">
                    <img src="../../../../assets/images/png/events.png" class="w-9 rounded-full" alt="Sự kiện" />
                    <span class="text-tiny font-semibold">Sự kiện</span>
                  </li>
                  <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900 dark:hover:bg-slate-600 dark:hover:text-black">
                    <img src="../../../../assets/images/png/jobs.png" class="w-9 rounded-full" alt="Công việc" />
                    <span class="text-tiny font-semibold">Công việc</span>
                  </li>
                  <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900 dark:hover:bg-slate-600 dark:hover:text-black">
                    <img src="../../../../assets/images/png/mostRecent.png" class="w-9 rounded-full" alt="Gần đây" />
                    <span class="text-tiny font-semibold">Gần đây</span>
                  </li>
                  <div
                    class="transition-color flex w-full cursor-pointer items-center gap-2 rounded-lg p-2 duration-300 hover:bg-myGray-900 dark:hover:!bg-slate-600 dark:hover:!text-black"
                  >
                    <div id="svg-see-more-box" class="flex items-center justify-center rounded-full p-2">
                      <svg-see-more class="w-5" />
                    </div>
                    <span class="text-base font-semibold"> Xem thêm</span>
                  </div>

                  <div id="privacy" class="w-full">
                    <div class="pl-1 text-xs text-myGray-700">
                      <a class="cursor-pointer hover:underline">Privacy</a>·
                      <a class="cursor-pointer hover:underline">Terms</a>·
                      <a class="cursor-pointer hover:underline">Adversiting</a>·
                      <a class="cursor-pointer hover:underline">Ad Choices</a>·
                      <a class="cursor-pointer hover:underline">Cookies</a>·<br />
                      <a class="cursor-pointer">More</a>·
                      <a>Burkay © 2021</a>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import svgSeeMore from "@/components/svg/svgSeeMore.vue"

export default {
  props: {
    userCurrent: {
      type: Object,
      default: {}
    },
    avatar: {
      type: String,
      default: ""
    }
  },
  components: {
    svgSeeMore
  }
}
</script>
