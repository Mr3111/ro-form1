import React from 'react';
import Element from "./Element";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import normalizeRecord from "../utils/normalizeRecord";
import SendIcon from '@material-ui/icons/Send';

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
    const [roPayload, setRoPayload] = React.useState({

        "roID": {label:"RO Id", value: "221702539", type:'integer', options:[]},
        "toDate": {label:"Closed on", value: "2020-10-06 00:00:01", type:'date', options:[]},
        "processed": {label:"Processed On", value: "2020-10-06", type:'short date', options:[]},
        "loopVehicleId": {label:"Vehicle Id", value: "55005F8F-447A-4EAD-AD8F-82BD158DCFF2", type:'uuid', options:[]},
        "dmsRepairOrderId": {label:"DMS RO Id", value: "157910", type:'integer', options:[]},
        "laborLinesOpDesc": {label:"Op Description", value: "Oil and Filter - Change", type:'text', options:[]},
        "serviceLinesPrice": {label:"", value: "303.14", type:'float', options:[]},
        "serviceLinesspMake": {label:"Vehicle Make", value: 'Land Rover', type:'text', options:[
            "Land Rover"
            ]},
        "serviceLinesspYear": {label:"Mfg Year", value: "2014", type:'year', options:[]},
        "serviceLinesspModel": {label:"Vehicle Model", value: "Range Rover", type:'text', options:[]},
        "laborLinesBillAmount": {label:"Bill Amount", value: "120.0000", type:'float', options:[]},
        "laborLinesPartAmount": {label:"Parts Cost", value: "183.1400", type:'float', options:[]},
        "laborLinesRawTechName": {label:"Line Op Name", value: "Fabian Torres", type:'text', options:[]},
        "asrLineArchivedIsWarranty": {label:"Under warrenty", value: "0", type:'integer', options:[]}
    })

    const postRecord = async (payload) => {
        let subscriptionObj ={
        }

        const token='';

        console.log('subscription request->', JSON.stringify(subscriptionObj, null, 2))

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(payload)
        };
        fetch(`http://pdx-api-int.dit.connectcdk.com/api/ds-dataingest-realtime/v1/data-type/service_repairorder_detail?batchId=d81ab39b-9fee-47e8-a03c-44db5e317a69&providerId=6a9140e6-e243-452a-b8c8-072414d0b2e8&dealerId=3PAMDSLIVE7`, requestOptions)
            .then(response => response.json() )
            .then(data=> {
                console.log(data);

                //alert("Subscription created!!!");
                return data;
            })
            .then(data => console.log("Do something else"))
            .catch(error=>console.log(error))

    }

    const handleFieldUpdate = (name, value) => {
        roPayload[name].value = value;
        setRoPayload({...roPayload})
        console.log(roPayload[name])
    }

    return <div>
        {Object.entries(roPayload).map(([key, value]) =>
        <Element
            key={key}
            name={key}
            initialValue={value.value}
            options={value.options?value.options.map((value)=>{return {value, label:value}}):null}
            placeholder={value.label?value.label:key}
            type={value.type?value.type:'text'}
            onChange={(name, value)=>handleFieldUpdate(name, value)}
        />) }
            <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<SendIcon/>}
            onClick={()=>postRecord(normalizeRecord(roPayload))}
            >
            Send
            </Button>
    </div>
}

export default RepairOrderMainPage;
