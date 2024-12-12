var image = document.getElementById("user_image");
var user_name = document.getElementById("user_name");
var bio = document.getElementById("bio");
var input_search = document.getElementById("user_search");
var following = document.getElementById("following");
var followers = document.getElementById("followers");
var repository = document.getElementById("repo");

function githubSearch() {
    var name = input_search.value;
    var url = '';
    fetch(`https://api.github.com/users/${name}`)
        .then(res => {
            if (res.ok)
                return res.json();
        })
        .then(data => {
            url = data;
            image.src = url['avatar_url'];
            user_name.innerHTML = url['login'];
            bio.innerHTML = url['bio'];
            following.innerHTML = url['following'] === 0 ? '0' : url['following'] ;
            followers.innerHTML = url['followers'] === 0 ? '0' : url['followers'];
            repository.innerHTML = url['public_repos'] === 0 ? '0' : url['public_repos'];
            name.innerHTML = '';
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            input_search.value = '';
        })
}
