<template>
<div>
  <div
    data-bs-toggle="modal"
    data-bs-target="#create_posts"
    class="dark:text-white dark:bg-slate-600 dark:hover:opacity-80 flex text-gray-400 items-center h-10 w-full cursor-pointer rounded-full border-[0px] bg-[#F0F2F5] px-3 text-tiny font-normal outline-none  hover:bg-[#E4E6E9] focus:shadow-none focus:outline-none focus:ring-transparent mobile-x:text-base"
  >{{placeholder}}</div>
  <div class="modal fade" id="create_posts" tabindex="-1" aria-labelledby="create_post" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header ">
          <h3 class="modal-title flex justify-center text-2xl font-bold text-blue-500" id="exampleModalLabel">
            Tạo bài viết
          </h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body dark:text-white dark:bg-black">
          <div class="flex w-full">
            <a class="h-[40px] w-[40px] hover:brightness-90" href="">
              <img class="h-full w-full rounded-full" :src="userCurrent.avatar ? userCurrent.avatar : avatar" alt="" />
            </a>
            <div class="ml-[10px]">
              <p class="text-[15px] font-medium text-black dark:!text-white ">{{ userCurrent.name }}</p>
              <form class="mx-auto w-36">
                <select
                  id="countries"
                  class="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-1.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                >
                  <option class="p-2" selected>Công khai</option>
                  <option class="p-2" value="US">Bí mật</option>
                  <option class="p-2" value="CA">Với bạn bè</option>
                </select>
              </form>
            </div>
          </div>
          <div class="mt-3 w-full pb-[50px]">
            <textarea
              class="w-full resize-none break-words border-0 px-0 focus:outline-none focus:ring-0 dark:text-white dark:bg-black"
              :placeholder="placeholder"
              rows="3"
              @input="handleContentInput"
              v-model="internalContent"
              @paste="handlePaste"
            >
            </textarea>
            <div class="h-[200px] overflow-auto" v-if="media[0]">
              <div v-for="(value, index) in media" :key="index" class="relative my-3">
                <img v-if="value.url" :src="value.url" alt="" class="object-content h-[280px] w-full border" />
                <X
                  class="absolute right-1 top-1 cursor-pointer text-4xl hover:text-gray-500"
                  @click="handleDeleteMedia(index)"
                />
              </div>
            </div>
          </div>
          <div class="flex w-full items-center justify-between">
            <img
              class="h-[38px] w-[38px] cursor-pointer"
              src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
              alt=""
            />
            <i class="fa-regular fa-face-smile cursor-pointer text-[26px] text-gray-500"></i>
          </div>
          <div class="w-full py-[15px]">
            <div class="border-1 mb-[15px] flex w-full items-center justify-between rounded-lg border-gray-300 p-[8px] dark:text-white dark:bg-black">
              <span class="cursor-pointer font-medium text-black ">Thêm vào bài viết của bạn</span>
              <div class="flex justify-around">
                <div
                  class="flex h-[36px] w-[36px] items-center justify-center rounded-full hover:bg-[#F2F2F2]"
                  @click="handleOpenFileInput"
                >
                  <img
                    class="h-[24px] w-[24px] cursor-pointer"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeHqUBHb5H6DvGo3fHFIMnuhPL4YoeGsw5I8vhih4azDkvYK82Ph4rTMk09D3rFp2rwKaE5BuKt1RCFgJFAPRiON"
                    alt=""
                  />
                </div>
                <div class="flex h-[36px] w-[36px] items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                  <img
                    class="h-[24px] w-[24px] cursor-pointer"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png?_nc_eui2=AeGuHbvZi5VThlabTWO4Jot1ohqwRjkkxMOiGrBGOSTEw013eQjAhLtPOW8G-i21QMySd7WPo7ORquKG89ZSVFi1"
                    alt=""
                  />
                </div>
                <div class="flex h-[36px] w-[36px] items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                  <img
                    class="h-[24px] w-[24px] cursor-pointer"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeG3Yrx0YPc7BGvU6hgwmd1wvPIN-OmHLJy88g346YcsnPOTwiP9nl5vjkc3RY4qdb0hvpvvF96JXeJ4M26dypyH"
                    alt=""
                  />
                </div>
                <div class="flex h-[36px] w-[36px] items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                  <img
                    class="h-[24px] w-[24px] cursor-pointer"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png?_nc_eui2=AeGJZzAHVkPgsJxKvjTL4bu_88Ps36vvyGDzw-zfq-_IYIzspbLkXkbpS0cEn9JCveilbvBA3AJMRQWcGB70SX8N"
                    alt=""
                  />
                </div>
                <div class="flex h-[36px] w-[36px] items-center justify-center rounded-full hover:bg-[#F2F2F2]">
                  <img
                    class="h-[24px] w-[24px] cursor-pointer"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/q7MiRkL7MLC.png?_nc_eui2=AeFPcLUl2wa_geZXrdq03zCoJTqz5hgP3TklOrPmGA_dOccT_16aJXX9MLVp335HzRu9AVI65L3H3CJ-kx3OOE5N"
                    alt=""
                  />
                </div>
                <div
                  class="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full hover:bg-[#F2F2F2]"
                >
                  <i class="fa-solid fa-ellipsis"></i>
                </div>
              </div>
            </div>

            <button
              class="w-full rounded-lg bg-[#0861F2] py-[10px] font-medium text-white  dark:text-white dark:bg-gray-600 dark:hover:opacity-80"
              data-bs-dismiss="modal"
              aria-label="Close"
              v-on:click="handleAddPost"
            >
              Đăng
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { X } from "lucide-vue-next"

export default {
  props: {
    userCurrent: {
      type: Object,
      default: {}
    },
    placeholder: {
      type: String,
      default: "Bạn đang nghĩ gì đó"
    },
    content: {
      type: String,
      default: ""
    },
    media: {
      type: Array,
      default: []
    },
    avatar: {
      type: String,
      default: "https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
    },
    onContentChange: {
      type: Function,
      default: () => {}
    }
  },
  components: {
    X
  },
  emits: ["contentChangeEvent", "addPostEvent", "openFileInputEvent", "deleteMediaEvent","pasteEvent"],
  data() {
    return {
      internalContent: this.content
    }
  },
  methods: {
    handleContentInput() {
      this.$emit("contentChangeEvent", this.internalContent)
    },
    handleAddPost() {
      this.$emit("addPostEvent")
      this.internalContent = ""
    },
    handleOpenFileInput() {
      this.$emit("openFileInputEvent")
    },
    handleDeleteMedia(index) {
      this.$emit("deleteMediaEvent", index)
    },
    handlePaste(event) {
      this.$emit("pasteEvent", event, this.media);
    }
  }
}
</script>

<style></style>
