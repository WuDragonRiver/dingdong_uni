<template>
  <view>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane name="one" label="推荐">推荐</el-tab-pane>
      <el-tab-pane name="two" label="成长">成长</el-tab-pane>
      <el-tab-pane name="three" label="作业">作业</el-tab-pane>
      <el-tab-pane name="four" label="作品">作品</el-tab-pane>
      <el-tab-pane name="five" label="动态">动态</el-tab-pane>
    </el-tabs>
    <view class="header">
      <el-carousel
        indicator-position="none"
        :interval="4000"
        type="card"
        height="300rpx"
      >
        <el-carousel-item v-for="(item, index) in 6" :key="index">
          <el-image fit="cover" src="../../static/images/lin.jpeg" />
        </el-carousel-item>
      </el-carousel>
      <view class="content">
        <view class="main">
          <view class="index">
            <el-image
              class="content_img"
              src="../../static/icon/index_free.png"
            />
            <view class="text"> 免费体验课 </view>
          </view>
          <view class="publish">
            <el-image
              class="content_img"
              src="../../static/icon/index_old.png"
            />
            <view class="text"> 中老年学堂 </view>
          </view>
          <view class="collect">
            <el-image
              class="content_img"
              src="../../static/icon/index_read.png"
            />
            <view class="text"> 推荐阅读 </view>
          </view>
          <view class="like">
            <el-image
              class="content_img"
              src="../../static/icon/index_activity.png"
            />
            <view class="text"> 热门活动 </view>
          </view>
          <view class="like">
            <el-image
              class="content_img"
              src="../../static/icon/index_find.png"
            />
            <view class="text"> 探知 </view>
          </view>
        </view>
      </view>
    </view>
    <view class="circle">
      <view class="top">
        <view class="left">
          <el-avatar src="../../static/icon/defalut_avatar.png" />
          <view>
            <view> user_name </view>
            <view class="light"> createtime </view>
          </view>
        </view>
        <view class="right">
          <view class="tag_green"> 关注 </view>
          <i class="light el-icon-share"></i>
        </view>
      </view>
      <view class="text"> 1111111111111111111111 </view>
      <view class="img">
        <el-image fit="contain" src="../../static/images/lin.jpeg" />
      </view>
      <view class="comment"> </view>
      <view class="floor">
        <view class="left">
          <el-image class="img" src="../../static/images/wechat.png" />
          <view class="text"> 分享 </view>
        </view>
        <view class="right">
          <el-image class="img" src="../../static/images/index_collect.png" />
          <el-image
            class="img"
            src="../../static/images/index_collect_actived.png"
          />
          <el-image class="img" src="../../static/images/index_like.png" />
          <el-image
            class="img"
            src="../../static/images/index_like_actived.png"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { signUp } from "@/services/user";

export default {
  data() {
    return {
      activeName: "two",
    };
  },

  mounted() {},
  methods: {
    handleClick({ index }) {
      console.log(index);
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/common/style.less";
page {
  background-color: @info;
}
@keyframes swiper {
  50% {
    transform: translateX(-100%) scale(0.8);
  }
}
.header {
  margin: 30rpx 20rpx;
  background: white;
  border-radius: 10rpx;
  .swiper {
    display: flex;
    flex-wrap: nowrap;
    .img {
      flex: 1;
      min-width: 90%;
      height: 300rpx;
      margin: 0 20rpx;
      border-radius: 10rpx;
      animation: swiper 5s infinite;
    }
  }
  .content {
    .main {
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      padding-bottom: 10rpx;
      .content_img {
        width: 70rpx;
        height: 70rpx;
      }
      .text {
        font-size: 24rpx;
      }
    }
  }
}
.circle {
  padding: 30rpx 20rpx;
  background: white;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 28rpx;
    .left {
      display: flex;
      align-items: center;
      .text {
        padding-left: 10rpx;
      }
    }
    .right {
      display: flex;
      align-items: center;
    }
  }
  .text {
    margin: 20rpx 0 10rpx 0;
    font-size: 30rpx;
  }
  .floor {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .img {
      width: 50rpx;
      height: 50rpx;
    }
    .left {
      display: flex;
      align-items: center;
    }
    .text {
      font-size: 22rpx;
    }
  }
}
</style>