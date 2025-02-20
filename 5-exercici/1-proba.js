import{getUser, getPosts, getComments} from '../4-event-loop/9-secuencial-async.js';

//funció per rebre la informació de tots els usuaris
function getAllUsers(){
    return fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => {
      if (!response.ok) throw new Error("Error al obtener los usuarios");
      return response.json();
    });
}

//funció per rebre la informació de tots els comentaris
function getAllComments(){
    return fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(response => {
      if (!response.ok) throw new Error("Error al obtener los comentarios");
      return response.json();
    });
}

//funció per crear un array amb tots els ids dels usuaris
async function idArrays(){
    let id = [];
    let users = await getAllUsers();
    users.forEach(function(user){
        id.push(user.id)
    });
    return id;
}

//ids serà un array amb tots els ids dels usuaris (originalment ordenats de menor a major)
let ids = await idArrays();

//console.log (ids);

//funció per ordenar els ids de major a menor
let sortedIds = ids.sort((a,b)=>b-a);
//console.log(sortedIds);

let comments = await getAllComments();

let filteredcomments = comments.filter((comment) => comment.postId === 12);

//console.log(filteredcomments);

async function getUserPosts(idUser){
  try{
    let user = await getUser(idUser);
    const posts = await getPosts(user.id);
    return posts;
  }catch(error){
    console.error("Error:", error);
  }
}

async function probes(uId){
  let posts = await getUserPosts(uId);

//console.log(posts);

posts.forEach(function(post){
  console.log(post.id);
});

let totalIds = posts.reduce((total,post) => total + post.id,0); //valor total de la suma de les ids dels posts

//console.log(totalIds);

function getallNumbers(AnArray){
  let total = 0;
  for (let i = 0; i < AnArray.length; i++){
    total += i;
  }
  return total;
}

let totalSum = getallNumbers(posts);

let firstpost = (totalIds-totalSum)/(posts.length);

console.log(posts[0].id===firstpost); //true

}

probes(5);
