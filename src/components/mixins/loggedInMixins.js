export default{
	method: function(){
	    if (this.$refs.form.validate()) {
    			console.log("User EMail : " + this.user.email + "\n Password : " + this.user.password)
    			// Configiure LocalStorage
    			localStorage.setItem("userChecker","loggedin")
    			// Routes To Home
    			this.$router.push('/home')
    			}
    		}
	}