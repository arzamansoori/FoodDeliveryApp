import { useEffect,useState } from "react"


const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    //check if online/offline
    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false)
        });

        window.addEventListener("online", ()=>{
            setOnlineStatus(true)
        });

    },[])
    //return the boolean value
    return onlineStatus;
};

export default useOnlineStatus;