const discord = require('discord.js)

client.on('ready' () => {
   console.log('El bot esta listo >:D')
  
  const estadopro = ['netflix, WATCHING' , 'minecraft, PLAYING', 'a bad bunny beibe, LISTENING'] 

    setInterval(() => {
    
      client.user.setStatus('idle') /// acá puedes colocar online, offline, dnd y idle, a mi me gusta la lunita jeje
      
      const random = estadopro[Math.floor(Math.random() * estadopro.length)].split(', ')
      const estado = random[0];
      const mode = random[1];
      client.user.setActivity(estado, { type: mode })
      
      
      
    }, 4500) /// estos son los millisegundos de cambio de estado de tu bot :o
})

client.login(proccess.env.TOKEN) // el TOKEN va en un .env, o si tienes replit colócalo en secrets para mantener a tu bot seguro <3
