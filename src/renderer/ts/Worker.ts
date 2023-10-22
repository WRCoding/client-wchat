const postMsg = ({type, value}: { type: string; value?: object }) => {
    self.postMessage(JSON.stringify({type, value}))
}


let connection: WebSocket

const handleMsg = (event: any) => {
    postMsg({type: 'message', value: event.data})
    console.log(event)
}

const handleOpen = (event) => {
    console.log('链接建立',event)
    connection.send(JSON.stringify({name:'wanglongjun',age:18}))
}

const handleClose = (event) => {
    console.log(event)
}

const handleError = (event) => {
    console.log(event)
}
const initConnection = (ipAndPort: string) => {
    let wsUrl = 'ws://' + ipAndPort + '/ws'
    connection = new WebSocket(wsUrl)

    // 收到消息
    connection.addEventListener('message', handleMsg)
    // 建立链接
    connection.addEventListener('open', handleOpen)
    // 关闭连接
    connection.addEventListener('close', handleClose)
    // 连接错误
    connection.addEventListener('error', handleError)
}

function closeConnection() {
    connection.close()
    connection.removeEventListener('message', handleMsg)
    connection.removeEventListener('open', handleOpen)
    connection.removeEventListener('close', handleClose)
    connection.removeEventListener('error', handleError)
    connection = null
}

self.onmessage = (e: MessageEvent<string>) => {
    const {type, value} = JSON.parse(e.data)
    switch (type) {
        case 'init': {
            initConnection(value)
            break
        }
        case 'close': {
            closeConnection()
            break
        }
        case 'message': {
            if (connection?.readyState !== 1) return
            // connectionSend(value)
            break
        }
    }
}