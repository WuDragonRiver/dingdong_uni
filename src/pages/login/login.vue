<template>
  <view>
    <view class="tittle"> 账号登录 </view>
    <el-form class="form" :model="form" ref="form" :rules="rules">
      <el-form-item prop="phone">
        <view class="item">
          <el-input
            v-model.number="form.phone"
            prefix-icon="el-icon-user-solid"
            placeholder="请输入您的账号"
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
    </el-form>
    <view class="pwd"> 找回密码 </view>
    <el-button
      class="button"
      type="success"
      @click="onSubmit"
      :disabled="isDisable"
    >
      快速登录
    </el-button>
    <j-link :to="{ name: 'signUp' }" class="signup">
      还没有账号?点这里注册哦~
    </j-link>
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
    return {
      form: {
        phone: "",
        pwd: "",
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
.pwd {
  width: 80%;
  margin: auto;
  text-align: right;
  color: @success;
  font-size: 24rpx;
}
.signup {
  color: @success;
  text-align: center;
  font-size: 24rpx;
  margin-bottom: 50rpx;
}
.button {
  width: 80%;
  display: block;
  margin: auto;
  margin-top: 80rpx;
  margin-bottom: 20rpx;
}
.floor {
  text-align: center;
}
</style>