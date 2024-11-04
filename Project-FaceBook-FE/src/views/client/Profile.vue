<template>
  <input type="file" hidden name="file" ref="fileInput" id="file" @change="handleFileUpload" />
  <input type="file" hidden name="file" ref="fileInputAvatar" id="file" @change="handleUpFileloadAvatar" />
  <div class="w-full bg-[#F0F2F5]">
    <div id="header-profile" class="w-full bg-white shadow-md">
      <div class="relative flex w-full flex-col justify-center">
        <div class="mx-auto h-[405px] w-[1095px]">
          <img
            class="h-full w-full cursor-pointer rounded-b-lg"
            src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
            alt=""
          />
        </div>
        <div class="relative mx-auto flex h-[145px] w-[70%] flex-row justify-end">
          <div
            class="absolute left-[15px] top-[-30px] flex h-[176px] w-[176px] cursor-pointer items-center justify-center rounded-full bg-white"
          >
            <img
              class="h-[168px] w-[168px] rounded-[168px] hover:brightness-90"
              :src="inforUser.avatar ? inforUser.avatar : avatar"
              alt=""
            />
            <div class="absolute bottom-[10px] right-[20px]">
              <div
                class="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#E4E6EB] hover:bg-[#D8DADF]"
              >
                <i class="fa-solid fa-camera text-[20px]"></i>
              </div>
            </div>
          </div>
          <div class="w-[82%]">
            <div class="flex h-full w-full flex-grow px-[15px] py-[15px]">
              <div class="w-[50%]">
                <p class="pt-[8px] text-[32px] font-bold leading-[32px] text-[#050505]">
                  {{ inforUser.name }}
                </p>
                <p class="cursor-pointer pt-[8px] text-[15px] font-medium text-[#65676B] hover:underline">747 bạn bè</p>
                <p class="cursor-pointer text-[15px] font-medium text-[black] hover:underline">{{inforUser.bio}}</p>
                <div class="flex">
                  <img
                    class="-ml-2 h-[34px] w-[34px] cursor-pointer rounded-full border-[2px] border-white"
                    v-for="index in 10"
                    :key="index"
                    src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="w-[50%]" v-if="isOwner">
                <div class="mt-[30px] flex flex-row justify-end">
                  <div
                    class="mr-[8px] flex cursor-pointer flex-row items-center justify-center rounded-md bg-[#0866ff] px-[12px] hover:bg-[#0861F2]"
                  >
                    <i class="fa-solid fa-plus mr-[8px] pl-[5px] text-[12px] text-blue-200"></i>
                    <p class="text-[15px] font-medium text-white">Thêm vào tin</p>
                  </div>
                  <div
                    class="flex cursor-pointer flex-row items-center justify-center rounded-md bg-[#E4E6EB] px-[9px] py-[6px] hover:bg-[#D8DADF]"
                  >
                    <i class="fa-solid fa-pen mr-[5px]"></i>
                    <p data-bs-toggle="modal" data-bs-target="#update_info" class="text-[15px] font-medium">
                      Chỉnh sửa trang cá nhân
                    </p>
                  </div>
                </div>
                <div class="flex justify-end pt-[10px]">
                  <i
                    class="fa-solid fa-chevron-down cursor-pointer rounded-md bg-[#E4E6EB] px-[20px] py-[12px] text-[12px] hover:bg-[#D8DADF]"
                  ></i>
                </div>
              </div>
              <div class="w-[50%]" v-if="isOwner == false">
                <div class="mt-[30px] flex flex-row justify-end">
                  <div
                    v-if="statusFriend === -1"
                    class="mr-[8px] flex cursor-pointer flex-row items-center justify-center rounded-md bg-[#0866ff] px-[12px] hover:bg-[#0861F2]"
                  >
                    <i class="fa-solid fa-plus mr-[8px] pl-[5px] text-[12px] text-blue-200"></i>
                    <p class="text-[15px] font-medium text-white" @click="sendFriendRequest()">Thêm bạn bè</p>
                  </div>
                  <div
                    v-if="statusFriend === 0"
                    class="mr-[8px] flex cursor-pointer flex-row items-center justify-center rounded-md bg-[#0866ff] px-[12px] hover:bg-[#0861F2]"
                  >
                    <i class="fa-solid fa-plus mr-[8px] pl-[5px] text-[12px] text-blue-200"></i>
                    <p class="text-[15px] font-medium text-white" @click="deleteFriendRequest()">Hủy yêu cầu</p>
                  </div>
                  <div
                    v-if="statusFriend === 1"
                    class="mr-[8px] flex cursor-pointer flex-row items-center justify-center rounded-md bg-[#0866ff] px-[12px] hover:bg-[#0861F2]"
                  >
                    <i class="fa-solid fa-plus mr-[8px] pl-[5px] text-[12px] text-blue-200"></i>
                    <p class="text-[15px] font-medium text-white">Bạn bè</p>
                  </div>
                  <div
                    class="flex cursor-pointer flex-row items-center justify-center rounded-md bg-[#E4E6EB] px-[9px] py-[6px] hover:bg-[#D8DADF]"
                  >
                    <i class="fa-solid fa-pen mr-[5px]"></i>
                    <p class="text-[15px] font-medium" @click="toggleChatBox">Nhắn tin</p>
                  </div>
                  <div class="flex justify-end pt-[10px]"></div>
                </div>
                <div class="flex justify-end pt-[10px]">
                  <i
                    class="fa-solid fa-chevron-down cursor-pointer rounded-md bg-[#E4E6EB] px-[20px] py-[12px] text-[12px] hover:bg-[#D8DADF]"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto mt-[20px] h-[60px] w-[1031px]">
          <div class="flex h-full w-full flex-row items-center justify-between border-t border-gray-300 pt-[5px]">
            <div class="h-full w-[80%]">
              <a
                class="inline-block h-[50px] rounded-lg px-[16px] text-[15px] font-medium leading-[50px] text-[#65676B] hover:bg-[#F2F2F2] focus:text-[#0866FF]"
                href="#"
                >Bài viết</a
              >
              <a
                class="inline-block h-[50px] rounded-lg px-[16px] text-[15px] font-medium leading-[50px] text-[#65676B] hover:bg-[#F2F2F2]"
                href="#"
                >Giới thiệu</a
              >
              <a
                class="inline-block h-[50px] rounded-lg px-[16px] text-[15px] font-medium leading-[50px] text-[#65676B] hover:bg-[#F2F2F2]"
                href="#"
                >Bạn bè</a
              >
              <a
                class="inline-block h-[50px] rounded-lg px-[16px] text-[15px] font-medium leading-[50px] text-[#65676B] hover:bg-[#F2F2F2]"
                href="#"
                >Ảnh</a
              >
              <a
                class="inline-block h-[50px] rounded-lg px-[16px] text-[15px] font-medium leading-[50px] text-[#65676B] hover:bg-[#F2F2F2]"
                href="#"
                >Video</a
              >
              <a
                class="inline-block h-[50px] rounded-lg px-[16px] text-[15px] font-medium leading-[50px] text-[#65676B] hover:bg-[#F2F2F2]"
                href="#"
                >Reels</a
              >
              <a
                class="inline-block h-[50px] rounded-lg px-[16px] text-[15px] font-medium leading-[50px] text-[#65676B] hover:bg-[#F2F2F2]"
                href="#"
                >Xem thêm
                <i class="fa-solid fa-caret-down ml-[2px]"></i>
              </a>
            </div>
            <i
              class="fa-solid fa-ellipsis cursor-pointer rounded-md bg-[#E4E6EB] px-[17px] py-[9px] text-[18px] hover:bg-[#D8DADF]"
            ></i>
          </div>
        </div>
      </div>
    </div>
    <div class="min-h-screen w-full bg-[#F0F2F5]">
      <div class="mx-auto w-[1031px]">
        <div class="mt-[15px] flex w-full">
          <div class="mb-[20px] mr-[20px] w-[440px] overflow-y-auto">
            <div class="sticky top-4">
              <div class="flex h-full w-full flex-col">
                <div
                  class="mb-[15px] w-full rounded-lg border-b border-gray-300 bg-white p-[16px] shadow-sm"
                  v-if="isOwner"
                >
                  <p class="text-[20px] font-bold text-[#050505]">Giới thiệu</p>
                  <p
                    class="mt-[15px] cursor-pointer rounded-md bg-[#E4E6EB] py-[6px] text-center text-[15px] font-medium text-[#050505] hover:bg-[#D8DADF]"
                  >
                    Thêm tiểu sử
                  </p>
                  <p
                    class="mt-[15px] cursor-pointer rounded-md bg-[#E4E6EB] py-[6px] text-center text-[15px] font-medium text-[#050505] hover:bg-[#D8DADF]"
                  >
                    Chỉnh sửa chi tiết
                  </p>
                  <p
                    class="mt-[15px] cursor-pointer rounded-md bg-[#E4E6EB] py-[6px] text-center text-[15px] font-medium text-[#050505] hover:bg-[#D8DADF]"
                  >
                    Thêm sở thích
                  </p>
                  <p
                    class="mt-[15px] cursor-pointer rounded-md bg-[#E4E6EB] py-[6px] text-center text-[15px] font-medium text-[#050505] hover:bg-[#D8DADF]"
                  >
                    Thêm nội dung đáng chú ý
                  </p>
                </div>
                <div class="w-full rounded-lg border-b border-gray-300 bg-white px-[16px] pb-[20px] shadow-sm">
                  <div class="mb-[15px] flex w-full flex-row items-center justify-between pt-[8px]">
                    <a class="text-[20px] font-bold text-[#050505] hover:underline" href="">Ảnh</a>
                    <a
                      class="mr-[-10px] rounded-md px-[12px] py-[6px] text-[17px] text-[#0064d1] hover:bg-[#F2F2F2]"
                      href=""
                      >Xem tất cả ảnh</a
                    >
                  </div>
                  <div class="w-full">
                    <div class="grid-r grid h-full w-full grid-cols-3 gap-1">
                      <template v-for="value in allNewFeed" :key="value._id">
                        <div class="col-span-1 block h-full" v-for="(value1, index1) in value.medias" :key="index1">
                          <img
                            class="h-[150px] w-[300px] overflow-hidden rounded-tl-lg object-cover"
                            :src="value1.url"
                            alt=""
                          />
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
                <div
                  class="mt-[15px] w-full rounded-lg border-b border-gray-300 bg-white px-[16px] pb-[20px] shadow-sm"
                >
                  <div class="mb-[-2px] flex w-full flex-row items-center justify-between pt-[8px]">
                    <a class="text-[20px] font-bold text-[#050505] hover:underline" href="">Bạn bè</a>
                    <a
                      class="mr-[-10px] rounded-md px-[12px] py-[6px] text-[17px] text-[#0064d1] hover:bg-[#F2F2F2]"
                      href=""
                      >Xem tất bạn bè</a
                    >
                  </div>
                  <p class="mb-[15px] text-[17px] font-normal text-[#65676b]">747 người bạn</p>
                  <div class="h-[450px] w-full">
                    <div class="grid h-full w-full grid-cols-3 gap-x-2 gap-y-5">
                      <a class="col-span block h-full" href="" v-for="index in 9" :key="index">
                        <img
                          class="h-[90%] w-full rounded-lg"
                          src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg"
                          alt=""
                        />
                        <p
                          class="ml-[2px] mt-[2px] inline-block cursor-pointer text-[13px] font-medium hover:underline"
                        >
                          Ân Nguyên
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[560px]">
            <div class="flex w-full flex-col gap-4 rounded-lg border-[1px] bg-[white] p-2 shadow-sm" v-if="isOwner">
              <div id="new-post" class="flex h-32 flex-col justify-between rounded-lg p-2">
                <div id="new-post-top" class="flex items-center gap-3 p-1">
                  <div class="_pp_ cursor-pointer">
                    <img
                      :src="inforUser.avatar ? inforUser.avatar : avatar"
                      class="h-9 w-10 rounded-full"
                      alt=""
                    />
                  </div>
                  <input
                    data-bs-toggle="modal"
                    data-bs-target="#create_posts"
                    class="h-10 w-full cursor-pointer rounded-full border-[0px] bg-[#F0F2F5] px-3 text-tiny font-semibold outline-none transition-colors hover:bg-[#E4E6E9] focus:shadow-none focus:outline-none focus:ring-transparent mobile-x:text-base"
                    type="text"
                    name=""
                    :placeholder="placeholder"
                  />
                </div>
                <hr class="mx-2" />
                <div id="new-post-bottom" class="flex items-center justify-around px-2">
                  <div
                    class="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg transition-colors duration-300 hover:bg-myGray-900"
                  >
                    <svg-live-video class="w-6 text-red-500" />
                    <span>Live Video</span>
                  </div>
                  <div
                    class="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg transition-colors duration-300 hover:bg-myGray-900"
                  >
                    <svg-photo class="w-6 text-green-500" />
                    <span>Photo/video</span>
                  </div>
                  <div
                    class="hidden h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg transition-colors duration-300 hover:bg-myGray-900 mobile-x:flex"
                  >
                    <svg-smile class="w-6 text-yellow-400" />
                    <span>Feeling/activity</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-[15px] w-full rounded-lg border-2 bg-white">
              <div
                class="flex h-[54px] w-full flex-row items-center justify-between border-b border-gray-300 px-[16px]"
              >
                <p class="text-[20px] font-bold text-[#050505]">Bài viết</p>
                <div class="flex items-center justify-between">
                  <a
                    class="mr-[5px] rounded-md bg-[#E4E6EB] py-[6px] pl-[10px] pr-[6px] text-[15px] font-medium text-[#050505] hover:bg-[#D8DADF]"
                    href=""
                  >
                    <i class="fa-solid fa-sliders pr-[5px]"></i>
                    Bộ lọc
                  </a>
                  <a
                    class="rounded-md bg-[#E4E6EB] px-[12px] py-[6px] text-[15px] font-medium text-[#050505] hover:bg-[#D8DADF]"
                    href=""
                  >
                    <i class="fa-solid fa-gear"></i>
                    Quản lý bài viết
                  </a>
                </div>
              </div>
              <div class="flex h-[40px] w-full flex-row items-center justify-around px-[16px]">
                <div
                  class="cursor-pointer rounded-md px-[50px] py-[6px] text-[15px] font-semibold text-[#65676b] hover:bg-[#F2F2F2]"
                >
                  <i class="fa-solid fa-bars"></i>
                  Xem danh sách
                </div>
                <div
                  class="cursor-pointer rounded-md px-[50px] py-[6px] text-[15px] font-semibold text-[#65676b] hover:bg-[#F2F2F2]"
                >
                  <i class="fa-solid fa-table-cells-large"></i>
                  Chế độ xem lưới
                </div>
              </div>
            </div>
            <ul v-for="(value, index) in allNewFeed" :key="index">
              <li class="my-4 w-full rounded-lg border-[1px] bg-[white] py-2 shadow-sm transition-colors duration-300">
                <div id="post-top" class="flex w-full items-center justify-between p-4 py-2">
                  <div id="post-top_left" class="flex items-center gap-2">
                    <router-link :to="`/profile/${value.user.username}`">
                      <div
                        id="post-top_left_pp"
                        class="w-max cursor-pointer rounded-full border-2 border-black ring-2 ring-blue-500 ring-opacity-70"
                      >
                        <img
                          :src="value.user.avatar ? value.user.avatar : avatar"
                          class="h-8 w-8 rounded-full"
                          alt=""
                        />
                      </div>
                    </router-link>
                    <router-link :to="`/profile/${value.user.username}`">
                      <div id="post-top_left_title">
                        <p class="cursor-pointer font-bold capitalize hover:underline">
                          {{ value.user.name }}
                        </p>
                        <p class="mt-1 flex items-center text-xs">
                          <span class="cursor-pointer hover:underline">{{ formatDate(value?.created_at ?? "") }}</span>
                          <span class="mx-1">·</span>
                          <svg-world class="w-3" />
                        </p>
                      </div>
                    </router-link>
                  </div>
                  <div id="post-top_right" class="flex items-center">
                    <div
                      class="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full duration-300 hover:bg-gray-200"
                    >
                      <svg-dots class="w-4" />
                    </div>
                    <div
                      class="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full duration-300 hover:bg-gray-200"
                    >
                      <X class="w-10" />
                    </div>
                  </div>
                </div>
                <div id="post-middle">
                  <div class="whitespace-pre-wrap p-4 py-2 text-sm font-normal leading-5">
                    {{ value.content }}
                  </div>
                  <render-image :allNewFeedDetail="value" />
                </div>
                <div id="post-bottom" class="px-4 py-2 text-sm font-normal">
                  <div id="post-bottom_info" class="flex items-center justify-between">
                    <div id="info_left" class="flex cursor-pointer gap-2">
                      <svg-like class="w-5" />
                      <span class="hover:underline"> {{ value.likes }}</span>
                    </div>
                    <div id="info_right">
                      <span class="mr-3 cursor-pointer hover:underline">{{ value.comments }} Comment</span>
                      <span class="cursor-pointer hover:underline">{{ value.shares }} Share</span>
                    </div>
                  </div>
                  <div
                    id="post-bottom_buttons"
                    class="my-2 flex items-center border-b border-t border-myGray-900 text-sm font-normal sm:text-tiny"
                  >
                    <div
                      class="my-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 transition-colors duration-300 hover:bg-myGray-900"
                      :class="{ 'text-[#0861f2]': value.user_liked.liked }"
                      @click="changeStatusLikePost(value, index)"
                    >
                      <i class="fa-solid fa-thumbs-up text-2xl"></i>
                      <span>Like</span>
                    </div>
                    <div
                      class="my-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 transition-colors duration-300 hover:bg-myGray-900"
                      data-bs-toggle="modal"
                      data-bs-target="#modalComment"
                      @click="
                        handleDetailPost(index),
                        contentComment = ''
                      "
                    >
                      <svg-comment class="w-5" />
                      <span>Comment</span>
                    </div>
                    <div
                      data-bs-toggle="modal"
                      data-bs-target="#share_posts"
                      class="my-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 transition-colors duration-300 hover:bg-myGray-900"
                    >
                      <Forward class="w-5" />
                      <span>Share</span>
                    </div>
                  </div>
                </div>
              </li>
              <div
                class="modal fade"
                id="modalComment"
                tabindex="-1"
                aria-labelledby="modalCommentLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5 text-2xl font-bold" id="modalCommentLabel">
                        Bài viết của {{ valueDetailPost?.user?.name ?? "" }}
                      </h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body pb-0">
                      <li>
                        <div id="post-top" class="flex w-full items-center justify-between p-4 py-2">
                          <div id="post-top_left" class="flex items-center gap-2">
                            <div
                              id="post-top_left_pp"
                              class="w-max cursor-pointer rounded-full border-2 border-black ring-2 ring-blue-500 ring-opacity-70"
                            >
                              <img
                                :src="
                                  valueDetailPost && valueDetailPost.user && valueDetailPost.user.avatar
                                    ? valueDetailPost.user.avatar
                                    : avatar
                                "
                                class="h-8 w-8 rounded-full"
                                alt=""
                              />
                            </div>
                            <div id="post-top_left_title">
                              <p class="cursor-pointer font-bold capitalize hover:underline">
                                {{ valueDetailPost?.user?.name ?? "" }}
                              </p>
                              <p class="mt-1 flex items-center text-xs">
                                <span class="cursor-pointer hover:underline">{{
                                  formatDate(valueDetailPost ? valueDetailPost.created_at : "")
                                }}</span>
                                <span class="mx-1">·</span>
                                <svg-world class="w-3" />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div id="post-middle">
                          <div class="p-4 py-2 text-sm font-normal leading-5">
                            {{ valueDetailPost ? valueDetailPost.content : "" }}
                          </div>
                          <render-image :allNewFeedDetail="valueDetailPost" />
                        </div>
                        <div id="post-bottom" class="px-4 py-2 text-sm font-normal">
                          <div id="post-bottom_info" class="flex items-center justify-between">
                            <div id="info_left" class="flex cursor-pointer gap-2">
                              <svg-like class="w-5" />
                              <span class="hover:underline"> {{ value.likes }}</span>
                            </div>
                            <div id="info_right">
                              <span class="mr-3 cursor-pointer hover:underline">{{ value.comments }} Comment</span>
                              <span class="cursor-pointer hover:underline">{{ value.shares }} Share</span>
                            </div>
                          </div>
                          <div
                            id="post-bottom_buttons"
                            class="my-2 flex items-center border-b border-t border-myGray-900 text-sm font-normal sm:text-tiny"
                          >
                            <div
                              class="my-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 transition-colors duration-300 hover:bg-myGray-900"
                              :class="{ 'text-[#0861f2]': value.user_liked.liked }"
                              @click="changeStatusLikePost(value, index)"
                            >
                              <i class="fa-solid fa-thumbs-up text-2xl"></i>
                              <span>Like</span>
                            </div>
                            <div
                              class="my-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 transition-colors duration-300 hover:bg-myGray-900"
                            >
                              <svg-comment class="w-5" />
                              <span>Comment</span>
                            </div>
                            <div
                              data-bs-toggle="modal"
                              data-bs-target="#share_posts"
                              class="my-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 transition-colors duration-300 hover:bg-myGray-900"
                            >
                              <Forward class="w-5" />
                              <span>Share</span>
                            </div>
                          </div>
                          <div id="post-bottom-comments ">
                            <div
                              id="other"
                              class="my-2 flex gap-2"
                              v-for="(commentDetail, key) in valueDetailPost.postComment"
                              :key="key"
                            >
                              <div id="other_pp">
                                <img
                                  src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
                                  class="h-9 w-9 cursor-pointer rounded-full"
                                  alt=""
                                />
                              </div>
                              <div id="other_comment" class="max-w-[80%] rounded-lg pb-2">
                                <div class="rounded-2xl bg-slate-100 px-3 py-2">
                                  <div id="commnet-name" class="cursor-pointer text-xs font-bold hover:underline">
                                    {{ commentDetail.user[0].name }}
                                  </div>
                                  <div class="max-w-full break-words" id="comment-title">
                                    {{ commentDetail.content }}
                                  </div>
                                </div>
                                <div class="mt-1 px-3 text-xs">
                                  <span class="cursor-pointer hover:underline">Like</span> ·
                                  <span class="cursor-pointer hover:underline">Reply</span> ·
                                  <span class="cursor-pointer hover:underline">Share</span> ·
                                  <span class="cursor-pointer hover:underline">2d</span>
                                </div>
                              </div>
                                <Trash2
                                  class="cursor-pointer hover:text-black"
                                  data-bs-toggle="modal"
                                  data-bs-target="#modalDeleteCommment"
                                  v-if="userCurrent._id == commentDetail.user_id"
                                  @click="
                                    valueCommentDetail = commentDetail
                                  "
                                />
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                    <div class="modal-footer">
                      <div id="me" class="flex w-full gap-2 px-[15px]">
                        <img
                          :src="userCurrent.avatar ? userCurrent.avatar : avatar"
                          class="h-9 w-9 cursor-pointer rounded-full"
                          alt=""
                        />
                        <div class="flex w-full flex-col">
                          <div
                            id="me_comment"
                            class="flex w-full rounded-2xl bg-slate-100 outline-none ring-transparent focus:outline-none"
                          >
                            <input
                              class="w-full rounded-2xl border-0 bg-transparent px-3 outline-none focus:border-black focus:outline-none focus:ring-transparent"
                              type="text"
                              placeholder="Viết câu trả lời..."
                              v-model="contentComment"
                              v-on:keyup.enter="addCommentPost(valueDetailPost._id)"
                            />
                            <div id="me_comment_buttons" class="flex items-center">
                              <div class="cursor-pointer rounded-full p-2 transition-colors duration-300">
                                <svg-smile class="w-4 text-myGray-600" />
                              </div>
                              <div
                                class="cursor-pointer rounded-full p-2 transition-colors duration-300 hover:bg-myGray-900"
                              >
                                <svg-live-video class="w-4 text-myGray-600" />
                              </div>
                              <div
                                class="cursor-pointer rounded-full p-2 transition-colors duration-300 hover:bg-myGray-900"
                              >
                                <svg-menu class="w-4 text-myGray-600" />
                              </div>
                              <div
                                class="cursor-pointer rounded-full p-2 transition-colors duration-300 hover:bg-myGray-900"
                              >
                                <svg-photo class="w-4 text-myGray-600" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <modal-create
      :userCurrent="userCurrent"
      :placeholder="placeholder"
      :content="content"
      :media="media"
      :avatar="avatar"
      @contentChangeEvent="handleContentChange"
      @addPostEvent="addPost"
      @openFileInputEvent="openFileInput"
      @deleteMediaEvent="handleDeleteMedia"
      @pasteEvent="onPaste"
    />
  </div>

  <!-- Modal update-info -->
  <div class="modal fade" id="update_info" tabindex="-1" aria-labelledby="update_info" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title flex justify-center text-2xl font-bold text-blue-500" id="exampleModalLabel">
            Chỉnh sửa trang cá nhân
          </h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Thay ava -->
          <div class="mb-[15px] h-full w-full">
            <div class="mb-[10px] flex w-full items-center justify-between">
              <p class="text-[20px] font-bold text-black">Ảnh đại diện</p>
              <span
                @click="openFileInputAvatar"
                class="cursor-pointer rounded-md px-[8px] py-[4px] text-[17px] text-[#0064d1] hover:bg-[#F2F2F2]"
                >Chỉnh sửa</span
              >
            </div>
            <div class="flex w-full justify-center">
              <div class="object-cover">
                <img :src="avatarUpLoad" alt="" class="h-[168px] w-[168px] rounded-full" />
              </div>
            </div>
          </div>
          <div class="mb-[10px] w-full">
            <p class="mb-[5px] text-[20px] font-bold text-black">Tên người dùng</p>
            <div class="flex w-full justify-center">
              <input
                type="text"
                placeholder="Tên người dùng"
                class="form-control border-gray-400 shadow-none outline-none focus:border-gray-500"
                v-model="name"
              />
            </div>
          </div>
          <div class="mb-[10px] w-full">
            <p class="mb-[5px] text-[20px] font-bold text-black">Giới thiệu bản thân</p>
            <div class="flex w-full justify-center">
              <input
                type="text"
                placeholder="Bio"
                class="form-control border-gray-400 shadow-none outline-none focus:border-gray-500"
                v-model="bio"
              />
            </div>
          </div>
          <div class="mb-[10px] w-full">
            <p class="mb-[5px] text-[20px] font-bold text-black">Giới tính</p>
            <div class="w-100%">
              <select
                name=""
                id=""
                class="form-control border-gray-400 shadow-none outline-none focus:border-gray-500"
                v-model="gender"
              >
                <option value="nam">Nam</option>
                <option value="nữ">Nữ</option>
                <option value="khác">Khác</option>
              </select>
            </div>
          </div>
          <div class="modal-footer border-none pr-0">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Hủy</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="updateProfile">
              Lưu thay đổi
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <modal-share />
  <div class="modal fade" id="modalDeleteCommment" tabindex="-1" aria-labelledby="modalCommentLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-2xl font-bold" id="modalCommentLabel">
            Xóa bình luận {{ valueCommentDetail?.user?.[0]?.name ?? "" }}
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="flex h-[100px] items-center rounded-md bg-yellow-500">
            <div class="w-[10%] text-center">
              <div
                class="ml-[10px] flex h-[32px] w-[32px] items-center justify-center rounded-full border-[3px] border-black"
              >
                <i class="fa-solid fa-exclamation text-[20px] text-black"></i>
              </div>
            </div>
            <div class="ml-[10px]">
              <p class="text-[15px] font-medium text-red-500">Warning</p>
              <p class="text-[15px] text-black">Bạn có muốn xóa bình luận này không ?</p>
              <p class="text-[15px] text-black">
                {{ valueCommentDetail ? valueCommentDetail.content : "" }}
              </p>
              <p class="text-[15px] text-black">
                <span class="text-[15px] font-semibold text-black">Lưu ý: </span>Điều này không thể hoàn tác!
              </p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
          <button
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
            @click="handleDeleteComment(valueCommentDetail)"
          >
            Xóa ngay
          </button>
        </div>
      </div>
    </div>
  </div>
  <ChatBox
    v-if="showChat"
    :showChat="showChat"
    :setShowChat="setShowChat"
    :messages="messages"
    :addMessage="addMessage"
    @setShowChatEvent="setShowChat"
  />
</template>
<script>
import svgLiveVideo from "@/components/svg/svgLiveVideo.vue"
import svgPhoto from "@/components/svg/svgPhoto.vue"
import svgSmile from "@/components/svg/svgSmile.vue"
import svgDots from "@/components/svg/svgDots.vue"
import svgWorld from "@/components/svg/svgWorld.vue"
import svgLike from "@/components/svg/svgLike.vue"
import svgMenu from "@/components/svg/svgMenu.vue"
import svgComment from "@/components/svg/svgComment.vue"
import { X, Trash2, Forward } from "lucide-vue-next"
import modalShare from "./Home/components/modalShare.vue"
import renderImage from "./Home/components/renderImage.vue"
import apiPost from "@/apis/post.api"
import { formatDate, isImageUrl } from "@/utils/utils"
import apiFriend from "@/apis/friend.api"
import apiProfile from "@/apis/profile.api"
import apiUploadFile from "@/apis/uploadFile.api"
import modalCreate from "./Home/components/modalCreate.vue"
import ChatBox from "@/components/ChatBox/ChatBox.vue"
import { getProfileFromLS, setProfileToLS } from "@/utils/auth"
import { handlePaste } from "@/utils/utils"
export default {
  components: {
    svgLiveVideo,
    svgPhoto,
    svgSmile,
    svgDots,
    svgWorld,
    svgLike,
    svgComment,
    svgMenu,
    modalShare,
    Forward,
    Trash2,
    X,
    renderImage,
    modalCreate,
    ChatBox
  },
  mounted() {
    this.userName = this.$route.params.id
    this.getDataNewFeed()
    this.checkStatusFriend()
    this.userCurrent = JSON.parse(localStorage.getItem("profile"))
    this.isOwner = this.userCurrent.username == this.userName
    if (this.userCurrent && this.userCurrent.name) {
      this.placeholder = `${this.userCurrent.name} ơi, bạn đang nghĩ gì thế?`
    } else {
      this.placeholder = "Bạn đang nghĩ gì thế?"
    }
    if (this.userName) {
      this.getProfile()
      this.name = this.userCurrent.name
      this.avatarUpLoad = this.userCurrent.avatar ? this.userCurrent.avatar : this.avatar
    }
  },
  data() {
    return {
      showModalCreatePost: false,
      showModalShare: false,
      media: [],
      showPrivate: false,
      pageMove: 1,
      avatar: "https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg",
      fileup: null,
      imageUpload: "",
      typeUpload: "",
      visibility: "",
      content: "",
      mentions: "",
      medias: "",
      allNewFeed: [],
      like: "",
      userCurrent: {},
      indexModalComment: -1,
      placeholder: "",
      valueDetailPost: {},
      contentComment: "",
      liked: false,
      valueCommentDetail: "",
      statusLike: false,
      isOwner: false,
      userName: '',
      profile: "",
      name: getProfileFromLS().name,
      bio : getProfileFromLS().bio,
      gender: "nam",
      date_of_birth: "",
      inforUser: {},
      statusFriend: -1,
      avatarUpLoad: "",
      showChat: false,
      messages: []
    }
  },

  methods: {
    formatDate,
    setShowChat(value) {
      this.showChat = value
    },
    addMessage(newMessage) {
      this.messages.push(newMessage)
    },
    toggleChatBox() {
      this.showChat = !this.showChat
    },
    checkStatusFriend() {
      apiFriend.checkStatusFriend(this.userName).then((res) => {
        this.statusFriend = res.data.status
      })
    },
    
    getProfile() {
      apiProfile.getProfile(this.userCurrent.username).then((res) => {
        this.inforUser = res.data.result  
      })
    },
    updateProfile() {
      const payload = {
        name: this.name,
        gender: this.gender,
        bio : this.bio,
        avatar: this.avatarUpLoad
      }
      
      apiProfile
        .updateProfile(payload)
        .then((res) => {
          this.$toast.success("Update information success", {
            position: "top-right"
          })
          this.getProfile()
        })
        .catch((error) => {
          console.error(error)
          this.$toast.error("Update information failure", {
            position: "top-right"
          })
        })
    },
    convertToISODateString(dateString) {
      let [year, month, day] = dateString.split("-")
      let date = new Date(year, month - 1, day)
      return date.toISOString()
    },
    handleFileUpload(event) {
      this.fileup = event.target.files[0]
      this.upFile()
      this.$refs.fileInput.value = ""
    },
    handleUpFileloadAvatar(event) {
      this.fileup = event.target.files[0]
      this.upFileAvatar()
      this.$refs.fileInput.value = ""
    },
    async upFileAvatar() {
      if (!this.fileup) {
        return
      }
      const formData = new FormData()
      formData.append("image", this.fileup)

      await apiUploadFile.upFile(formData).then((res) => {
        this.avatarUpLoad = res.data.result[0].url
        this.fileup = ""
      })
    },
    async upFile() {
      if (!this.fileup) {
        return
      }
      try {
        const formData = new FormData()
        formData.append("image", this.fileup)
        const res = await apiUploadFile.upFile(formData)
        this.media.push({
          url: res.data.result[0].url,
          type: res.data.result[0].type
        })
        this.fileup = ""
      } catch (error) {
        console.error("Lỗi khi upload file:", error)
      }
    },
    openFileInput() {
      this.$refs.fileInput.click()
    },
    openFileInputAvatar() {
      this.$refs.fileInputAvatar.click()
    },
    addPost() {
      if (this.content.trim() != "" || this.media.length > 0) {
        const body = {
          visibility: 1,
          content: this.content,
          mentions: [],
          medias: this.media
        }
        apiPost.addPost(body).then((res) => {
          this.$toast.success(res.data.message, {
            position: "top-right"
          })
          this.getDataNewFeed()
          this.media = []
          this.content = ""
        })
      } else {
        this.$toast.error("Nội dung không được để trống", {
          position: "top-right"
        })
      }
    },
    getDataNewFeed() {
      apiPost
        .getPost({
          params: {
            limit: 5,
            page: 1
          }
        })
        .then((res) => {
          this.allNewFeed = res.data.result
          this.allNewFeed.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        })
    },
    async changeStatusLikePost(post, index) {
      if (post.user_liked.liked) {
        apiPost.deleteLikePost(post._id).then((res) => {
          this.getDataNewFeed()
          this.$toast.success(res.data.message, {
            position: "top-right"
          })
        })
      } else {
        const payload = {
          post_id: post._id
        }
        apiPost.likePost(payload).then((res) => {
          this.getDataNewFeed()
          this.liked = this.allNewFeed[index].user_liked.liked
          this.liked = [...this.allNewFeed]
          this.$toast.success(res.data.message, {
            position: "top-right"
          })
        })
      }
    },
    onPaste(event) {
      handlePaste(event, this.media);
    },
    getCommentDetailPost() {
      apiPost
        .getCommentDetailPost(this.valueDetailPost._id, {
          params: {
            limit: 20,
            page: 1
          }
        })
        .then((res) => {
          this.valueDetailPost.postComment = res.data.result.postComment
        })
    },
    handleDetailPost(index) {
      this.valueDetailPost = this.allNewFeed[index]
      if (this.valueDetailPost._id) {
        this.getCommentDetailPost()
      }
    },
    async addCommentPost(postId) {
      const body = {
        post_id: postId,
        content: this.contentComment
      }

      if (this.contentComment.trim() !== "") {
        try {
          const res = await apiPost.addCommentPost(body)
          this.$toast.success(res.data.message, {
            position: "top-right"
          })
          this.contentComment = ""
          await Promise.all([this.getCommentDetailPost(), this.getDataNewFeed()])
        } catch (errors) {
        }
      }
    },
    async handleDeleteComment(post) {
      try {
        const commentId = post._id
        const res = await apiPost.deleteCommentPost(commentId, {
          data: {
            post_id: post.post_id
          }
        })
        await Promise.all([this.getCommentDetailPost(), this.getDataNewFeed()])

        this.$toast.success(res.data.message, {
          position: "top-right"
        })
      } catch (error) {}
    },
    async sendFriendRequest() {
      const body = {
        friend_user_id: this.inforUser._id
      }
      apiFriend.sendFriendRequest(body).then((res) => {
        this.checkStatusFriend()
      })
    },
    async deleteFriendRequest() {
      const {_id} = this.inforUser
      apiFriend.deleteFriendRequest(_id).then((res) => {
        this.checkStatusFriend()
      })
    },
    handleContentChange(newContent) {
      this.content = newContent
    },
    handleDeleteMedia(index) {
      if (index >= 0) this.media.splice(index, 1)
    }
  }
}
</script>
