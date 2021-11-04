<template>
  <view>
    <view class="tittle"> 手机号注册 </view>
    <el-form class="form" :model="form" ref="form" :rules="rules">
      <el-form-item prop="phone">
        <view class="item">
          <el-input
            v-model.number="form.phone"
            prefix-icon="el-icon-user-solid"
            placeholder="请输入手机号"
            clearable
          />
        </view>
      </el-form-item>
      <el-form-item prop="pwd">
        <view class="item">
          <el-input
            v-model="form.pwd"
            show-password
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
          />
        </view>
      </el-form-item>
      <el-form-item prop="pwd2">
        <view class="item">
          <el-input
            show-password
            v-model="form.pwd2"
            prefix-icon="el-icon-lock"
            placeholder="请再次输入密码"
          />
        </view>
      </el-form-item>
    </el-form>
    <view class="slider" ref="slider">
      <view
        ref="btn"
        class="btn"
        draggable=""
        @touchstart="onSliderDown"
        @touchmove="onSliderMove"
        @touchend="onSliderUp"
      >
        >>
      </view>
      <view class="text">
        {{ isSuccess ? "验证成功" : "拖动滑块验证" }}
      </view>
    </view>
    <el-button
      class="button"
      type="success"
      @click="onSubmit"
      :disabled="isDisable"
    >
      快速注册
    </el-button>
    <view class="floor agreement">
      <el-checkbox class="newCheckSty" v-model="isChecked" />
      <text>已阅读并同意</text>
      <text class="text">《叮咚教育用户服务协议》</text>
      <text>及</text>
      <text class="text">《隐私政策》</text>
    </view>
  </view>
</template>

<script>
import { signUp } from "@/services/user";

export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      let phoneReg = /^1[3,4,5,7,8]\d{9}$/;
      if (!phoneReg.test(value)) {
        return callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    var checkPwd = (rule, value, callback) => {
      let pwd = /^\w{6,16}$/;
      if (!pwd.test(value)) {
        return callback(new Error("请输入正确的密码"));
      } else {
        callback();
      }
    };
    var checkPwd2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.pwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        phone: "",
        pwd: "",
        pwd2: "",
      },
      rules: {
        phone: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          { type: "number", message: "手机号必须为数字值", trigger: "blur" },
          { validator: checkPhone, trigger: "blur" },
        ],
        pwd: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { validator: checkPwd, trigger: "blur" },
        ],
        pwd2: [{ validator: checkPwd2, trigger: "blur" }],
      },
      startX: 0,
      isSuccess: false,
      isChecked: false,
    };
  },
  computed: {
    isDisable() {
      let { form, isSuccess, isChecked } = this;
      let { phone, pwd, pwd2 } = form;
      if (isSuccess && isChecked && phone && pwd && pwd2) {
        return false;
      } else {
        return true;
      }
    },
  },
  mounted() {},
  methods: {
    //拖动验证
    onSliderDown(e) {
      this.startX = e.touches[0].clientX;
    },
    onSliderMove(e) {
      e.touches[0].clientX;
      var moveX = e.touches[0].clientX - this.startX;
      this.$refs.btn.$el.style.left = moveX + "px";
      var successMove =
        this.$refs.slider.$el.clientWidth - this.$refs.btn.$el.clientWidth;
      if (Math.floor(moveX) >= successMove) {
        this.$refs.btn.$el.style.left = successMove + "px";
        this.isSuccess = true;
        this.onSliderDown = function () {};
        this.onSliderUp = function () {};
        this.onSliderMove = function () {};
      }
    },
    onSliderUp() {
      this.$refs.btn.$el.style.left = 0 + "px";
    },
    //注册账号
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (!valid) return;
        const code = await signUp({
          userName: this.form.phone,
          passWord: this.form.pwd,
        });
        // const a = JSON.parse(code);
        //  console.log(a);
        console.log(code);
        uni.showToast({
          title: "注册成功",
          icon: "success",
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/common/style.less";
.tittle {
  font-size: 38rpx;
  font-weight: bold;
  padding: 100rpx 0 50rpx 80rpx;
}
.form {
  width: 80%;
  margin: auto;
  /deep/ .el-input__inner {
    background: @info;
    border: 0;
  }
}
.slider {
  position: relative;
  margin: auto;
  height: 90rpx;
  width: 600rpx;
  background: @info;
  .btn {
    position: absolute;
    color: white;
    left: 0;
    height: 100%;
    width: 100rpx;
    line-height: 90rpx;
    text-align: center;
    background: @success;
    z-index: 3;
    box-shadow: 1px 1px 8px #888888;
  }
  .text {
    position: absolute;
    z-index: 2;
    width: 100%;
    top: 50%;
    text-align: center;
    transform: translateY(-50%);
  }
}
.button {
  width: 80%;
  display: block;
  margin: auto;
  margin-top: 100rpx;
  margin-bottom: 50rpx;
}
.floor {
  text-align: center;
}
</style>