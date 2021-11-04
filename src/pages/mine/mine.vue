<template>
  <view>
    <view class="header">
      <view class="top">
        <view class="top_ava">
          <el-avatar
            class="avatar"
            src="../../static/icon/defalut_avatar.png"
          />
          <view class="text"> 登录/注册 </view>
        </view>
        <i class="icon el-icon-arrow-right" style="font-size: 30rpx" />
      </view>
      <view class="myclass">
        <view class="class_item">
          <el-image class="class_img" src="../../static/icon/mine_class1.png" />
          <view class="text"> 我的体验课 </view>
        </view>
        <view class="class_item">
          <el-image class="class_img" src="../../static/icon/mine_class2.png" />
          <view class="text"> 我的正式课 </view>
        </view>
      </view>
    </view>
    <view class="content">
      <view class="title"> 我的内容 </view>
      <view class="main">
        <view class="index">
          <el-image class="content_img" src="../../static/icon/mine_home.png" />
          <view class="text"> 我的主页 </view>
        </view>
        <view class="publish">
          <el-image
            class="content_img"
            src="../../static/icon/mine_drafts.png"
          />
          <view class="text"> 我的发布 </view>
        </view>
        <view class="collect">
          <el-image
            class="content_img"
            src="../../static/icon/mine_collection.png"
          />
          <view class="text"> 我的收藏 </view>
        </view>
        <view class="like">
          <el-image class="content_img" src="../../static/icon/mine_like.png" />
          <view class="text"> 我的喜欢 </view>
        </view>
      </view>
    </view>
    <view class="welfare">
      <view class="title"> 成长福利</view>
    </view>
    <view class="cell">
      <view class="item">
        <view class="left">
          <el-image class="img" src="../../static/icon/mine_remind.png" />
          我的消息
        </view>
        <i class="el-icon-arrow-right" />
      </view>
      <view class="item">
        <view class="left">
          <el-image class="img" src="../../static/icon/mine_order.png" />
          我的订单
        </view>
        <i class="el-icon-arrow-right" />
      </view>
      <view class="item">
        <view class="left">
          <el-image class="img" src="../../static/icon/mine_commodity.png" />
          服务商城
        </view>
        <i class="el-icon-arrow-right" />
      </view>
      <view class="item">
        <view class="left">
          <el-image
            class="img"
            src="../../static/icon/mine_customerservice.png"
          />
          客服中心
        </view>
        <i class="el-icon-arrow-right" />
      </view>
      <view class="item">
        <view class="left">
          <el-image class="img" src="../../static/icon/mine_setup.png" />
          系统设置
        </view>
        <i class="el-icon-arrow-right" />
      </view>
    </view>
  </view>
</template>

<script>
import { signUp } from "@/services/user";

export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "@/common/style.less";
page {
  background-color: @info;
}
.header {
  margin: auto;
  padding: 30rpx 50rpx 20rpx;
  background: white;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30rpx;
    .top_ava {
      display: flex;
      align-items: center;
      .avatar {
        margin-right: 30rpx;
        border: 1px solid white;
        box-shadow: 1px 5px 5px 2px rgb(223, 216, 216);
      }
      .text {
        font-weight: bold;
      }
    }
  }
  .myclass {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .class_item {
      display: flex;
      align-items: center;
      .class_img {
        width: 80rpx;
        height: 80rpx;
        margin-right: 40rpx;
      }
      .text {
        font-size: 28rpx;
        font-weight: bold;
      }
    }
  }
}
.content {
  margin: 30rpx 20rpx;
  background: white;
  border-radius: 10rpx;
  .title {
    padding: 20rpx 0 25rpx 30rpx;
    font-size: 34rpx;
    font-weight: bold;
  }
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
.welfare {
  margin: 30rpx 20rpx;
  background: white;
  border-radius: 10rpx;
  padding: 20rpx;
  .title {
    padding: 20rpx 0 25rpx 30rpx;
    font-size: 34rpx;
    font-weight: bold;
  }
}
.cell {
  margin: 30rpx 20rpx;
  background-color: #fff;
  border-radius: 10rpx;
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30rpx;
    padding: 20rpx;
    border-bottom: 1px solid @info;
    .left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .img {
        margin-right: 20rpx;
        width: 40rpx;
        height: 40rpx;
      }
    }
  }
}
</style>