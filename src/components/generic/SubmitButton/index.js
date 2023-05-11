import { Button } from "@mui/material";

function SubmitButton(props) {
    return <Button type="submit" variant="contained"{...props} />;
}

export default SubmitButton;