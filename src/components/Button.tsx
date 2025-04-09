import {cn} from "../../lib/utils"
const Button = ({text, customerClass=""}) => {
    return (
        <div className={cn("nav-button", customerClass)}>{text}</div>
    )
}
export default Button
