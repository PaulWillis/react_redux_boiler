import React, {PropTypes} from 'react'; 
import  {} from 'react-redux'; 
import * as productActions  from '../../actions/productActions'; 

class ProductsPage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            product: {title: ""}
        };

        this.onTitleChange= this.onTitleChange.bind(this);
        this.onClickSave= this.onClickSave.bind(this);
    }

    onTitleChange(event){
        const product = this.state.product;
        product.title = event.target.value;
        this.setState({product: product});
    }

    
    onClickSave(){
        //alert(`Saving ${this.state.product.title}`);  
        //alert("saving");  
        this.props.dispatch(productActions.createProduct(this.state.product));
    }

    productRow(product, index){
        return <div key={index}>{product.title}</div>;
    }
    render() {
        return (
            <div>
                <h1>Products</h1> 
                {this.props.products.map(this.productRow)}
                <h2>Add Product</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.product.title} />
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return{
        products: state.products
    };
}
export default connect(mapStateToProps)(ProductsPage);