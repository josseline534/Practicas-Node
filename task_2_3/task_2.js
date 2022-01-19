const data = {
    users: [
        {
            id: 1,
            name: "Pepe",
        },
        {
            id: 2,
            name: "Luis",
        },
        {
            id: 3,
            name: "Josseline",
        },
        {
            id: 4,
            name: "Miguel",
        },
        {
            id: 5,
            name: "Eduardo",
        },
    ],
    messages: [
        {
            id: 1,
            text: "Mi mensaje",
            userId: 1,
            receiverId: 5,
        },
        {
            id: 2,
            text: "El trabajo es suyo",
            userId: 4,
            receiverId: 3,
        },
        {
            id: 3,
            text: "Hola",
            userId: 2,
            receiverId: 4,
        },
        {
            id: 4,
            text: "Como esta??",
            userId: 4,
            receiverId: 2,
        },
    ],
}

function normalizeReceivedData(receivedData){
    //[{ messageText, userFromName, userToName }]
    const mensajes = []
    const mensaje ={
        "messageText": "",
        "userFromName": "",
        "userToName": ""
    }
    for(let i=0; i<receivedData.messages.length; i++){
        for(let j=0; j<receivedData.users.length; j++){
            if(receivedData.messages[i].userId == receivedData.users[j].id){
                mensaje.userFromName = receivedData.users[j].name
            }
            if(receivedData.messages[i].receiverId == receivedData.users[j].id){
                mensaje.userToName = receivedData.users[j].name
            }
        }
        mensajes[i]={
            "messageText": receivedData.messages[i].text,
            "userFromName": mensaje.userFromName,
            "userToName": mensaje.userToName
        }
    }
    console.log(mensajes);
}

normalizeReceivedData(data)
