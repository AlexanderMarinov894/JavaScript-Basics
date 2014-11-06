var currentTime = new Date();

if (currentTime.getMinutes() < 10) {
    console.log('\n' + 'The current time is ' + currentTime.getHours() + ':0' + currentTime.getMinutes() + '.');
} else {
    console.log('\n' +'The current time is ' + currentTime.getHours() + ':' + currentTime.getMinutes() + '.');
}