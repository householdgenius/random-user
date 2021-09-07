

export const userData = (userObject) => {
  return `
      <section class="User">
      <img src="${userObject.picture.large}"/>
    <div>Gender: ${userObject.gender}</div>
    <div class="name">
    <div>Name: ${userObject.name.title}.&nbsp</div>
    <div>${ userObject.name.first}&nbsp</div>
    <div>${ userObject.name.last}</div>
    </div>
    <div class ="location">
    <div>Address: ${userObject.location.street.number}&nbsp</div>
    <div>${userObject.location.street.name},&nbsp</div>
    <div>${userObject.location.city},&nbsp</div>
    <div>${userObject.location.state},&nbsp</div>
    <div>${userObject.location.country}</div>
    </div>
    <div>Email: ${userObject.email}</div>
    <div>Age: ${userObject.dob.age}</div>
    <div>Phone: ${userObject.phone}</div>
    <div>Cell: ${userObject.cell}</div>
       
        
        <button id="newUser">New User</button>
      </section>
    `
}