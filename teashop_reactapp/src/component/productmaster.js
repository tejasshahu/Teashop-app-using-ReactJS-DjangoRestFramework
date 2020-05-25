import React from 'react';
import Button from '@material-ui/core/Button'
import { reduxForm, Field, change } from 'redux-form';
import { connect } from 'react-redux';
import { renderTextField } from '../_helpers/reduxFields';
import { productmaster_action } from '../_actions/productmaster.action';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { history } from '../_helpers/history';

class ProductMaster extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rerender: false,
        };
    }

    componentDidMount() {
        this.props.dispatch(productmaster_action.get_product_list());
    }

    onSubmit(formdata) {
        this.props.dispatch(productmaster_action.add_product(formdata));
        this.props.dispatch(change('productmaster', 'name', ""));
        this.props.dispatch(change('productmaster', 'description', ""));
        this.props.dispatch(change('productmaster', 'price', ""));
    }

    handleDelete = (ev, id) => {
        ev.stopPropagation()
        this.props.dispatch(productmaster_action.delete_product(id));
    }

    handleOnProductClick = (id) => {
        history.push(`/product_operation/${id}`);
    }

    render() {
        const onSubmit = this.onSubmit.bind(this);
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-12">
                        <Field
                            name="name"
                            type="text"
                            label="Name"
                            component={renderTextField}
                            fullWidth={true}
                            autoComplete="off"
                            margin="dense"
                            variant="outlined"
                        />
                    </div>
                    <div className="col-12">
                        <Field
                            name="description"
                            type="text"
                            label="Description"
                            component={renderTextField}
                            fullWidth={true}
                            autoComplete="off"
                            margin="dense"
                            variant="outlined"
                        />
                    </div>
                    <div className="col-12">
                        <Field
                            name="price"
                            type="text"
                            label="Price"
                            component={renderTextField}
                            fullWidth={true}
                            autoComplete="off"
                            margin="dense"
                            variant="outlined"
                        />
                    </div>
                    <div className="col-12">
                        <Button type="submit" className="mt-2" size="small" variant="contained" color="secondary">Add</Button>
                    </div>
                </div>
                <hr></hr>
                {this.props.productlist && this.props.productlist.length > 0 && <div className="row">
                    <div className="col-12">
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>ACTION</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.props.productlist.map((item, index) => {
                                        return (
                                            <TableRow onClick={() => this.handleOnProductClick(item.id)} key={index}>
                                                <TableCell component="th" scope="row">
                                                    {item.name}
                                                </TableCell>
                                                <TableCell>{item.description}</TableCell>
                                                <TableCell>{item.price}</TableCell>
                                                <TableCell><Button color="primary" onClick={(ev) => this.handleDelete(ev,item.id)}>Delete</Button></TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>}
            </form>
        )
    }
}

function mapStateToProps(state) {
    let product_list = []
    let initialValues = {
        name: "",
        description: "",
        price: ""
    }

    if (state.productmaster.product_list) {
        product_list = state.productmaster.product_list
    }
    return {
        initialValues: initialValues,
        productlist: product_list
    };
}


ProductMaster = reduxForm({
    form: 'productmaster',
    enableReinitialize: true,
})(ProductMaster)

export default connect(mapStateToProps, null)(ProductMaster)
