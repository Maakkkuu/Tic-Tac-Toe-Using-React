import circle_icon from './Assets/circle.png';
import cross_icon from './Assets/cross.png';

interface SquareProps {
    onClick: React.MouseEventHandler<HTMLDivElement>;
    value: 'x' | 'o' | null;
}
  
const Square: React.FC<SquareProps> = ({ onClick, value }) => {
    return (
        <div className='boxes' onClick={onClick}>
            {value && <img src={value === 'x' ? cross_icon : circle_icon} alt={value} />}
        </div>
    );
}

export default Square