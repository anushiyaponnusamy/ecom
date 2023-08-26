import React, { useState } from 'react'
import AdminMenu from './AdminMenu'
import Layout from '../../components/layout/layout'
import { uploadImage } from './service'

const CreateProduct = () => {
    const handleFileUpload = async (event) => {
        const val = event.target.files[0];
        uploadImage(val).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    };
    return (
        <div>CreateProduct</div>
    )
}

export default CreateProduct