//declaring Logging channel here as this is a globally used channel
const loggingChannel = memberName.guild.channels.find(ch => ch.name === 'bot-logs');
const serverName = memberName.guild.name();

function newMember(memberName){
    //This is the channel to post the welcome message to
    const channel = memberName.guild.channels.find(ch => ch.name==='welcome');
    var kilobyesRoleID = '281581612414795787';
    
    //Check that the channel exists, if it doesn't break out of the function gracefully
    if(!channel){
        console.log(`Channel with the name: ${channel}, Was not found.`);
        return;
    }

    //send a message to the #welcome channel greeting the user
    channel.send(`Welcome to ${serverName}, ${memberName}! Please read the rules in #rules-and-guidelines and enjoy your stay!`);
    console.log(`${memberName} Joined the server!`);

    //Assign the new memeber the Kilobytes Role
    memberName.addRole(kilobyesRoleID);
    console.log(`Gave ${memberName} the ${kilobyesRoleID} role!`);

}

module.exports = {
    newMember
}