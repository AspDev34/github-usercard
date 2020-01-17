/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
// */
// axios.get("https://api.github.com/users/AspDev34")
//     .then(response => {
//       console.log(response);
//     })
//       .catch(error => {
//         console.log(error);
//       })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card"> created & class
  <img src={image url of user} /> created
  <div class="card-info"> created & class
    <h3 class="name">{users name}</h3> created & class
    <p class="username">{users user name}</p> created & class
    <p>Location: {users location}</p> created
    <p>Profile:  created
      <a href={address to users github page}>{address to users github page}</a> created
    </p>
    <p>Followers: {users followers count}</p> created
    <p>Following: {users following count}</p> created
    <p>Bio: {users bio}</p> created
  </div>
</div>

*/
function newCard (obj) {
  // create elements
  const parentDiv = document.createElement('div');
  const imgCreate = document.createElement('img');
  const cardInfoDiv = document.createElement('div');
  const h3Create = document.createElement('h3');
  const usernamePtag = document.createElement('p');
  const userslocationPtag = document.createElement('p');
  const profilePtag = document.createElement('p');
  const addressAtag = document.createElement('p');
  const followersPtag = document.createElement('p');
  const followingPtag = document.createElement('p');
  const bioPtag = document.createElement('p');

  // Add classes for created elements
  parentDiv.classList.add('card')
  cardInfoDiv.classList.add('card-info');
  h3Create.classList.add('name');
  usernamePtag.classList.add('username');

  // Append created elements to the containing div
  parentDiv.append(imgCreate);
  parentDiv.append(cardInfoDiv);
  cardInfoDiv.append(h3Create);
  cardInfoDiv.append(usernamePtag);
  cardInfoDiv.append(userslocationPtag);
  cardInfoDiv.append(profilePtag);
  profilePtag.append(addressAtag);

  // pass obj data to newCard
  imgCreate.src = obj.avatar_url;
  h3Create.textContent = obj.name;
  usernamePtag.textContent = obj.login;
  userslocationPtag.textContent = `Location: ${obj.location}`;
  addressAtag.href = obj.html_url;
  addressAtag.textContent = obj.html_url;
  profilePtag.textContent = "Profile: ";
  followersPtag.textContent = `Followers: ${obj.followers}`;
  followingPtag.textContent = `Following: ${obj.following}`;
  bioPtag.textContent = `Bio: ${obj.bio}`;

  


  return parentDiv;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
