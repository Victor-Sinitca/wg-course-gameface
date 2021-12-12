import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSelectedProductType} from "@/redux/productSelector";
import {actionDialog} from "@/redux/productReducer";

export const MainNav = () => {
    const dispatch = useDispatch()
    const selectedProductType=useSelector(getSelectedProductType)
    const linkStyle="main-nav-link"
    const selectedLinkStyle="main-nav-link active-link"

    return (
        <div className="main-nav-container">
            <a className="main-nav-logo"/>
            <nav className="main-nav-links">
                <div onClick={()=>{dispatch(actionDialog.setSelectedProductType("All"))}} className={selectedProductType === "All"? selectedLinkStyle : linkStyle}>all</div>
                <div onClick={()=>{dispatch(actionDialog.setSelectedProductType("Technique"))}} className={selectedProductType === "Technique"? selectedLinkStyle : linkStyle}>vehicles</div>
                <div onClick={()=>{dispatch(actionDialog.setSelectedProductType("Gold"))}} className={selectedProductType === "Gold"? selectedLinkStyle : linkStyle}>gold</div>
                <div onClick={()=>{dispatch(actionDialog.setSelectedProductType("Premium"))}} className={selectedProductType === "Premium"? selectedLinkStyle : linkStyle}>premium account</div>
            </nav>
        </div>
    )
}
