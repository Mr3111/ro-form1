import React from 'react';
import Element from "./Element";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import normalizeRecord from "../utils/normalizeRecord";
import SendIcon from '@material-ui/icons/Send';
import Grid from "@material-ui/core/Grid";
import CustomizedSnackbars from "./SnackBar";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));
const RepairOrderMainPage = ({
                                 fieldInfo,
                                 handleFieldInfoUpdate
                             }) => {
    const classes = useStyles();
    const [openSnack, setOpenSnack] = React.useState(false);
    const [roPayload, setRoPayload] = React.useState({

        "roID": {label: "RO Id", value: "221702539", type: 'integer', options: []},
        "toDate": {label: "Closed on", value: "2020-10-06 00:00:01", type: 'date', options: []},
        "processed": {label: "Processed On", value: "2020-10-06", type: 'short date', options: []},
        "loopVehicleId": {
            label: "Vehicle Id",
            value: "55005F8F-447A-4EAD-AD8F-82BD158DCFF2",
            type: 'uuid',
            options: []
        },
        "dmsRepairOrderId": {label: "DMS RO Id", value: "157910", type: 'integer', options: []},
        "laborLinesOpDesc": {label: "Op Description", value: "Oil and Filter - Change", type: 'text', options: []},
        "serviceLinesPrice": {label: "", value: "303.14", type: 'float', options: []},
        "serviceLinesspMake": {
            label: "Vehicle Make", value: 'Land Rover', type: 'text', options: [
                "Land Rover"
            ]
        },
        "serviceLinesspYear": {label: "Mfg Year", value: "2014", type: 'year', options: []},
        "serviceLinesspModel": {label: "Vehicle Model", value: "Range Rover", type: 'text', options: []},
        "laborLinesBillAmount": {label: "Bill Amount", value: "120.0000", type: 'float', options: []},
        "laborLinesPartAmount": {label: "Parts Cost", value: "183.1400", type: 'float', options: []},
        "laborLinesRawTechName": {label: "Line Op Name", value: "Fabian Torres", type: 'text', options: []},
        "asrLineArchivedIsWarranty": {label: "Under warrenty", value: "0", type: 'integer', options: []}
    })

    const postRecord = async (payload) => {
        let subscriptionObj = {}

        const token = '';

        console.log('subscription request->', JSON.stringify(subscriptionObj, null, 2))

        const requestOptions = {
            method: 'POST',
            headers: {
                // 'mode': 'no-cors',
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(payload)
        };
        fetch(`http://localhost:3001/misc`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                //alert("Subscription created!!!");
                return data;
            })
            .then(data => console.log("Do something else"))
            .catch(error => console.log(error))

    }

    const handleFieldUpdate = (name, value) => {
        roPayload[name].value = value;
        setRoPayload({...roPayload})
        console.log(roPayload[name])
    }

    return <div style={{padding: '24px', paddingTop: '20px', paddingBottom: '20px'}}><Grid container spacing={10}
                                                                                           style={{
                                                                                               padding: '24px'
                                                                                           }}>
        {Object.entries(roPayload).map(([key, value]) =>
            <Grid key={key} xs={12 / 2} sm={6 / 2} lg={4 / 2} xl={3 / 2}><Element
                key={key}
                name={key}
                initialValue={value.value}
                options={value.options ? value.options.map((value) => {
                    return {value, label: value}
                }) : null}
                placeholder={value.label ? value.label : key}
                type={value.type ? value.type : 'text'}
                onChange={(name, value) => handleFieldUpdate(name, value)}
            /></Grid>)}</Grid>
        <div className='row' style={{padding: '10px'}}></div>
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<SendIcon/>}
            onClick={() => {
                return postRecord(normalizeRecord(roPayload))
                    .then(() => setOpenSnack(true));
            }}
        >
            Send
        </Button>
        {openSnack && <CustomizedSnackbars isOpen={true}/>}
    </div>

}

export default RepairOrderMainPage;
