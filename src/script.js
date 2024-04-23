const slaps = [
	'slaps/Hard-Slap-A-www.fesliyanstudios.com.mp3',
	'slaps/Hard-Slap-B-www.fesliyanstudios.com.mp3',
	'slaps/Hard-Slap-C-www.fesliyanstudios.com.mp3',
	'slaps/Slap-A1-www.fesliyanstudios.com.mp3',
	'slaps/Slap-A2-www.fesliyanstudios.com.mp3',
	'slaps/Slap-A3-www.fesliyanstudios.com.mp3',
]
const button = document.getElementsByClassName('js-slap-page')[0];
const slapAnimation = document.getElementsByClassName('js-slapper')[0];

button.addEventListener( 'click', function() {
	new Audio( slaps[Math.floor(Math.random() * slaps.length)] ).play()
	slapAnimation.classList.add('active');

	setTimeout(function() {
		slapAnimation.classList.remove('active');
	}, 1500);
});

