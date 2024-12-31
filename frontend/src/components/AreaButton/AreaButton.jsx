import classnames from "classnames"
import "./AreaButton.scss"

export default function AreaButton({
    inactive = false,
    children,
    onClick = () => {},
}) {
    return (
        <div
            className={classnames("area-button", { inactive: inactive })}
            onClick={() => {
                if (!inactive) {
                    onClick(children)
                }
            }}
        >
            {children}
        </div>
    )
}
