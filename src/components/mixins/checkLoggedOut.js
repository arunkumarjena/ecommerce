export defalut{
	mounted:fucntion(){
		if (localStorage.getItem("api_token")!==null) {
			this.checkLoggedInUser=true
		}else{
			this.checkLoggedInUser=false
		}
	}
}