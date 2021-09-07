console.log("You look marvelous!")

import { getUsers } from "./userDataManager.js"
import { userList } from "./userList.js";
import { userData } from "./userdata.js";
const showUserList = () => {
	const userElement = document.querySelector(".User");
	getUsers().then((userData) => {
		userElement.innerHTML = userList(userData.results);
	})
}


showUserList ();

const buttonElement = document.querySelector(".User");

buttonElement.addEventListener("click", (event) => {
	if (event.target.id === "newUser") {
		showUserList()
	}
})