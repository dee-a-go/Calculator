import '../stylesheets/ClearButton.css';

const ClearButton = (props) => (
    <div
    className='clear-button'
    onClick={() => {props.handleClick()}} >
        Clear
    </div>
);

export default ClearButton;