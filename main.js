var userTitle = "Elsankary",
  userDescreption = "Some Super Hero",
  userDate = "2/3";

var homeContent = `
  <div>
    <h3>Hello ${userTitle}</h3>
    <p>${userDescreption}</p>
    <span>${userDate}</span>
  </div>
  `;

document.write(homeContent.repeat(4));
