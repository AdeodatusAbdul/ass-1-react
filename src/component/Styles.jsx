export const textStyle = {
    fontSize: `14px`,
    margin: '2px auto',
}
export const deleteTextStyle = {
    ...textStyle,
    marginTop: '20px',
    textAlign: 'center',
    fontSize: `14px`,
}
export const deleteItemTextStyle = {
    ...deleteTextStyle,
    color: 'blue',
    marginTop: '5px',
    borderRadius: '5px',
    marginBottom: '20px',
    backgroundColor: 'lightBlue',
    padding: '2px 10px !important',
}
export const errorStyle = {
    ...deleteTextStyle,
    color: 'red',
    width: '100%',
    marginTop: '5px', 
    borderRadius: '5px',
    backgroundColor: 'lightRed',
}

export const cancelStyle = {
    color: 'white',
    margin: 'auto', 
    fontSize: '5px',
    borderRadius: '50%',
    backgroundColor: 'red', 
    padding: '1.5px 0 0 0',
    '&:hover': {
        opacity: 0.8,
    },
    '&:active': {
        padding: '1.7px 0.2px 0.2px 0.2px',
    }
}

export const iconStyle = {
    margin: 'auto 2px',
    fontSize: `14px`,
    color: 'inherit'
}