

export default function Popup(props) {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon font-poppins">x</span>
                {props.content}
            </div>
        </div>
    )
}