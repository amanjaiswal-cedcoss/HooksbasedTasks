import React, { useReducer, useState } from "react";
import BasicModal from "./Modal";

const initialState={
  formData:[],
}
const reducer=(state,action)=>{
  switch(action.type){
    case "SUBMIT":
      return {...state,formData:action.payload};
      default:return state
  }
}
 
const ReducerHook = () => {
  const [openModal,setOpenModal]=useState(false)
  const [state,dispatch]=useReducer(reducer,initialState)

  const handleOpenModal=()=>{
    setOpenModal(true)
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    let formDataArr=[]
    const formData = new FormData(e.currentTarget);
    for (let [key,value] of formData.entries()) {
      formDataArr.push({[key]:value})
    }
    console.log(formDataArr)
    dispatch({type:"SUBMIT",payload:formDataArr})
    handleOpenModal()
  }
  return (
    <div>
      <h2>useReducer Hook Task</h2>
      <form id="reducerHookForm" onSubmit={submitHandler}>
        <div><div className="containers"><h4 className="labelHead">Title</h4><p className="labelPara">Mention the title of the product that you want to display to the customers on the Amazon marketplace.</p></div><input name="Title" className='containersInput' placeholder="Enter Title"/></div><hr/>
        <div><div className="containers"><h4 className="labelHead">Description</h4><p className="labelPara">Mention a detailed yet precise product define the product appropriately here. To know more about Amazon's product description policy, click on the link HERE!</p></div><input name="Description" className='containersInput' placeholder="Enter Description"/></div><hr/>
        <div><div className="containers"><h4 className="labelHead">Handling Time</h4><p className="labelPara">Mention the title of the product that you want to display to the customers on the Amazon marketplace.</p></div><input name="Handling Time" className='containersInput' placeholder="Enter Handling Time"/></div><hr/>
        <div><div className="containers"><h4 className="labelHead">Amazon Parent Sku</h4><p className="labelPara">Set the unique SKU that identifies the Shopify products against Amazon listings.</p></div><input name="Amazon Parent Sku" className='containersInput' placeholder="Enter Amazon Parent Sku"/></div><hr/>
        <div><div className="containers"><h4 className="labelHead">Barcode/GTIN Exemption</h4><p className="labelPara">Enable the checkbox to upload products with Barcode exemption on Amazon.</p></div><input name="Barcode/GTIN Exemption" value="Yes" type="checkbox"/><label>Barcode/GTIN Exemption</label></div><hr/>
        <div><div className="containers"><h4 className="labelHead">Add Amazon Category</h4><p className="labelPara">Set Amazon Category / Browse Node for a product, to set the Searchability & browsing hierarchy on Amazon Marketplace.</p></div><input name="Amazon Category" className='containersInput' placeholder="Enter Add Amazon Category"/></div><hr/>
        <div><div className="containers"><h4 className="labelHead">Image Selection</h4><p className="labelPara">Select the best image combinations or add new images (2 maximum of 9) for your product displayed as part of the product images when it gets uploaded on Amazon</p></div><div><input name="Image Selection" value="Set product images as shown in Shopify" type="radio"/><label>Set product images as shown in Shopify</label></div><div><input name="Image Selection" value="Set Custom Amazon Images" type="radio"/><label>Set Custom Amazon Images</label></div></div><hr/>
        <button type="submit">Submit</button>
      </form>
      <BasicModal open={openModal} setOpen={setOpenModal} formData={state.formData}/>
      <hr/>
    </div>
  );
};

export default ReducerHook;
