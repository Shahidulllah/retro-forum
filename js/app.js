const loadPosts = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const posts = data.posts;
    displayPosts(posts);
    console.log(posts);
}

// display function
const displayPosts = posts => {
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

        <div class="category space-y-4 w-full ">
            <p class="text-sm font-bold text-gray-600"><span># ${post.category}</span> <span class="ml-8">Author: <span>${post.author.name}</span></span></p>
            <h3 id="title" class="text-xl font-extrabold">${post.title}</h3>
            <p class="text-gray-400 ">${post.description}</p>
            <div class="border-b-2 border-dashed"></div>
            <div class="command flex justify-between">
                <div class="flex gap-10">
                    <p class="space-x-2"><i class="fa-solid fa-comment"></i><span> ${post.comment_count}</span></p>
                <p class="space-x-2"><i class="fa-solid fa-eye"></i><span> ${post.view_count}</span></p>
                <p class="space-x-2"><i class="fa-solid fa-clock"></i><span> ${post.posted_time}</span></p>
                </div>
               
                <div>
                    <button onclick="appendTitle()" class=" bg-green-600 w-8 h-8 text-center rounded-full hover:bg-green-500"><i
                        class="fa-solid fa-envelope-open"></i></button>
                </div>
            </div>
        </div>
    </div> 
        `
        postContainer.appendChild(postCard);
    });
}

// function calling
loadPosts()

// click handler
const appendTitle = () => {
    const appendContainer = document.getElementById('appneable-card-container');
    const appendCard = document.createElement('div');
    appendCard.innerHTML = `
    <div class="appendable-card flex justify-between items-center bg-white px-7 py-3 rounded-2xl mb-3">
        <p class="w-9/12 font-bold">10 Kids Unaware of Their Costume</p>
        <p class="space-x-2"><i class="fa-solid fa-eye w-auto"></i><span> 1568</span></p>
    </div>
    `
    appendContainer.appendChild(appendCard);
    counter();
}


// Latest Data fetching
const loadLatestPosts = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const posts = data ;
    // console.log(posts);
    displayLatestPosts(posts);
}
loadLatestPosts()

// Latest Post function
const displayLatestPosts = posts => {
    const LatestPostContainer = document.getElementById('latest-card-container');
    posts.forEach(post => {
        const LatestPostCard = document.createElement('div')
        LatestPostCard.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl border border-gray-300">
        <figure class="px-10 pt-10">
            <img src=${post.cover_image} alt="Shoes"
                class="rounded-xl" />
        </figure>
        <div class="card-body space-y-2">
            <p class="text-gray-400"><i class="fa-regular fa-calendar-days"></i> ${post.author.posted_date}</p>
            <h2 class="card-title font-bold">${post.title}</h2>
            <p class="text-gray-400">${post.description} </p>
            <div class="author flex gap-3 items-center">
                <img class="w-12 rounded-full" src=${post.profile_image} alt="">

                <div>
                    <p class="font-bold">${post.author.name}</p>
                    <p class="text-gray-400">${post.author.designation}</p>
                </div>
            </div>
        </div>
    </div>
        `
        LatestPostContainer.appendChild(LatestPostCard);
    })
}

const counter = () =>{
    const counterId = document.getElementById('counter');
const counterValue = counterId.innerText;
const convertedCounter = parseInt(counterValue)
const finalcounter = convertedCounter + 1;
counterId.innerText = finalcounter;
}

