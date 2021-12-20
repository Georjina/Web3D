<template>
  <section class="login-root">
    <div class="site-content__wrapper">
      <div class="site-content">
        <div class="brand-info">
          <h2 class="brand-info__text">3D模块化平台</h2>
          <p class="brand-info__intro">3D模块化平台基于vue、element-ui构建开发，实现3D模块化平台前端功能，提供一套更优的前端解决方案</p>
        </div>
        <div class="login-main">
          <h3 class="login-title">管理员登录</h3>
          <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="login" status-icon>
            <el-form-item prop="username">
              <el-input v-model="dataForm.username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="dataForm.password" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <!--<el-form-item prop="captcha">
              <el-row :gutter="20">
                <el-col :span="14">
                  <el-input v-model="dataForm.captcha" placeholder="请输入验证码">
                  </el-input>
                </el-col>
                <el-col :span="10" class="login-captcha">
                  <img :src="captchaPath" @click="getCaptcha()" alt="">
                </el-col>
              </el-row>
            </el-form-item>-->
            <el-form-item>
              <el-button class="login-btn-submit" type="primary" @click="login">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name       : 'Login',
  components : {},
  props      : {},
  data(){
    return {
      dataForm    : {
        username : '',
        password : '',
        captcha  : '',
      },
      captchaPath : '',
      dataRule    : {
        username : [
          {required : true, message : '请输入账号', trigger : 'blur'},
        ],
        password : [
          {required : true, message : '请输入密码', trigger : 'blur'},
        ],
        /*captcha  : [
          {required : true, message : '请输入验证码', trigger : 'blur'}
        ]*/
      },
    };
  },
  computed   : {},
  created(){
  },
  methods    : {
    login(){
      this.$refs['dataForm'].validate(async (valid) => {
        if (valid) {
          this.$router.push('layot-uc')
        } else {
          return false
        }
      })
    },
    getCaptcha(){},
  },
};
</script>
<style scoped lang="scss">
  .login-root{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(38, 50, 56, .6);
    overflow: hidden;
    &:before{
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      content: "";
      background-image: url(~@/assets/login_bg.jpg);
      background-size: cover;
    }
    .m-lang{
      position: fixed;
      right: 20px;
      padding: 20px;
      font-size: 14px;
      .el-dropdown{
        margin-left: 15px;
      }
    }
    .site-content__wrapper{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 0;
      margin: 0;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: transparent;
    }
    .site-content{
      min-height: 100%;
      padding: 30px 500px 30px 30px;
    }
    .brand-info{
      margin: 220px 100px 0 90px;
      color: #fff;
    }
    .brand-info__text{
      margin: 0 0 22px 0;
      font-size: 48px;
      font-weight: 400;
      text-transform: uppercase;
    }
    .brand-info__intro{
      margin: 10px 0;
      font-size: 16px;
      line-height: 1.58;
      opacity: .6;
    }
    .login-main{
      position: absolute;
      top: 0;
      right: 0;
      padding: 150px 60px 180px;
      width: 470px;
      min-height: 100%;
      background-color: #fff;
    }
    .login-title{
      font-size: 20px;
      line-height: 4em;
    }
    .login-captcha{
      overflow: hidden;
      > img{
        width: 100%;
        cursor: pointer;
      }
    }
    .login-btn-submit{
      width: 100%;
      margin-top: 38px;
    }
  }
</style>
