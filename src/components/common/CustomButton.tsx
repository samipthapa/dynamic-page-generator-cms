import { Button } from '@mui/material';

interface Props {
    buttonText: string;
    handleClick?: () => void;
    btnTextDeco?: string;
    btnWidth?: string;
}

const CustomButton: React.FC<Props> = ({ buttonText, handleClick, btnWidth }) => {

    return (
        <Button
            sx={{
                width: btnWidth || '230px',
                borderRadius: 1,
                background: 'linear-gradient(180deg, #ED0006 0%, #B71D1C 100%)',
                boxShadow: 'none',
            }}
            variant="contained"
            onClick={handleClick}
            size='large'
        >
            <p className='font-gilroy-bold'>{buttonText}</p>
        </Button>
    );
};

export default CustomButton;
