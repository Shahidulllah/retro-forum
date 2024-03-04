const loadPosts = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const posts = data.posts;
    console.log(posts);
    displayPosts(posts);
}



// function loadPosts(){
//     fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
//     .then(res => res.json())
//     .then(data => displayPosts(data.posts))
// }



const displayPosts = posts =>{ 
    const postContainer = document.getElementById('post-container');
    posts.forEach(post => {
        const postCard = document.createElement('div')
        postCard.innerHTML = `
        <div class="left-container flex gap-7 bg-[#797DFC1A] p-8 rounded-2xl mb-4">
        <div class="indicator">
            <span class="indicator-item badge bg-green-600"></span>
            <div class="profile w-16">
                <img class="w-full rounded-2xl" src=${post.image}>
                <span class="bg-red-500 w-5"></span>
            </div>
        </div>

        <div class="category space-y-4 ">
            <p class="text-sm font-bold text-gray-600"><span># ${post.category}</span> <span class="ml-8">Author: <span>${post.author.name}</span></span></p>
            <h3 class="text-xl font-extrabold">${post.title}</h3>
            <p class="text-gray-400 ">${post.description}</p>
            <div class="border-b-2 border-dashed"></div>
            <div class="command flex justify-between">
                <div class="flex gap-4">
                    <p class="space-x-2"><i class="fa-solid fa-comment"></i><span> ${post.comment_count}</span></p>
                <p class="space-x-2"><i class="fa-solid fa-eye"></i><span> ${post.view_count}</span></p>
                <p class="space-x-2"><i class="fa-solid fa-clock"></i><span> ${post.posted_time}</span></p>
                </div>
               
                <div>
                    <button class=" bg-green-600 w-8 h-8 text-center rounded-full hover:bg-green-500"><i
                        class="fa-solid fa-envelope-open"></i></button>
                </div>
            </div>
        </div>
    </div> 
        `
        postContainer.appendChild(postCard);
    });
}
   


loadPosts()