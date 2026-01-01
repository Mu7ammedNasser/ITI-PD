$(document).ready(function () {
  $("#load-all").click(function () {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET",
      success: function (data) {
        var posts = "";
        data.forEach(function (post) {
          posts += `
            <div class="post-card">
              <div class="post-title">${post.title}</div>
              <div class="post-body">${post.body}</div>
              <div class="post-meta">
                <span>User ID: ${post.userId}</span>
                <span>Post ID: ${post.id}</span>
              </div>
            </div>
                    `;
        });
        $("#posts-container").html(posts);
        $("#post-count").html(data.length);
      },
    });
  });

  $("#load-user2").click(function () {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/user/2/posts",
      method: "GET",
      success: function (data) {
        var posts = "";
        data.forEach(function (post) {
          posts += `
            <div class="post-card">
              <div class="post-title">${post.title}</div>
              <div class="post-body">${post.body}</div>
              <div class="post-meta">
                <span>User ID: ${post.userId}</span>
                <span>Post ID: ${post.id}</span>
              </div>
            </div>
                    
                    `;
        });
        $("#posts-container").html(posts);
        $("#post-count").html(data.length);
      },
    });
  });
  $("#load-user1").click(function () {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/user/1/posts",
      method: "GET",
      success: function (data) {
        var posts = "";
        data.forEach(function (post) {
          posts += `
            <div class="post-card">
              <div class="post-title">${post.title}</div>
              <div class="post-body">${post.body}</div>
              <div class="post-meta">
                <span>User ID: ${post.userId}</span>
                <span>Post ID: ${post.id}</span>
              </div>
            </div>
                    
                    `;
        });
        $("#posts-container").html(posts);
        $("#post-count").html(data.length);
      },
    });
  });
});
