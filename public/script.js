document.addEventListener("DOMContentLoaded", () => {
    console.log('inside script');
    var socket = io();
    // function btnClick() {
    //     socket.emit("from_client")
    // }
    // socket.on('from_server', () => {
    //     let div = document.getElementById("from_server");
    //     let p = document.createElement("p");
    //     p.textContent = "Received an event from the server";
    //     div.appendChild(p)
    // })

    let input = document.getElementById("chat_box");
    let send = document.getElementById("send");
    let message_list = document.getElementById("msg_list");
    send.addEventListener("click", () => {
        let msg = input.value;
        socket.emit("new_msg", {
            message: msg
        });
        input.value = "";

    })
    socket.on("msg_received", (data) => {
        let msg = document.createElement('li');
        msg.textContent = data.message;
        message_list.appendChild(msg);
    })

})
