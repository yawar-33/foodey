import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const NotificationHandler = (message, type) => {

    toast.configure();
    return (
        type === 'success'
            ? toast.success(message, { position: toast.POSITION.TOP_RIGHT })
            : type === 'info'
                ? toast.info(message, { position: toast.POSITION.TOP_RIGHT })
                : type === 'warning'
                    ? toast.warn(message, { position: toast.POSITION.TOP_RIGHT })
                    : type === 'dark'
                        ? toast.dark(message, { position: toast.POSITION.TOP_RIGHT })
                        : type === 'error'
                            ? toast.error(message, { position: toast.POSITION.TOP_RIGHT })
                            : type === 'basic'
                                ? toast(message, { position: toast.POSITION.BOTTOM_CENTER })
                                : null

    )
}

export default NotificationHandler