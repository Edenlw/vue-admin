<style>
    .login input{
        padding: 0 40px;
    }
    .login{
        padding-bottom: 20px;
    }
    .user_icon{
        width: 20px;
        height: 20px;
        position: absolute;
        top: 10px;
        left: 20px;
    }
    .pwd_icon{
        width: 20px;
        height: 20px;
        position: absolute;
        top: 70px;
        left: 20px;
    }
    .login_land{
        width : 400px;
        height : 200px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -200px;
        margin-top: -100px;
    }
    .form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
     html{
        overflow:hidden;
    }
    body{
        margin:0 auto;
    }
</style>
<template>
    <div style="background:#324057;width:100%;height:100%;position:absolute;">
        <transition name="form-fade" mode="in-out">
            <div class="login_land" v-show="showLogin"> 
                <el-input placeholder="请输入用户名" class="login"></el-input>
                <icon name="user" class="user_icon"></icon>
                <el-input placeholder="请输密码" class="login"></el-input>
                <icon name="pwd" class="pwd_icon"></icon>
                <el-button type="primary" style="width:400px;" @click="loginLand">登陆</el-button>
            </div>
        </transition>
    </div>
</template>
<script>
    import Icon from 'vue-svg-icon/Icon.vue'
    export default {
        data(){
            return {
               showLogin : false 
            }
        },
        components  : {
            Icon
        },
        mounted() {
            this.showLogin = true;
        },
        methods(){
            loginLand : function(){
                this.$router.push({path: '/manage')
            }
        }
    }
</script>