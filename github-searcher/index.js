const userInput = document.querySelector("#input-user-search");
const userDataSubmit = document.querySelector("#submit-user-submit");
const userCardInfo = document.querySelector("#user-card-info");
const repositories = document.querySelector("#repo-container-stacks");
const bgGithubImage = document.querySelector("#bg-github-disco");
userDataSubmit.addEventListener("click", (e) => {
  bgGithubImage.style.display = "none";
  repositories.innerHTML = "";
  e.preventDefault();
  const inputValue = getUserData();
  generateUserCardInfo(inputValue);
});

function getUserData() {
  return userInput.value;
}

function generateUserCardInfo(username) {
  const url = `https://api.github.com/users/${username}`;
  fetch(url)
    .then((res) => {
      if (res.status === 404) {
        userCardInfo.innerHTML = `
        <div class="container">
        <img src="https://i.stack.imgur.com/Esppm.png" class="img-fluid" alt="...">
        </div>`;
      } else {
        return res.json();
      }
    })
    .then((data) => {
      let locations, bio, repoUrl;
      data.location === null
        ? (locations = "Not Available")
        : (locations = data.location);
      data.bio === null ? (bio = "") : (bio = data.bio);

      if (data) {
        userCardInfo.innerHTML = ` <div class="card mb-3 shadow p-3 mb-5 bg-body rounded" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${data.avatar_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <h5 class="card-title text-muted">${data.login}</h5>
              <p class="card-text">${bio}</p>
              <div class="row">
                  <div class="col">
                    <svg aria-hidden="true" height="18" viewbox="0 0 16 16" version="1.1" width="18" data-view-component="true" class="octicon octicon-people">
                        <path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
                    </svg>
                    <span>${data.followers}</span>
                    <span>followers ..</span>
                    <span>${data.following}</span>
                    <span>following</span>

                    <svg aria-hidden="true" height="16" viewbox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
                        <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                    </svg>
                    <span>${data.public_gists}</span>
                  </div>
              </div>
              <div class="row ">
                  <div class="col">
                    <svg class="octicon octicon-location" viewbox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                    <span>${locations}</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
      } else {
        userCardInfo.innerHTML = "no data";
      }

      repoUrl = data.repos_url;
      console.log(repoUrl);
      fetch(repoUrl)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          let repotype, description;

          data.map((e) => {
            e.description === null
              ? (description = "Not available")
              : (description = e.description);
            e.private === true ? (repotype = "public") : (repotype = "private");
            repositories.innerHTML += ` <div class="col-lg-6 col-sm-6 col-md-12 mb-3">
            <div class="card p-3">
                <div class="card-body">
                   <div class="row">
                       <div class="col-9">
                           <a href="${e.html_url}" class="fw-bold stretched-link" target="_blank" rel="noopener noreferrer">${e.name}</a>
                           <p class="fw-light">${description}</p>
  
                       </div>
                       <div class="col-3 justify-content-end">
                        <div class="d-flex justify-content-end">
                            <span class="badge rounded-pill bg-primary">${repotype}</span>
                        </div>
                       </div>
  
                   </div>
                </div>
              </div>
          </div>`;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
}
