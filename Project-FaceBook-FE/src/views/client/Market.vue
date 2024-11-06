<template>
 <div>
  <div class="fixed left-0 top-[55px] flex h-screen w-[22%] flex-col bg-white pl-[5px] pt-[5px] shadow-md dark:!bg-black dark:!text-white">
    <div id="left-bar-top" class="p-[10px]">
      <ul>
        <li class="flex items-center justify-between">
          <h1 class="text-2xl font-bold">Market</h1>
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
              <Store class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Lướt xem tất cả</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Bell class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Thông báo</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Mailbox class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Hộp thư</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <ShoppingBasket class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Đang mua</span>
            <ChevronRight class="ml-auto text-[#A7AAAE]" />
          </li>
          <li class="mb-[10px] flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Tag class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Bán hàng</span>
            <ChevronRight class="ml-auto text-[#A7AAAE]" />
          </li>
          <li>
            <button class="w-full rounded-lg bg-[#DFE9F2] px-0.5 py-0.5 text-[#0E66CA]">
              <div class="flex items-center justify-center text-sm">
                <span class="text-xl">+</span>
                <span class="ml-1.5">Tạo bài niêm yết mới</span>
              </div>
            </button>
          </li>
          <hr class="mb-3 mt-2" />
          <p class="mb-2 text-[18px] font-medium">Bộ lọc</p>
          <div class="ml-auto flex cursor-pointer items-center text-sm font-semibold text-[#0866FE]">
            <span>Đà Nẵng</span>
            <span class="ml-1.5 mr-1.5 translate-y-[-10%]">.</span>
            <span>Trong vòng 65 km</span>
          </div>
          <hr class="mt-3" />
          <p class="text-[18px] font-medium">Hạng mục</p>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <CarFront class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Xe cộ</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Home class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Tài sản cho thuê</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Home class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Bán nhà</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Wrench class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Bán nhà</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Heart class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Gia đình</span>
          </li>
      
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Shovel class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Làm vườn & hoạt động ngoài trời</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Guitar class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Nhạc cụ</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Tag class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Rao vặt</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Tags class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Sản phẩm miễn phí</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Bike class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Sản phẩm thẻ thao</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <PencilLine class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Sở thích</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Tag class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Văn phòng phẩm</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Gamepad2 class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Đồ chơi & trò chơi</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <PawPrint class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Đồ dùng cho thú cưng</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Home class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Đồ gia dụng</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Shirt class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Đồ may mặc</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <Smartphone class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Đồ điện tử</span>
          </li>
          <li class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-myGray-900">
            <div class="rounded-full bg-[#D8DADF] p-1">
              <UsersRound class="rounded-full" />
            </div>
            <span class="text-tiny font-semibold">Nhóm mua và bán</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="float-right w-[calc(100%-22%)] bg-[#F0F2F5] dark:!bg-black dark:!text-white">
    <div class="ml-[20px] w-[98%] px-2">
      <div class="mt-[20px] flex justify-between pr-[25px]">
        <div class="text-xl font-bold">Lựa chọn hôm nay</div>
        <div class="flex cursor-pointer items-center hover:text-blue-600 hover:underline">
          <MapPin class="mr-2" />
          <span class>Quận hải châu- 65km</span>
        </div>
      </div>
      <div className="mt-4 grid">
        <div className="grid  grid-cols-4 justify-around">
          <div
            className="w-[93%] h-[94%] mb-[18px] rounded-md hover:scale-105 hover:delay-250 duration-300 border bg-white"
            v-for="index in 10"
            :key="index"
          >
            <a href="link-supplier">
              <img
                className="rounded-t-md h-[200px]"
                src="https://admin.cms.ueb.edu.vn//Uploads/image/News/Thumbnails/2022/1/Thumbnails03012022052442.quan-tri-dai-hoc.jpg"
                alt=""
              />
              <div class="p-3 bg-white dark:!bg-slate-600">
                <div className="font-semibold text-lg">Tôn Hoa Sen</div>
                <div className="text-sm">183 Nguyễn Văn Trỗi, Quận Phú Nhuận, HCM</div>
                <div className="flex justify-between">
                  <div className="flex text-[13px] pr-5 text-green-400">
                    <p className="text-primary mr-1">163</p>
                    <p>Sản phẩm</p>
                  </div>
                  <div className="flex text-[13px] pl-5 text-red-500">
                    <p className="text-primary mr-1">4.6</p>
                    <p>Đánh giá</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
</template>
<script>
import {
  UsersRound,
  Smartphone,
  Shirt,
  PawPrint,
  Bike,
  Tags,
  Guitar,
  Shovel,
  Heart,
  Wrench,
  Home,
  Mailbox,
  CarFront,
  Settings,
  Store,
  MapPin,
  Bell,
  ShoppingBasket,
  ChevronRight,
  Tag,
  PencilLine,
  Gamepad2
} from "lucide-vue-next"
import svgSearch from "../../components/svg/svgSearch.vue"
export default {
  data() {
    return {}
  },
  methods: {},
  components: {
    svgSearch,
    UsersRound,
    Smartphone,
    Shirt,
    PawPrint,
    Bike,
    Tags,
    Guitar,
    Shovel,
    Heart,
    Wrench,
    Home,
    Mailbox,
    CarFront,
    Settings,
    Store,
    MapPin,
    Bell,
    ShoppingBasket,
    ChevronRight,
    Tag,
    PencilLine,
    Gamepad2
  }
}
</script>
