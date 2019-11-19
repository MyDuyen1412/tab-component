import React ,{useContext} from 'react'
import Context from "../../../context/Context.js";

const TabContent = ({children, defaultactive}) => {
    const context = useContext(Context);
    console.log(context.index, defaultactive)
    return (
        <div>
            {children[context.index || defaultactive]}
        </div>
    )
}

export default TabContent
