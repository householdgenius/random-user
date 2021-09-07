

export const userData = (userObject) => {
  return `
      <section class="User">
         <div>${userObject.name.first}</div>
        <img src="${userObject.picture.large}" />
        <div>${userObject.gender}</div>
        <button id="newUser">New User</button>
      </section>
    `
}