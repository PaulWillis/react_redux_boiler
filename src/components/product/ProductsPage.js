import React, {PropTypes} from 'react'; 

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
        alert(`Saving ${this.state.product.title}`);  
        //alert("saving");  
    }

    render() {
        return (
            <div>
                <h1>Products</h1> 
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

export default ProductsPage;