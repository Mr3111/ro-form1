export default function (object) {
    let record = {}
    for (const [key, value] of Object.entries(object)){
            record[key]=value.value
    }
    console.log(record);
    return record
}
