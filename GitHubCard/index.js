import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const entryDiv = document.querySelector('.cards');

axios.get(`https://api.github.com/users/Veilios`)
.then((res) => {
  //console.log(res.data);
  entryDiv.append(cardMaker(res.data));
}).catch((err) => {
  console.log(`Error: ${err}`);
});
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/


const cardMaker = (data) => {
  const card = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardName = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  
  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name');
  username.classList.add('username');
  
  cardImg.src = data.avatar_url;
  cardName.textContent = data.name;
  username.textContent = data.login;
  location.textContent = `Location: ${data.location}`;
  profile.textContent = "Profile: ";
  profileLink.href = data.html_url;
  profileLink.textContent = data.html_url;
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;
  
  return card;
  };
  

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'https://api.github.com/users/jiangeyre',
  'https://api.github.com/users/Pytormal',
  'https://api.github.com/users/kendra4227',
  'https://api.github.com/users/1professionalusername',
  'https://api.github.com/users/bigknell'
];

followersArray.forEach((link) => {
  axios.get(`${link}`)
  .then((res) => {
    entryDiv.append(cardMaker(res.data))
  })
  .catch((err) => {
    console.log(err);
  });
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
