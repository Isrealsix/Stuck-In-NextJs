import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    paper: {
        boxShadow: "6px 15px 25px 6px rgba(0, 0, 0, 0.1)",
        padding: 60
    },
    input: {
        backgroundColor: "rgba(252, 232, 99, 0.4)",
        padding: 8,
        borderRadius: 5,
        width: "100%",
        boxShadow: "4px 5px 7px 1px rgba(0, 0, 0, 0.1)"
    },
    button: {
        backgroundColor: "rgba(252, 232, 99, 0.4)",
        padding: "8px 25px",
        borderRadius: 5,
        marginTop: 40,
    }
}))

export default useStyles