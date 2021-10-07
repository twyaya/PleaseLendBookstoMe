(function($){
  $(function(){
	 $(document).ready(function(){
		 $('.button-collapse').sideNav();
		 $('.parallax').parallax();
		 $('.carousel.carousel-slider').carousel({full_width: true});
		 $('.slider').slider({full_width: true});
		 $('.modal').modal();
		 new WOW().init();
		 $('.materialboxed').materialbox();
		 $('.carousel').carousel();
		 $(".dropdown-button").dropdown();
	 });

	const SECTIONS_TW = "食品, 運動, 科技"
	new Vue({
	    el: '#app',
	    data: {
	        posts: [],
	        results: [],
			newPost: {
			    name: '',
			    content: '',
				BookStatus: '普通',
				status:'審查中' 
			},
			image:"",
			love_points: 0
	    },
	    methods: {
			addPost(){
				const post = {
				    name: this.newPost.name,
				    content: this.newPost.content,
					BookStatus: this.newPost.BookStatus,
					status: this.newPost.status
				}
				
				this.posts.push(post);
				this.newPost.content = ''
				this.newPost.name = ''
				this.newPost.BookStatus = ''
			},fileSelected(event){
			  const file = event.target.files.item(0); //取得File物件
			  const reader = new FileReader(); //建立FileReader 監聽 Load 事件
			  reader.addEventListener('load',this.imageLoader);
			  reader.readAsDataURL(file);
			  this.newPost.image = file
			},
			imageLoader(event){
			  this.image=event.target.result;
			},
			borrow(){
				Swal.mixin({
				  input: 'text',
				  confirmButtonText: 'Next &rarr;',
				  showCancelButton: true,
				  progressSteps: ['1', '2']
				}).queue([
				  {
				    title: '第一步:輸入電子郵件信箱',
				  },
				  {
				    title: '第二步:輸入密碼',
				  }
				]).then((result) => {
				  if (result.value) {
				    const answers = JSON.stringify(result.value)
					Swal.fire(
					  '完成借閱',
					  ' ',
					  'success'
					)
				  }
				})
			}
		  }
	    });


  }); // end of document ready
})(jQuery); // end of jQuery name space