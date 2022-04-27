const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        //Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

Client.on("ready", () => {
    console.log("bot opérationnel")
});


const prefix = "£";

Client.on("messageCreate", message =>{
    if (message.content === prefix + "salut"){
        message.channel.send("Bonjour a tous! je vous invite a faire £start pour faire le défi que je vous propose")
        message.channel.send("Les réponses seront à donner en majuscules sinon je ne répondrai pas à votre requête")
        message.channel.send("Le premier qui aura trouver toutes les réponses (il faudra les mettre dans cet ordre: REPONSE1 REPONSE2 REPONSE3")
        message.channel.send("Si vous avez d'autres questions (évitez les questions connes quand même svp) n'hésitez pas a demander à Style de vous informez plus")
        message.channel.send("Je vous souhaite bonne chance!")
    }
    if (message.content === prefix + "start"){
        message.channel.send("Voilà la première énigme : J'ai inauguré le serveur")
    }
    if (message.content === "SILVALLIE"){
        message.channel.send("Maintenant la deuxième énigme. Fidèle ami et aussi mon évolution est très connu sur le monde de YouTube" )
    }
    if (message.content === "CANINOS"){
        message.channel.send("Bien joué! Maintenant c'est parti pour la troisième énigme. On me voit tout le temps peut importe la saison et je serai toujours prêt à vous aider")
    }
    if (message.content === "INFIRMIERE JOELLE"){
        message.channel.send("Alors tu as aimé ce piège? En tout cas bien joué tu as trouvé la réponse a la dernière énigme !👏👏")
        message.channel.send("Maintenant tu sais ce qu'il te reste à faire :wink:")
    }
    if(message.content === "SILVALLIE CANINOS INFIRMIERE JOELLE"){
        message.channel.send("Tu peux maintenant aller claim ta récompense auprès de mon créateur")
    }
    if(message.content === prefix + "end"){
        message.channel.send("J'espère que ce mini évenement vous as plu")
        message.channel.send("Je vous laisse quand même un indice pour un des futurs événements: communication")
        message.channel.send("A très bientôt!")
    }
    if(message.content === "ferme ta gueule"){
        message.channel.send ("Ouais ferme ta gueule connard :joy:")
    }
});










































































































































Client.login("OTU1OTMxNDA2OTM5MzUzMTI4.Yjo2fw.ZhsD2cor1qnM7pc0CBEwHeyl9Zg")