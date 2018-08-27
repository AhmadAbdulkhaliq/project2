$(function renderPost()
{
    fetch("http://localhost:3000/posts")
     .then(res => res.json())
     .then(response => {
         response.forEach(post => {
             let posts=$('#posts')
             let postDiv = $("<div>").addClass('card p-3 color m-3');
             let p = $("<p>").html(`<h3 class='text-left'>${post.title}</h3>
             <span class='mb-2'>@${post.owner}</span> 
             <p>${post.body} </p>`);

             postDiv.append(p);
             posts.append(postDiv)
           addCommentButtonToPost(postDiv,post)

         })
     })
})

function addCommentButtonToPost(postDiv,post)
{
    fetch("http://localhost:3000/comments")
     .then(res => res.json())
     .then(response => {
         response.forEach(comment => {
            if(comment.postId == post.id)
            {
                let commentDiv = $("<div>").addClass('card p-3');
                let commentBody = $("<p>").html(`<span class='mb-2'>@${comment.owner}</span> 
                <p>${comment.body}`)

                commentDiv.append(commentBody);
                postDiv.append(commentDiv); 
            }
         })
         postDiv.append(`<a href=./dashboard/comments.html>add a comment</a>`)
     })
}

