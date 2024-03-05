import { Alert, Stack } from "react-bootstrap";



export function AlertMessage() {
    return(
        <Alert key={"warning"} variant={"warning"}>
            <Stack direction="horizontal">
                <i className="material-icons me-2" style={{fontSize:30}}>warning</i>
                <h4 style={{fontSize:20}}>All the information here is fictitious</h4>
            </Stack>
        </Alert>
    )
}