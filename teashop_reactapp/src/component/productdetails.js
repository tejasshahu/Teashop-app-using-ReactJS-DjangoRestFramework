import React from 'react';
import { connect } from 'react-redux';
import { renderTextField } from '../_helpers/reduxFields';
import { reduxForm, Field } from 'redux-form';

import { productdetail_action } from '../_actions/productmaster.action';


class ProductDetails extends React.Component {

	componentDidMount() {
        this.props.dispatch(productdetail_action.get_product_details(this.props.match.params.id));
    }

    render() {
        return (
            <form className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-12">
                        <Field
                            name="name"
                            value={this.props.productdetail.name}
                            type="text"
                            label="Name"
                            disabled
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
                            value={this.props.productdetail.description}
                            type="text"
                            label="Description"
                            disabled
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
                            value={this.props.productdetail.price}
                            type="text"
                            label="Price"
                            disabled
                            component={renderTextField}
                            fullWidth={true}
                            autoComplete="off"
                            margin="dense"
                            variant="outlined"
                        />
                    </div>
                </div>
            </form>
        )
    }
}

function mapStateToProps(state) {
	let productdetail = {}
    let initialValues = {
        name: "",
        description: "",
        price: ""
    }
    if(state.productmaster.productdetail) {
    	productdetail = state.productmaster.productdetail
    	initialValues = productdetail
    }
    return {
        productdetail: productdetail,
    	initialValues: initialValues
    };
}

const ProductDetail = reduxForm({
    form: 'productdetail',
    enableReinitialize: true,
})(ProductDetails)

export default connect(mapStateToProps)(ProductDetail)
