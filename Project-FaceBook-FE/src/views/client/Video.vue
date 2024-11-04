<template>
 <div class="dark:!bg-black dark:!text-white">
  <div class="fixed left-0 top-[55px] flex h-screen w-[22%] flex-col bg-white pl-[5px] pt-[5px] shadow-md dark:!bg-black dark:!text-white">
    <div id="left-bar-top" class="p-[10px]">
      <ul>
        <li class="flex items-center justify-between">
          <h1 class="text-2xl font-bold">Video</h1>
          <div
            class="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full bg-[#E4E6EB] hover:bg-gray-300 hover:!text-black dark:text-black"
          >
            <Settings />
          </div>
        </li>
        <li>
          <div class="flex h-14 w-full items-center py-2">
            <div class="__logo"></div>
            <div
              class="flex h-9 cursor-pointer items-center justify-center rounded-full transition-opacity duration-500"
            ></div>
            <div
              class="ml-1 flex h-full w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-100 sm:m-0 xl:flex-1 xl:cursor-text xl:px-4  dark:text-black"
            >
              <svg-search class="w-5" fill="currentColor" />
              <input
                class="h-full w-full border-none bg-transparent px-2 text-sm outline-none focus:outline-none focus:ring-transparent xl:block"
                placeholder="Tìm kiếm nhóm"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="scroll-container flex-1 px-[10px] pb-[22%]">
      <div class="visible">
        <ul>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900 dark:hover:bg-slate-600 dark:hover:text-black dark:text-black">
            <div class="rounded-full bg-[#E4E6EB] p-1">
              <MonitorPlay class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold dark:text-white">Trang chủ</span>
          </li>

          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900 dark:hover:bg-slate-600 dark:hover:text-black dark:text-black">
            <div class="rounded-full bg-[#E4E6EB] p-1">
              <Tv2 class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold dark:text-white">Trực tiếp</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900 dark:hover:bg-slate-600 dark:hover:text-black dark:text-black">
            <div class="rounded-full bg-[#E4E6EB] p-1">
              <Film class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold dark:text-white">Reels</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900 dark:hover:bg-slate-600 dark:hover:text-black dark:text-black">
            <div class="rounded-full bg-[#E4E6EB] p-1">
              <Clapperboard class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold dark:text-white">Chương trình</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900 dark:hover:bg-slate-600 dark:hover:text-black dark:text-black">
            <div class="rounded-full bg-[#E4E6EB] p-1">
              <Rocket class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold dark:text-white">Khám phá</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900 dark:hover:bg-slate-600 dark:hover:text-black dark:text-black">
            <div class="rounded-full bg-[#E4E6EB] p-1">
              <Save class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold dark:text-white">Video đã lưu</span>
          </li>
        </ul>
      </div>
      <!-- end -->
    </div>
  </div>
  <div class="float-right w-[calc(100%-22%)] bg-[#F0F2F5] dark:!bg-black dark:!text-white">
    <div class="h-full w-full dark:!bg-black dark:!text-white">
      <div class="mx-auto w-[58%] dark:!bg-black dark:!text-white">
        <div class="mb-3 mt-[15px] flex items-center justify-between rounded-lg border bg-white shadow-md dark:!bg-black dark:!text-white">
          <div class="mt-3 p-3">
            <h1 class="mb-3 text-xl font-bold">Video mới dành cho bạn</h1>
            <div class="mb-3 flex items-center">
              <img src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" class="mr-3 h-14 w-14 rounded-full" alt="" />
              <div>
                <p class="mt-2 text-base">Video mới của Theanh28 Entertaiment.</p>
                <div class="flex items-center">
                  <div class="mb-7 text-sm text-[#0866FD]">4 giờ trước</div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 p-3">
            <div class="mb-4 mt-2 flex items-center">
              <img src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" class="mr-3 h-14 w-14 rounded-full" alt="" />
              <div>
                <p class="mt-2 text-base">Video mới của Theanh28 Entertaiment.</p>
                <div class="flex items-center">
                  <div class="mb-7 text-sm text-[#0866FD]">4 giờ trước</div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div class="my-5 rounded-lg border bg-white shadow-md dark:!bg-black dark:!text-white" v-for="index in 10" :key="index">
          <div class="m-4 mb-3 flex justify-between ">
            <div class="flex">
              <img src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" class="mr-3 h-12 w-12 rounded-full" alt="" />
              <div>
                <div>
                  <div class="flex items-center">
                    <p class="mr-2 font-semibold">Nhật Dương</p>
                    <p class="text-[#0866FD]">Theo dõi</p>
                  </div>
                  <p class="text-xs text-gray-500">2 tháng 2 lúc 22:31</p>
                </div>
              </div>
            </div>
            <Ellipsis />
          </div>
          <p class="mx-3 mb-2 text-xs font-semibold">HELLO WORLD</p>
          <img
            src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
            class="mb-1 h-[500px] w-full object-cover shadow-md"
            alt=""
          />
          <div class="mx-3 flex items-center justify-between py-2 text-gray-500">
            <div class="flex">
              <div class="flex cursor-pointer items-center rounded-lg px-[10px] py-[6px] hover:bg-[#F2F2F2]">
                <i class="fas fa-thumbs-up mr-2"></i>
                <p>Like</p>
              </div>
              <div class="flex cursor-pointer items-center rounded-lg px-[10px] py-[6px] hover:bg-[#F2F2F2]">
                <i class="fas fa-comment mr-2"></i>
                <p>Comment</p>
              </div>
              <div class="flex cursor-pointer items-center rounded-lg px-[10px] py-[6px] hover:bg-[#F2F2F2]">
                <i class="fas fa-share mr-2"></i>
                <p>Share</p>
              </div>
            </div>
            <div class="flex text-xs">
              <i
                class="fas fa-thumbs-up ml-auto h-5 w-5 items-center rounded-full bg-[#049CFD] px-1 pt-0.5 text-xs text-white"
              ></i>
              <i
                class="fa-solid fa-heart mr-0.5 h-5 w-5 items-center rounded-full bg-[#FC464E] px-1 pt-0.5 text-xs text-white"
              ></i>
              <span class="mr-2 cursor-pointer hover:underline">Thanh Thư và 22K người khác</span>
              <p class="mr-2 cursor-pointer hover:underline">80 bình luận</p>
              <p>10 triệu lượt xem</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
</template>
<script>
import { MonitorPlay, Tv2, Film, Clapperboard, Rocket, Save, Ellipsis, Settings } from "lucide-vue-next"
import svgSearch from "../../components/svg/svgSearch.vue"
export default {
  data() {
    return {}
  },
  methods: {},
  components: {
    svgSearch,
    MonitorPlay,
    Tv2,
    Film,
    Clapperboard,
    Rocket,
    Save,
    Ellipsis,
    Settings
  }
}
</script>
