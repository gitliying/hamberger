<template>
	<div class="reg">
        <div class="top">
        	<p>
        		<i @click="backToHome()" class="fa fa-angle-left" aria-hidden="true"></i>
        	</p>
        <p>
        	<i class="fa fa-user-circle" aria-hidden="true"></i>
        </p>
        </div>
        <div class="msg">
        	<i class="fa fa-cog" aria-hidden="true"></i>
       		 请输入您的账号
       		 <i class="fa fa-cog" aria-hidden="true"></i>
        </div>
        <div class="bottom">
        	<div>
        		<span>
        			<!--<i class="fa fa-mobile" aria-hidden="true"></i>-->
        			<i class="fa fa-user-o" aria-hidden="true"></i> 
        		</span>
        		
        		<input 
        			type="text" 
        			v-model="userEmail"
        			 @blur="userCheck()" 
        			placeholder="请输入邮箱"/>
        	</div>
        	<span v-if="userErr">亲，邮箱格式不正确哦！</span>
        	<div>
        		<span>
        			<i class="fa fa-key" aria-hidden="true"></i>
        		</span>
        		<input 
        			type="password" 
        			v-model="userPass"
        			@blur="passCheck()"
        			placeholder="请输入密码"/>
        	</div>
        	<span 
        		v-if="passErr">密码由大写字母+小写字母+数字，8-16位组成</span>
        	<p>
        		<input type="checkbox"/>
        		记住我
        	</p>
        	<div @click="backToLogin()" class="delu" id="Reg">注册</div>
        	<p @click="quickBackToLogin()">已注册，直接登录</p>
        	
        </div>
	</div>
	<!--<router-view></router-view>-->
</template>

<script>
	
	export default{
		name:'My',
		components:{},
		data(){
			return{
				userErr:false,
				passErr:false,
				userEmail:'',
				userPass:'',
				reg:null,
				pass:null
			}
			
		},
		methods:{
			backToHome(){
				this.$router.push('/');
				
			},
			userCheck(){
				this.reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
				if(this.userEmail=='' || !this.reg.test(this.userEmail) ){
					console.log(this.userEmail)
					this.userErr=true;
				}else{
					this.userErr=false;
				}
			},
			passCheck(){
				// pass:密码由大写字母+小写字母+数字，8-16位组成
				this.pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,16}$/;
				if(!this.pass.test(this.userPass)){
					console.log('pass'+this.passErr)
					this.passErr=true;
				}else{
					this.passErr=false;
				}
			},
			backToLogin(){
				console.log('user:'+this.userEmail)
				//判断userEmail userPass 是否都正确
				if(this.userErr==false&&this.passErr==false&&this.userEmail!='' && this.reg.test(this.userEmail) && this.pass.test(this.userPass)){
					//拿到userEmail，pass 存储到localStorage
					 localStorage.setItem("u_email",this.userEmail);
		        	 localStorage.setItem("u_pass",this.userPass);
//		        	 if(){
						alert('注册成功，请登录');
						this.$router.push('/my/login');
//					}
				}else{
					alert('哇哦！亲，注册失败了，请重试');
				}
				
			},
			quickBackToLogin(){
				this.$router.push('/my/login');
			}
				
		},
		mounted(){
			
		}
		
	}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.reg{
	.top{
		p:nth-child(1){
			.h(44);
			.margin-left(10);
			i{
				.fs(30);
				color:#d93035;
			}
		}
		p:nth-child(2){
			.h(94);
			.lh(94);
			text-align:center;
			.fs(94);
			color:#8dc4dc;
		}
	}
	.msg{
		.margin-top(20);
		.h(22);
		color:#5c5c5c;
		.fs(16);
		text-align:center;
	}
	.bottom{
		.w(375);
		.h(52);
		text-align:center;
		div{
			border:1px solid #ccc;
			.margin-top(20);
			box-shadow:5px 5px 2px #ccc;
			border-radius:5px;
			.margin-left(10);
			.w(345);
			span{
				.h(40);
				.w(40);
				border-right:1px solid #ccc;
				i{
					display: inline-block;
					.w(30);
					.fs(30);
					color:#d93035;
				}
			}
			input{
				.w(285);
				.h(40);
				.fs(16);
			}
		}
		span{
			.fs(12);
			color:#d93035;
		}
		p{
			.margin-top(20);
			.margin-left(20);
			text-align:left;
			.fs(12);
			color:#a5a5a5;
			input{
				.w(20);
				.h(20);
			}
		}
		.delu{
			.fs(16);
			.h(42);
			.lh(42);
			color:#fff;
			background:#d93035;
			box-shadow:0px 0px 0px #fff;
		}
	}
}
</style>