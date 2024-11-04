<template >
  <div>
    <input type="file" hidden name="file" ref="fileInput" id="file" @change="handleFileUpload" />
  <div class="min-h-screen w-full bg-[#F0F2F5] dark:text-white dark:bg-black">
    <div class="flex">
      <left-bar-home :userCurrent="userCurrent" :avatar="avatar" />
      <div class="mx-44 mt-7 w-full md:mx-28">
        <div class="">
          <div class="flex flex-col gap-4 rounded-lg border-[1px]  p-2 shadow-sm">
            <div id="storie" class="rounded-lg">
              <div
                class="h-18 flex w-full cursor-pointer items-center gap-3 rounded-lg px-2 py-1 transition-colors duration-300 hover:bg-myGray-900 dark:hover:bg-slate-600"
              >
                <div id="post-svg-plus" class="cursor-pointer rounded-full bg-face-blue-light p-2.5 dark:text-white dark:bg-black">
                  <svg-create class="w-5 text-face-blue" />
                </div>
                <div id="title" class="flex flex-col">
                  <span class="text-tiny mobile-x:text-lg">Create Story</span>
                  <span class="text-xs text-myGray-600 mobile-x:text-tiny">Share a photo or write something.</span>
                </div>
              </div>
            </div>
            <div id="new-post" class="flex h-32 flex-col justify-between rounded-lg p-2">
              <div id="new-post-top" class="flex items-center gap-3 p-1">
                <div class="_pp_ cursor-pointer">
                  <img :src="userCurrent.avatar ? userCurrent.avatar : avatar" class="h-9 w-10 rounded-full" alt="" />
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
              <hr class="mx-2" />
              <div id="new-post-bottom" class="flex items-center justify-around px-2">
                <div
                  class="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg transition-colors duration-300 hover:bg-myGray-900 dark:hover:bg-slate-600"
                >
                  <svg-live-video class="w-6 text-red-500" />
                  <span>Live Video</span>
                </div>
                <div
                  class="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg transition-colors duration-300 hover:bg-myGray-900 dark:hover:bg-slate-600"
                >
                  <svg-photo class="w-6 text-green-500" />
                  <span>Photo/video</span>
                </div>
                <div
                  class="hidden h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg transition-colors duration-300 hover:bg-myGray-900 dark:hover:bg-slate-600 mobile-x:flex"
                >
                  <svg-smile class="w-6 text-yellow-400" />
                  <span>Feeling/activity</span>
                </div>
              </div>
            </div>
          </div>
          <ul v-for="(value, index) in allNewFeed" :key="index">
            <li class="my-4 w-full rounded-lg border-[1px] bg-[white] py-2 shadow-sm transition-colors duration-300 dark:text-white dark:bg-black">
              <div id="post-top" class="flex w-full items-center justify-between p-4 py-2">
                <div id="post-top_left" class="flex items-center gap-2">
                  <router-link :to="`${pathConstant.profile}/${value.user.username}`">
                    <div id="post-top_left_pp" class="w-max cursor-pointer rounded-full border-2 ring-opacity-70">
                      <img :src="value.user.avatar ? value.user.avatar : avatar" class="h-8 w-8 rounded-full" alt="" />
                    </div>
                  </router-link>
                  <router-link :to="`${pathConstant.profile}/${value.user.username}`">
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
                    class="my-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 transition-colors duration-300 hover:bg-myGray-900 dark:hover:bg-slate-600"
                    :class="{ 'text-[#0861f2]': value.user_liked.liked }"
                    @click="changeStatusLikePost(value, index)"
                  >
               <ThumbsUp />
                    <span>Like</span>
                  </div>
                  <div
                    class="my-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 transition-colors duration-300 hover:bg-myGray-900 dark:hover:bg-slate-600"
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
                    class="my-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 transition-colors duration-300 hover:bg-myGray-900 dark:hover:bg-slate-600"
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
                <div class="modal-content dark:text-white dark:bg-black">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5 text-2xl font-bold " id="modalCommentLabel">
                      Bài viết của {{ valueDetailPost?.user?.name ?? "" }}
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body pb-0 dark:text-white dark:bg-black">
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
                                formatDate(valueDetailPost?.created_at ?? "")
                              }}</span>
                              <span class="mx-1">·</span>
                              <svg-world class="w-3" />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div id="post-middle">
                        <div class="px-4">
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
                            class="my-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 transition-colors duration-300 hover:bg-myGray-900 dark:hover:bg-slate-600"
                            :class="{ 'text-[#0861f2]': value.user_liked.liked }"
                            @click="changeStatusLikePost(value, index)"
                          >
                            <i class="fa-solid fa-thumbs-up text-2xl"></i>
                            <span>Like</span>
                          </div>
                          <div
                            class="my-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 transition-colors duration-300 hover:bg-myGray-900 dark:hover:bg-slate-600"
                          >
                            <svg-comment class="w-5" />
                            <span>Comment</span>
                          </div>
                          <div
                            data-bs-toggle="modal"
                            data-bs-target="#share_posts"
                            class="my-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 transition-colors duration-300 hover:bg-myGray-900 dark:hover:bg-slate-600"
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
                                :src="userCurrent.avatar ? userCurrent.avatar : avatar"
                                class="h-9 w-9 cursor-pointer rounded-full"
                                alt=""
                              />
                            </div>
                            <div id="other_comment" class="max-w-[80%] rounded-lg pb-2 dark:!text-white dark:!bg-gray-600 dark:hover:opacity-80">
                              <div class="rounded-2xl bg-slate-100 px-3 py-2 dark:!text-white dark:!bg-gray-600 dark:hover:opacity-80">
                                <div id="commnet-name" class="cursor-pointer text-xs font-bold hover:underline">
                                  {{ commentDetail.user[0].name }}
                                </div>
                                <div class="max-w-full break-words " id="comment-title">
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
                            <div class="flex items-center">
                              <modal-delete
                                :userCurrent="userCurrent"
                                :commentDetail="commentDetail"
                                :valueCommentDetail="valueCommentDetail"
                                @changeValueCommentDetailEvent="handleChangeCommentDetail"
                                @deleteCommentEvent="handleDeleteComment"
                              />
                            </div>
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
                          class="flex w-full rounded-2xl bg-slate-100 outline-none ring-transparent focus:outline-none dark:!text-white dark:!bg-gray-600 dark:hover:opacity-80"
                        >
                          <!-- input Comment -->
                          <input
                            class=" w-full rounded-2xl border-0 bg-transparent px-3 outline-none focus:border-black focus:outline-none focus:ring-transparent"
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
                              class="cursor-pointer rounded-full p-2 transition-colors duration-300 hover:bg-myGray-900 dark:hover:bg-slate-600"
                            >
                              <svg-live-video class="w-4 text-myGray-600" />
                            </div>
                            <div
                              class="cursor-pointer rounded-full p-2 transition-colors duration-300 hover:bg-myGray-900 dark:hover:bg-slate-600"
                            >
                              <svg-menu class="w-4 text-myGray-600" />
                            </div>
                            <div
                              class="cursor-pointer rounded-full p-2 transition-colors duration-300 hover:bg-myGray-900 dark:hover:bg-slate-600"
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
      <right-bar-home />
    </div>
    <div
      class="fixed bottom-5 right-5 flex cursor-pointer items-center justify-center rounded-full border-2 bg-white p-[14px] text-black transition-colors duration-300 hover:bg-myGray-700"
    >
      <svg-new-message class="w-5" />
    </div>
    <modal-share />
  </div>
  </div>
</template>
<script>
import svgCreate from "@/components/svg/svgCreate.vue"
import svgLiveVideo from "@/components/svg/svgLiveVideo.vue"
import svgPhoto from "@/components/svg/svgPhoto.vue"
import svgSmile from "@/components/svg/svgSmile.vue"
import svgDots from "@/components/svg/svgDots.vue"
import svgWorld from "@/components/svg/svgWorld.vue"
import svgLike from "@/components/svg/svgLike.vue"
import svgComment from "@/components/svg/svgComment.vue"
import svgMenu from "@/components/svg/svgMenu.vue"
import svgNewMessage from "@/components/svg/svgNewMessage.vue"
import { Forward, X, Trash2 } from "lucide-vue-next"
import leftBarHome from "./components/leftBarHome.vue"
import rightBarHome from "./components/rightBarHome.vue"
import modalShare from "./components/modalShare.vue"
import renderImage from "./components/renderImage.vue"
import { getProfileFromLS } from "@/utils/auth"
import { formatDate, isImageUrl } from "@/utils/utils"
import apiUploadFile from "@/apis/uploadFile.api"
import apiPost from "@/apis/post.api"
import modalCreate from "./components/modalCreate.vue"
import pathConstant from "../constant/path.constant"
import modalDelete from "./components/modalDelete.vue"
import { ThumbsUp } from 'lucide-vue-next';
import { handlePaste } from "@/utils/utils"
export default {
  components: {
    svgCreate,
    svgLiveVideo,
    svgPhoto,
    svgSmile,
    svgDots,
    svgWorld,
    svgLike,
    svgComment,
    svgMenu,
    Forward,
    svgNewMessage,
    X,
    leftBarHome,
    rightBarHome,
    modalShare,
    renderImage,
    Trash2,
    modalCreate,
    modalDelete,
    ThumbsUp
  },
  created() {
    this.userCurrent = getProfileFromLS()
    this.getDataNewFeed(true)
    if (this.userCurrent && this.userCurrent.name) {
      this.placeholder = `${this.userCurrent.name} ơi, bạn đang nghĩ gì thế?`
    } else {
      this.placeholder = "Bạn đang nghĩ gì thế?"
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
      valueCommentDetail: {},
      pathConstant: pathConstant
    }
  },
  methods: {
    formatDate,
    openFileInput() {
      this.$refs.fileInput.click()
    },
    handleFileUpload(event) {
      this.fileup = event.target.files[0]
      this.handleUpFileImage()
      this.$refs.fileInput.value = ""
    },
    async handleUpFileImage() {
      if (!this.fileup) {
        console.error("Chưa chọn file.")
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
    getDataNewFeed(isInitialLoad = false) {
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
      if (post?.user_liked?.liked) {
       await apiPost.deleteLikePost(post._id).then((res) => {
          this.getDataNewFeed()
          this.$toast.success(res.data.message, {
            position: "top-right"
          })
        })
      } else {
        const payload = {
          post_id: post._id
        }
     await apiPost.likePost(payload).then((res) => {
          this.getDataNewFeed()
          this.liked = [...this.allNewFeed]
          this.liked = this.allNewFeed[index].user_liked.liked
          this.$toast.success(res.data.message, {
            position: "top-right"
          })
        })
      }
    },
    onPaste(event) {
     handlePaste(event, this.media);
},
    handleDeleteMedia(index) {
      if (index >= 0) this.media.splice(index, 1)
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
    },

    handleContentChange(newContent) {
      this.content = newContent
    },
    handleChangeCommentDetail(data) {
      this.valueCommentDetail = data
    }
  }
}
</script>
