const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("594828826232487981")
setInterval(function() {
channel.send(`I've battled demons that won't let me sleep
Called to the sea but she abandoned me
But I won't never give up, no, never give up, no, no
No, I won't never give up, no, never give up, no, no
And I won't let you get me down
I'll keep gettin' up when I hit the ground
Oh, never give up, no, never give up no, no, oh
I won't let you get me down     
I'll keep gettin' up when I hit the ground
Oh, never give up, no, never give up no, no, oh
I'll find my way, find my way home, oh, oh, oh
I'll find my way, find my way home, oh, oh, oh
I'll find my way, find my way home, oh, oh, oh
I'll find my way, find my way home, oh, oh, oh
Oh yeah, I'm haunted by the distant past
Called to the skies but she was she overcast
But I won't never give up, no, never give up, no, no
No, I won't never give up, no, never give up, no, no
And I won't let you get me down
I'll keep gettin' up when I hit the ground
Oh, never give up, no, never give up no, no, oh
I won't let you get me down
I'll keep gettin' up when I hit the ground
Oh, never give up, no, never give up no, no, oh
I'll find my way, find my way home, oh, oh, oh
I'll find my way, find my way home, oh, oh, oh
I'll find my way, find my way home, oh, oh, oh
I'll find my way, find my way home, oh, oh, oh
Never give up, never give up
Never give up, never give up
No, no, oooh
And I won't let you get me down
I'll keep gettin' up when I hit the ground
Oh, never give up, no, never give up no, no, oh
I won't let you get me down
I'll keep gettin' up when I hit the ground
Oh, never give up, no, never give up no, no, oh
I'll find my way, find my way home, oh, oh, oh
I'll find my way, find my way home, oh, oh, oh
I'll find my way, find my way home, oh, oh, oh
I'll find my way, find my way home, oh, oh, oh`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
