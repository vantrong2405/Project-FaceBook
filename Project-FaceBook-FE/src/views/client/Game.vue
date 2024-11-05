<!-- eslint-disable vue/no-parsing-error -->
<template>
<div>
  <div class="fixed left-0 top-[55px] flex h-screen w-[22%] flex-col bg-white pl-[5px] pt-[5px] shadow-md dark:!bg-black dark:!text-white">
    <div id="left-bar-top" class="p-[10px]">
      <ul>
        <li class="flex items-center justify-between">
          <h1 class="text-2xl font-bold">Chơi game</h1>
          <div
            class="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full bg-[#E4E6EB] hover:bg-gray-300"
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
              class="ml-1 flex h-full w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-100 sm:m-0 xl:flex-1 xl:cursor-text xl:px-4"
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
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Gamepad2 class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Chơi game</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <CircleUser class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Hoạt động trong game</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Bell class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Thông báo</span>
          </li>
          <hr class="mb-2 mt-2" />
          <li class="mx-2">
            <div class="flex items-center justify-between">
              <p class="text-[18px] font-semibold">Game của bạn</p>
              <p class="cursor-pointer px-[8px] py-[5px] text-sm text-[#0866FE] hover:bg-[#F2F2F2]">Xem tất cả</p>
            </div>
            <p class="max-w-[300px] break-words text-xs text-[#898A8D]">
              Hãy lưu game vào phần Game của bạn để tạo lối tắt tại đây
            </p>
          </li>
          <li class="mt-4 flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Save class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Lưu game</span>
          </li>
          <hr class="my-2" />
          <p class="mx-2 text-[18px] font-semibold">Hạng mục</p>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Gamepad2 class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Tất cả game</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <TrainFront class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Hành động</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <MapWord class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Phiêu lưu</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Computer class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Arcade</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Swords class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Chiến đấu</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Stamp class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Dùng bàn</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Castle class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Xây dựng</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Gamepad2 class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Đánh bài</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <CircleDollarSign class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Sòng bạc</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <DraftingCompass class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Thiết kế</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Puzzle class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Xếp hình</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Grid2X2 class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Hợp nhất</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Puzzle class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Câu đố</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Timer class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Chơi nhanh</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <MessageCircleQuestion class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Đố vui</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Flag class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Đua xe</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <PersonStanding class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Nhập vai</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Bike class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Chạy thi</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Codepen class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Mô phỏng</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Slack class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Solitaire</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <MessageCircleQuestion class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Thể thao</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <SquareLibrary class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Từ vựng</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="float-right w-[calc(100%-22%)] bg-[#F0F2F5] dark:!bg-black dark:!text-white">
    <div class="overflow-hidden bg-[#F0F2F5] px-8 dark:!bg-black dark:!text-white">
      <p class="pt-[10px] text-[24px] font-bold">Đã chơi gần đây</p>
      <div id="animation-carousel">
        <div class="py-[16px]">
          <div class="flex">
            <div class="relative mr-[8px] h-auto w-[12%] cursor-pointer shadow-md hover:brightness-90">
              <img
                class="h-full w-full rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                alt=""
              />
              <p class="absolute bottom-[12px] left-[12px] h-[40px] text-[17px] font-[600] leading-[20px] text-white">
                Words With <br />
                Friends
              </p>
            </div>
            <div class="relative mr-[8px] h-auto w-[12%] cursor-pointer shadow-md hover:brightness-90">
              <img
                class="h-full w-full rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                alt=""
              />
              <p class="absolute bottom-[12px] left-[12px] h-[40px] text-[17px] font-[600] leading-[20px] text-white">
                Words With <br />
                Friends
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="text-[24px] font-bold">Game chúng tôi thích</p>
        <div id="animation-carousel" class="relative">
          <div class="py-[16px]">
            <div class="flex h-full">
              <div
                class="container relative ml-0 mr-[10px] h-[200px] w-[200px] min-w-[180px] max-w-[250px] cursor-pointer px-0 hover:brightness-90"
              >
                <div class="flex h-full w-full flex-col overflow-hidden rounded-lg">
                  <div class="h-[62%] w-full">
                    <img
                      class="h-full w-full object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                      alt=""
                    />
                  </div>
                  <div class="relative h-[38%] w-full">
                    <img
                      class="h-full w-full object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                      alt=""
                    />
                    <div class="absolute top-0 h-full w-full bg-black bg-opacity-10 backdrop-blur-xl">
                      <div class="ml-[8px] mt-[6px]">
                        <p class="text-[17px] font-medium text-white">Solitarie Classic</p>
                        <p
                          class="mt-[5px] inline-block rounded-2xl bg-[#203820] px-[6px] py-[4px] text-[13px] font-medium text-white"
                        >
                          2,2 triệu người chơi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="container relative ml-0 mr-[10px] h-[200px] w-[200px] min-w-[180px] max-w-[250px] cursor-pointer px-0 hover:brightness-90"
              >
                <div class="flex h-full w-full flex-col overflow-hidden rounded-lg">
                  <div class="h-[62%] w-full">
                    <img
                      class="h-full w-full object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                      alt=""
                    />
                  </div>
                  <div class="relative h-[38%] w-full">
                    <img
                      class="h-full w-full object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                      alt=""
                    />
                    <div class="absolute top-0 h-full w-full bg-black bg-opacity-10 backdrop-blur-xl">
                      <div class="ml-[8px] mt-[6px]">
                        <p class="text-[17px] font-medium text-white">Solitarie Classic</p>
                        <p
                          class="mt-[5px] inline-block rounded-2xl bg-[#203820] px-[6px] py-[4px] text-[13px] font-medium text-white"
                        >
                          2,2 triệu người chơi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sss mb-2 w-full">
        <div class="mb-4 text-[24px] font-bold">Lựa chọn hàng đầu dành cho bạn</div>
        <swiper
          :spaceBetween="10"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false
          }"
          :slidesPerView="6"
          class="mySwiper"
        >
          <swiper-slide v-for="index in 20" :key="index">
            <div class="container relative h-[200px] w-full cursor-pointer p-0 hover:brightness-90">
              <div class="flex h-full w-full flex-col overflow-hidden rounded-lg">
                <div class="h-[62%] w-full">
                  <img
                    class="h-full w-full object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                    alt=""
                  />
                </div>
                <div class="relative h-[38%] w-full">
                  <img
                    class="h-full w-full object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                    alt=""
                  />
                  <div class="absolute top-0 h-full w-full bg-black bg-opacity-10 backdrop-blur-xl">
                    <div class="ml-[8px] mt-[6px]">
                      <p class="text-[17px] font-medium text-white">Solitarie Classic</p>
                      <p
                        class="mt-[5px] inline-block rounded-2xl bg-[#203820] px-[6px] py-[4px] text-[13px] font-medium text-white"
                      >
                        2,2 triệu người chơi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="sss mb-2 w-full">
        <swiper
          :spaceBetween="10"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false
          }"
          :slidesPerView="6"
          class="mySwiper"
        >
          <swiper-slide v-for="index in 20" :key="index" class="w-full">
            <div class="container relative h-[200px] w-full cursor-pointer p-0 hover:brightness-90">
              <div class="flex h-full w-full flex-col overflow-hidden rounded-lg">
                <div class="h-[62%] w-full">
                  <img
                    class="h-full w-full object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                    alt=""
                  />
                </div>
                <div class="relative h-[38%] w-full">
                  <img
                    class="h-full w-full object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                    alt=""
                  />
                  <div class="absolute top-0 h-full w-full bg-black bg-opacity-10 backdrop-blur-xl">
                    <div class="ml-[8px] mt-[6px]">
                      <p class="text-[17px] font-medium text-white">Solitarie Classic</p>
                      <p
                        class="mt-[5px] inline-block rounded-2xl bg-[#203820] px-[6px] py-[4px] text-[13px] font-medium text-white"
                      >
                        2,2 triệu người chơi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue"
import { Bike, Settings } from "lucide-vue-next"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../../assets/css/input.css"
import svgSearch from "../../components/svg/svgSearch.vue"
import {
  Save,
  Gamepad2,
  CircleUser,
  Bell,
  TrainFront,
  Map as MapWord,
  Computer,
  Swords,
  Stamp,
  Castle,
  CircleDollarSign,
  DraftingCompass,
  Puzzle,
  Grid2X2,
  Timer,
  MessageCircleQuestion,
  Flag,
  PersonStanding,
  Codepen,
  Slack,
  SquareLibrary
} from "lucide-vue-next"

export default {
  components: {
    Swiper,
    SwiperSlide,
    svgSearch,
    TrainFront,
    Gamepad2,
    CircleUser,
    Bell,
    Save,
    Settings,
    Computer,
    Swords,
    Stamp,
    Castle,
    CircleDollarSign,
    DraftingCompass,
    Puzzle,
    Grid2X2,
    Timer,
    MessageCircleQuestion,
    Flag,
    PersonStanding,
    Bike,
    Codepen,
    Slack,
    SquareLibrary,
    MapWord
  }
}
</script>
