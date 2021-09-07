import { userData } from "./userdata.js";

export const userList = (allUsers) => {
    let userHTML = "";
    for (const userObject of allUsers) {
        userHTML += userData(userObject)
    }
    return userHTML;

}

