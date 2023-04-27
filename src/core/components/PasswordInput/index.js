import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import TextInput from '../TextInput';
/**
 * Componente de password
 * @returns
 */
function PasswordInput(props) {
    const [showPassword, setShowPassword] = useState(false);

    /**
     * Funcion para mostrar u ocultar el password
     */
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <TextInput
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton>
                    </InputAdornment>
                )
            }}
            type={showPassword ? 'text' : 'password'}
            {...props}
        />
    );
}

export default PasswordInput;