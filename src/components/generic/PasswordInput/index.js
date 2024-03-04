import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useRef, useState } from 'react';
import TextInput from '../TextInput';
/**
 * Componente de password
 * @returns
 */
function PasswordInput(props) {
    const [showPassword, setShowPassword] = useState(false);

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseUp = (e) => {
        e.preventDefault();
    }

    return (
        <TextInput
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} onMouseUp={handleMouseUp}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton>
                    </InputAdornment>
                )
            }}
            type={showPassword ? 'text' : 'password'}
            {...props}
        />
    );
}

export default PasswordInput;