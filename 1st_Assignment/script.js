async function loadPosts(){
const postContainer = document.getElementById("posts");
const errorMsg = document.getElementById("error");
postContainer.innerHTML = "Loading....";
errorMsg.innerHTML = " ";

try{
const response = await fetch("https://jsonplaceholder.typicode.com/posts");

if(!response.ok){
throw new Error("Failed to fetching data");
}

const data = await response.json();
postContainer.innerHTML = "";
data.slice(0,10).forEach(post => {
const div = document.createElement("div");
div.className = "post";
div.innerHTML = `
<h3>${post.title}</h3>
<p>${post.body}</p>
`;
postContainer.appendChild(div);
});
}catch(error){
errorMsg.innerHTML = "Error loading posts. Please try again.";
}
}