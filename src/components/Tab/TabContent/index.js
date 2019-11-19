import React ,{useContext} from 'react'
import Context from "../../../context/Context.js";

const TabContent = ({children, defaultactive}) => {
    const context = useContext(Context);
    return (
        <div className="tab__content">
            {children[context.activeTab - 1] || children[defaultactive]}
        </div>
    )
}

export default TabContent
