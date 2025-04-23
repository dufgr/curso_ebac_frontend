$(document).ready(() => {
	const name = $('#name')
	const username = $('#username')
	const avatar = $('#avatar')
	const repos = $('#repos')
	const followers = $('#followers')
	const following = $('#following')
	const link = $('#link')

	fetch('https://api.github.com/users/dufgr')
		.then((res) => {
			return res.json()
		})
		.then((json) => {
			name.text(json.name)
			username.text(json.login)
			avatar.attr('src', json.avatar_url)
			repos.text(json.public_repos)
			followers.text(json.followers)
			following.text(json.following)
			link.attr('href', json.html_url)
		})
})
