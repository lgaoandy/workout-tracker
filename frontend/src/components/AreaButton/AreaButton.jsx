import "./AreaButton.scss"

export default function AreaButton({ children, onClick }) {
    return (
        <div className="area-button" onClick={onClick}>
            {children}
        </div>
    )
}

AreaButton.defaultProps = {
    onClick: () => {},
}
