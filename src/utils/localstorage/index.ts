class LocalStorage {
    getValue (key:string){
        if(typeof window !== 'undefined'){
          return window.localStorage.getItem(key)
        }
        console.log("get item..")
    }

    setValue (key:string, value:any){
        if(typeof window !== 'undefined'){
            window.localStorage.setItem(key, value)
        }
        console.log("Set item")
    }

    deleteItem () {
        console.log("delete item")
    }
}

export const LS = new LocalStorage()