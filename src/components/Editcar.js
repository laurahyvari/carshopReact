import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';


export default function Editcar(props){

    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand:'', model: '', color: '', fuel:'', year:'', price:''
    })
    const handleClickOpen = () => {
        
        setCar({brand: props.car.brand, model: props.car.model, color: props.car.model,
             fuel: props.car.fuel, year: props.car.fuel ,price: props.car.price});
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);

    }

const handleInputChange = (e) => {
    setCar({...car, [e.target.name]: e.target.value })

}

const editCar = () => {

    props.uppdateCar(car, props.car._links.car.href);
    handleClose();
}
    return(

        <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit Car
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Car</DialogTitle>
        <DialogContent>
                    
                    <TextField
                        autoFocus
                        margin="dense"
                        name="brand"
                        value={car.brand}
                        label="Brand"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />

                    <TextField
                        
                        margin="dense"
                        name="model"
                        value={car.model}
                        label="Model"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        
                        margin="dense"
                        name="color"
                        value={car.color}
                        label="Color"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        
                        margin="dense"
                        name="year"
                        value={car.year}
                        label="year"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        
                        margin="dense"
                        name="fuel"
                        value={car.fuel}
                        label="Fuel"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        
                        margin="dense"
                        name="price"
                        value={car.price}
                        label="Price"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={editCar} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

        </div>
    );
}