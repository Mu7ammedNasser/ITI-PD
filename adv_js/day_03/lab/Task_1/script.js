var container = document.getElementById("postsContainer");

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send();

xhr.onload = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    usedData(data);
  } else {
    console.log("Error: " + xhr.status);
  }
};

function usedData(data) {
  var container = document.getElementById("posts-container");
  data.forEach(function (item) {
    container.innerHTML += `
                            <div class="post-card">
                                <div>
                                    <div class="post-title">${item.title}</div>
                                    <p class="post-body">${item.body}</p>
                                </div>
                                <div class="post-meta">
                                    <span><i class="fas fa-hashtag"></i> ID: ${item.id}</span>
                                    <span><i class="fas fa-user-circle"></i> User: ${item.userId}</span>
                                </div>
                            </div>
                        `;
  });
}
