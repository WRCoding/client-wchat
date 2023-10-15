import {worker} from "./InitWorker.ts";

export default class Ws {
    ipAndPort:string
    static init:boolean = false
    constructor(ipAndPort:string) {
        if (!Ws.init){
            worker.postMessage(JSON.stringify({type: 'init',value:ipAndPort}))
            worker.addEventListener('message', this.onWorkerMsg)
            Ws.init = true
        }else{
            console.log('Ws已经建立链接')
        }
    }

    onWorkerMsg(event:MessageEvent<any>){
        const params: { type: string; value: unknown } = JSON.parse(event.data)
        console.log(params)
    }

    static close(){
        worker.postMessage(JSON.stringify({type: 'close',value:null}))
        Ws.init = false
    }
}

