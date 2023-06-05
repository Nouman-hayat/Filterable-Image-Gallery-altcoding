//target all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = () => {
	//after window loaded
	filterItem.onclick = (selectedItem) => {
		//when user click on filterItem category
    
		if (selectedItem.target.classList.contains("item")) {
			//if user selected category has .item class
			filterItem.querySelector(".active").classList.remove("active"); //remove the default active class
			selectedItem.target.classList.add("active"); //add  active class on user selected category
			let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected category
			filterImg.forEach((image) => {
				let filterImges = image.getAttribute("data-name"); 
				//if user selected category data-name value is equal to images data-name value
				//or user selected category data-name value is equal to "all"
				if (filterImges == filterName || filterName == "all") {
					image.classList.remove("hide"); //first remove the hide class from the image
					image.classList.add("show"); //add show class in image
				} else {
					image.classList.add("hide"); //add hide class in image
					image.classList.remove("show"); //remove show class from the image
				}
			});
		}
	};
	for (let i = 0; i < filterImg.length; i++) {
		filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
	}
};

//fullscreen image preview function
//selecting all required elements
const previewBox = document.querySelector(".preview-box"),
	categoryName = previewBox.querySelector(".title p"),
	previewImg = previewBox.querySelector("img"),
	closeIcon = previewBox.querySelector(".icon"),
  shadow = document.querySelector(".shadow");
  

function preview(element) {

	let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link 
	let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
	previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
	 //passing user clicked data-name value in category name
	previewBox.classList.add("show"); //show the preview image box
	shadow.classList.add("show"); //show the light grey background
	closeIcon.onclick = () => {
		//if user click on close icon of preview box
		previewBox.classList.remove("show"); //hide the preview box
		shadow.classList.remove("show"); //hide the light grey background
		document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
	};
}
